from django.urls import path
from rest_framework import routers
from .views import ProductViewSet, BarcodeAPIView, ShopProductView, CompostViewSet, CompostProduct

router = routers.SimpleRouter()
router.register("products", ProductViewSet, basename="product")
router.register("compost", CompostViewSet, basename="product")

urlpatterns = [
    path('barcode/<str:barcode>', BarcodeAPIView.as_view()),
    path('shop', ShopProductView.as_view()),
    path("products/<int:product_id>/compost/<int:composter_id>", CompostProduct.as_view({"post": "create"})),
]


urlpatterns += router.urls
