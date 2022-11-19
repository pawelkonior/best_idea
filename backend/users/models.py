from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    longitude = models.FloatField()
    latitude = models.FloatField()
    shopping_frequency = models.PositiveSmallIntegerField()
