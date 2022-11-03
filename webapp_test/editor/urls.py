from django.urls import path

from editor.views import editor, editor_load ,index

urlpatterns =[
    path('index/',index, name= 'index'),
    path('editor/',editor, name= 'editor'),
    path('editor_load/',editor_load, name= 'editor_load'),
]