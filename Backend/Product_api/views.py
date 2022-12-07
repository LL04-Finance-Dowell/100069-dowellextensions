from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import *
from . serializers import *
from .papulation import targeted_population
from .connection import *
import base64
# Create your views here.

class Product_api(APIView):
    def get(self, request):
        print("hello")
        snippets = Product.objects.all()
        serializer = ProductsSerializer(snippets, many=True)
        try:
            resp = targeted_population("ProductReport","dowelltraining",["product_name"],"life_time")
            # print(resp['normal']['data'][0])
            for i in resp['normal']['data'][0]:
                for key, value in i.items() :
                    if key == "product_image":
                        j = 1
                        imgdata = base64.b64decode(i["product_image"])
                        filename ="/uploads/"+f'Product_image{j}.jpg'  # I assume you have a way of picking unique filenames
                        with open(filename, 'wb') as f:
                            f.write(imgdata)
                            i["product_image"] = filename
                            j+=1   
                    else:
                        print("vue")
                    
            return Response({"Local":serializer.data,"MongoDB":resp['normal']['data'][0]})
        except Exception as e:
            return Response(str(e))

    def post(self, request):
        print("hello")
        
        try:
            product_name = request.data['product_name']
            product_url = request.data['product_url']
            product_image = request.data['product_image']
            images_dict = {}
            serializer = ProductsSerializer(data=request.data)
            if serializer.is_valid():
                print("after serializer")
                serializer.save()
            image_path = Product.objects.filter(product_name = product_name).values("product_image").first()
            print(image_path['product_image'])
            with open(image_path['product_image'], "rb") as imageFile:
                print(product_name,product_url, product_image)
                images_dict["image_1"] = base64.encodebytes(imageFile.read()).decode('utf-8').replace("\n", "")
            print(images_dict)
            command = "insert"
            eventId = get_event_id()
            output = connection(command,eventId,product_name,product_url,images_dict["image_1"])
            print(output)
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(str(e))
