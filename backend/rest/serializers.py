from rest_framework import serializers
from .models import ProductDetail, Product, ProductToBuy, Usage


class ProductDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductDetail
        fields = ["id", "image", "name"]


class ProductSerializer(serializers.ModelSerializer):
    detail = ProductDetailSerializer(many=False, read_only=True)

    class Meta:
        model = Product
        fields = ["id", "expiration_date", "amount", "sell_amount", "sell_price", "detail"]
        read_only_fields = ["id", "name", "image"]


class UsageSerializer(serializers.ModelSerializer):
    name = serializers.StringRelatedField(many=False)
    image = serializers.StringRelatedField(many=False)
    product_id = serializers.Field(source="product")

    class Meta:
        model = Usage
        fields = ["id", "usage_per_day", "name", "image", "product_id", "product_detail"]


class ProductToBuySerializer(serializers.ModelSerializer):
    name = serializers.StringRelatedField(many=False)
    image = serializers.StringRelatedField(many=False)
    product_id = serializers.CharField(source='product.id', read_only=True)

    class Meta:
        model = ProductToBuy
        fields = ["id", "name", "image", "product_id", "count"]
