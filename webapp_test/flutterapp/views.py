from django.shortcuts import render
from django.http import HttpResponse ,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import AppSerializer
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from .models import flutterdatabase


@csrf_exempt
@api_view(['GET','POST'])
def details(request):
    if request.method == 'GET':
        data = flutterdatabase.objects.all()
        serializer = AppSerializer(data, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = AppSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def index(request,firstname,lastname):
    name= firstname+lastname
    return JsonResponse ({
        "fullname":name
    })
    