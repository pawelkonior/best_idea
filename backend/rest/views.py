from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .serializers import ProductSerializer
from .models import Product, ProductDetail


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
