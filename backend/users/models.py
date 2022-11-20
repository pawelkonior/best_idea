from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    longitude = models.FloatField()
    latitude = models.FloatField()
    shopping_frequency = models.PositiveSmallIntegerField()
    avatar = models.URLField(
        default='https://slack-infra-latency.slack.com/avatarsource/TL513E005-UKTJEKSKD-7286d596ec95-128')

    owns_composter = models.BooleanField(default=False)
    accepts_compost = models.BooleanField(default=False)
    composter_capacity = models.PositiveSmallIntegerField(default=0)
    composter_utilization = models.PositiveSmallIntegerField(default=0)
