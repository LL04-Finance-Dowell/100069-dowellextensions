from rest_framework import serializers
from notification.models import Product



# All Users #

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["uid","user_id", "username","product_id","product_name","title", "message","created_at"]


