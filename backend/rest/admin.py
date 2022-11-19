from django.contrib import admin
from .models import ProductDetail, Product, ProductToBuy, Usage

admin.site.register(ProductDetail)
admin.site.register(Product)
admin.site.register(ProductToBuy)
admin.site.register(Usage)
