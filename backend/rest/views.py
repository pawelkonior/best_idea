from rest_framework.viewsets import ModelViewSet
from .serializers import ProductSerializer
from .models import Product, ProductDetail


class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(user=self.request.user)

    # def create(self):
    #     detail = ProductDetail.objects.get_or_404(id=self.request.product_id)
    #
    #     serializer = self.serializer_class(data=self.request.data)
    #     serializer.is_valid(raise_exception=True)
    #     product = serializer.save(detail=detail)

    # def perform_create(self, serializer):
    #
    #     serializer.save(user=self.request.user, detail=detail)
