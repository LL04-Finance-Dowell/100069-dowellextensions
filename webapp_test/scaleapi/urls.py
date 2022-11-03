from django.urls import path

from scaleapi.views import scaleapi

urlpatterns =[
    path('scaleapi/',scaleapi, name= 'scaleapi'),
]