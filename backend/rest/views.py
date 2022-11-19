from django.shortcuts import get_object_or_404
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ValidationError
from .serializers import ProductSerializer, ProductDetailSerializer
from .models import Product, ProductDetail
from .utils import get_product_by_barcode


class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(user=self.request.user)

    def create(self, *args, **kwargs):
        detail = get_object_or_404(ProductDetail, pk=self.request.data["product_id"])

        serializer = self.serializer_class(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        product = serializer.save(detail=detail, user=self.request.user)

        return Response(self.serializer_class(product).data)


class BarcodeAPIView(APIView):
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
