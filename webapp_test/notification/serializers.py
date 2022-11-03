from rest_framework import serializers
from notification.models import Product



# All Users #

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


