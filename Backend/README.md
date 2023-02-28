## Product Service

api_url = `https://100092.pythonanywhere.com/product/`

### Product api management

_POST_ to `post-data-into-collection/`

- Insert product details
  Request Body

```json
{
  "product_id": "<product id>",
  "product_name": "<name of the product>",
  "product_url": "<product url>"
}
```

Response-201

```json
{
  "info": "<inserted_id>"
}
```

Response-404

```json
{
  "info": "Toodles!"
}
```

_POST_ to `/get-data-by-collection/`

- Get product details
  Request Body

```json
{
  "product_id": "<product id>"
}
```

Response-201

```json
{
  "info": "<response>"
}
```

Response-404

```json
{
  "info": "Toodles!"
}
```

### List of Products

| Product_id | Product_name            |
| ---------- | ----------------------- |
| 10001      | Workflow AI             |
| 10002      | Ux live                 |
| 10003      | Legalzard               |
| 10004      | Livinglab               |
| 10005      | Wifi QR Code            |
| 10006      | dowell maps             |
| 10007      | Social media automation |
| 10008      | Living Lab Admin        |
| 10009      | Scales                  |
| 10010      | Customer experience     |

### Notification Service

api_url = `https://100092.pythonanywhere.com/api/`

## Notification Api

_POST_ to `get-notification/`

- Insert product details
  Request Body

```json
{
  "user_id": "<user id>",
  "username": "<name of the user>",
  "product_id": "<product id>",
  "product_name": "<product name>",
  "title": "<title>",
  "message": "<message>"
}
```

Response-201

```json
{
  "uid": "<uid>",
  "user_id": "<user id>",
  "username": "<name of the user>",
  "product_id": "<product id>",
  "product_name": "<product name>",
  "title": "<title>",
  "message": "<message>",
  "seen": false,
  "created_at": "2023-02-28T09:24:33.091333Z"
}
```

Response-404

```json
{
  "info": "errors!"
}
```

_PUT_ to `get-notification/`

- Insert product details
  Request Body

```json
{
  "uid": "<uid>"
}
```

Response-201

```json
{
  "uid": "<uid>",
  "user_id": "<user id>",
  "username": "<name of the user>",
  "product_id": "<product id>",
  "product_name": "<product name>",
  "title": "<title>",
  "message": "<message>",
  "seen": true,
  "created_at": "2023-02-28T09:24:33.091333Z"
}
```

Response-404

```json
{
  "info": "errors!"
}
```

_GET_ to `get-notification/`

- Insert product details

Response-201

```json
{
  "uid": "<uid>",
  "user_id": "<user id>",
  "username": "<name of the user>",
  "product_id": "<product id>",
  "product_name": "<product name>",
  "title": "<title>",
  "message": "<message>",
  "seen": false | true,
  "created_at": "2023-02-28T09:24:33.091333Z"
}
```

Response-404

```json
{
  "info": "errors!"
}
```
