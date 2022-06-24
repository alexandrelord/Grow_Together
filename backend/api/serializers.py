# python object to json format
from rest_framework import serializers
from .models import Plant

class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = ['id', 'scientific_name', 'common_name', 'water_use', 'light', 'maintenance', 'image']