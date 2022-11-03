from django.urls import path

from flutterapp.views import details,index

urlpatterns =[
    path('details/',details, name= 'details'),
    path('index/<str:firstname>/<str:lastname>',index, name= 'index'),

]