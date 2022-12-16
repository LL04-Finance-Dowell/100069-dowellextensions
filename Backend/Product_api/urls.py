from django.urls import path
from Product_api.views import *
# from django.views.generic import TemplateView
from rest_framework_swagger.views import get_swagger_view
schema_view = get_swagger_view(title='Notification API')

urlpatterns = [
    path('post-data-into-collection/', PostDataIntoCollection.as_view()),
    path('get-data-by-collection/', GetAllDataByCollection.as_view()),
]