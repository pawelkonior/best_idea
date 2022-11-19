from django.db import models


class Product(models.Model):
    id = models.IntegerField(primary_key=True)
    expiration_date = models.DateField()
    used = models.BooleanField(default=False)
    to_sell = models.BooleanField(default=False)
    sell_price = models.FloatField(default=0.0)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    user = models.ForeignKey("users.CustomUser", on_delete=models.DO_NOTHING)
    detail = models.ForeignKey("rest.ProductDetail", on_delete=models.DO_NOTHING)


class ProductDetail(models.Model):
    id = models.PositiveIntegerField(primary_key=True, auto_created=False)
    img = models.TextField(null=True)
    name = models.CharField(max_length=200)


class Usage(models.Model):
    id = models.IntegerField(primary_key=True)
    usage_per_day = models.FloatField(default=0)
    product_detail = models.ForeignKey(ProductDetail, on_delete=models.DO_NOTHING)
    user = models.ForeignKey("users.CustomUser", on_delete=models.DO_NOTHING)
    updated_at = models.DateField(auto_now=True)


class ProductToBuy(models.Model):
    id = models.IntegerField(primary_key=True)
    product = models.ForeignKey(ProductDetail, on_delete=models.DO_NOTHING)
    user = models.ForeignKey("users.CustomUser", on_delete=models.DO_NOTHING)
    count = models.PositiveSmallIntegerField(default=0)
