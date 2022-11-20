import datetime

from django.contrib.auth import get_user_model
from django.db.models import Sum, F
from django.db.models.functions import Pi, Sqrt, Abs
from django.shortcuts import get_object_or_404
from math import floor
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.mixins import ListModelMixin, UpdateModelMixin, CreateModelMixin
from rest_framework.serializers import Serializer
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ValidationError
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page

from users.models import CustomUser
from users.serializers import ComposterSerializer
from .serializers import ProductSerializer, ProductDetailSerializer, CompostedProductSerializer
from .models import Product, ProductDetail, Usage, CompostedProduct
from .utils import get_product_by_barcode, update_usage


class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    model = Product

    def get_queryset(self):
        return self.model.objects.filter(user=self.request.user.id).order_by("expiration_date")

    def update_usage(self, request):
        if "amount" not in request.data:
            return
        product = self.get_object()

        amount_change = product.amount - request.data["amount"]
        if amount_change < 0:
            return

        time_delta = datetime.date.today() - product.updated_at
        usage, created = Usage.objects.get_or_create(user=self.request.user.id, product_detail=product.detail)

        update_usage(usage, time_delta, amount_change)

    def update(self, request, *args, **kwargs):
        self.update_usage(request)
        return super().update(request, *args, **kwargs)

    def partial_update(self, request, *args, **kwargs):
        self.update_usage(request)
        return super().partial_update(request, *args, **kwargs)

    def create(self, *args, **kwargs):
        detail = get_object_or_404(ProductDetail, pk=self.request.data["product_id"])

        serializer = self.serializer_class(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        product = serializer.save(detail=detail, user=self.request.user.id)

        return Response(self.serializer_class(product).data)


class BarcodeAPIView(APIView):

    @method_decorator(cache_page(60 * 60 * 24))
    def get(self, request, barcode):

        try:
            product = ProductDetail.objects.get(id=barcode)
            return Response(ProductDetailSerializer(product).data, status=status.HTTP_200_OK)
        except ProductDetail.DoesNotExist:
            product = get_product_by_barcode(barcode)
            if product is not None:

                try:
                    new_barcode = ProductDetail(
                        id=barcode,
                        image=product["image"],
                        name=product["name"],
                        price=''.join(char for char in product["price"]
                                      if char.isdigit() or char == ',').replace(',', '.')
                    )
                    new_barcode.save()
                except ValidationError:
                    pass
                finally:
                    return Response(product, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_404_NOT_FOUND)


class ShopProductView(ListAPIView):
    serializer_class = Serializer

    def list(self, request, *args, **kwargs):
        amounts = Product.objects.filter(user=self.request.user.id).values("detail").annotate(total=Sum("amount"))
        total_amounts = {record["detail"]: record["total"] for record in amounts}
        details = ProductDetail.objects.filter(id__in=total_amounts.keys()).values("id", "name", "image")

        usages = Usage.objects.filter(user=self.request.user.id).values("coefficient", "product_detail") \
            .annotate(estimated_usage=Sum(F("coefficient") * self.request.user.shopping_frequency))
        estimated_usages = {record["product_detail"]: record["estimated_usage"] for record in usages}

        for detail in details:
            id_ = detail["id"]
            detail["amount"] = -(floor(total_amounts[id_] - estimated_usages.get(id_, 0.25)))

        details = [detail for detail in details if detail["amount"] > 0]

        return Response(details)


def filter_by_search_distance(user: CustomUser):
    radius = 6_371
    return Sqrt(
            (Abs(F("longitude") - user.longitude) / (2 * Pi()) * radius) ** 2
            + (Abs(F("latitude") - user.latitude) / (2 * Pi()) * radius) ** 2
    ) * 1_000


class CompostViewSet(ListModelMixin, UpdateModelMixin, GenericViewSet):
    serializer_class = ComposterSerializer

    def get_queryset(self):
        UserModel = get_user_model()
        user = UserModel.objects.get(pk=self.request.user.id)
        return UserModel.objects.filter(owns_composter=True, accepts_compost=True, composter_percentage_utilization__lt=100) \
            .filter(search_distance_in_meters__gt=filter_by_search_distance(user))


class CompostProduct(CreateModelMixin, GenericViewSet):
    serializer_class = Serializer
    model = CompostedProduct

    def create(self, request, product_id, composter_id, *args, **kwargs):
        product = get_object_or_404(Product, pk=product_id)

        composted_product = self.model.objects.create(detail=product.detail, donated_to=composter_id)
        product.amount = 0
        product.sell_amount = 0
        product.to_sell = False
        product.save()

        return Response(CompostedProductSerializer(composted_product).data)
