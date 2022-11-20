from rest_framework import serializers
from .models import ProductDetail, Product, ProductToBuy, Usage, CompostedProduct


class ProductDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductDetail
        fields = ["id", "image", "name"]


class ProductSerializer(serializers.ModelSerializer):
    detail = ProductDetailSerializer(many=False, read_only=True)

    class Meta:
        model = Product
        fields = ["id", "expiration_date", "amount", "sell_amount", "sell_price", "detail", "location"]
        read_only_fields = ["id", "name", "image"]


class UsageSerializer(serializers.ModelSerializer):
    product_detail = ProductDetailSerializer(many=False, read_only=True)

    class Meta:
        model = Usage
        fields = ["id", "coefficient", "weight", "product_detail"]


class ProductToBuySerializer(serializers.ModelSerializer):
    product = ProductDetailSerializer(many=False, read_only=True)

    class Meta:
        model = ProductToBuy
        fields = ["id", "name", "image", "product", "count"]


class CompostedProductSerializer(serializers.ModelSerializer):
    detail = ProductDetailSerializer(many=False, read_only=True)

    class Meta:
        model = CompostedProduct
        fields = ["id", "detail"]
        read_only_fields = ["id", "detail"]
