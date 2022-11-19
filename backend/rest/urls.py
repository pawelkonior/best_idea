from django.urls import path
from rest_framework import routers

from .views import ProductListAPIView, BarcodeAPIView

router = routers.SimpleRouter()

urlpatterns = [
    path("products/", ProductListAPIView.as_view()),
    path('barcode/<str:barcode>', BarcodeAPIView.as_view()),
]

urlpatterns += router.urls
