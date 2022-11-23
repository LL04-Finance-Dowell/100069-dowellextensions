import json
import requests
import pprint
from datetime import datetime



def get_event_id():
    dd=datetime.now()
    time=dd.strftime("%d:%m:%Y,%H:%M:%S")
    url="https://100003.pythonanywhere.com/event_creation"

    data={
        "platformcode":"FB" ,
        "citycode":"101",
        "daycode":"0",
        "dbcode":"pfm" ,
        "ip_address":"192.168.0.41",
        "login_id":"lav",
        "session_id":"new",
        "processcode":"1",
        "regional_time":time,
        "dowell_time":time,
        "location":"22446576",
        "objectcode":"1",
        "instancecode":"100051",
        "context":"afdafa ",
        "document_id":"3004",
        "rules":"some rules",
        "status":"work",
        "data_type": "learn",
        "purpose_of_usage": "add",
        "colour":"color value",
        "hashtags":"hash tag alue",
        "mentions":"mentions value",
        "emojis":"emojis",

    }


    r=requests.post(url,json=data)
    return r.text

def dowellconnection(cluster,database,collection,document,team_member_ID,function_ID,command,catagaries_form):
    url = "http://100002.pythonanywhere.com/"
        #searchstring="ObjectId"+"("+"'"+"6139bd4969b0c91866e40551"+"'"+")"
    payload = json.dumps(
        {
        "cluster": cluster,
        "database": database,
        "collection": collection,
        "document": document,
        "team_member_ID": team_member_ID,
        "function_ID": function_ID,
        "command": command,
        "field": {
            "eventId":get_event_id(),
            'user_id': catagaries_form['user_id'],
            # 'username': catagaries_form['username'],
            'product_id' : catagaries_form['product_id'],
            'product_name':catagaries_form['product_name'],
            'title':catagaries_form['title'],
            'message':catagaries_form['message'],
            'read':catagaries_form['read'],
        },
        
        "update_field": {
            "order_nos": 21
            },
        "platform": "bangalore"
        })
    headers = {
        'Content-Type': 'application/json'
        }

    response = requests.request("POST", url, headers=headers, data=payload)
    res= json.loads(response.text)
    print(res)
    return res

field ={
    "eventId": get_event_id(),
    "notification":"Notification" 
    }

# inserted_id= dowellconnection("Documents","Documentation","notification","notification","100069008","ABCDE","insert",field)

# print(inserted_id)
