from django.contrib.auth.models import AbstractUser
from django.core.validators import MaxValueValidator
from django.db import models


class CustomUser(AbstractUser):
    longitude = models.FloatField(default=0)
    latitude = models.FloatField(default=0)
    shopping_frequency = models.PositiveSmallIntegerField(default=3)
    avatar = models.URLField(
        default='https://slack-infra-latency.slack.com/avatarsource/TL513E005-UKTJEKSKD-7286d596ec95-128')

    owns_composter = models.BooleanField(default=False)
    accepts_compost = models.BooleanField(default=False)
    composter_capacity = models.PositiveSmallIntegerField(default=0)
    composter_percentage_utilization = models.PositiveSmallIntegerField(default=0, validators=[MaxValueValidator(100)])
    search_distance_in_meters = models.PositiveSmallIntegerField(default=500)
