from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ProductSerializer, ProductDetailSerializer
from .models import Product, ProductDetail
from .utils import get_product_by_barcode


class ProductListAPIView(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(user=self.request.user, used=False, to_sell=False)


class BarcodeAPIView(APIView):
    def get(self, request, barcode):

        try:
            product = ProductDetail.objects.get(id=barcode)
            return Response(ProductDetailSerializer(product).data, status=status.HTTP_200_OK)
        except ProductDetail.DoesNotExist:
            product = get_product_by_barcode(barcode)
            if product is not None:
                return Response(product, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_404_NOT_FOUND)

