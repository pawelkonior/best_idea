from django.urls import path, include
from rest_framework import routers

from .views import ProductViewSet

router = routers.SimpleRouter()
router.register("products", ProductViewSet, basename="product")

urlpatterns = [

]

urlpatterns += router.urls
