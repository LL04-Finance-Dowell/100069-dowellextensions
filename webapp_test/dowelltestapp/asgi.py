"""
ASGI config for dowelltestapp project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/asgi/
"""

import os
import django
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application

from django.core.asgi import get_asgi_application

django.setup()
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'dowelltestapp.settings')


from channels.auth import AuthMiddleware
from notification.routing import websocket_urlpatterns

application = ProtocolTypeRouter({
    "http": get_asgi_application().discard(),
    "websocket": AuthMiddleware(
        URLRouter(
            websocket_urlpatterns
        )
    )

}) 
