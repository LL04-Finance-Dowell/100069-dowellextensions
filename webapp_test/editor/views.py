from django.shortcuts import render ,redirect
from django.http import HttpResponse
import requests
from django.http import JsonResponse
from function.dowellpopulationfunction import targeted_population
from function.connection import connection
from django.views.decorators.csrf import csrf_exempt
from .editor import generate_editor_link
def index(request):
    response = targeted_population('social-media-auto','step2_data',  ['title'], 'life_time')
    #print(response['normal']['data'][0])

    if not response['normal']['is_error']:
        link_arr = []
        for item in response['normal']['data'][0]:
            #_id = item["_id"]
            obj = {
                "title": item["title"],
                "link": f"https://ll04-finance-dowell.github.io/100058-dowelleditor/items?name=social-media-auto+step2_data+{item['_id']}+title+paragraph",
            }
            link_arr.append(obj)
        #   return JsonResponse({"status": 200, "data": response['normal']['data'][0] })
        return render(request, 'editor_init/index.html', context={'data': link_arr})
    else:
        return JsonResponse({"status":400, "message": 'An error occurred.'})


@csrf_exempt
def editor(request):
    if request.method == "POST":
        title =request.POST.get('title')
        paragraph = request.POST.get('paragraph')
        insert=connection("hr_hiring","hr_hiring","dowelltraining","dowelltraining","1000554","ABCDE",title,paragraph)
        #link=f"https://ll04-finance-dowell.github.io/100058-dowelleditor/?d_name=hr_hiring&col_name=dowelltraining&id={insert['inserted_id']}&fields=title"
        generate_link = generate_editor_link("hr_hiring","dowelltraining","title",insert['inserted_id'])
        print(generate_link)
        return redirect(generate_link)
    return render(request,'index.html')


@csrf_exempt
def editor_load(request):
    generate_link = generate_editor_link("social-media-auto","step2_data","title","62fd1ed5cee6d0752b849cc6")
    print(generate_link)
    return redirect(generate_link)

