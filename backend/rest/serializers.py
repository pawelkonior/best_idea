from rest_framework import serializers
from .models import ProductDetail, Product, ProductToBuy, Usage


class ProductSerializer(serializers.ModelSerializer):
    name = serializers.StringRelatedField(many=False)
    image = serializers.StringRelatedField(many=False)

    class Meta:
        model = Product
        fields = "__all__"


class ProductDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductDetail


class ProductToBuySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductToBuy


class UsageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usage
