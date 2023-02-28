from django.urls import path
from notification.views import NotificationViewset
# from django.views.generic import TemplateView
# from rest_framework_swagger.views import get_swagger_view

# schema_view = get_swagger_view(title='Notification API')

urlpatterns = [
    path('get-notification/', NotificationViewset.as_view(), name='notification'),
]
