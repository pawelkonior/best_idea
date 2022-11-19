from django.urls import path
from rest_framework import routers

from .views import ProductListAPIView

router = routers.SimpleRouter()

urlpatterns = [
    path("products/", ProductListAPIView.as_view())
]

urlpatterns += router.urls
