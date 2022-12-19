import json
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .connection import *
from .population import *

base_url = "/home/100092/100069-dowellextensions/Backend/uploads"

@method_decorator(csrf_exempt, name='dispatch')
class PostDataIntoCollection(APIView):

    def post(self, request):
        product_id = request.data.get('product_id',None)
        product_name = request.data.get('product_name',None)
        product_url = request.data.get('product_url',None)
        if product_id and product_name and product_url :
            product_image = f"{base_url}/{product_name}.svg"
            f = open(product_image, "r")
            product_logo_svg = f.read()
            command= "insert"
            field = {
                "eventId":get_event_id(),
                "product_id": product_id,
                "product_name" : product_name,
                "product_url" : product_url,
                "product_logo": product_logo_svg
            }
            inserted_id = dowellconnection(command,field)
            return Response(inserted_id,status=status.HTTP_201_CREATED)
        return Response({"info": "Toodles!"},status=status.HTTP_400_BAD_REQUEST)

@method_decorator(csrf_exempt, name='dispatch')
class GetAllDataByCollection(APIView):

    def post(self, request):
        product_id= request.data.get('product_id',None)
        if product_id:
            command= "find"
            field = {
                "product_id": product_id
            }
            responses = dowellconnection(command,field)
            return Response(responses,status=status.HTTP_200_OK)
        return Response({"info": "Toodles"},status=status.HTTP_400_BAD_REQUEST)
    

@method_decorator(csrf_exempt, name='dispatch')
class GetAllData(APIView):

    def get(self, request):
        try:
            responses= targeted_population("Documentation","ProductReport",["product_id"],"life_time")
            return Response(responses,status=status.HTTP_200_OK)
        except:
            return Response({"info": "Toodles"},status=status.HTTP_400_BAD_REQUEST)
    



