
from django.urls import path
from getReports.views import index,github

urlpatterns = [
    path('index/',index, name= 'index'),
    path('github/',github, name= 'github'),
]