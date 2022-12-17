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