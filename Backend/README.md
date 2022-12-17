## Product Service

api_url = `https://100092.pythonanywhere.com/product/`

### Product api management
*POST* to `post-data-into-collection/`
- Insert product details
Request Body
```json
{
  "product_id" : "<product id>",
  "product_name" : "<name of the product>",
  "product_url" : "<product url>"
}
```
Response-201
```json
{
    "info":"<inserted_id>"
}
```
Response-404
```json
{
    "info":"Toodles!"
}
```

*POST* to `/get-data-by-collection/`
- Get product details 
Request Body
```json
{
  "product_id" : "<product id>"
}
```
Response-201
```json
{
    "info":"<response>"
}
```
Response-404
```json
{
    "info":"Toodles!"
}
```

### List of Products

| Product_id | Product_name |
| ----------- | ----------- |
| 10001 | Workflow AI       |
| 10002 | Ux live           |
| 10003 | Legalzard         |
| 10004 | Livinglab         |
| 10005 | Wifi QR Code      |
| 10006 | dowell maps       |
| 10007 | Social media automation|
| 10008 | Living Lab Admin  |
| 10009 | Scales            |
| 10010 | Customer experience|