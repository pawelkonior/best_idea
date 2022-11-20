import datetime

from django.shortcuts import get_object_or_404
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ValidationError
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from .serializers import ProductSerializer, ProductDetailSerializer
from .models import Product, ProductDetail, Usage
from .utils import get_product_by_barcode, update_usage


class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    model = Product

    def get_queryset(self):
        return self.model.objects.filter(user=self.request.user)

    def update_usage(self, request):
        if "amount" not in request.data:
            return
        product = self.get_object()

        amount_change = product.amount - request.data["amount"]
        if amount_change < 0:
            return

        time_delta = datetime.date.today() - product.updated_at
        usage, created = Usage.objects.get_or_create(user=self.request.user, product_detail=product.detail)

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
        product = serializer.save(detail=detail, user=self.request.user)

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
