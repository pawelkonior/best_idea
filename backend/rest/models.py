from django.db import models


class Product(models.Model):
    class LocationChoices(models.TextChoices):
        BASEMENT = "Basement", "Basement"
        CUPBOARD = "Cupboard", "Cupboard"
        FREEZER = "Freezer", "Freezer"
        FRIDGE = "Fridge", "Fridge"

    expiration_date = models.DateField(null=False)
    amount = models.PositiveSmallIntegerField(default=1)

    to_sell = models.BooleanField(default=False)
    sell_amount = models.PositiveSmallIntegerField(default=0, blank=True)
    sell_price = models.FloatField(default=0.0, blank=True)

    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    user = models.ForeignKey("users.CustomUser", on_delete=models.DO_NOTHING)
    detail = models.ForeignKey("rest.ProductDetail", on_delete=models.DO_NOTHING)
    location = models.CharField(max_length=10, choices=LocationChoices.choices, default=LocationChoices.FRIDGE)

    class Meta:
        unique_together = ("user", "detail", "expiration_date")

    def __str__(self):
        return f"{self.detail.name} - exp: {self.expiration_date} - qty: {self.amount}"


class ProductDetail(models.Model):
    id = models.BigIntegerField(primary_key=True, auto_created=False)
    image = models.TextField(null=True)
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=False)

    def __str__(self):
        return f"{self.name} - {self.id}"


class Usage(models.Model):
    coefficient = models.FloatField(default=0)
    weight = models.IntegerField(default=0)
    product_detail = models.ForeignKey(ProductDetail, on_delete=models.DO_NOTHING)
    user = models.ForeignKey("users.CustomUser", on_delete=models.DO_NOTHING)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return f"{self.product_detail.name} usage {self.coefficient}"

    class Meta:
        unique_together = ("product_detail", "user")


class ProductToBuy(models.Model):
    product = models.ForeignKey(ProductDetail, on_delete=models.DO_NOTHING)
    user = models.ForeignKey("users.CustomUser", on_delete=models.DO_NOTHING)
    count = models.PositiveSmallIntegerField(default=0)

    def __str__(self):
        return f"{self.product.name} - Amount: {self.count}"


class CompostedProduct(models.Model):
    detail = models.ForeignKey(ProductDetail, on_delete=models.DO_NOTHING)
    donated_to = models.ForeignKey("users.CustomUser", on_delete=models.DO_NOTHING)
    # donated_by = models.ForeignKey("users.CustomUser", on_delete=models.DO_NOTHING, related_name="donated_compost")
    accepted = models.BooleanField(null=True, blank=True)
    updated_at = models.DateField(auto_now=True)
