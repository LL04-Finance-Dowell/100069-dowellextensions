from django.shortcuts import render
from django.http import HttpResponse ,JsonResponse
from function.dowellconnection import dowellconnection
from function.event import get_event_id
from django.views.decorators.csrf import csrf_exempt
import json



@csrf_exempt
def scaleapi(request):
    if request.method == "POST":
        orientation = request.POST.get("orientation")
        numberrating= request.POST.get("numberrating")
        scalecolor= request.POST.get("scalecolor")
        roundcolor= request.POST.get("roundcolor")
        fontcolor= request.POST.get("fontcolor")
        fomat= request.POST.get("fomat")
        time= request.POST.get("time")
        template_name = request.POST.get("template_name")
        name= request.POST.get("name")
        text = request.POST.get("text")
        left = request.POST.get ("left")
        right = request.POST.get("right")
        center = request.POST.get("center") 
        scale_category = request.POST.get("scale_category")
        field ={
            "eventId":get_event_id(),
            "scale_data": {
                "orientation":orientation,"numberrating":numberrating,"scalecolor":scalecolor,
                "roundcolor":roundcolor,"fontcolor":fontcolor,"fomat":fomat,
                "time":time,"template_name":template_name,"name":name,
                "text":text, "left":left,"right":right,"center":center, 
                "scale-category": scale_category}
        }
        inserted_id= dowellconnection("dowellscale","dowellscale","scale_reports","scale_reports","1094","ABCDE","insert",field)
        return JsonResponse({
            "inserted_id": inserted_id,
            "status":"Inserted sucessfully" 
            })
        