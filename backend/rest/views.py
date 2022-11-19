from rest_framework.generics import ListAPIView
from .serializers import ProductSerializer
from .models import Product

class ProductListAPIView(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(user=self.request.user, used=False, to_sell=False)
