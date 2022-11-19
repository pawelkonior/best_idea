from django.urls import path
from rest_framework import routers
from .views import ProductViewSet, BarcodeAPIView

router = routers.SimpleRouter()
router.register("products", ProductViewSet, basename="product")

urlpatterns = [
    path('barcode/<str:barcode>', BarcodeAPIView.as_view()),
]

urlpatterns += router.urls
