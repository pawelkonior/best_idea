from django.db import models


class Product(models.Model):
    expiration_date = models.DateField()
    used = models.BooleanField(default=False)
    to_sell = models.BooleanField(default=False)
    sell_price = models.FloatField(default=0.0)

    user = models.ForeignKey("")

class ProductDetail(models.Model):
    id = models.IntegerField(max_length=13)
    img = models.TextField(null=True)
    name = models.CharField(max_length=200)
