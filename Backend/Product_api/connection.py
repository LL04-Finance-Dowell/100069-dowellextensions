import json
import requests
from datetime import datetime

def get_event_id():
        global event_id
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


def connection(command,eventId,product_name,product_url, product_image):

    url = "http://100002.pythonanywhere.com/" 
    #searchstring="ObjectId"+"("+"'"+"6139bd4969b0c91866e40551"+"'"+")"
    payload = json.dumps({
        "cluster": "Documents",
        "database": "Documentation",
        "collection": "ProductReport",
        "document": "ProductReport",
        "team_member_ID": "1000180002",
        "function_ID": "ABCDE",
        "command": command,
        "field": {
            "eventId" : eventId,
            "product_name": product_name,
            "product_url": product_url,
            "product_image": product_image
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
    return response.text


def dowellconnection(command,field):

    url = "http://100002.pythonanywhere.com/" 
    #searchstring="ObjectId"+"("+"'"+"6139bd4969b0c91866e40551"+"'"+")"
    payload = json.dumps({
        "cluster": "Documents",
        "database": "Documentation",
        "collection": "ProductReport",
        "document": "ProductReport",
        "team_member_ID": "1000180002",
        "function_ID": "ABCDE",
        "command": command,
        "field": field,
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
    return res