from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import *
from . serializers import *
from .papulation import targeted_population 
from .connection import *
from PIL import Image
import io
import base64
# Create your views here.

class Product_api(APIView):
    def get(self, request):
        snippets = Product.objects.all()
        serializer = ProductsSerializer(snippets, many=True)
        try:
            resp = targeted_population("Documentation","ProductReport",["product_name"],"life_time")
            for i in resp['normal']['data'][0]:
                imgdata = base64.b64decode(i["product_image"])
                filename ="uploads/"+f'{i["product_name"]}.svg'  # I assume you have a way of picking unique filenames
                with open(filename, 'wb') as f:
                    f.write(imgdata)
                    f.close()
                    i["product_image"] = filename
            return Response({"Local":serializer.data, "MongoDB":resp})
        except Exception as e:
            return Response(str(e))

    def post(self, request, format=None):        
        try:
            product_name = request.data['product_name']
            product_url = request.data['product_url']
            product_image = request.data['product_image']
            b64string = base64.b64encode(product_image.read()).decode('utf-8').replace("\n", "")
            data = {}
            data["product_name"] = product_name
            data["product_url"] = product_url
            data["product_image"] = b64string
            serializer = ProductsSerializer(data=data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                command = "insert"
                eventId = get_event_id()
                output = connection(command,eventId,product_name,product_url,b64string)
                return Response(output,status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(str(e))


class product(APIView):
    def get(self,request):
        product_id= request.data["product_id"]
        command = "find"
        field= {
            "product_id":product_id
        }
        response_from_db = dowellconnection(command,field)
        return Response(response_from_db,status=status.HTTP_200_OK)
    
    def post(self,request):
        
        product_id = request.data['product_id']
        product_name = request.data['product_name']
        product_url = request.data['product_url']
        product_image = f"uploads/{product_name}.svg"
        command= "insert"
        field = {
            "eventId":get_event_id(),
            "product_id": product_id,
            "product_name" : product_name,
            "product_url" : product_url,
            "product_image": product_image
        }
        inserted_id = dowellconnection(command,field)
        return Response(inserted_id,status=status.HTTP_201_CREATED)