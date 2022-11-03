"""dowelltestapp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path , include
from django.views.generic import TemplateView
from rest_framework_swagger.views import get_swagger_view
schema_view = get_swagger_view(title='Notification API')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('editor/',include('editor.urls')),
    path('scaleapi/',include('scaleapi.urls')),
    path('flutterapp/',include('flutterapp.urls')),
    path('getReports/',include('getReports.urls')),
    path('notification/',include('notification.urls')),
    path('docs/', TemplateView.as_view(
        template_name='docs.html',
        extra_context={'schema_url':'openapi-schema'}
    ), name='docs'),
    path(r'api-docs/', schema_view),

]
