from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model


class CustomUserSerializer(ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = [
            "username",
            "first_name",
            "last_name",
            "is_staff",
            "is_active",
            "date_joined",
            "email",
            "longitude",
            "latitude",
            "shopping_frequency",
            "avatar",
            "owns_composter"
            "accepts_compost",
            "composter_capacity",
            "composter_utilization",
        ]
