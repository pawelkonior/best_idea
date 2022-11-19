from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.SimpleRouter()
router.register(r'', views.CustomUserViewSet, basename='user')

app_name = 'users'

urlpatterns = [
    path('', include(router.urls)),
]
