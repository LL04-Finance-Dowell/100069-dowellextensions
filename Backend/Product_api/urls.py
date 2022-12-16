from django.urls import path
from Product_api.views import *
# from django.views.generic import TemplateView
from rest_framework_swagger.views import get_swagger_view
schema_view = get_swagger_view(title='Notification API')

urlpatterns = [
    path('get/', Product_api.as_view(), name='products-list'),
    path('post/', Product_api.as_view(), name='products-list'),
    path('post-product-details/', product.as_view(), name='products-list'),
    path('get-product-details/', product.as_view(), name='products-list'),

]