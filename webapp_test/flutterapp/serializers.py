from rest_framework.serializers import ModelSerializer
from .models import flutterdatabase

class AppSerializer(ModelSerializer):
    class Meta:
        model = flutterdatabase
        fields = '__all__'
