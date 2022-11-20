from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from . import models


class CustomUserAdmin(UserAdmin):
    model = models.CustomUser


admin.site.register(models.CustomUser, CustomUserAdmin)
