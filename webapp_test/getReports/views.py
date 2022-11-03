from dataclasses import field
from errno import EADDRINUSE
from django.shortcuts import render
from django.http import HttpResponse ,JsonResponse
from function.dowellpopulationfunction import targeted_population
from django.views.decorators.csrf import csrf_exempt
import json



@csrf_exempt
def index(request):
    if request.method == "POST":
        try:
            dbname = request.POST.get("dbname")
            collection= request.POST.get("collection")
            field= request.POST.get("fields")
            time_period = "life_time"
            fetched_data = targeted_population(dbname,collection,[field],time_period)
            return JsonResponse({
                "Data fetched from Population function":fetched_data
            }) 
        except:
            return JsonResponse({
              "Status" : "There is no data i guess !"  
            }) 
    return render(request,'report.html')

@csrf_exempt
def github(request):
    if request.method == "GET":
        return JsonResponse({
            "Status":"Method not allowed. Post data to url"
        })
    if request.method == "POST":
        repository_name = request.POST.get("repository_name")
        repository_url= request.POST.get("repository_url")
        return JsonResponse({
            "repository_name": repository_name,
            "repository_url" : repository_url
        }) 
