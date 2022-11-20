from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model


class CustomUserSerializer(ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = [
            "id",
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
            "owns_composter",
            "accepts_compost",
            "composter_capacity",
            "composter_percentage_utilization",
            "search_distance_in_meters",
        ]
        read_only_fields = [
            "is_staff",
            "is_active",
        ]


class ComposterSerializer(ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = [
            "id",
            "first_name",
            "longitude",
            "latitude",
            "avatar",
            "owns_composter",
            "accepts_compost",
            "composter_capacity",
            "composter_percentage_utilization",
        ]
        read_only_fields = [
            "id",
            "first_name",
            "longitude",
            "latitude",
            "avatar",
        ]
