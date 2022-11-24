from django.http import HttpResponse
from django.shortcuts import render
from channels.layers import get_channel_layer
from rest_framework import viewsets
from rest_framework.views import APIView
from .message3 import dowellconnection, update_notifications
from .models import BroadcastNotification, Product

from rest_framework import status
from rest_framework.response import Response
from .serializers import NotificationSerializer

# Create your views here.
def home(request):
    return render(request, '', {
        'room_name': 'broadcast'
    })


from asgiref.sync import async_to_sync
def test(request):
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        "notification_broadcast",
        {
            'type':'send_notification',
            'message': 'Notification'
        }
    )
    return HttpResponse("Done")

# POST REQUEST




class NotificationViewset(APIView):

    def get(self, request):
        products = Product.objects.all()
        serializer = NotificationSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
          serializer = NotificationSerializer(data=request.data)
          serializer.is_valid(raise_exception=True)
          serializer.save()
          try:
                dowellconnection("Documents","Documentation","notification","notification","100069008","ABCDE","insert",serializer.data)
          except:
                print("Candidate data not saved to MongoDB Database")
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
          return Response(serializer.data, status=status.HTTP_201_CREATED)
        
    def put(self, request):
        data = request.data
        id = data["id"]
        seen = True
        update_query = Product.objects.filter(uid = id ).update(seen = seen)
        query =Product.objects.filter(uid = id ).values()
        try:
            update_notifications("Documents","Documentation","notification","notification","100069008","ABCDE","insert",seen)
        except:
            print("Candidate data not saved to MongoDB Database")
            return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(query,status=status.HTTP_201_CREATED)
            

    

     




