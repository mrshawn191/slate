---
title: PaymentIQ BackOffice API v1.3.6
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - javascript--nodejs: Node.JS
  - ruby: Ruby
  - python: Python
  - java: Java
toc_footers: []
includes: []
search: true
highlight_theme: darkula
---

# PaymentIQ BackOffice API v1.3.6

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


Base URLs:

* <a href="/paymentiq">/paymentiq</a>



Email: <a href="mailto:technicalsupport@bambora.com">PaymentIQ</a> Web: <a href="https://backoffice.paymentiq.io">PaymentIQ</a> 


# Authentication



- oAuth2 authentication. This API uses OAuth 2 with the password grant flow. [More info](https://api.example.com/docs/auth)

    - Flow: password

    - Token URL = [https://api.paymentiq.io/paymentiq/oauth/token](https://api.paymentiq.io/paymentiq/oauth/token)

|Scope|Scope Description|
|---|---|
|default|default scope|




# Payment Process

## approve

> Code samples

```shell
# You can also use wget
curl -X POST /paymentiq/backoffice/api/v2/paymenttx/approve/{txId}?merchantId=0 \
  -H 'Accept: application/json'
   -H 'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxx'
```

```http
POST /paymentiq/backoffice/api/v2/paymenttx/approve/{txId}?merchantId=0 HTTP/1.1
Host: null

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/paymentiq/backoffice/api/v2/paymenttx/approve/{txId}',
  method: 'post',
  data: '?merchantId=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/paymentiq/backoffice/api/v2/paymenttx/approve/{txId}?merchantId=0',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.post '/paymentiq/backoffice/api/v2/paymenttx/approve/{txId}',
  params: {
  'merchantId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)
```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.post('/paymentiq/backoffice/api/v2/paymenttx/approve/{txId}', params={
  'merchantId': 0
}, headers = headers)

print r.json()
```

```java
URL obj = new URL("/paymentiq/backoffice/api/v2/paymenttx/approve/{txId}?merchantId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```

`POST /backoffice/api/v2/paymenttx/approve/{txId}`

This method is called to approve a transaction

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId


> Example responses

```json
{
  "created": "2017-09-20T20:17:12Z",
  "errorMessage": "string",
  "id": 0,
  "lastUpdated": "2017-09-20T20:17:12Z",
  "merchantId": 0,
  "pspStatusCode": "string",
  "state": "SUCCESSFUL",
  "statusCode": "SUCCESS"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PaymentTxResponseDto](#schemapaymenttxresponsedto)

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## cancel

> Code samples

```shell
# You can also use wget
curl -X POST /paymentiq/backoffice/api/v2/paymenttx/cancel/{txId}?merchantId=0 \
  -H 'Content-Type: application/json' 
  -H 'Accept: application/json'
   -H 'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxx'
```

```http
POST /paymentiq/backoffice/api/v2/paymenttx/cancel/{txId}?merchantId=0 HTTP/1.1
Host: null
Content-Type: application/json
Accept: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

$.ajax({
  url: '/paymentiq/backoffice/api/v2/paymenttx/cancel/{txId}',
  method: 'post',
  data: '?merchantId=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('/paymentiq/backoffice/api/v2/paymenttx/cancel/{txId}?merchantId=0',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/paymentiq/backoffice/api/v2/paymenttx/cancel/{txId}',
  params: {
  'merchantId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)
```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/paymentiq/backoffice/api/v2/paymenttx/cancel/{txId}', params={
  'merchantId': 0
}, headers = headers)

print r.json()
```

```java
URL obj = new URL("/paymentiq/backoffice/api/v2/paymenttx/cancel/{txId}?merchantId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```

`POST /backoffice/api/v2/paymenttx/cancel/{txId}`

> Body parameter

```json
{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetails](#schemacorrectiondetails)|false|details
» amount|body|string|false|No description
» authAmount|body|string|false|No description
» feeAmount|body|string|false|No description
» force|body|boolean|false|No description
» info|body|string|false|No description
» tagId|body|string|false|No description
» txAmount|body|string|false|No description


> Example responses

```json
{
  "created": "2017-09-20T20:17:12Z",
  "errorMessage": "string",
  "id": 0,
  "lastUpdated": "2017-09-20T20:17:12Z",
  "merchantId": 0,
  "pspStatusCode": "string",
  "state": "SUCCESSFUL",
  "statusCode": "SUCCESS"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PaymentTxResponseDto](#schemapaymenttxresponsedto)

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## capture

> Code samples

```shell
# You can also use wget
curl -X POST /paymentiq/backoffice/api/v2/paymenttx/capture/{txId}?merchantId=0 \
  -H 'Content-Type: application/json' 
  -H 'Accept: application/json'
   -H 'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxx'
```

```http
POST /paymentiq/backoffice/api/v2/paymenttx/capture/{txId}?merchantId=0 HTTP/1.1
Host: null
Content-Type: application/json
Accept: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

$.ajax({
  url: '/paymentiq/backoffice/api/v2/paymenttx/capture/{txId}',
  method: 'post',
  data: '?merchantId=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('/paymentiq/backoffice/api/v2/paymenttx/capture/{txId}?merchantId=0',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/paymentiq/backoffice/api/v2/paymenttx/capture/{txId}',
  params: {
  'merchantId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)
```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/paymentiq/backoffice/api/v2/paymenttx/capture/{txId}', params={
  'merchantId': 0
}, headers = headers)

print r.json()
```

```java
URL obj = new URL("/paymentiq/backoffice/api/v2/paymenttx/capture/{txId}?merchantId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```

`POST /backoffice/api/v2/paymenttx/capture/{txId}`

> Body parameter

```json
{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetails](#schemacorrectiondetails)|true|details
» amount|body|string|false|No description
» authAmount|body|string|false|No description
» feeAmount|body|string|false|No description
» force|body|boolean|false|No description
» info|body|string|false|No description
» tagId|body|string|false|No description
» txAmount|body|string|false|No description


> Example responses

```json
{
  "created": "2017-09-20T20:17:12Z",
  "errorMessage": "string",
  "id": 0,
  "lastUpdated": "2017-09-20T20:17:12Z",
  "merchantId": 0,
  "pspStatusCode": "string",
  "state": "SUCCESSFUL",
  "statusCode": "SUCCESS"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PaymentTxResponseDto](#schemapaymenttxresponsedto)

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## chargeback

> Code samples

```shell
# You can also use wget
curl -X POST /paymentiq/backoffice/api/v2/paymenttx/correction/chargeback/{txId}?merchantId=0 \
  -H 'Content-Type: application/json' 
  -H 'Accept: application/json'
   -H 'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxx'
```

```http
POST /paymentiq/backoffice/api/v2/paymenttx/correction/chargeback/{txId}?merchantId=0 HTTP/1.1
Host: null
Content-Type: application/json
Accept: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

$.ajax({
  url: '/paymentiq/backoffice/api/v2/paymenttx/correction/chargeback/{txId}',
  method: 'post',
  data: '?merchantId=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('/paymentiq/backoffice/api/v2/paymenttx/correction/chargeback/{txId}?merchantId=0',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/paymentiq/backoffice/api/v2/paymenttx/correction/chargeback/{txId}',
  params: {
  'merchantId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)
```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/paymentiq/backoffice/api/v2/paymenttx/correction/chargeback/{txId}', params={
  'merchantId': 0
}, headers = headers)

print r.json()
```

```java
URL obj = new URL("/paymentiq/backoffice/api/v2/paymenttx/correction/chargeback/{txId}?merchantId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```

`POST /backoffice/api/v2/paymenttx/correction/chargeback/{txId}`

> Body parameter

```json
{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetails](#schemacorrectiondetails)|true|details
» amount|body|string|false|No description
» authAmount|body|string|false|No description
» feeAmount|body|string|false|No description
» force|body|boolean|false|No description
» info|body|string|false|No description
» tagId|body|string|false|No description
» txAmount|body|string|false|No description


> Example responses

```json
{
  "created": "2017-09-20T20:17:12Z",
  "errorMessage": "string",
  "id": 0,
  "lastUpdated": "2017-09-20T20:17:12Z",
  "merchantId": 0,
  "pspStatusCode": "string",
  "state": "SUCCESSFUL",
  "statusCode": "SUCCESS"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PaymentTxResponseDto](#schemapaymenttxresponsedto)

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## correction

> Code samples

```shell
# You can also use wget
curl -X POST /paymentiq/backoffice/api/v2/paymenttx/correction/chargebackwon/{txId}?merchantId=0 \
  -H 'Content-Type: application/json' 
  -H 'Accept: application/json'
   -H 'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxx'
```

```http
POST /paymentiq/backoffice/api/v2/paymenttx/correction/chargebackwon/{txId}?merchantId=0 HTTP/1.1
Host: null
Content-Type: application/json
Accept: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

$.ajax({
  url: '/paymentiq/backoffice/api/v2/paymenttx/correction/chargebackwon/{txId}',
  method: 'post',
  data: '?merchantId=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('/paymentiq/backoffice/api/v2/paymenttx/correction/chargebackwon/{txId}?merchantId=0',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/paymentiq/backoffice/api/v2/paymenttx/correction/chargebackwon/{txId}',
  params: {
  'merchantId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)
```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/paymentiq/backoffice/api/v2/paymenttx/correction/chargebackwon/{txId}', params={
  'merchantId': 0
}, headers = headers)

print r.json()
```

```java
URL obj = new URL("/paymentiq/backoffice/api/v2/paymenttx/correction/chargebackwon/{txId}?merchantId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```

`POST /backoffice/api/v2/paymenttx/correction/chargebackwon/{txId}`

> Body parameter

```json
{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetails](#schemacorrectiondetails)|true|details
» amount|body|string|false|No description
» authAmount|body|string|false|No description
» feeAmount|body|string|false|No description
» force|body|boolean|false|No description
» info|body|string|false|No description
» tagId|body|string|false|No description
» txAmount|body|string|false|No description


> Example responses

```json
{
  "created": "2017-09-20T20:17:12Z",
  "errorMessage": "string",
  "id": 0,
  "lastUpdated": "2017-09-20T20:17:12Z",
  "merchantId": 0,
  "pspStatusCode": "string",
  "state": "SUCCESSFUL",
  "statusCode": "SUCCESS"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PaymentTxResponseDto](#schemapaymenttxresponsedto)

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## partialrefund

> Code samples

```shell
# You can also use wget
curl -X POST /paymentiq/backoffice/api/v2/paymenttx/correction/partialrefund/{txId}?merchantId=0 \
  -H 'Content-Type: application/json' 
  -H 'Accept: application/json'
   -H 'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxx'
```

```http
POST /paymentiq/backoffice/api/v2/paymenttx/correction/partialrefund/{txId}?merchantId=0 HTTP/1.1
Host: null
Content-Type: application/json
Accept: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

$.ajax({
  url: '/paymentiq/backoffice/api/v2/paymenttx/correction/partialrefund/{txId}',
  method: 'post',
  data: '?merchantId=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('/paymentiq/backoffice/api/v2/paymenttx/correction/partialrefund/{txId}?merchantId=0',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/paymentiq/backoffice/api/v2/paymenttx/correction/partialrefund/{txId}',
  params: {
  'merchantId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)
```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/paymentiq/backoffice/api/v2/paymenttx/correction/partialrefund/{txId}', params={
  'merchantId': 0
}, headers = headers)

print r.json()
```

```java
URL obj = new URL("/paymentiq/backoffice/api/v2/paymenttx/correction/partialrefund/{txId}?merchantId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```

`POST /backoffice/api/v2/paymenttx/correction/partialrefund/{txId}`

> Body parameter

```json
{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetails](#schemacorrectiondetails)|true|details
» amount|body|string|false|No description
» authAmount|body|string|false|No description
» feeAmount|body|string|false|No description
» force|body|boolean|false|No description
» info|body|string|false|No description
» tagId|body|string|false|No description
» txAmount|body|string|false|No description


> Example responses

```json
{
  "created": "2017-09-20T20:17:12Z",
  "errorMessage": "string",
  "id": 0,
  "lastUpdated": "2017-09-20T20:17:12Z",
  "merchantId": 0,
  "pspStatusCode": "string",
  "state": "SUCCESSFUL",
  "statusCode": "SUCCESS"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PaymentTxResponseDto](#schemapaymenttxresponsedto)

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## correctionRefund

> Code samples

```shell
# You can also use wget
curl -X POST /paymentiq/backoffice/api/v2/paymenttx/correction/refund/{txId}?merchantId=0 \
  -H 'Content-Type: application/json' 
  -H 'Accept: application/json'
   -H 'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxx'
```

```http
POST /paymentiq/backoffice/api/v2/paymenttx/correction/refund/{txId}?merchantId=0 HTTP/1.1
Host: null
Content-Type: application/json
Accept: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

$.ajax({
  url: '/paymentiq/backoffice/api/v2/paymenttx/correction/refund/{txId}',
  method: 'post',
  data: '?merchantId=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('/paymentiq/backoffice/api/v2/paymenttx/correction/refund/{txId}?merchantId=0',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/paymentiq/backoffice/api/v2/paymenttx/correction/refund/{txId}',
  params: {
  'merchantId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)
```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/paymentiq/backoffice/api/v2/paymenttx/correction/refund/{txId}', params={
  'merchantId': 0
}, headers = headers)

print r.json()
```

```java
URL obj = new URL("/paymentiq/backoffice/api/v2/paymenttx/correction/refund/{txId}?merchantId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```

`POST /backoffice/api/v2/paymenttx/correction/refund/{txId}`

> Body parameter

```json
{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetails](#schemacorrectiondetails)|true|details
» amount|body|string|false|No description
» authAmount|body|string|false|No description
» feeAmount|body|string|false|No description
» force|body|boolean|false|No description
» info|body|string|false|No description
» tagId|body|string|false|No description
» txAmount|body|string|false|No description


> Example responses

```json
{
  "created": "2017-09-20T20:17:12Z",
  "errorMessage": "string",
  "id": 0,
  "lastUpdated": "2017-09-20T20:17:12Z",
  "merchantId": 0,
  "pspStatusCode": "string",
  "state": "SUCCESSFUL",
  "statusCode": "SUCCESS"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PaymentTxResponseDto](#schemapaymenttxresponsedto)

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## correctionVoid

> Code samples

```shell
# You can also use wget
curl -X POST /paymentiq/backoffice/api/v2/paymenttx/correction/void/{txId}?merchantId=0 \
  -H 'Content-Type: application/json' 
  -H 'Accept: application/json'
   -H 'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxx'
```

```http
POST /paymentiq/backoffice/api/v2/paymenttx/correction/void/{txId}?merchantId=0 HTTP/1.1
Host: null
Content-Type: application/json
Accept: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

$.ajax({
  url: '/paymentiq/backoffice/api/v2/paymenttx/correction/void/{txId}',
  method: 'post',
  data: '?merchantId=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('/paymentiq/backoffice/api/v2/paymenttx/correction/void/{txId}?merchantId=0',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/paymentiq/backoffice/api/v2/paymenttx/correction/void/{txId}',
  params: {
  'merchantId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)
```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/paymentiq/backoffice/api/v2/paymenttx/correction/void/{txId}', params={
  'merchantId': 0
}, headers = headers)

print r.json()
```

```java
URL obj = new URL("/paymentiq/backoffice/api/v2/paymenttx/correction/void/{txId}?merchantId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```

`POST /backoffice/api/v2/paymenttx/correction/void/{txId}`

> Body parameter

```json
{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetails](#schemacorrectiondetails)|true|details
» amount|body|string|false|No description
» authAmount|body|string|false|No description
» feeAmount|body|string|false|No description
» force|body|boolean|false|No description
» info|body|string|false|No description
» tagId|body|string|false|No description
» txAmount|body|string|false|No description


> Example responses

```json
{
  "created": "2017-09-20T20:17:12Z",
  "errorMessage": "string",
  "id": 0,
  "lastUpdated": "2017-09-20T20:17:12Z",
  "merchantId": 0,
  "pspStatusCode": "string",
  "state": "SUCCESSFUL",
  "statusCode": "SUCCESS"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PaymentTxResponseDto](#schemapaymenttxresponsedto)

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## deny

> Code samples

```shell
# You can also use wget
curl -X POST /paymentiq/backoffice/api/v2/paymenttx/deny/{txId}?merchantId=0 \
  -H 'Accept: application/json'
   -H 'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxx'
```

```http
POST /paymentiq/backoffice/api/v2/paymenttx/deny/{txId}?merchantId=0 HTTP/1.1
Host: null

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/paymentiq/backoffice/api/v2/paymenttx/deny/{txId}',
  method: 'post',
  data: '?merchantId=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/paymentiq/backoffice/api/v2/paymenttx/deny/{txId}?merchantId=0',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.post '/paymentiq/backoffice/api/v2/paymenttx/deny/{txId}',
  params: {
  'merchantId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)
```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.post('/paymentiq/backoffice/api/v2/paymenttx/deny/{txId}', params={
  'merchantId': 0
}, headers = headers)

print r.json()
```

```java
URL obj = new URL("/paymentiq/backoffice/api/v2/paymenttx/deny/{txId}?merchantId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```

`POST /backoffice/api/v2/paymenttx/deny/{txId}`

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId


> Example responses

```json
{
  "created": "2017-09-20T20:17:12Z",
  "errorMessage": "string",
  "id": 0,
  "lastUpdated": "2017-09-20T20:17:12Z",
  "merchantId": 0,
  "pspStatusCode": "string",
  "state": "SUCCESSFUL",
  "statusCode": "SUCCESS"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PaymentTxResponseDto](#schemapaymenttxresponsedto)

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## forceFailed

> Code samples

```shell
# You can also use wget
curl -X POST /paymentiq/backoffice/api/v2/paymenttx/force/failed/{txId}?merchantId=0 \
  -H 'Accept: application/json'
   -H 'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxx'
```

```http
POST /paymentiq/backoffice/api/v2/paymenttx/force/failed/{txId}?merchantId=0 HTTP/1.1
Host: null

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/paymentiq/backoffice/api/v2/paymenttx/force/failed/{txId}',
  method: 'post',
  data: '?merchantId=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/paymentiq/backoffice/api/v2/paymenttx/force/failed/{txId}?merchantId=0',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.post '/paymentiq/backoffice/api/v2/paymenttx/force/failed/{txId}',
  params: {
  'merchantId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)
```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.post('/paymentiq/backoffice/api/v2/paymenttx/force/failed/{txId}', params={
  'merchantId': 0
}, headers = headers)

print r.json()
```

```java
URL obj = new URL("/paymentiq/backoffice/api/v2/paymenttx/force/failed/{txId}?merchantId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```

`POST /backoffice/api/v2/paymenttx/force/failed/{txId}`

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId


> Example responses

```json
{
  "created": "2017-09-20T20:17:12Z",
  "errorMessage": "string",
  "id": 0,
  "lastUpdated": "2017-09-20T20:17:12Z",
  "merchantId": 0,
  "pspStatusCode": "string",
  "state": "SUCCESSFUL",
  "statusCode": "SUCCESS"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PaymentTxResponseDto](#schemapaymenttxresponsedto)

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## forceInconsistent

> Code samples

```shell
# You can also use wget
curl -X POST /paymentiq/backoffice/api/v2/paymenttx/force/inconsistent/{txId}?merchantId=0 \
  -H 'Accept: */*'
   -H 'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxx'
```

```http
POST /paymentiq/backoffice/api/v2/paymenttx/force/inconsistent/{txId}?merchantId=0 HTTP/1.1
Host: null

Accept: */*

```

```javascript
var headers = {
  'Accept':'*/*'

};

$.ajax({
  url: '/paymentiq/backoffice/api/v2/paymenttx/force/inconsistent/{txId}',
  method: 'post',
  data: '?merchantId=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'*/*'

};

fetch('/paymentiq/backoffice/api/v2/paymenttx/force/inconsistent/{txId}?merchantId=0',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => '*/*'
}

result = RestClient.post '/paymentiq/backoffice/api/v2/paymenttx/force/inconsistent/{txId}',
  params: {
  'merchantId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)
```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.post('/paymentiq/backoffice/api/v2/paymenttx/force/inconsistent/{txId}', params={
  'merchantId': 0
}, headers = headers)

print r.json()
```

```java
URL obj = new URL("/paymentiq/backoffice/api/v2/paymenttx/force/inconsistent/{txId}?merchantId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```

`POST /backoffice/api/v2/paymenttx/force/inconsistent/{txId}`

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId


> Example responses

### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PaymentTxResponseDto](#schemapaymenttxresponsedto)

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## forceSuccessful

> Code samples

```shell
# You can also use wget
curl -X POST /paymentiq/backoffice/api/v2/paymenttx/force/successful/{txId}?merchantId=0 \
  -H 'Accept: application/json'
   -H 'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxx'
```

```http
POST /paymentiq/backoffice/api/v2/paymenttx/force/successful/{txId}?merchantId=0 HTTP/1.1
Host: null

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/paymentiq/backoffice/api/v2/paymenttx/force/successful/{txId}',
  method: 'post',
  data: '?merchantId=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/paymentiq/backoffice/api/v2/paymenttx/force/successful/{txId}?merchantId=0',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.post '/paymentiq/backoffice/api/v2/paymenttx/force/successful/{txId}',
  params: {
  'merchantId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)
```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.post('/paymentiq/backoffice/api/v2/paymenttx/force/successful/{txId}', params={
  'merchantId': 0
}, headers = headers)

print r.json()
```

```java
URL obj = new URL("/paymentiq/backoffice/api/v2/paymenttx/force/successful/{txId}?merchantId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```

`POST /backoffice/api/v2/paymenttx/force/successful/{txId}`

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId


> Example responses

```json
{
  "created": "2017-09-20T20:17:12Z",
  "errorMessage": "string",
  "id": 0,
  "lastUpdated": "2017-09-20T20:17:12Z",
  "merchantId": 0,
  "pspStatusCode": "string",
  "state": "SUCCESSFUL",
  "statusCode": "SUCCESS"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PaymentTxResponseDto](#schemapaymenttxresponsedto)

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## partialRefund

> Code samples

```shell
# You can also use wget
curl -X POST /paymentiq/backoffice/api/v2/paymenttx/partialrefund/{txId}?merchantId=0 \
  -H 'Content-Type: application/json' 
  -H 'Accept: application/json'
   -H 'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxx'
```

```http
POST /paymentiq/backoffice/api/v2/paymenttx/partialrefund/{txId}?merchantId=0 HTTP/1.1
Host: null
Content-Type: application/json
Accept: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

$.ajax({
  url: '/paymentiq/backoffice/api/v2/paymenttx/partialrefund/{txId}',
  method: 'post',
  data: '?merchantId=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('/paymentiq/backoffice/api/v2/paymenttx/partialrefund/{txId}?merchantId=0',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/paymentiq/backoffice/api/v2/paymenttx/partialrefund/{txId}',
  params: {
  'merchantId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)
```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/paymentiq/backoffice/api/v2/paymenttx/partialrefund/{txId}', params={
  'merchantId': 0
}, headers = headers)

print r.json()
```

```java
URL obj = new URL("/paymentiq/backoffice/api/v2/paymenttx/partialrefund/{txId}?merchantId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```

`POST /backoffice/api/v2/paymenttx/partialrefund/{txId}`

> Body parameter

```json
{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetails](#schemacorrectiondetails)|false|details
» amount|body|string|false|No description
» authAmount|body|string|false|No description
» feeAmount|body|string|false|No description
» force|body|boolean|false|No description
» info|body|string|false|No description
» tagId|body|string|false|No description
» txAmount|body|string|false|No description


> Example responses

```json
{
  "created": "2017-09-20T20:17:12Z",
  "errorMessage": "string",
  "id": 0,
  "lastUpdated": "2017-09-20T20:17:12Z",
  "merchantId": 0,
  "pspStatusCode": "string",
  "state": "SUCCESSFUL",
  "statusCode": "SUCCESS"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PaymentTxResponseDto](#schemapaymenttxresponsedto)

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## refundSummary

> Code samples

```shell
# You can also use wget
curl -X GET /paymentiq/backoffice/api/v2/paymenttx/refund/summary/{txId}?merchantId=0 \
  -H 'Content-Type: application/json' 
  -H 'Accept: application/json'
   -H 'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxx'
```

```http
GET /paymentiq/backoffice/api/v2/paymenttx/refund/summary/{txId}?merchantId=0 HTTP/1.1
Host: null
Content-Type: application/json
Accept: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

$.ajax({
  url: '/paymentiq/backoffice/api/v2/paymenttx/refund/summary/{txId}',
  method: 'get',
  data: '?merchantId=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('/paymentiq/backoffice/api/v2/paymenttx/refund/summary/{txId}?merchantId=0',
{
  method: 'GET',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.get '/paymentiq/backoffice/api/v2/paymenttx/refund/summary/{txId}',
  params: {
  'merchantId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)
```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.get('/paymentiq/backoffice/api/v2/paymenttx/refund/summary/{txId}', params={
  'merchantId': 0
}, headers = headers)

print r.json()
```

```java
URL obj = new URL("/paymentiq/backoffice/api/v2/paymenttx/refund/summary/{txId}?merchantId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```

`GET /backoffice/api/v2/paymenttx/refund/summary/{txId}`

> Body parameter

```json
{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetails](#schemacorrectiondetails)|false|details
» amount|body|string|false|No description
» authAmount|body|string|false|No description
» feeAmount|body|string|false|No description
» force|body|boolean|false|No description
» info|body|string|false|No description
» tagId|body|string|false|No description
» txAmount|body|string|false|No description


> Example responses

```json
{
  "errors": {
    "property1": "string",
    "property2": "string"
  },
  "message": "string",
  "result": {
    "originalAmount": {
      "amount": 0,
      "amountInFractionUnit": 0,
      "currency": "string",
      "currencyCode": "string",
      "currencyNumeric3Code": "string",
      "fractionDigits": 0,
      "negative": true,
      "positive": true,
      "zero": true
    },
    "originalTxAmount": {
      "amount": 0,
      "amountInFractionUnit": 0,
      "currency": "string",
      "currencyCode": "string",
      "currencyNumeric3Code": "string",
      "fractionDigits": 0,
      "negative": true,
      "positive": true,
      "zero": true
    },
    "refundedTxAmount": {
      "amount": 0,
      "amountInFractionUnit": 0,
      "currency": "string",
      "currencyCode": "string",
      "currencyNumeric3Code": "string",
      "fractionDigits": 0,
      "negative": true,
      "positive": true,
      "zero": true
    },
    "remainingTxAmount": {
      "amount": 0,
      "amountInFractionUnit": 0,
      "currency": "string",
      "currencyCode": "string",
      "currencyNumeric3Code": "string",
      "fractionDigits": 0,
      "negative": true,
      "positive": true,
      "zero": true
    }
  },
  "success": true,
  "total": 0
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[JsonResult_RefundSummary_](#schemajsonresult_refundsummary_)

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## refund

> Code samples

```shell
# You can also use wget
curl -X POST /paymentiq/backoffice/api/v2/paymenttx/refund/{txId}?merchantId=0 \
  -H 'Content-Type: application/json' 
  -H 'Accept: application/json'
   -H 'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxx'
```

```http
POST /paymentiq/backoffice/api/v2/paymenttx/refund/{txId}?merchantId=0 HTTP/1.1
Host: null
Content-Type: application/json
Accept: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

$.ajax({
  url: '/paymentiq/backoffice/api/v2/paymenttx/refund/{txId}',
  method: 'post',
  data: '?merchantId=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('/paymentiq/backoffice/api/v2/paymenttx/refund/{txId}?merchantId=0',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/paymentiq/backoffice/api/v2/paymenttx/refund/{txId}',
  params: {
  'merchantId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)
```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/paymentiq/backoffice/api/v2/paymenttx/refund/{txId}', params={
  'merchantId': 0
}, headers = headers)

print r.json()
```

```java
URL obj = new URL("/paymentiq/backoffice/api/v2/paymenttx/refund/{txId}?merchantId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```

`POST /backoffice/api/v2/paymenttx/refund/{txId}`

> Body parameter

```json
{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetails](#schemacorrectiondetails)|false|details
» amount|body|string|false|No description
» authAmount|body|string|false|No description
» feeAmount|body|string|false|No description
» force|body|boolean|false|No description
» info|body|string|false|No description
» tagId|body|string|false|No description
» txAmount|body|string|false|No description


> Example responses

```json
{
  "created": "2017-09-20T20:17:12Z",
  "errorMessage": "string",
  "id": 0,
  "lastUpdated": "2017-09-20T20:17:12Z",
  "merchantId": 0,
  "pspStatusCode": "string",
  "state": "SUCCESSFUL",
  "statusCode": "SUCCESS"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PaymentTxResponseDto](#schemapaymenttxresponsedto)

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## void

> Code samples

```shell
# You can also use wget
curl -X POST /paymentiq/backoffice/api/v2/paymenttx/void/{txId}?merchantId=0 \
  -H 'Content-Type: application/json' 
  -H 'Accept: */*'
   -H 'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxx'
```

```http
POST /paymentiq/backoffice/api/v2/paymenttx/void/{txId}?merchantId=0 HTTP/1.1
Host: null
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'

};

$.ajax({
  url: '/paymentiq/backoffice/api/v2/paymenttx/void/{txId}',
  method: 'post',
  data: '?merchantId=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'

};

fetch('/paymentiq/backoffice/api/v2/paymenttx/void/{txId}?merchantId=0',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*'
}

result = RestClient.post '/paymentiq/backoffice/api/v2/paymenttx/void/{txId}',
  params: {
  'merchantId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)
```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*'
}

r = requests.post('/paymentiq/backoffice/api/v2/paymenttx/void/{txId}', params={
  'merchantId': 0
}, headers = headers)

print r.json()
```

```java
URL obj = new URL("/paymentiq/backoffice/api/v2/paymenttx/void/{txId}?merchantId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```

`POST /backoffice/api/v2/paymenttx/void/{txId}`

> Body parameter

```json
{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetails](#schemacorrectiondetails)|false|details
» amount|body|string|false|No description
» authAmount|body|string|false|No description
» feeAmount|body|string|false|No description
» force|body|boolean|false|No description
» info|body|string|false|No description
» tagId|body|string|false|No description
» txAmount|body|string|false|No description


> Example responses

### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PaymentTxResponseDto](#schemapaymenttxresponsedto)

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

# Payment

## findByQuery

> Code samples

```shell
# You can also use wget
curl -X GET /paymentiq/backoffice/api/v2/paymenttx/findByQuery?merchantId=0 \
  -H 'Accept: */*'
   -H 'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxx'
```

```http
GET /paymentiq/backoffice/api/v2/paymenttx/findByQuery?merchantId=0 HTTP/1.1
Host: null

Accept: */*

```

```javascript
var headers = {
  'Accept':'*/*'

};

$.ajax({
  url: '/paymentiq/backoffice/api/v2/paymenttx/findByQuery',
  method: 'get',
  data: '?merchantId=0',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'*/*'

};

fetch('/paymentiq/backoffice/api/v2/paymenttx/findByQuery?merchantId=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => '*/*'
}

result = RestClient.get '/paymentiq/backoffice/api/v2/paymenttx/findByQuery',
  params: {
  'merchantId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)
```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.get('/paymentiq/backoffice/api/v2/paymenttx/findByQuery', params={
  'merchantId': 0
}, headers = headers)

print r.json()
```

```java
URL obj = new URL("/paymentiq/backoffice/api/v2/paymenttx/findByQuery?merchantId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```

`GET /backoffice/api/v2/paymenttx/findByQuery`

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
merchantId|query|integer(int32)|true|merchantId
limit|query|integer(int32)|false|limit
start|query|integer(int32)|false|start


> Example responses

### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[PaymentTransactions](#schemapaymenttransactions)

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

# Schemas

## AbstractTxCmd

<a name="schemaabstracttxcmd"></a>

```json
{
  "created": "2017-09-20T20:17:12Z",
  "fault": true,
  "retry": true
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
created|string(date-time)|false|No description
fault|boolean|false|No description
retry|boolean|false|No description



## Character

<a name="schemacharacter"></a>

```json
{} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
undefined|object|false|No description



## ComponentType

<a name="schemacomponenttype"></a>

```json
{
  "condition": true,
  "description": "string",
  "helpTextKey": "string",
  "message": "string",
  "otherMatcher": {},
  "queryMatcher": {},
  "required": true,
  "valueLoader": {},
  "visibleByDefault": true
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
condition|boolean|false|No description
description|string|false|No description
helpTextKey|string|false|No description
message|string|false|No description
otherMatcher|[Matcher_object_](#schemamatcher_object_)|false|No description
queryMatcher|[Matcher_DecisionTableQuery_](#schemamatcher_decisiontablequery_)|false|No description
required|boolean|false|No description
valueLoader|[ConfigValueLoader_object_](#schemaconfigvalueloader_object_)|false|No description
visibleByDefault|boolean|false|No description



## CorrectionDetails

<a name="schemacorrectiondetails"></a>

```json
{
  "amount": "string",
  "authAmount": "string",
  "feeAmount": "string",
  "force": true,
  "info": "string",
  "tagId": "string",
  "txAmount": "string"
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
amount|string|false|No description
authAmount|string|false|No description
feeAmount|string|false|No description
force|boolean|false|No description
info|string|false|No description
tagId|string|false|No description
txAmount|string|false|No description



## CountryCode

<a name="schemacountrycode"></a>

```json
{
  "name": "string",
  "threeAlphaCode": "string",
  "threeDigitCode": "string",
  "threeDigitCodeAsInteger": 0,
  "twoAlphaCode": "string"
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
name|string|false|No description
threeAlphaCode|string|false|No description
threeDigitCode|string|false|No description
threeDigitCodeAsInteger|integer(int32)|false|No description
twoAlphaCode|string|false|No description



## DecisionTableQuery

<a name="schemadecisiontablequery"></a>

```json
{
  "amount": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "channel": "string",
  "created": "2017-09-20T20:17:12Z",
  "customSQL": "string",
  "ignoredComponents": [
    {
      "condition": true,
      "description": "string",
      "helpTextKey": "string",
      "message": "string",
      "otherMatcher": {},
      "queryMatcher": {},
      "required": true,
      "valueLoader": {},
      "visibleByDefault": true
    }
  ],
  "includedComponentTypeInMatch": [
    {
      "condition": true,
      "description": "string",
      "helpTextKey": "string",
      "message": "string",
      "otherMatcher": {},
      "queryMatcher": {},
      "required": true,
      "valueLoader": {},
      "visibleByDefault": true
    }
  ],
  "info": "string",
  "initiatedPsp": "Entropay",
  "initiatedPspAccount": "string",
  "ipAddr": "string",
  "kycResult": {
    "created": "2017-09-20T20:17:12Z",
    "fault": true,
    "mostRecentResult": {
      "ageStatus": "ERROR",
      "idStatus": "ERROR",
      "provider": "CALLCREDIT",
      "score": 0,
      "status": "VERIFIED",
      "txId": 0,
      "updated": "2017-09-20T20:17:12Z"
    },
    "results": [
      {
        "ageStatus": "ERROR",
        "idStatus": "ERROR",
        "provider": "CALLCREDIT",
        "score": 0,
        "status": "VERIFIED",
        "txId": 0,
        "updated": "2017-09-20T20:17:12Z"
      }
    ],
    "retry": true
  },
  "kycStatus": "string",
  "locale": "string",
  "market": "string",
  "maskedUserAccount": "string",
  "merchantId": 0,
  "merchantUser": {
    "addressAsOneLine": "string",
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "authenticated": true,
    "balance": {
      "amount": 0,
      "amountInFractionUnit": 0,
      "currency": "string",
      "currencyCode": "string",
      "currencyNumeric3Code": "string",
      "fractionDigits": 0,
      "negative": true,
      "positive": true,
      "zero": true
    },
    "city": "string",
    "communicationChannel": [
      "EMAIL"
    ],
    "countryCode": {
      "name": "string",
      "threeAlphaCode": "string",
      "threeDigitCode": "string",
      "threeDigitCodeAsInteger": 0,
      "twoAlphaCode": "string"
    },
    "dob": "string",
    "email": "string",
    "firstName": "string",
    "kycStatus": "string",
    "lastName": "string",
    "locale": {
      "country": "string",
      "displayCountry": "string",
      "displayLanguage": "string",
      "displayName": "string",
      "displayScript": "string",
      "displayVariant": "string",
      "extensionKeys": [
        {}
      ],
      "iso3Country": "string",
      "iso3Language": "string",
      "language": "string",
      "script": "string",
      "unicodeLocaleAttributes": [
        "string"
      ],
      "unicodeLocaleKeys": [
        "string"
      ],
      "variant": "string"
    },
    "mobile": "string",
    "mobileDigits": "string",
    "name": "string",
    "sex": "FEMALE",
    "state": "string",
    "street": "string",
    "userCat": "string",
    "userId": "string",
    "zip": "string"
  },
  "merchantUserBal": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "merchantUserCat": "string",
  "merchantUserCountry": "string",
  "merchantUserEmail": "string",
  "merchantUserId": "string",
  "method": "Deposit",
  "minUniqueUsers": "string",
  "psp": "Entropay",
  "pspAccount": "string",
  "pspFraudScore": 0,
  "pspService": "string",
  "pspStatusCode": "string",
  "state": "SUCCESSFUL",
  "statusCode": "SUCCESS",
  "suspectedAbuseReason": "string",
  "threshold": "string",
  "timeInterval": "string",
  "txAmount": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "txType": "CreditcardDeposit"
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
amount|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
channel|string|false|No description
created|string(date-time)|false|No description
customSQL|string|false|No description
info|string|false|No description
initiatedPsp|string|false|No description
initiatedPspAccount|string|false|No description
ipAddr|string|false|No description
kycResult|[KycResult](#schemakycresult)|false|No description
» created|string(date-time)|false|No description
» fault|boolean|false|No description
» mostRecentResult|[KycProviderResult](#schemakycproviderresult)|false|No description
»» ageStatus|string|false|No description
»» idStatus|string|false|No description
»» provider|string|false|No description
»» score|integer(int32)|false|No description
»» status|string|false|No description
»» txId|integer(int64)|false|No description
»» updated|string(date-time)|false|No description
» retry|boolean|false|No description
» results|[[KycProviderResult](#schemakycproviderresult)]|false|No description
»» ageStatus|string|false|No description
»» idStatus|string|false|No description
»» provider|string|false|No description
»» score|integer(int32)|false|No description
»» status|string|false|No description
»» txId|integer(int64)|false|No description
»» updated|string(date-time)|false|No description
kycStatus|string|false|No description
locale|string|false|No description
market|string|false|No description
maskedUserAccount|string|false|No description
merchantId|integer(int32)|false|No description
merchantUser|[MerchantUser](#schemamerchantuser)|false|No description
» addressAsOneLine|string|false|No description
» attributes|object|false|No description
» authenticated|boolean|false|No description
» balance|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» city|string|false|No description
» countryCode|[CountryCode](#schemacountrycode)|false|No description
»» name|string|false|No description
»» threeAlphaCode|string|false|No description
»» threeDigitCode|string|false|No description
»» threeDigitCodeAsInteger|integer(int32)|false|No description
»» twoAlphaCode|string|false|No description
» dob|string|false|No description
» email|string|false|No description
» firstName|string|false|No description
» kycStatus|string|false|No description
» lastName|string|false|No description
» locale|[Locale](#schemalocale)|false|No description
»» country|string|false|No description
»» displayCountry|string|false|No description
»» displayLanguage|string|false|No description
»» displayName|string|false|No description
»» displayScript|string|false|No description
»» displayVariant|string|false|No description
»» iso3Country|string|false|No description
»» iso3Language|string|false|No description
»» language|string|false|No description
»» script|string|false|No description
»» variant|string|false|No description
»» extensionKeys|[[Character](#schemacharacter)]|false|No description
»» unicodeLocaleAttributes|[string]|false|No description
»» unicodeLocaleKeys|[string]|false|No description
» mobile|string|false|No description
» mobileDigits|string|false|No description
» name|string|false|No description
» sex|string|false|No description
» state|string|false|No description
» street|string|false|No description
» userCat|string|false|No description
» userId|string|false|No description
» zip|string|false|No description
» communicationChannel|[string]|false|No description
merchantUserBal|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
merchantUserCat|string|false|No description
merchantUserCountry|string|false|No description
merchantUserEmail|string|false|No description
merchantUserId|string|false|No description
method|string|false|No description
minUniqueUsers|string|false|No description
psp|string|false|No description
pspAccount|string|false|No description
pspFraudScore|number(double)|false|No description
pspService|string|false|No description
pspStatusCode|string|false|No description
state|string|false|No description
statusCode|string|false|No description
suspectedAbuseReason|string|false|No description
threshold|string|false|No description
timeInterval|string|false|No description
txAmount|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
txType|string|false|No description
ignoredComponents|[[ComponentType](#schemacomponenttype)]|false|No description
» condition|boolean|false|No description
» description|string|false|No description
» helpTextKey|string|false|No description
» message|string|false|No description
» otherMatcher|[Matcher_object_](#schemamatcher_object_)|false|No description
» queryMatcher|[Matcher_DecisionTableQuery_](#schemamatcher_decisiontablequery_)|false|No description
» required|boolean|false|No description
» valueLoader|[ConfigValueLoader_object_](#schemaconfigvalueloader_object_)|false|No description
» visibleByDefault|boolean|false|No description
includedComponentTypeInMatch|[[ComponentType](#schemacomponenttype)]|false|No description
» condition|boolean|false|No description
» description|string|false|No description
» helpTextKey|string|false|No description
» message|string|false|No description
» otherMatcher|[Matcher_object_](#schemamatcher_object_)|false|No description
» queryMatcher|[Matcher_DecisionTableQuery_](#schemamatcher_decisiontablequery_)|false|No description
» required|boolean|false|No description
» valueLoader|[ConfigValueLoader_object_](#schemaconfigvalueloader_object_)|false|No description
» visibleByDefault|boolean|false|No description


#### Enumerated Values

|Property|Value|
|---|---|
initiatedPsp|Entropay|
initiatedPsp|PayPoint|
initiatedPsp|PayLine|
initiatedPsp|Realex|
initiatedPsp|TicketSurf|
initiatedPsp|Payvision|
initiatedPsp|SwiftVoucher|
initiatedPsp|Neosurf|
initiatedPsp|Credorax|
initiatedPsp|Wirecard|
initiatedPsp|NxPay|
initiatedPsp|EMP|
initiatedPsp|Vamex|
initiatedPsp|Payon|
initiatedPsp|Pacnet|
initiatedPsp|Borgun|
initiatedPsp|WorldPay|
initiatedPsp|PayEx|
initiatedPsp|CC247|
initiatedPsp|Computop|
initiatedPsp|Ilixium|
initiatedPsp|AstroPayCard|
initiatedPsp|EMerchantPay|
initiatedPsp|YuuPay|
initiatedPsp|AlliedWallet|
initiatedPsp|WorldPayHCG|
initiatedPsp|Ochapay|
initiatedPsp|Redbaron|
initiatedPsp|Payr|
initiatedPsp|Argus|
initiatedPsp|Valitor|
initiatedPsp|SafeCharge|
initiatedPsp|Bambora|
initiatedPsp|Dibs|
initiatedPsp|Apco|
initiatedPsp|ASTech|
initiatedPsp|Fibonatix|
initiatedPsp|DreamsPay|
initiatedPsp|Clearhaus|
initiatedPsp|Citigate|
initiatedPsp|CreditGuard|
initiatedPsp|Powerpay21|
initiatedPsp|EMerchantPayWs|
initiatedPsp|Kluwp|
initiatedPsp|MiFinity|
initiatedPsp|Ingenico|
initiatedPsp|BamboraGa|
initiatedPsp|AltPayNet|
initiatedPsp|CcMock|
initiatedPsp|Neteller|
initiatedPsp|Skrill|
initiatedPsp|Paybox|
initiatedPsp|ClickandBuy|
initiatedPsp|PayPal|
initiatedPsp|Mbankomat|
initiatedPsp|Siru|
initiatedPsp|IBanq|
initiatedPsp|LavaPay|
initiatedPsp|VenusPoint|
initiatedPsp|IWallet|
initiatedPsp|Paysafecard|
initiatedPsp|Ukash|
initiatedPsp|Instadebit|
initiatedPsp|IDebit|
initiatedPsp|EcoPayz|
initiatedPsp|Fortumo|
initiatedPsp|AstroPayDirect|
initiatedPsp|Boku|
initiatedPsp|NeosurfVoucher|
initiatedPsp|PayGround|
initiatedPsp|SmsVoucher|
initiatedPsp|Flexepin|
initiatedPsp|Funanga|
initiatedPsp|Trustly|
initiatedPsp|Envoy|
initiatedPsp|Euteller|
initiatedPsp|Entercash|
initiatedPsp|InPay|
initiatedPsp|Poli|
initiatedPsp|Sofort|
initiatedPsp|Transferuj|
initiatedPsp|Adyen|
initiatedPsp|RapidPaymentsNetwork|
initiatedPsp|ManualBanking|
initiatedPsp|Citadel|
initiatedPsp|Safetypay|
initiatedPsp|EasyEft|
initiatedPsp|PugglePay|
initiatedPsp|Paylevo|
initiatedPsp|Seqr|
initiatedPsp|AccentPay|
initiatedPsp|PPro|
initiatedPsp|SecureTrading|
initiatedPsp|Dotpay|
initiatedPsp|Przelewy24|
initiatedPsp|MobileGiro|
initiatedPsp|ToditoCash|
initiatedPsp|TolaMobile|
initiatedPsp|Teleingreso|
initiatedPsp|FraudGuard|
initiatedPsp|FeatureSpace|
initiatedPsp|Undefined|
initiatedPsp|Unknown|
»» ageStatus|ERROR|
»» ageStatus|UNDER_AGE|
»» ageStatus|NOT_VERIFIED|
»» ageStatus|VERIFIED|
»» idStatus|ERROR|
»» idStatus|UNDER_AGE|
»» idStatus|NOT_VERIFIED|
»» idStatus|VERIFIED|
»» provider|CALLCREDIT|
»» provider|GBG|
»» status|VERIFIED|
»» status|VERIFICATION_IN_PROGRESS|
»» status|VERIFICATION_FAILED|
»» status|VERIFICATION_EXTERNAL_FAILURE|
»» status|VERIFICATION_FAILED_INVALID_USER_DATA|
»» status|NOT_VERIFIED|
»» status|BLOCKED|
»» status|UNDER_AGE|
»» status|UNKNOWN|
»» status|UNKNOWN_AGE|
»» ageStatus|ERROR|
»» ageStatus|UNDER_AGE|
»» ageStatus|NOT_VERIFIED|
»» ageStatus|VERIFIED|
»» idStatus|ERROR|
»» idStatus|UNDER_AGE|
»» idStatus|NOT_VERIFIED|
»» idStatus|VERIFIED|
»» provider|CALLCREDIT|
»» provider|GBG|
»» status|VERIFIED|
»» status|VERIFICATION_IN_PROGRESS|
»» status|VERIFICATION_FAILED|
»» status|VERIFICATION_EXTERNAL_FAILURE|
»» status|VERIFICATION_FAILED_INVALID_USER_DATA|
»» status|NOT_VERIFIED|
»» status|BLOCKED|
»» status|UNDER_AGE|
»» status|UNKNOWN|
»» status|UNKNOWN_AGE|
» sex|FEMALE|
» sex|MALE|
» sex|UNKNOWN|
» sex|X|
» communicationChannel|EMAIL|
» communicationChannel|SMS|
method|Deposit|
method|Withdrawal|
method|Refund|
method|Cancel|
method|Void|
method|Chargeback|
method|ChargeBackWon|
psp|Entropay|
psp|PayPoint|
psp|PayLine|
psp|Realex|
psp|TicketSurf|
psp|Payvision|
psp|SwiftVoucher|
psp|Neosurf|
psp|Credorax|
psp|Wirecard|
psp|NxPay|
psp|EMP|
psp|Vamex|
psp|Payon|
psp|Pacnet|
psp|Borgun|
psp|WorldPay|
psp|PayEx|
psp|CC247|
psp|Computop|
psp|Ilixium|
psp|AstroPayCard|
psp|EMerchantPay|
psp|YuuPay|
psp|AlliedWallet|
psp|WorldPayHCG|
psp|Ochapay|
psp|Redbaron|
psp|Payr|
psp|Argus|
psp|Valitor|
psp|SafeCharge|
psp|Bambora|
psp|Dibs|
psp|Apco|
psp|ASTech|
psp|Fibonatix|
psp|DreamsPay|
psp|Clearhaus|
psp|Citigate|
psp|CreditGuard|
psp|Powerpay21|
psp|EMerchantPayWs|
psp|Kluwp|
psp|MiFinity|
psp|Ingenico|
psp|BamboraGa|
psp|AltPayNet|
psp|CcMock|
psp|Neteller|
psp|Skrill|
psp|Paybox|
psp|ClickandBuy|
psp|PayPal|
psp|Mbankomat|
psp|Siru|
psp|IBanq|
psp|LavaPay|
psp|VenusPoint|
psp|IWallet|
psp|Paysafecard|
psp|Ukash|
psp|Instadebit|
psp|IDebit|
psp|EcoPayz|
psp|Fortumo|
psp|AstroPayDirect|
psp|Boku|
psp|NeosurfVoucher|
psp|PayGround|
psp|SmsVoucher|
psp|Flexepin|
psp|Funanga|
psp|Trustly|
psp|Envoy|
psp|Euteller|
psp|Entercash|
psp|InPay|
psp|Poli|
psp|Sofort|
psp|Transferuj|
psp|Adyen|
psp|RapidPaymentsNetwork|
psp|ManualBanking|
psp|Citadel|
psp|Safetypay|
psp|EasyEft|
psp|PugglePay|
psp|Paylevo|
psp|Seqr|
psp|AccentPay|
psp|PPro|
psp|SecureTrading|
psp|Dotpay|
psp|Przelewy24|
psp|MobileGiro|
psp|ToditoCash|
psp|TolaMobile|
psp|Teleingreso|
psp|FraudGuard|
psp|FeatureSpace|
psp|Undefined|
psp|Unknown|
state|SUCCESSFUL|
state|REGISTERED|
state|PROCESSING|
state|WAITING_INPUT|
state|WAITING_APPROVAL|
state|FAILED|
state|INCONSISTENT|
state|CANCELLED|
state|REPROCESSING|
statusCode|SUCCESS|
statusCode|SUCCESS_WITHDRAWAL_APPROVAL|
statusCode|SUCCESS_WITHDRAWAL_AUTO_APPROVAL|
statusCode|SUCCESS_WAITING_CAPTURE|
statusCode|SUCCESS_WAITING_AUTO_CAPTURE|
statusCode|SUCCESS_AUTO_CAPTURED|
statusCode|SUCCESS_CAPTURED|
statusCode|REGISTERED|
statusCode|PROCESSING_PROVIDER|
statusCode|PROCESSING_MERCHANT|
statusCode|CONT_WITH_N3DS|
statusCode|REPROCESSING_PROVIDER|
statusCode|REPROCESSING_MERCHANT|
statusCode|WAITING_INPUT|
statusCode|WAITING_3D_SECURE|
statusCode|WAITING_DEPOSIT_CONFIRMATION|
statusCode|WAITING_NOTIFICATION|
statusCode|WAITING_DEPOSIT_APPROVAL|
statusCode|WAITING_WITHDRAWAL_APPROVAL|
statusCode|WAITING_DEPOSIT_AUTO_APPROVAL|
statusCode|WAITING_WITHDRAWAL_AUTO_APPROVAL|
statusCode|ERR_READ_TIMEOUT|
statusCode|ERR_REFERENCE_MISMATCH|
statusCode|ERR_INCONSISTENT_TRANSACTION|
statusCode|ERR_UNKNOWN_CALLBACK|
statusCode|ERR_IO_EXCEPTION|
statusCode|ERR_UNKNOWN_RESPONSE|
statusCode|ERR_SYSTEM_ERROR|
statusCode|ERR_FAILED_TO_CONNECT|
statusCode|ERR_DECLINED_BAD_REQUEST|
statusCode|ERR_DECLINED_FRAUD|
statusCode|ERR_DECLINED_NO_FUNDS|
statusCode|ERR_DECLINED_ACCOUNT_SUSPENDED|
statusCode|ERR_DECLINED_OTHER_REASON|
statusCode|ERR_DECLINED_CONTACT_SUPPORT|
statusCode|ERR_DECLINED_CONFIG_ERROR|
statusCode|ERR_NOT_AUTHENTICATED|
statusCode|ERR_INVALID_RESPONSE|
statusCode|ERR_DECLINED_REQ_BLOCKED|
statusCode|ERR_PSP_OUT_OF_SERVICE|
statusCode|ERR_DECLINED_NOT_AUTHORIZED|
statusCode|ERR_RESPONSE_CODE_UNKNOWN|
statusCode|ERR_PSP_ACCOUNT_USED_BY_OTHER_USER|
statusCode|ERR_PSP_ACCOUNT_NOT_USED|
statusCode|ERR_TOO_MANY_PSP_ACCOUNTS|
statusCode|ERR_DECLINED_DUPLICATE_TX_ID|
statusCode|ERR_DECLINED_INVALID_ACCOUNT_NUMBER|
statusCode|ERR_MERCHANT_OUT_OF_SERVICE|
statusCode|ERR_DECLINED_LIMIT_OVERDRAWN|
statusCode|ERR_MERCHANT_RESPONSE_CODE_UNKNOWN|
statusCode|ERR_DECLINED_NO_PROVIDER_FOUND|
statusCode|ERR_DECLINED_PROVIDER_ACCOUNT_CONFIG_ERROR|
statusCode|ERR_MERCHANT_INVALID_RESPONSE|
statusCode|ERR_DECLINED_3D_VALIDATION_FAILED|
statusCode|ERR_DECLINED_3D_EXPIRED|
statusCode|ERR_VAULTIQ_OUT_OF_SERVICE|
statusCode|ERR_DECLINED_IP_BLOCKED|
statusCode|ERR_DECLINED_BIN_BLOCKED|
statusCode|ERR_VAULTIQ_UNKNOWN_ACCOUNT|
statusCode|ERR_DECLINED_KYC_BLOCK|
statusCode|ERR_DECLINED_KYC_USER_UNDER_AGE|
statusCode|ERR_DECLINED_KYC_CHECK_FAILED|
statusCode|ERR_DECLINED_BIC_BLOCK|
statusCode|ERR_DECLINED_EXPIRED|
statusCode|ERR_DECLINED_REPEAT_CANCELLED|
statusCode|ERR_DECLINED_CURRENCY_NOT_SUPPORTED|
statusCode|ERR_DECLINED_FRAUD_SCORE_THRESHOLD_EXCEEDED|
statusCode|ERR_DECLINED_MERCHANT_NOT_FOUND|
statusCode|ERR_DECLINED_MERCHANT_NOT_ENABLED|
statusCode|ERR_DECLINED_PROVIDER_NOT_ENABLED|
statusCode|ERR_DECLINED_UNDER_MAINTENANCE|
statusCode|ERR_NO_REFERRAL_TX_FOUND|
statusCode|ERR_DECLINE_TX_NOT_FOUND|
statusCode|ERR_DECLINE_COUNTRY_NOT_SUPPORTED|
statusCode|ERR_DECLINED_NOT_SUPPORTED_PAYMENT_METHOD_FRAUD|
statusCode|ERR_DECLINED_FRAUD_PROVIDER_ACCOUNT_CONFIG_ERROR|
statusCode|ERR_CANCELLED_BY_USER|
statusCode|ERR_CANCELLED_BY_MERCHANT|
statusCode|ERR_CANCELLED_BY_PSP|
txType|CreditcardDeposit|
txType|CreditcardWithdrawal|
txType|EntropayDeposit|
txType|ICardDeposit|
txType|ICardWithdrawal|
txType|NetellerDeposit|
txType|NetellerWithdrawal|
txType|SkrillDeposit|
txType|SkrillWithdrawal|
txType|PayboxDeposit|
txType|ClickandBuyDeposit|
txType|ClickandBuyWithdrawal|
txType|PayPalDeposit|
txType|PayPalWithdrawal|
txType|MbankomatDeposit|
txType|IBanqDeposit|
txType|IBanqWithdrawal|
txType|LavaPayDeposit|
txType|LavaPayWithdrawal|
txType|InstadebitDeposit|
txType|InstadebitWithdrawal|
txType|IDebitDeposit|
txType|IDebitWithdrawal|
txType|EcoPayzDeposit|
txType|EcoPayzWithdrawal|
txType|AstroPayCardWithdrawal|
txType|AstroPayDirectDeposit|
txType|AstroPayDirectWithdrawal|
txType|VenusPointDeposit|
txType|VenusPointWithdrawal|
txType|MiFinityEWalletDeposit|
txType|MiFinityEWalletWithdrawal|
txType|IWalletDeposit|
txType|IWalletWithdrawal|
txType|EutellerDeposit|
txType|EnvoyDeposit|
txType|EnvoyWithdrawal|
txType|TrustlyDeposit|
txType|TrustlyWithdrawal|
txType|BankDeposit|
txType|BankLocalWithdrawal|
txType|BankIBANWithdrawal|
txType|BankIntIBANWithdrawal|
txType|IdealDeposit|
txType|ChinaUnionPayDeposit|
txType|BankIntlWithdrawal|
txType|ChinaUnionPayWithdrawal|
txType|BoletoBancarioDeposit|
txType|PaysafecardDeposit|
txType|UkashDeposit|
txType|UkashWithdrawal|
txType|PaysafecardWithdrawal|
txType|CashlibDeposit|
txType|TicketPremiumDeposit|
txType|FlexepinDeposit|
txType|FunangaDeposit|
txType|VisaVoucherDeposit|
txType|GiftcardDeposit|
txType|PugglePayDeposit|
txType|PaylevoDeposit|
txType|YuuCollectDeposit|
txType|NeosurfVoucherDeposit|
txType|OxxoDeposit|
txType|SeqrDeposit|
txType|SiruDeposit|
txType|SiruStatus|
txType|SiruPriceCalc|
txType|FortumoDeposit|
txType|BokuDeposit|
txType|BlikDeposit|
txType|PayGroundDeposit|
txType|SmsVoucherDeposit|
txType|QiwiDeposit|
txType|QiwiWithdrawal|
txType|AccentPayDeposit|
txType|AccentPayWithdrawal|
txType|WorldPayDeposit|
txType|WorldPayWithdrawal|
txType|PProDeposit|
txType|PProWithdrawal|
txType|EProPaymentWallDeposit|
txType|ApcoDeposit|
txType|SecureTradingDeposit|
txType|DotpayDeposit|
txType|Przelewy24Deposit|
txType|SweGiroDeposit|
txType|ToditoCashDeposit|
txType|TolaMobileDeposit|
txType|TeleingresoDeposit|
txType|ManualChargeback|
txType|ManualRefund|
txType|ManualCancel|
txType|ManualVoid|
txType|ManualChargeBackWon|
txType|Refund|
txType|Cancel|
txType|Void|
txType|Capture|


## PaymentTransactions

<a name="schemapaymenttransactions"></a>

```json
{
  "errors": {
    "property1": "string",
    "property2": "string"
  },
  "message": "string",
  "result": [
    {
      "accountHolderName": "string",
      "amount": {
        "amount": 0,
        "amountInFractionUnit": 0,
        "currency": "string",
        "currencyCode": "string",
        "currencyNumeric3Code": "string",
        "fractionDigits": 0,
        "negative": true,
        "positive": true,
        "zero": true
      },
      "amountAbs": {
        "amount": 0,
        "amountInFractionUnit": 0,
        "currency": "string",
        "currencyCode": "string",
        "currencyNumeric3Code": "string",
        "fractionDigits": 0,
        "negative": true,
        "positive": true,
        "zero": true
      },
      "amountBase": {
        "amount": 0,
        "amountInFractionUnit": 0,
        "currency": "string",
        "currencyCode": "string",
        "currencyNumeric3Code": "string",
        "fractionDigits": 0,
        "negative": true,
        "positive": true,
        "zero": true
      },
      "attributes": {},
      "authAmount": {
        "amount": 0,
        "amountInFractionUnit": 0,
        "currency": "string",
        "currencyCode": "string",
        "currencyNumeric3Code": "string",
        "fractionDigits": 0,
        "negative": true,
        "positive": true,
        "zero": true
      },
      "authAmountBase": {
        "amount": 0,
        "amountInFractionUnit": 0,
        "currency": "string",
        "currencyCode": "string",
        "currencyNumeric3Code": "string",
        "fractionDigits": 0,
        "negative": true,
        "positive": true,
        "zero": true
      },
      "authorized": true,
      "bankWithdrawal": true,
      "blockedAccountReason": "string",
      "bonusCode": "string",
      "captured": true,
      "channel": "string",
      "channelId": "string",
      "contextMap": {},
      "created": "2017-09-20T20:17:12Z",
      "customSQL": "string",
      "deposit": true,
      "depositType": "string",
      "failure": true,
      "failureOrInconsistent": true,
      "fee": {
        "amount": 0,
        "amountInFractionUnit": 0,
        "currency": "string",
        "currencyCode": "string",
        "currencyNumeric3Code": "string",
        "fractionDigits": 0,
        "negative": true,
        "positive": true,
        "zero": true
      },
      "feeBase": {
        "amount": 0,
        "amountInFractionUnit": 0,
        "currency": "string",
        "currencyCode": "string",
        "currencyNumeric3Code": "string",
        "fractionDigits": 0,
        "negative": true,
        "positive": true,
        "zero": true
      },
      "finalState": true,
      "id": 0,
      "ignoredComponents": [
        {
          "condition": true,
          "description": "string",
          "helpTextKey": "string",
          "message": "string",
          "otherMatcher": {},
          "queryMatcher": {},
          "required": true,
          "valueLoader": {},
          "visibleByDefault": true
        }
      ],
      "includedComponentTypeInMatch": [
        {
          "condition": true,
          "description": "string",
          "helpTextKey": "string",
          "message": "string",
          "otherMatcher": {},
          "queryMatcher": {},
          "required": true,
          "valueLoader": {},
          "visibleByDefault": true
        }
      ],
      "info": "string",
      "initiatedPsp": "Entropay",
      "initiatedPspAccount": "string",
      "initiatedPspId": 0,
      "ipAddr": "string",
      "ipCity": "string",
      "ipCountry": "string",
      "ipRegion": "string",
      "issuerCountry": "string",
      "kycResult": {
        "created": "2017-09-20T20:17:12Z",
        "fault": true,
        "mostRecentResult": {
          "ageStatus": "ERROR",
          "idStatus": "ERROR",
          "provider": "CALLCREDIT",
          "score": 0,
          "status": "VERIFIED",
          "txId": 0,
          "updated": "2017-09-20T20:17:12Z"
        },
        "results": [
          {
            "ageStatus": "ERROR",
            "idStatus": "ERROR",
            "provider": "CALLCREDIT",
            "score": 0,
            "status": "VERIFIED",
            "txId": 0,
            "updated": "2017-09-20T20:17:12Z"
          }
        ],
        "retry": true
      },
      "kycStatus": "string",
      "kycUser": {
        "ageStatus": "ERROR",
        "idStatus": "ERROR",
        "provider": "CALLCREDIT",
        "score": 0,
        "status": "VERIFIED",
        "txId": 0,
        "updated": "2017-09-20T20:17:12Z"
      },
      "lastUpdated": "2017-09-20T20:17:12Z",
      "latestTxCmdMap": {
        "property1": {
          "created": "2017-09-20T20:17:12Z",
          "fault": true,
          "retry": true
        },
        "property2": {
          "created": "2017-09-20T20:17:12Z",
          "fault": true,
          "retry": true
        }
      },
      "locale": "string",
      "market": "string",
      "maskedUserAccount": "string",
      "merchantAuthCode": "string",
      "merchantErrCode": "string",
      "merchantId": 0,
      "merchantTxId": "string",
      "merchantUser": {
        "addressAsOneLine": "string",
        "attributes": {
          "property1": "string",
          "property2": "string"
        },
        "authenticated": true,
        "balance": {
          "amount": 0,
          "amountInFractionUnit": 0,
          "currency": "string",
          "currencyCode": "string",
          "currencyNumeric3Code": "string",
          "fractionDigits": 0,
          "negative": true,
          "positive": true,
          "zero": true
        },
        "city": "string",
        "communicationChannel": [
          "EMAIL"
        ],
        "countryCode": {
          "name": "string",
          "threeAlphaCode": "string",
          "threeDigitCode": "string",
          "threeDigitCodeAsInteger": 0,
          "twoAlphaCode": "string"
        },
        "dob": "string",
        "email": "string",
        "firstName": "string",
        "kycStatus": "string",
        "lastName": "string",
        "locale": {
          "country": "string",
          "displayCountry": "string",
          "displayLanguage": "string",
          "displayName": "string",
          "displayScript": "string",
          "displayVariant": "string",
          "extensionKeys": [
            {}
          ],
          "iso3Country": "string",
          "iso3Language": "string",
          "language": "string",
          "script": "string",
          "unicodeLocaleAttributes": [
            "string"
          ],
          "unicodeLocaleKeys": [
            "string"
          ],
          "variant": "string"
        },
        "mobile": "string",
        "mobileDigits": "string",
        "name": "string",
        "sex": "FEMALE",
        "state": "string",
        "street": "string",
        "userCat": "string",
        "userId": "string",
        "zip": "string"
      },
      "merchantUserBal": {
        "amount": 0,
        "amountInFractionUnit": 0,
        "currency": "string",
        "currencyCode": "string",
        "currencyNumeric3Code": "string",
        "fractionDigits": 0,
        "negative": true,
        "positive": true,
        "zero": true
      },
      "merchantUserCat": "string",
      "merchantUserCountry": "string",
      "merchantUserEmail": "string",
      "merchantUserId": "string",
      "method": "Deposit",
      "minUniqueUsers": "string",
      "originTxId": 0,
      "processing": true,
      "psp": "Entropay",
      "pspAccount": "string",
      "pspFee": {
        "amount": 0,
        "amountInFractionUnit": 0,
        "currency": "string",
        "currencyCode": "string",
        "currencyNumeric3Code": "string",
        "fractionDigits": 0,
        "negative": true,
        "positive": true,
        "zero": true
      },
      "pspFeeBase": {
        "amount": 0,
        "amountInFractionUnit": 0,
        "currency": "string",
        "currencyCode": "string",
        "currencyNumeric3Code": "string",
        "fractionDigits": 0,
        "negative": true,
        "positive": true,
        "zero": true
      },
      "pspFraudScore": 0,
      "pspId": 0,
      "pspRefId": "string",
      "pspService": "string",
      "pspStatusCode": "string",
      "pspTxAmount": {
        "amount": 0,
        "amountInFractionUnit": 0,
        "currency": "string",
        "currencyCode": "string",
        "currencyNumeric3Code": "string",
        "fractionDigits": 0,
        "negative": true,
        "positive": true,
        "zero": true
      },
      "pspUserRef": "string",
      "reversedMerchantTxId": "string",
      "reversedTxId": 0,
      "rules": [
        "string"
      ],
      "state": "SUCCESSFUL",
      "stateInt": 0,
      "statusCode": "SUCCESS",
      "statusCodeInt": 0,
      "successful": true,
      "suspectedAbuseReason": "string",
      "threshold": "string",
      "timeInterval": "string",
      "txAmount": {
        "amount": 0,
        "amountInFractionUnit": 0,
        "currency": "string",
        "currencyCode": "string",
        "currencyNumeric3Code": "string",
        "fractionDigits": 0,
        "negative": true,
        "positive": true,
        "zero": true
      },
      "txAmountAbs": {
        "amount": 0,
        "amountInFractionUnit": 0,
        "currency": "string",
        "currencyCode": "string",
        "currencyNumeric3Code": "string",
        "fractionDigits": 0,
        "negative": true,
        "positive": true,
        "zero": true
      },
      "txAmountBase": {
        "amount": 0,
        "amountInFractionUnit": 0,
        "currency": "string",
        "currencyCode": "string",
        "currencyNumeric3Code": "string",
        "fractionDigits": 0,
        "negative": true,
        "positive": true,
        "zero": true
      },
      "txCmds": [
        {
          "created": "2017-09-20T20:17:12Z",
          "fault": true,
          "retry": true
        }
      ],
      "txRefId": "string",
      "txType": "CreditcardDeposit",
      "txTypeInt": 0,
      "updatedBy": "string",
      "userPspAccountDetails": {
        "accountUuid": "string",
        "blockReason": "string",
        "description": "string",
        "directDebit": true,
        "expiryDate": "2017-09-20T20:17:12Z",
        "extAccountRefId": "string",
        "firstUsed": "2017-09-20T20:17:12Z",
        "hashedAccount": "string",
        "holder": "string",
        "id": 0,
        "lastSuccess": "2017-09-20T20:17:12Z",
        "lastUsed": "2017-09-20T20:17:12Z",
        "maskedAccount": "string",
        "merchantId": 0,
        "merchantUserId": "string",
        "new": true,
        "noFailedTx": 0,
        "noSuccessfulTx": 0,
        "providerType": "string",
        "startDate": "2017-09-20T20:17:12Z",
        "status": "ACTIVE",
        "storeAccount": true,
        "type": "CreditcardDeposit",
        "vaultData": {
          "property1": "string",
          "property2": "string"
        },
        "vaultIQData": {
          "property1": "string",
          "property2": "string"
        },
        "vaultIQUuid": "string",
        "vaultUuid": "string",
        "visibilityResetAllowed": true,
        "visible": true
      },
      "userPspAccountId": 0,
      "viqStoredEntity": {
        "accessKey": "string",
        "alreadyStored": true,
        "clientEncryptionKey": "string",
        "localWrappedEncryptionKey": "string",
        "maskedPan": "string",
        "vaultiqKey": "string"
      },
      "withdrawal": true
    }
  ],
  "success": true,
  "total": 0
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
errors|object|false|No description
message|string|false|No description
success|boolean|false|No description
total|integer(int64)|false|No description
result|[[PaymentTx](#schemapaymenttx)]|false|No description
» accountHolderName|string|false|No description
» amount|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» amountAbs|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» amountBase|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» attributes|object|false|No description
» authAmount|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» authAmountBase|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» authorized|boolean|false|No description
» bankWithdrawal|boolean|false|No description
» blockedAccountReason|string|false|No description
» bonusCode|string|false|No description
» captured|boolean|false|No description
» channel|string|false|No description
» channelId|string|false|No description
» contextMap|object|false|No description
» created|string(date-time)|false|No description
» customSQL|string|false|No description
» deposit|boolean|false|No description
» depositType|string|false|No description
» failure|boolean|false|No description
» failureOrInconsistent|boolean|false|No description
» fee|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» feeBase|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» finalState|boolean|false|No description
» id|integer(int64)|false|No description
» info|string|false|No description
» initiatedPsp|string|false|No description
» initiatedPspAccount|string|false|No description
» initiatedPspId|integer(int32)|false|No description
» ipAddr|string|false|No description
» ipCity|string|false|No description
» ipCountry|string|false|No description
» ipRegion|string|false|No description
» issuerCountry|string|false|No description
» kycResult|[KycResult](#schemakycresult)|false|No description
»» created|string(date-time)|false|No description
»» fault|boolean|false|No description
»» mostRecentResult|[KycProviderResult](#schemakycproviderresult)|false|No description
»»» ageStatus|string|false|No description
»»» idStatus|string|false|No description
»»» provider|string|false|No description
»»» score|integer(int32)|false|No description
»»» status|string|false|No description
»»» txId|integer(int64)|false|No description
»»» updated|string(date-time)|false|No description
»» retry|boolean|false|No description
»» results|[[KycProviderResult](#schemakycproviderresult)]|false|No description
»»» ageStatus|string|false|No description
»»» idStatus|string|false|No description
»»» provider|string|false|No description
»»» score|integer(int32)|false|No description
»»» status|string|false|No description
»»» txId|integer(int64)|false|No description
»»» updated|string(date-time)|false|No description
» kycStatus|string|false|No description
» kycUser|[KycProviderResult](#schemakycproviderresult)|false|No description
»» ageStatus|string|false|No description
»» idStatus|string|false|No description
»» provider|string|false|No description
»» score|integer(int32)|false|No description
»» status|string|false|No description
»» txId|integer(int64)|false|No description
»» updated|string(date-time)|false|No description
» lastUpdated|string(date-time)|false|No description
» latestTxCmdMap|object|false|No description
»» created|string(date-time)|false|No description
»» fault|boolean|false|No description
»» retry|boolean|false|No description
» locale|string|false|No description
» market|string|false|No description
» maskedUserAccount|string|false|No description
» merchantAuthCode|string|false|No description
» merchantErrCode|string|false|No description
» merchantId|integer(int32)|false|No description
» merchantTxId|string|false|No description
» merchantUser|[MerchantUser](#schemamerchantuser)|false|No description
»» addressAsOneLine|string|false|No description
»» attributes|object|false|No description
»» authenticated|boolean|false|No description
»» balance|[Money](#schemamoney)|false|No description
»»» amount|number|false|No description
»»» amountInFractionUnit|integer(int64)|false|No description
»»» currency|string|false|No description
»»» currencyCode|string|false|No description
»»» currencyNumeric3Code|string|false|No description
»»» fractionDigits|integer(int32)|false|No description
»»» negative|boolean|false|No description
»»» positive|boolean|false|No description
»»» zero|boolean|false|No description
»» city|string|false|No description
»» countryCode|[CountryCode](#schemacountrycode)|false|No description
»»» name|string|false|No description
»»» threeAlphaCode|string|false|No description
»»» threeDigitCode|string|false|No description
»»» threeDigitCodeAsInteger|integer(int32)|false|No description
»»» twoAlphaCode|string|false|No description
»» dob|string|false|No description
»» email|string|false|No description
»» firstName|string|false|No description
»» kycStatus|string|false|No description
»» lastName|string|false|No description
»» locale|[Locale](#schemalocale)|false|No description
»»» country|string|false|No description
»»» displayCountry|string|false|No description
»»» displayLanguage|string|false|No description
»»» displayName|string|false|No description
»»» displayScript|string|false|No description
»»» displayVariant|string|false|No description
»»» iso3Country|string|false|No description
»»» iso3Language|string|false|No description
»»» language|string|false|No description
»»» script|string|false|No description
»»» variant|string|false|No description
»»» extensionKeys|[[Character](#schemacharacter)]|false|No description
»»» unicodeLocaleAttributes|[string]|false|No description
»»» unicodeLocaleKeys|[string]|false|No description
»» mobile|string|false|No description
»» mobileDigits|string|false|No description
»» name|string|false|No description
»» sex|string|false|No description
»» state|string|false|No description
»» street|string|false|No description
»» userCat|string|false|No description
»» userId|string|false|No description
»» zip|string|false|No description
»» communicationChannel|[string]|false|No description
» merchantUserBal|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» merchantUserCat|string|false|No description
» merchantUserCountry|string|false|No description
» merchantUserEmail|string|false|No description
» merchantUserId|string|false|No description
» method|string|false|No description
» minUniqueUsers|string|false|No description
» originTxId|integer(int64)|false|No description
» processing|boolean|false|No description
» psp|string|false|No description
» pspAccount|string|false|No description
» pspFee|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» pspFeeBase|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» pspFraudScore|number(double)|false|No description
» pspId|integer(int32)|false|No description
» pspRefId|string|false|No description
» pspService|string|false|No description
» pspStatusCode|string|false|No description
» pspTxAmount|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» pspUserRef|string|false|No description
» reversedMerchantTxId|string|false|No description
» reversedTxId|integer(int64)|false|No description
» state|string|false|No description
» stateInt|integer(int32)|false|No description
» statusCode|string|false|No description
» statusCodeInt|integer(int32)|false|No description
» successful|boolean|false|No description
» suspectedAbuseReason|string|false|No description
» threshold|string|false|No description
» timeInterval|string|false|No description
» txAmount|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» txAmountAbs|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» txAmountBase|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» txRefId|string|false|No description
» txType|string|false|No description
» txTypeInt|integer(int32)|false|No description
» updatedBy|string|false|No description
» userPspAccountDetails|[UserPspAccountDetails](#schemauserpspaccountdetails)|false|No description
»» accountUuid|string|false|No description
»» blockReason|string|false|No description
»» description|string|false|No description
»» directDebit|boolean|false|No description
»» expiryDate|string(date-time)|false|No description
»» extAccountRefId|string|false|No description
»» firstUsed|string(date-time)|false|No description
»» hashedAccount|string|false|No description
»» holder|string|false|No description
»» id|integer(int64)|false|No description
»» lastSuccess|string(date-time)|false|No description
»» lastUsed|string(date-time)|false|No description
»» maskedAccount|string|false|No description
»» merchantId|integer(int32)|false|No description
»» merchantUserId|string|false|No description
»» new|boolean|false|No description
»» noFailedTx|integer(int32)|false|No description
»» noSuccessfulTx|integer(int32)|false|No description
»» providerType|string|false|No description
»» startDate|string(date-time)|false|No description
»» status|string|false|No description
»» storeAccount|boolean|false|No description
»» type|string|false|No description
»» vaultData|object|false|No description
»» vaultIQData|object|false|No description
»» vaultIQUuid|string|false|No description
»» vaultUuid|string|false|No description
»» visibilityResetAllowed|boolean|false|No description
»» visible|boolean|false|No description
» userPspAccountId|integer(int64)|false|No description
» viqStoredEntity|[SuccessStoreEntity](#schemasuccessstoreentity)|false|No description
»» accessKey|string|false|No description
»» alreadyStored|boolean|false|No description
»» clientEncryptionKey|string|false|No description
»» localWrappedEncryptionKey|string|false|No description
»» maskedPan|string|false|No description
»» vaultiqKey|string|false|No description
» withdrawal|boolean|false|No description
» ignoredComponents|[[ComponentType](#schemacomponenttype)]|false|No description
»» condition|boolean|false|No description
»» description|string|false|No description
»» helpTextKey|string|false|No description
»» message|string|false|No description
»» otherMatcher|[Matcher_object_](#schemamatcher_object_)|false|No description
»» queryMatcher|[Matcher_DecisionTableQuery_](#schemamatcher_decisiontablequery_)|false|No description
»» required|boolean|false|No description
»» valueLoader|[ConfigValueLoader_object_](#schemaconfigvalueloader_object_)|false|No description
»» visibleByDefault|boolean|false|No description
» includedComponentTypeInMatch|[[ComponentType](#schemacomponenttype)]|false|No description
»» condition|boolean|false|No description
»» description|string|false|No description
»» helpTextKey|string|false|No description
»» message|string|false|No description
»» otherMatcher|[Matcher_object_](#schemamatcher_object_)|false|No description
»» queryMatcher|[Matcher_DecisionTableQuery_](#schemamatcher_decisiontablequery_)|false|No description
»» required|boolean|false|No description
»» valueLoader|[ConfigValueLoader_object_](#schemaconfigvalueloader_object_)|false|No description
»» visibleByDefault|boolean|false|No description
» rules|[string]|false|No description
» txCmds|[[AbstractTxCmd](#schemaabstracttxcmd)]|false|No description
»» created|string(date-time)|false|No description
»» fault|boolean|false|No description
»» retry|boolean|false|No description


#### Enumerated Values

|Property|Value|
|---|---|
» initiatedPsp|Entropay|
» initiatedPsp|PayPoint|
» initiatedPsp|PayLine|
» initiatedPsp|Realex|
» initiatedPsp|TicketSurf|
» initiatedPsp|Payvision|
» initiatedPsp|SwiftVoucher|
» initiatedPsp|Neosurf|
» initiatedPsp|Credorax|
» initiatedPsp|Wirecard|
» initiatedPsp|NxPay|
» initiatedPsp|EMP|
» initiatedPsp|Vamex|
» initiatedPsp|Payon|
» initiatedPsp|Pacnet|
» initiatedPsp|Borgun|
» initiatedPsp|WorldPay|
» initiatedPsp|PayEx|
» initiatedPsp|CC247|
» initiatedPsp|Computop|
» initiatedPsp|Ilixium|
» initiatedPsp|AstroPayCard|
» initiatedPsp|EMerchantPay|
» initiatedPsp|YuuPay|
» initiatedPsp|AlliedWallet|
» initiatedPsp|WorldPayHCG|
» initiatedPsp|Ochapay|
» initiatedPsp|Redbaron|
» initiatedPsp|Payr|
» initiatedPsp|Argus|
» initiatedPsp|Valitor|
» initiatedPsp|SafeCharge|
» initiatedPsp|Bambora|
» initiatedPsp|Dibs|
» initiatedPsp|Apco|
» initiatedPsp|ASTech|
» initiatedPsp|Fibonatix|
» initiatedPsp|DreamsPay|
» initiatedPsp|Clearhaus|
» initiatedPsp|Citigate|
» initiatedPsp|CreditGuard|
» initiatedPsp|Powerpay21|
» initiatedPsp|EMerchantPayWs|
» initiatedPsp|Kluwp|
» initiatedPsp|MiFinity|
» initiatedPsp|Ingenico|
» initiatedPsp|BamboraGa|
» initiatedPsp|AltPayNet|
» initiatedPsp|CcMock|
» initiatedPsp|Neteller|
» initiatedPsp|Skrill|
» initiatedPsp|Paybox|
» initiatedPsp|ClickandBuy|
» initiatedPsp|PayPal|
» initiatedPsp|Mbankomat|
» initiatedPsp|Siru|
» initiatedPsp|IBanq|
» initiatedPsp|LavaPay|
» initiatedPsp|VenusPoint|
» initiatedPsp|IWallet|
» initiatedPsp|Paysafecard|
» initiatedPsp|Ukash|
» initiatedPsp|Instadebit|
» initiatedPsp|IDebit|
» initiatedPsp|EcoPayz|
» initiatedPsp|Fortumo|
» initiatedPsp|AstroPayDirect|
» initiatedPsp|Boku|
» initiatedPsp|NeosurfVoucher|
» initiatedPsp|PayGround|
» initiatedPsp|SmsVoucher|
» initiatedPsp|Flexepin|
» initiatedPsp|Funanga|
» initiatedPsp|Trustly|
» initiatedPsp|Envoy|
» initiatedPsp|Euteller|
» initiatedPsp|Entercash|
» initiatedPsp|InPay|
» initiatedPsp|Poli|
» initiatedPsp|Sofort|
» initiatedPsp|Transferuj|
» initiatedPsp|Adyen|
» initiatedPsp|RapidPaymentsNetwork|
» initiatedPsp|ManualBanking|
» initiatedPsp|Citadel|
» initiatedPsp|Safetypay|
» initiatedPsp|EasyEft|
» initiatedPsp|PugglePay|
» initiatedPsp|Paylevo|
» initiatedPsp|Seqr|
» initiatedPsp|AccentPay|
» initiatedPsp|PPro|
» initiatedPsp|SecureTrading|
» initiatedPsp|Dotpay|
» initiatedPsp|Przelewy24|
» initiatedPsp|MobileGiro|
» initiatedPsp|ToditoCash|
» initiatedPsp|TolaMobile|
» initiatedPsp|Teleingreso|
» initiatedPsp|FraudGuard|
» initiatedPsp|FeatureSpace|
» initiatedPsp|Undefined|
» initiatedPsp|Unknown|
»»» ageStatus|ERROR|
»»» ageStatus|UNDER_AGE|
»»» ageStatus|NOT_VERIFIED|
»»» ageStatus|VERIFIED|
»»» idStatus|ERROR|
»»» idStatus|UNDER_AGE|
»»» idStatus|NOT_VERIFIED|
»»» idStatus|VERIFIED|
»»» provider|CALLCREDIT|
»»» provider|GBG|
»»» status|VERIFIED|
»»» status|VERIFICATION_IN_PROGRESS|
»»» status|VERIFICATION_FAILED|
»»» status|VERIFICATION_EXTERNAL_FAILURE|
»»» status|VERIFICATION_FAILED_INVALID_USER_DATA|
»»» status|NOT_VERIFIED|
»»» status|BLOCKED|
»»» status|UNDER_AGE|
»»» status|UNKNOWN|
»»» status|UNKNOWN_AGE|
»»» ageStatus|ERROR|
»»» ageStatus|UNDER_AGE|
»»» ageStatus|NOT_VERIFIED|
»»» ageStatus|VERIFIED|
»»» idStatus|ERROR|
»»» idStatus|UNDER_AGE|
»»» idStatus|NOT_VERIFIED|
»»» idStatus|VERIFIED|
»»» provider|CALLCREDIT|
»»» provider|GBG|
»»» status|VERIFIED|
»»» status|VERIFICATION_IN_PROGRESS|
»»» status|VERIFICATION_FAILED|
»»» status|VERIFICATION_EXTERNAL_FAILURE|
»»» status|VERIFICATION_FAILED_INVALID_USER_DATA|
»»» status|NOT_VERIFIED|
»»» status|BLOCKED|
»»» status|UNDER_AGE|
»»» status|UNKNOWN|
»»» status|UNKNOWN_AGE|
»» ageStatus|ERROR|
»» ageStatus|UNDER_AGE|
»» ageStatus|NOT_VERIFIED|
»» ageStatus|VERIFIED|
»» idStatus|ERROR|
»» idStatus|UNDER_AGE|
»» idStatus|NOT_VERIFIED|
»» idStatus|VERIFIED|
»» provider|CALLCREDIT|
»» provider|GBG|
»» status|VERIFIED|
»» status|VERIFICATION_IN_PROGRESS|
»» status|VERIFICATION_FAILED|
»» status|VERIFICATION_EXTERNAL_FAILURE|
»» status|VERIFICATION_FAILED_INVALID_USER_DATA|
»» status|NOT_VERIFIED|
»» status|BLOCKED|
»» status|UNDER_AGE|
»» status|UNKNOWN|
»» status|UNKNOWN_AGE|
»» sex|FEMALE|
»» sex|MALE|
»» sex|UNKNOWN|
»» sex|X|
»» communicationChannel|EMAIL|
»» communicationChannel|SMS|
» method|Deposit|
» method|Withdrawal|
» method|Refund|
» method|Cancel|
» method|Void|
» method|Chargeback|
» method|ChargeBackWon|
» psp|Entropay|
» psp|PayPoint|
» psp|PayLine|
» psp|Realex|
» psp|TicketSurf|
» psp|Payvision|
» psp|SwiftVoucher|
» psp|Neosurf|
» psp|Credorax|
» psp|Wirecard|
» psp|NxPay|
» psp|EMP|
» psp|Vamex|
» psp|Payon|
» psp|Pacnet|
» psp|Borgun|
» psp|WorldPay|
» psp|PayEx|
» psp|CC247|
» psp|Computop|
» psp|Ilixium|
» psp|AstroPayCard|
» psp|EMerchantPay|
» psp|YuuPay|
» psp|AlliedWallet|
» psp|WorldPayHCG|
» psp|Ochapay|
» psp|Redbaron|
» psp|Payr|
» psp|Argus|
» psp|Valitor|
» psp|SafeCharge|
» psp|Bambora|
» psp|Dibs|
» psp|Apco|
» psp|ASTech|
» psp|Fibonatix|
» psp|DreamsPay|
» psp|Clearhaus|
» psp|Citigate|
» psp|CreditGuard|
» psp|Powerpay21|
» psp|EMerchantPayWs|
» psp|Kluwp|
» psp|MiFinity|
» psp|Ingenico|
» psp|BamboraGa|
» psp|AltPayNet|
» psp|CcMock|
» psp|Neteller|
» psp|Skrill|
» psp|Paybox|
» psp|ClickandBuy|
» psp|PayPal|
» psp|Mbankomat|
» psp|Siru|
» psp|IBanq|
» psp|LavaPay|
» psp|VenusPoint|
» psp|IWallet|
» psp|Paysafecard|
» psp|Ukash|
» psp|Instadebit|
» psp|IDebit|
» psp|EcoPayz|
» psp|Fortumo|
» psp|AstroPayDirect|
» psp|Boku|
» psp|NeosurfVoucher|
» psp|PayGround|
» psp|SmsVoucher|
» psp|Flexepin|
» psp|Funanga|
» psp|Trustly|
» psp|Envoy|
» psp|Euteller|
» psp|Entercash|
» psp|InPay|
» psp|Poli|
» psp|Sofort|
» psp|Transferuj|
» psp|Adyen|
» psp|RapidPaymentsNetwork|
» psp|ManualBanking|
» psp|Citadel|
» psp|Safetypay|
» psp|EasyEft|
» psp|PugglePay|
» psp|Paylevo|
» psp|Seqr|
» psp|AccentPay|
» psp|PPro|
» psp|SecureTrading|
» psp|Dotpay|
» psp|Przelewy24|
» psp|MobileGiro|
» psp|ToditoCash|
» psp|TolaMobile|
» psp|Teleingreso|
» psp|FraudGuard|
» psp|FeatureSpace|
» psp|Undefined|
» psp|Unknown|
» state|SUCCESSFUL|
» state|REGISTERED|
» state|PROCESSING|
» state|WAITING_INPUT|
» state|WAITING_APPROVAL|
» state|FAILED|
» state|INCONSISTENT|
» state|CANCELLED|
» state|REPROCESSING|
» statusCode|SUCCESS|
» statusCode|SUCCESS_WITHDRAWAL_APPROVAL|
» statusCode|SUCCESS_WITHDRAWAL_AUTO_APPROVAL|
» statusCode|SUCCESS_WAITING_CAPTURE|
» statusCode|SUCCESS_WAITING_AUTO_CAPTURE|
» statusCode|SUCCESS_AUTO_CAPTURED|
» statusCode|SUCCESS_CAPTURED|
» statusCode|REGISTERED|
» statusCode|PROCESSING_PROVIDER|
» statusCode|PROCESSING_MERCHANT|
» statusCode|CONT_WITH_N3DS|
» statusCode|REPROCESSING_PROVIDER|
» statusCode|REPROCESSING_MERCHANT|
» statusCode|WAITING_INPUT|
» statusCode|WAITING_3D_SECURE|
» statusCode|WAITING_DEPOSIT_CONFIRMATION|
» statusCode|WAITING_NOTIFICATION|
» statusCode|WAITING_DEPOSIT_APPROVAL|
» statusCode|WAITING_WITHDRAWAL_APPROVAL|
» statusCode|WAITING_DEPOSIT_AUTO_APPROVAL|
» statusCode|WAITING_WITHDRAWAL_AUTO_APPROVAL|
» statusCode|ERR_READ_TIMEOUT|
» statusCode|ERR_REFERENCE_MISMATCH|
» statusCode|ERR_INCONSISTENT_TRANSACTION|
» statusCode|ERR_UNKNOWN_CALLBACK|
» statusCode|ERR_IO_EXCEPTION|
» statusCode|ERR_UNKNOWN_RESPONSE|
» statusCode|ERR_SYSTEM_ERROR|
» statusCode|ERR_FAILED_TO_CONNECT|
» statusCode|ERR_DECLINED_BAD_REQUEST|
» statusCode|ERR_DECLINED_FRAUD|
» statusCode|ERR_DECLINED_NO_FUNDS|
» statusCode|ERR_DECLINED_ACCOUNT_SUSPENDED|
» statusCode|ERR_DECLINED_OTHER_REASON|
» statusCode|ERR_DECLINED_CONTACT_SUPPORT|
» statusCode|ERR_DECLINED_CONFIG_ERROR|
» statusCode|ERR_NOT_AUTHENTICATED|
» statusCode|ERR_INVALID_RESPONSE|
» statusCode|ERR_DECLINED_REQ_BLOCKED|
» statusCode|ERR_PSP_OUT_OF_SERVICE|
» statusCode|ERR_DECLINED_NOT_AUTHORIZED|
» statusCode|ERR_RESPONSE_CODE_UNKNOWN|
» statusCode|ERR_PSP_ACCOUNT_USED_BY_OTHER_USER|
» statusCode|ERR_PSP_ACCOUNT_NOT_USED|
» statusCode|ERR_TOO_MANY_PSP_ACCOUNTS|
» statusCode|ERR_DECLINED_DUPLICATE_TX_ID|
» statusCode|ERR_DECLINED_INVALID_ACCOUNT_NUMBER|
» statusCode|ERR_MERCHANT_OUT_OF_SERVICE|
» statusCode|ERR_DECLINED_LIMIT_OVERDRAWN|
» statusCode|ERR_MERCHANT_RESPONSE_CODE_UNKNOWN|
» statusCode|ERR_DECLINED_NO_PROVIDER_FOUND|
» statusCode|ERR_DECLINED_PROVIDER_ACCOUNT_CONFIG_ERROR|
» statusCode|ERR_MERCHANT_INVALID_RESPONSE|
» statusCode|ERR_DECLINED_3D_VALIDATION_FAILED|
» statusCode|ERR_DECLINED_3D_EXPIRED|
» statusCode|ERR_VAULTIQ_OUT_OF_SERVICE|
» statusCode|ERR_DECLINED_IP_BLOCKED|
» statusCode|ERR_DECLINED_BIN_BLOCKED|
» statusCode|ERR_VAULTIQ_UNKNOWN_ACCOUNT|
» statusCode|ERR_DECLINED_KYC_BLOCK|
» statusCode|ERR_DECLINED_KYC_USER_UNDER_AGE|
» statusCode|ERR_DECLINED_KYC_CHECK_FAILED|
» statusCode|ERR_DECLINED_BIC_BLOCK|
» statusCode|ERR_DECLINED_EXPIRED|
» statusCode|ERR_DECLINED_REPEAT_CANCELLED|
» statusCode|ERR_DECLINED_CURRENCY_NOT_SUPPORTED|
» statusCode|ERR_DECLINED_FRAUD_SCORE_THRESHOLD_EXCEEDED|
» statusCode|ERR_DECLINED_MERCHANT_NOT_FOUND|
» statusCode|ERR_DECLINED_MERCHANT_NOT_ENABLED|
» statusCode|ERR_DECLINED_PROVIDER_NOT_ENABLED|
» statusCode|ERR_DECLINED_UNDER_MAINTENANCE|
» statusCode|ERR_NO_REFERRAL_TX_FOUND|
» statusCode|ERR_DECLINE_TX_NOT_FOUND|
» statusCode|ERR_DECLINE_COUNTRY_NOT_SUPPORTED|
» statusCode|ERR_DECLINED_NOT_SUPPORTED_PAYMENT_METHOD_FRAUD|
» statusCode|ERR_DECLINED_FRAUD_PROVIDER_ACCOUNT_CONFIG_ERROR|
» statusCode|ERR_CANCELLED_BY_USER|
» statusCode|ERR_CANCELLED_BY_MERCHANT|
» statusCode|ERR_CANCELLED_BY_PSP|
» txType|CreditcardDeposit|
» txType|CreditcardWithdrawal|
» txType|EntropayDeposit|
» txType|ICardDeposit|
» txType|ICardWithdrawal|
» txType|NetellerDeposit|
» txType|NetellerWithdrawal|
» txType|SkrillDeposit|
» txType|SkrillWithdrawal|
» txType|PayboxDeposit|
» txType|ClickandBuyDeposit|
» txType|ClickandBuyWithdrawal|
» txType|PayPalDeposit|
» txType|PayPalWithdrawal|
» txType|MbankomatDeposit|
» txType|IBanqDeposit|
» txType|IBanqWithdrawal|
» txType|LavaPayDeposit|
» txType|LavaPayWithdrawal|
» txType|InstadebitDeposit|
» txType|InstadebitWithdrawal|
» txType|IDebitDeposit|
» txType|IDebitWithdrawal|
» txType|EcoPayzDeposit|
» txType|EcoPayzWithdrawal|
» txType|AstroPayCardWithdrawal|
» txType|AstroPayDirectDeposit|
» txType|AstroPayDirectWithdrawal|
» txType|VenusPointDeposit|
» txType|VenusPointWithdrawal|
» txType|MiFinityEWalletDeposit|
» txType|MiFinityEWalletWithdrawal|
» txType|IWalletDeposit|
» txType|IWalletWithdrawal|
» txType|EutellerDeposit|
» txType|EnvoyDeposit|
» txType|EnvoyWithdrawal|
» txType|TrustlyDeposit|
» txType|TrustlyWithdrawal|
» txType|BankDeposit|
» txType|BankLocalWithdrawal|
» txType|BankIBANWithdrawal|
» txType|BankIntIBANWithdrawal|
» txType|IdealDeposit|
» txType|ChinaUnionPayDeposit|
» txType|BankIntlWithdrawal|
» txType|ChinaUnionPayWithdrawal|
» txType|BoletoBancarioDeposit|
» txType|PaysafecardDeposit|
» txType|UkashDeposit|
» txType|UkashWithdrawal|
» txType|PaysafecardWithdrawal|
» txType|CashlibDeposit|
» txType|TicketPremiumDeposit|
» txType|FlexepinDeposit|
» txType|FunangaDeposit|
» txType|VisaVoucherDeposit|
» txType|GiftcardDeposit|
» txType|PugglePayDeposit|
» txType|PaylevoDeposit|
» txType|YuuCollectDeposit|
» txType|NeosurfVoucherDeposit|
» txType|OxxoDeposit|
» txType|SeqrDeposit|
» txType|SiruDeposit|
» txType|SiruStatus|
» txType|SiruPriceCalc|
» txType|FortumoDeposit|
» txType|BokuDeposit|
» txType|BlikDeposit|
» txType|PayGroundDeposit|
» txType|SmsVoucherDeposit|
» txType|QiwiDeposit|
» txType|QiwiWithdrawal|
» txType|AccentPayDeposit|
» txType|AccentPayWithdrawal|
» txType|WorldPayDeposit|
» txType|WorldPayWithdrawal|
» txType|PProDeposit|
» txType|PProWithdrawal|
» txType|EProPaymentWallDeposit|
» txType|ApcoDeposit|
» txType|SecureTradingDeposit|
» txType|DotpayDeposit|
» txType|Przelewy24Deposit|
» txType|SweGiroDeposit|
» txType|ToditoCashDeposit|
» txType|TolaMobileDeposit|
» txType|TeleingresoDeposit|
» txType|ManualChargeback|
» txType|ManualRefund|
» txType|ManualCancel|
» txType|ManualVoid|
» txType|ManualChargeBackWon|
» txType|Refund|
» txType|Cancel|
» txType|Void|
» txType|Capture|
»» status|ACTIVE|
»» status|INACTIVE|
»» status|NEW|
»» status|DELETED|
»» status|BLOCKED|
»» type|CreditcardDeposit|
»» type|CreditcardWithdrawal|
»» type|EntropayDeposit|
»» type|ICardDeposit|
»» type|ICardWithdrawal|
»» type|NetellerDeposit|
»» type|NetellerWithdrawal|
»» type|SkrillDeposit|
»» type|SkrillWithdrawal|
»» type|PayboxDeposit|
»» type|ClickandBuyDeposit|
»» type|ClickandBuyWithdrawal|
»» type|PayPalDeposit|
»» type|PayPalWithdrawal|
»» type|MbankomatDeposit|
»» type|IBanqDeposit|
»» type|IBanqWithdrawal|
»» type|LavaPayDeposit|
»» type|LavaPayWithdrawal|
»» type|InstadebitDeposit|
»» type|InstadebitWithdrawal|
»» type|IDebitDeposit|
»» type|IDebitWithdrawal|
»» type|EcoPayzDeposit|
»» type|EcoPayzWithdrawal|
»» type|AstroPayCardWithdrawal|
»» type|AstroPayDirectDeposit|
»» type|AstroPayDirectWithdrawal|
»» type|VenusPointDeposit|
»» type|VenusPointWithdrawal|
»» type|MiFinityEWalletDeposit|
»» type|MiFinityEWalletWithdrawal|
»» type|IWalletDeposit|
»» type|IWalletWithdrawal|
»» type|EutellerDeposit|
»» type|EnvoyDeposit|
»» type|EnvoyWithdrawal|
»» type|TrustlyDeposit|
»» type|TrustlyWithdrawal|
»» type|BankDeposit|
»» type|BankLocalWithdrawal|
»» type|BankIBANWithdrawal|
»» type|BankIntIBANWithdrawal|
»» type|IdealDeposit|
»» type|ChinaUnionPayDeposit|
»» type|BankIntlWithdrawal|
»» type|ChinaUnionPayWithdrawal|
»» type|BoletoBancarioDeposit|
»» type|PaysafecardDeposit|
»» type|UkashDeposit|
»» type|UkashWithdrawal|
»» type|PaysafecardWithdrawal|
»» type|CashlibDeposit|
»» type|TicketPremiumDeposit|
»» type|FlexepinDeposit|
»» type|FunangaDeposit|
»» type|VisaVoucherDeposit|
»» type|GiftcardDeposit|
»» type|PugglePayDeposit|
»» type|PaylevoDeposit|
»» type|YuuCollectDeposit|
»» type|NeosurfVoucherDeposit|
»» type|OxxoDeposit|
»» type|SeqrDeposit|
»» type|SiruDeposit|
»» type|SiruStatus|
»» type|SiruPriceCalc|
»» type|FortumoDeposit|
»» type|BokuDeposit|
»» type|BlikDeposit|
»» type|PayGroundDeposit|
»» type|SmsVoucherDeposit|
»» type|QiwiDeposit|
»» type|QiwiWithdrawal|
»» type|AccentPayDeposit|
»» type|AccentPayWithdrawal|
»» type|WorldPayDeposit|
»» type|WorldPayWithdrawal|
»» type|PProDeposit|
»» type|PProWithdrawal|
»» type|EProPaymentWallDeposit|
»» type|ApcoDeposit|
»» type|SecureTradingDeposit|
»» type|DotpayDeposit|
»» type|Przelewy24Deposit|
»» type|SweGiroDeposit|
»» type|ToditoCashDeposit|
»» type|TolaMobileDeposit|
»» type|TeleingresoDeposit|
»» type|ManualChargeback|
»» type|ManualRefund|
»» type|ManualCancel|
»» type|ManualVoid|
»» type|ManualChargeBackWon|
»» type|Refund|
»» type|Cancel|
»» type|Void|
»» type|Capture|


## KycProviderResult

<a name="schemakycproviderresult"></a>

```json
{
  "ageStatus": "ERROR",
  "idStatus": "ERROR",
  "provider": "CALLCREDIT",
  "score": 0,
  "status": "VERIFIED",
  "txId": 0,
  "updated": "2017-09-20T20:17:12Z"
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
ageStatus|string|false|No description
idStatus|string|false|No description
provider|string|false|No description
score|integer(int32)|false|No description
status|string|false|No description
txId|integer(int64)|false|No description
updated|string(date-time)|false|No description


#### Enumerated Values

|Property|Value|
|---|---|
ageStatus|ERROR|
ageStatus|UNDER_AGE|
ageStatus|NOT_VERIFIED|
ageStatus|VERIFIED|
idStatus|ERROR|
idStatus|UNDER_AGE|
idStatus|NOT_VERIFIED|
idStatus|VERIFIED|
provider|CALLCREDIT|
provider|GBG|
status|VERIFIED|
status|VERIFICATION_IN_PROGRESS|
status|VERIFICATION_FAILED|
status|VERIFICATION_EXTERNAL_FAILURE|
status|VERIFICATION_FAILED_INVALID_USER_DATA|
status|NOT_VERIFIED|
status|BLOCKED|
status|UNDER_AGE|
status|UNKNOWN|
status|UNKNOWN_AGE|


## KycResult

<a name="schemakycresult"></a>

```json
{
  "created": "2017-09-20T20:17:12Z",
  "fault": true,
  "mostRecentResult": {
    "ageStatus": "ERROR",
    "idStatus": "ERROR",
    "provider": "CALLCREDIT",
    "score": 0,
    "status": "VERIFIED",
    "txId": 0,
    "updated": "2017-09-20T20:17:12Z"
  },
  "results": [
    {
      "ageStatus": "ERROR",
      "idStatus": "ERROR",
      "provider": "CALLCREDIT",
      "score": 0,
      "status": "VERIFIED",
      "txId": 0,
      "updated": "2017-09-20T20:17:12Z"
    }
  ],
  "retry": true
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
created|string(date-time)|false|No description
fault|boolean|false|No description
mostRecentResult|[KycProviderResult](#schemakycproviderresult)|false|No description
» ageStatus|string|false|No description
» idStatus|string|false|No description
» provider|string|false|No description
» score|integer(int32)|false|No description
» status|string|false|No description
» txId|integer(int64)|false|No description
» updated|string(date-time)|false|No description
retry|boolean|false|No description
results|[[KycProviderResult](#schemakycproviderresult)]|false|No description
» ageStatus|string|false|No description
» idStatus|string|false|No description
» provider|string|false|No description
» score|integer(int32)|false|No description
» status|string|false|No description
» txId|integer(int64)|false|No description
» updated|string(date-time)|false|No description


#### Enumerated Values

|Property|Value|
|---|---|
» ageStatus|ERROR|
» ageStatus|UNDER_AGE|
» ageStatus|NOT_VERIFIED|
» ageStatus|VERIFIED|
» idStatus|ERROR|
» idStatus|UNDER_AGE|
» idStatus|NOT_VERIFIED|
» idStatus|VERIFIED|
» provider|CALLCREDIT|
» provider|GBG|
» status|VERIFIED|
» status|VERIFICATION_IN_PROGRESS|
» status|VERIFICATION_FAILED|
» status|VERIFICATION_EXTERNAL_FAILURE|
» status|VERIFICATION_FAILED_INVALID_USER_DATA|
» status|NOT_VERIFIED|
» status|BLOCKED|
» status|UNDER_AGE|
» status|UNKNOWN|
» status|UNKNOWN_AGE|
» ageStatus|ERROR|
» ageStatus|UNDER_AGE|
» ageStatus|NOT_VERIFIED|
» ageStatus|VERIFIED|
» idStatus|ERROR|
» idStatus|UNDER_AGE|
» idStatus|NOT_VERIFIED|
» idStatus|VERIFIED|
» provider|CALLCREDIT|
» provider|GBG|
» status|VERIFIED|
» status|VERIFICATION_IN_PROGRESS|
» status|VERIFICATION_FAILED|
» status|VERIFICATION_EXTERNAL_FAILURE|
» status|VERIFICATION_FAILED_INVALID_USER_DATA|
» status|NOT_VERIFIED|
» status|BLOCKED|
» status|UNDER_AGE|
» status|UNKNOWN|
» status|UNKNOWN_AGE|


## Locale

<a name="schemalocale"></a>

```json
{
  "country": "string",
  "displayCountry": "string",
  "displayLanguage": "string",
  "displayName": "string",
  "displayScript": "string",
  "displayVariant": "string",
  "extensionKeys": [
    {}
  ],
  "iso3Country": "string",
  "iso3Language": "string",
  "language": "string",
  "script": "string",
  "unicodeLocaleAttributes": [
    "string"
  ],
  "unicodeLocaleKeys": [
    "string"
  ],
  "variant": "string"
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
country|string|false|No description
displayCountry|string|false|No description
displayLanguage|string|false|No description
displayName|string|false|No description
displayScript|string|false|No description
displayVariant|string|false|No description
iso3Country|string|false|No description
iso3Language|string|false|No description
language|string|false|No description
script|string|false|No description
variant|string|false|No description
extensionKeys|[[Character](#schemacharacter)]|false|No description
unicodeLocaleAttributes|[string]|false|No description
unicodeLocaleKeys|[string]|false|No description



## MerchantUser

<a name="schemamerchantuser"></a>

```json
{
  "addressAsOneLine": "string",
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "authenticated": true,
  "balance": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "city": "string",
  "communicationChannel": [
    "EMAIL"
  ],
  "countryCode": {
    "name": "string",
    "threeAlphaCode": "string",
    "threeDigitCode": "string",
    "threeDigitCodeAsInteger": 0,
    "twoAlphaCode": "string"
  },
  "dob": "string",
  "email": "string",
  "firstName": "string",
  "kycStatus": "string",
  "lastName": "string",
  "locale": {
    "country": "string",
    "displayCountry": "string",
    "displayLanguage": "string",
    "displayName": "string",
    "displayScript": "string",
    "displayVariant": "string",
    "extensionKeys": [
      {}
    ],
    "iso3Country": "string",
    "iso3Language": "string",
    "language": "string",
    "script": "string",
    "unicodeLocaleAttributes": [
      "string"
    ],
    "unicodeLocaleKeys": [
      "string"
    ],
    "variant": "string"
  },
  "mobile": "string",
  "mobileDigits": "string",
  "name": "string",
  "sex": "FEMALE",
  "state": "string",
  "street": "string",
  "userCat": "string",
  "userId": "string",
  "zip": "string"
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
addressAsOneLine|string|false|No description
attributes|object|false|No description
authenticated|boolean|false|No description
balance|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
city|string|false|No description
countryCode|[CountryCode](#schemacountrycode)|false|No description
» name|string|false|No description
» threeAlphaCode|string|false|No description
» threeDigitCode|string|false|No description
» threeDigitCodeAsInteger|integer(int32)|false|No description
» twoAlphaCode|string|false|No description
dob|string|false|No description
email|string|false|No description
firstName|string|false|No description
kycStatus|string|false|No description
lastName|string|false|No description
locale|[Locale](#schemalocale)|false|No description
» country|string|false|No description
» displayCountry|string|false|No description
» displayLanguage|string|false|No description
» displayName|string|false|No description
» displayScript|string|false|No description
» displayVariant|string|false|No description
» iso3Country|string|false|No description
» iso3Language|string|false|No description
» language|string|false|No description
» script|string|false|No description
» variant|string|false|No description
» extensionKeys|[[Character](#schemacharacter)]|false|No description
» unicodeLocaleAttributes|[string]|false|No description
» unicodeLocaleKeys|[string]|false|No description
mobile|string|false|No description
mobileDigits|string|false|No description
name|string|false|No description
sex|string|false|No description
state|string|false|No description
street|string|false|No description
userCat|string|false|No description
userId|string|false|No description
zip|string|false|No description
communicationChannel|[string]|false|No description


#### Enumerated Values

|Property|Value|
|---|---|
sex|FEMALE|
sex|MALE|
sex|UNKNOWN|
sex|X|
communicationChannel|EMAIL|
communicationChannel|SMS|


## Money

<a name="schemamoney"></a>

```json
{
  "amount": 0,
  "amountInFractionUnit": 0,
  "currency": "string",
  "currencyCode": "string",
  "currencyNumeric3Code": "string",
  "fractionDigits": 0,
  "negative": true,
  "positive": true,
  "zero": true
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
amount|number|false|No description
amountInFractionUnit|integer(int64)|false|No description
currency|string|false|No description
currencyCode|string|false|No description
currencyNumeric3Code|string|false|No description
fractionDigits|integer(int32)|false|No description
negative|boolean|false|No description
positive|boolean|false|No description
zero|boolean|false|No description



## PaymentTx

<a name="schemapaymenttx"></a>

```json
{
  "accountHolderName": "string",
  "amount": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "amountAbs": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "amountBase": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "attributes": {},
  "authAmount": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "authAmountBase": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "authorized": true,
  "bankWithdrawal": true,
  "blockedAccountReason": "string",
  "bonusCode": "string",
  "captured": true,
  "channel": "string",
  "channelId": "string",
  "contextMap": {},
  "created": "2017-09-20T20:17:12Z",
  "customSQL": "string",
  "deposit": true,
  "depositType": "string",
  "failure": true,
  "failureOrInconsistent": true,
  "fee": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "feeBase": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "finalState": true,
  "id": 0,
  "ignoredComponents": [
    {
      "condition": true,
      "description": "string",
      "helpTextKey": "string",
      "message": "string",
      "otherMatcher": {},
      "queryMatcher": {},
      "required": true,
      "valueLoader": {},
      "visibleByDefault": true
    }
  ],
  "includedComponentTypeInMatch": [
    {
      "condition": true,
      "description": "string",
      "helpTextKey": "string",
      "message": "string",
      "otherMatcher": {},
      "queryMatcher": {},
      "required": true,
      "valueLoader": {},
      "visibleByDefault": true
    }
  ],
  "info": "string",
  "initiatedPsp": "Entropay",
  "initiatedPspAccount": "string",
  "initiatedPspId": 0,
  "ipAddr": "string",
  "ipCity": "string",
  "ipCountry": "string",
  "ipRegion": "string",
  "issuerCountry": "string",
  "kycResult": {
    "created": "2017-09-20T20:17:12Z",
    "fault": true,
    "mostRecentResult": {
      "ageStatus": "ERROR",
      "idStatus": "ERROR",
      "provider": "CALLCREDIT",
      "score": 0,
      "status": "VERIFIED",
      "txId": 0,
      "updated": "2017-09-20T20:17:12Z"
    },
    "results": [
      {
        "ageStatus": "ERROR",
        "idStatus": "ERROR",
        "provider": "CALLCREDIT",
        "score": 0,
        "status": "VERIFIED",
        "txId": 0,
        "updated": "2017-09-20T20:17:12Z"
      }
    ],
    "retry": true
  },
  "kycStatus": "string",
  "kycUser": {
    "ageStatus": "ERROR",
    "idStatus": "ERROR",
    "provider": "CALLCREDIT",
    "score": 0,
    "status": "VERIFIED",
    "txId": 0,
    "updated": "2017-09-20T20:17:12Z"
  },
  "lastUpdated": "2017-09-20T20:17:12Z",
  "latestTxCmdMap": {
    "property1": {
      "created": "2017-09-20T20:17:12Z",
      "fault": true,
      "retry": true
    },
    "property2": {
      "created": "2017-09-20T20:17:12Z",
      "fault": true,
      "retry": true
    }
  },
  "locale": "string",
  "market": "string",
  "maskedUserAccount": "string",
  "merchantAuthCode": "string",
  "merchantErrCode": "string",
  "merchantId": 0,
  "merchantTxId": "string",
  "merchantUser": {
    "addressAsOneLine": "string",
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "authenticated": true,
    "balance": {
      "amount": 0,
      "amountInFractionUnit": 0,
      "currency": "string",
      "currencyCode": "string",
      "currencyNumeric3Code": "string",
      "fractionDigits": 0,
      "negative": true,
      "positive": true,
      "zero": true
    },
    "city": "string",
    "communicationChannel": [
      "EMAIL"
    ],
    "countryCode": {
      "name": "string",
      "threeAlphaCode": "string",
      "threeDigitCode": "string",
      "threeDigitCodeAsInteger": 0,
      "twoAlphaCode": "string"
    },
    "dob": "string",
    "email": "string",
    "firstName": "string",
    "kycStatus": "string",
    "lastName": "string",
    "locale": {
      "country": "string",
      "displayCountry": "string",
      "displayLanguage": "string",
      "displayName": "string",
      "displayScript": "string",
      "displayVariant": "string",
      "extensionKeys": [
        {}
      ],
      "iso3Country": "string",
      "iso3Language": "string",
      "language": "string",
      "script": "string",
      "unicodeLocaleAttributes": [
        "string"
      ],
      "unicodeLocaleKeys": [
        "string"
      ],
      "variant": "string"
    },
    "mobile": "string",
    "mobileDigits": "string",
    "name": "string",
    "sex": "FEMALE",
    "state": "string",
    "street": "string",
    "userCat": "string",
    "userId": "string",
    "zip": "string"
  },
  "merchantUserBal": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "merchantUserCat": "string",
  "merchantUserCountry": "string",
  "merchantUserEmail": "string",
  "merchantUserId": "string",
  "method": "Deposit",
  "minUniqueUsers": "string",
  "originTxId": 0,
  "processing": true,
  "psp": "Entropay",
  "pspAccount": "string",
  "pspFee": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "pspFeeBase": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "pspFraudScore": 0,
  "pspId": 0,
  "pspRefId": "string",
  "pspService": "string",
  "pspStatusCode": "string",
  "pspTxAmount": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "pspUserRef": "string",
  "reversedMerchantTxId": "string",
  "reversedTxId": 0,
  "rules": [
    "string"
  ],
  "state": "SUCCESSFUL",
  "stateInt": 0,
  "statusCode": "SUCCESS",
  "statusCodeInt": 0,
  "successful": true,
  "suspectedAbuseReason": "string",
  "threshold": "string",
  "timeInterval": "string",
  "txAmount": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "txAmountAbs": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "txAmountBase": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "txCmds": [
    {
      "created": "2017-09-20T20:17:12Z",
      "fault": true,
      "retry": true
    }
  ],
  "txRefId": "string",
  "txType": "CreditcardDeposit",
  "txTypeInt": 0,
  "updatedBy": "string",
  "userPspAccountDetails": {
    "accountUuid": "string",
    "blockReason": "string",
    "description": "string",
    "directDebit": true,
    "expiryDate": "2017-09-20T20:17:12Z",
    "extAccountRefId": "string",
    "firstUsed": "2017-09-20T20:17:12Z",
    "hashedAccount": "string",
    "holder": "string",
    "id": 0,
    "lastSuccess": "2017-09-20T20:17:12Z",
    "lastUsed": "2017-09-20T20:17:12Z",
    "maskedAccount": "string",
    "merchantId": 0,
    "merchantUserId": "string",
    "new": true,
    "noFailedTx": 0,
    "noSuccessfulTx": 0,
    "providerType": "string",
    "startDate": "2017-09-20T20:17:12Z",
    "status": "ACTIVE",
    "storeAccount": true,
    "type": "CreditcardDeposit",
    "vaultData": {
      "property1": "string",
      "property2": "string"
    },
    "vaultIQData": {
      "property1": "string",
      "property2": "string"
    },
    "vaultIQUuid": "string",
    "vaultUuid": "string",
    "visibilityResetAllowed": true,
    "visible": true
  },
  "userPspAccountId": 0,
  "viqStoredEntity": {
    "accessKey": "string",
    "alreadyStored": true,
    "clientEncryptionKey": "string",
    "localWrappedEncryptionKey": "string",
    "maskedPan": "string",
    "vaultiqKey": "string"
  },
  "withdrawal": true
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
accountHolderName|string|false|No description
amount|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
amountAbs|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
amountBase|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
attributes|object|false|No description
authAmount|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
authAmountBase|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
authorized|boolean|false|No description
bankWithdrawal|boolean|false|No description
blockedAccountReason|string|false|No description
bonusCode|string|false|No description
captured|boolean|false|No description
channel|string|false|No description
channelId|string|false|No description
contextMap|object|false|No description
created|string(date-time)|false|No description
customSQL|string|false|No description
deposit|boolean|false|No description
depositType|string|false|No description
failure|boolean|false|No description
failureOrInconsistent|boolean|false|No description
fee|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
feeBase|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
finalState|boolean|false|No description
id|integer(int64)|false|No description
info|string|false|No description
initiatedPsp|string|false|No description
initiatedPspAccount|string|false|No description
initiatedPspId|integer(int32)|false|No description
ipAddr|string|false|No description
ipCity|string|false|No description
ipCountry|string|false|No description
ipRegion|string|false|No description
issuerCountry|string|false|No description
kycResult|[KycResult](#schemakycresult)|false|No description
» created|string(date-time)|false|No description
» fault|boolean|false|No description
» mostRecentResult|[KycProviderResult](#schemakycproviderresult)|false|No description
»» ageStatus|string|false|No description
»» idStatus|string|false|No description
»» provider|string|false|No description
»» score|integer(int32)|false|No description
»» status|string|false|No description
»» txId|integer(int64)|false|No description
»» updated|string(date-time)|false|No description
» retry|boolean|false|No description
» results|[[KycProviderResult](#schemakycproviderresult)]|false|No description
»» ageStatus|string|false|No description
»» idStatus|string|false|No description
»» provider|string|false|No description
»» score|integer(int32)|false|No description
»» status|string|false|No description
»» txId|integer(int64)|false|No description
»» updated|string(date-time)|false|No description
kycStatus|string|false|No description
kycUser|[KycProviderResult](#schemakycproviderresult)|false|No description
» ageStatus|string|false|No description
» idStatus|string|false|No description
» provider|string|false|No description
» score|integer(int32)|false|No description
» status|string|false|No description
» txId|integer(int64)|false|No description
» updated|string(date-time)|false|No description
lastUpdated|string(date-time)|false|No description
latestTxCmdMap|object|false|No description
» created|string(date-time)|false|No description
» fault|boolean|false|No description
» retry|boolean|false|No description
locale|string|false|No description
market|string|false|No description
maskedUserAccount|string|false|No description
merchantAuthCode|string|false|No description
merchantErrCode|string|false|No description
merchantId|integer(int32)|false|No description
merchantTxId|string|false|No description
merchantUser|[MerchantUser](#schemamerchantuser)|false|No description
» addressAsOneLine|string|false|No description
» attributes|object|false|No description
» authenticated|boolean|false|No description
» balance|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» city|string|false|No description
» countryCode|[CountryCode](#schemacountrycode)|false|No description
»» name|string|false|No description
»» threeAlphaCode|string|false|No description
»» threeDigitCode|string|false|No description
»» threeDigitCodeAsInteger|integer(int32)|false|No description
»» twoAlphaCode|string|false|No description
» dob|string|false|No description
» email|string|false|No description
» firstName|string|false|No description
» kycStatus|string|false|No description
» lastName|string|false|No description
» locale|[Locale](#schemalocale)|false|No description
»» country|string|false|No description
»» displayCountry|string|false|No description
»» displayLanguage|string|false|No description
»» displayName|string|false|No description
»» displayScript|string|false|No description
»» displayVariant|string|false|No description
»» iso3Country|string|false|No description
»» iso3Language|string|false|No description
»» language|string|false|No description
»» script|string|false|No description
»» variant|string|false|No description
»» extensionKeys|[[Character](#schemacharacter)]|false|No description
»» unicodeLocaleAttributes|[string]|false|No description
»» unicodeLocaleKeys|[string]|false|No description
» mobile|string|false|No description
» mobileDigits|string|false|No description
» name|string|false|No description
» sex|string|false|No description
» state|string|false|No description
» street|string|false|No description
» userCat|string|false|No description
» userId|string|false|No description
» zip|string|false|No description
» communicationChannel|[string]|false|No description
merchantUserBal|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
merchantUserCat|string|false|No description
merchantUserCountry|string|false|No description
merchantUserEmail|string|false|No description
merchantUserId|string|false|No description
method|string|false|No description
minUniqueUsers|string|false|No description
originTxId|integer(int64)|false|No description
processing|boolean|false|No description
psp|string|false|No description
pspAccount|string|false|No description
pspFee|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
pspFeeBase|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
pspFraudScore|number(double)|false|No description
pspId|integer(int32)|false|No description
pspRefId|string|false|No description
pspService|string|false|No description
pspStatusCode|string|false|No description
pspTxAmount|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
pspUserRef|string|false|No description
reversedMerchantTxId|string|false|No description
reversedTxId|integer(int64)|false|No description
state|string|false|No description
stateInt|integer(int32)|false|No description
statusCode|string|false|No description
statusCodeInt|integer(int32)|false|No description
successful|boolean|false|No description
suspectedAbuseReason|string|false|No description
threshold|string|false|No description
timeInterval|string|false|No description
txAmount|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
txAmountAbs|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
txAmountBase|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
txRefId|string|false|No description
txType|string|false|No description
txTypeInt|integer(int32)|false|No description
updatedBy|string|false|No description
userPspAccountDetails|[UserPspAccountDetails](#schemauserpspaccountdetails)|false|No description
» accountUuid|string|false|No description
» blockReason|string|false|No description
» description|string|false|No description
» directDebit|boolean|false|No description
» expiryDate|string(date-time)|false|No description
» extAccountRefId|string|false|No description
» firstUsed|string(date-time)|false|No description
» hashedAccount|string|false|No description
» holder|string|false|No description
» id|integer(int64)|false|No description
» lastSuccess|string(date-time)|false|No description
» lastUsed|string(date-time)|false|No description
» maskedAccount|string|false|No description
» merchantId|integer(int32)|false|No description
» merchantUserId|string|false|No description
» new|boolean|false|No description
» noFailedTx|integer(int32)|false|No description
» noSuccessfulTx|integer(int32)|false|No description
» providerType|string|false|No description
» startDate|string(date-time)|false|No description
» status|string|false|No description
» storeAccount|boolean|false|No description
» type|string|false|No description
» vaultData|object|false|No description
» vaultIQData|object|false|No description
» vaultIQUuid|string|false|No description
» vaultUuid|string|false|No description
» visibilityResetAllowed|boolean|false|No description
» visible|boolean|false|No description
userPspAccountId|integer(int64)|false|No description
viqStoredEntity|[SuccessStoreEntity](#schemasuccessstoreentity)|false|No description
» accessKey|string|false|No description
» alreadyStored|boolean|false|No description
» clientEncryptionKey|string|false|No description
» localWrappedEncryptionKey|string|false|No description
» maskedPan|string|false|No description
» vaultiqKey|string|false|No description
withdrawal|boolean|false|No description
ignoredComponents|[[ComponentType](#schemacomponenttype)]|false|No description
» condition|boolean|false|No description
» description|string|false|No description
» helpTextKey|string|false|No description
» message|string|false|No description
» otherMatcher|[Matcher_object_](#schemamatcher_object_)|false|No description
» queryMatcher|[Matcher_DecisionTableQuery_](#schemamatcher_decisiontablequery_)|false|No description
» required|boolean|false|No description
» valueLoader|[ConfigValueLoader_object_](#schemaconfigvalueloader_object_)|false|No description
» visibleByDefault|boolean|false|No description
includedComponentTypeInMatch|[[ComponentType](#schemacomponenttype)]|false|No description
» condition|boolean|false|No description
» description|string|false|No description
» helpTextKey|string|false|No description
» message|string|false|No description
» otherMatcher|[Matcher_object_](#schemamatcher_object_)|false|No description
» queryMatcher|[Matcher_DecisionTableQuery_](#schemamatcher_decisiontablequery_)|false|No description
» required|boolean|false|No description
» valueLoader|[ConfigValueLoader_object_](#schemaconfigvalueloader_object_)|false|No description
» visibleByDefault|boolean|false|No description
rules|[string]|false|No description
txCmds|[[AbstractTxCmd](#schemaabstracttxcmd)]|false|No description
» created|string(date-time)|false|No description
» fault|boolean|false|No description
» retry|boolean|false|No description


#### Enumerated Values

|Property|Value|
|---|---|
initiatedPsp|Entropay|
initiatedPsp|PayPoint|
initiatedPsp|PayLine|
initiatedPsp|Realex|
initiatedPsp|TicketSurf|
initiatedPsp|Payvision|
initiatedPsp|SwiftVoucher|
initiatedPsp|Neosurf|
initiatedPsp|Credorax|
initiatedPsp|Wirecard|
initiatedPsp|NxPay|
initiatedPsp|EMP|
initiatedPsp|Vamex|
initiatedPsp|Payon|
initiatedPsp|Pacnet|
initiatedPsp|Borgun|
initiatedPsp|WorldPay|
initiatedPsp|PayEx|
initiatedPsp|CC247|
initiatedPsp|Computop|
initiatedPsp|Ilixium|
initiatedPsp|AstroPayCard|
initiatedPsp|EMerchantPay|
initiatedPsp|YuuPay|
initiatedPsp|AlliedWallet|
initiatedPsp|WorldPayHCG|
initiatedPsp|Ochapay|
initiatedPsp|Redbaron|
initiatedPsp|Payr|
initiatedPsp|Argus|
initiatedPsp|Valitor|
initiatedPsp|SafeCharge|
initiatedPsp|Bambora|
initiatedPsp|Dibs|
initiatedPsp|Apco|
initiatedPsp|ASTech|
initiatedPsp|Fibonatix|
initiatedPsp|DreamsPay|
initiatedPsp|Clearhaus|
initiatedPsp|Citigate|
initiatedPsp|CreditGuard|
initiatedPsp|Powerpay21|
initiatedPsp|EMerchantPayWs|
initiatedPsp|Kluwp|
initiatedPsp|MiFinity|
initiatedPsp|Ingenico|
initiatedPsp|BamboraGa|
initiatedPsp|AltPayNet|
initiatedPsp|CcMock|
initiatedPsp|Neteller|
initiatedPsp|Skrill|
initiatedPsp|Paybox|
initiatedPsp|ClickandBuy|
initiatedPsp|PayPal|
initiatedPsp|Mbankomat|
initiatedPsp|Siru|
initiatedPsp|IBanq|
initiatedPsp|LavaPay|
initiatedPsp|VenusPoint|
initiatedPsp|IWallet|
initiatedPsp|Paysafecard|
initiatedPsp|Ukash|
initiatedPsp|Instadebit|
initiatedPsp|IDebit|
initiatedPsp|EcoPayz|
initiatedPsp|Fortumo|
initiatedPsp|AstroPayDirect|
initiatedPsp|Boku|
initiatedPsp|NeosurfVoucher|
initiatedPsp|PayGround|
initiatedPsp|SmsVoucher|
initiatedPsp|Flexepin|
initiatedPsp|Funanga|
initiatedPsp|Trustly|
initiatedPsp|Envoy|
initiatedPsp|Euteller|
initiatedPsp|Entercash|
initiatedPsp|InPay|
initiatedPsp|Poli|
initiatedPsp|Sofort|
initiatedPsp|Transferuj|
initiatedPsp|Adyen|
initiatedPsp|RapidPaymentsNetwork|
initiatedPsp|ManualBanking|
initiatedPsp|Citadel|
initiatedPsp|Safetypay|
initiatedPsp|EasyEft|
initiatedPsp|PugglePay|
initiatedPsp|Paylevo|
initiatedPsp|Seqr|
initiatedPsp|AccentPay|
initiatedPsp|PPro|
initiatedPsp|SecureTrading|
initiatedPsp|Dotpay|
initiatedPsp|Przelewy24|
initiatedPsp|MobileGiro|
initiatedPsp|ToditoCash|
initiatedPsp|TolaMobile|
initiatedPsp|Teleingreso|
initiatedPsp|FraudGuard|
initiatedPsp|FeatureSpace|
initiatedPsp|Undefined|
initiatedPsp|Unknown|
»» ageStatus|ERROR|
»» ageStatus|UNDER_AGE|
»» ageStatus|NOT_VERIFIED|
»» ageStatus|VERIFIED|
»» idStatus|ERROR|
»» idStatus|UNDER_AGE|
»» idStatus|NOT_VERIFIED|
»» idStatus|VERIFIED|
»» provider|CALLCREDIT|
»» provider|GBG|
»» status|VERIFIED|
»» status|VERIFICATION_IN_PROGRESS|
»» status|VERIFICATION_FAILED|
»» status|VERIFICATION_EXTERNAL_FAILURE|
»» status|VERIFICATION_FAILED_INVALID_USER_DATA|
»» status|NOT_VERIFIED|
»» status|BLOCKED|
»» status|UNDER_AGE|
»» status|UNKNOWN|
»» status|UNKNOWN_AGE|
»» ageStatus|ERROR|
»» ageStatus|UNDER_AGE|
»» ageStatus|NOT_VERIFIED|
»» ageStatus|VERIFIED|
»» idStatus|ERROR|
»» idStatus|UNDER_AGE|
»» idStatus|NOT_VERIFIED|
»» idStatus|VERIFIED|
»» provider|CALLCREDIT|
»» provider|GBG|
»» status|VERIFIED|
»» status|VERIFICATION_IN_PROGRESS|
»» status|VERIFICATION_FAILED|
»» status|VERIFICATION_EXTERNAL_FAILURE|
»» status|VERIFICATION_FAILED_INVALID_USER_DATA|
»» status|NOT_VERIFIED|
»» status|BLOCKED|
»» status|UNDER_AGE|
»» status|UNKNOWN|
»» status|UNKNOWN_AGE|
» ageStatus|ERROR|
» ageStatus|UNDER_AGE|
» ageStatus|NOT_VERIFIED|
» ageStatus|VERIFIED|
» idStatus|ERROR|
» idStatus|UNDER_AGE|
» idStatus|NOT_VERIFIED|
» idStatus|VERIFIED|
» provider|CALLCREDIT|
» provider|GBG|
» status|VERIFIED|
» status|VERIFICATION_IN_PROGRESS|
» status|VERIFICATION_FAILED|
» status|VERIFICATION_EXTERNAL_FAILURE|
» status|VERIFICATION_FAILED_INVALID_USER_DATA|
» status|NOT_VERIFIED|
» status|BLOCKED|
» status|UNDER_AGE|
» status|UNKNOWN|
» status|UNKNOWN_AGE|
» sex|FEMALE|
» sex|MALE|
» sex|UNKNOWN|
» sex|X|
» communicationChannel|EMAIL|
» communicationChannel|SMS|
method|Deposit|
method|Withdrawal|
method|Refund|
method|Cancel|
method|Void|
method|Chargeback|
method|ChargeBackWon|
psp|Entropay|
psp|PayPoint|
psp|PayLine|
psp|Realex|
psp|TicketSurf|
psp|Payvision|
psp|SwiftVoucher|
psp|Neosurf|
psp|Credorax|
psp|Wirecard|
psp|NxPay|
psp|EMP|
psp|Vamex|
psp|Payon|
psp|Pacnet|
psp|Borgun|
psp|WorldPay|
psp|PayEx|
psp|CC247|
psp|Computop|
psp|Ilixium|
psp|AstroPayCard|
psp|EMerchantPay|
psp|YuuPay|
psp|AlliedWallet|
psp|WorldPayHCG|
psp|Ochapay|
psp|Redbaron|
psp|Payr|
psp|Argus|
psp|Valitor|
psp|SafeCharge|
psp|Bambora|
psp|Dibs|
psp|Apco|
psp|ASTech|
psp|Fibonatix|
psp|DreamsPay|
psp|Clearhaus|
psp|Citigate|
psp|CreditGuard|
psp|Powerpay21|
psp|EMerchantPayWs|
psp|Kluwp|
psp|MiFinity|
psp|Ingenico|
psp|BamboraGa|
psp|AltPayNet|
psp|CcMock|
psp|Neteller|
psp|Skrill|
psp|Paybox|
psp|ClickandBuy|
psp|PayPal|
psp|Mbankomat|
psp|Siru|
psp|IBanq|
psp|LavaPay|
psp|VenusPoint|
psp|IWallet|
psp|Paysafecard|
psp|Ukash|
psp|Instadebit|
psp|IDebit|
psp|EcoPayz|
psp|Fortumo|
psp|AstroPayDirect|
psp|Boku|
psp|NeosurfVoucher|
psp|PayGround|
psp|SmsVoucher|
psp|Flexepin|
psp|Funanga|
psp|Trustly|
psp|Envoy|
psp|Euteller|
psp|Entercash|
psp|InPay|
psp|Poli|
psp|Sofort|
psp|Transferuj|
psp|Adyen|
psp|RapidPaymentsNetwork|
psp|ManualBanking|
psp|Citadel|
psp|Safetypay|
psp|EasyEft|
psp|PugglePay|
psp|Paylevo|
psp|Seqr|
psp|AccentPay|
psp|PPro|
psp|SecureTrading|
psp|Dotpay|
psp|Przelewy24|
psp|MobileGiro|
psp|ToditoCash|
psp|TolaMobile|
psp|Teleingreso|
psp|FraudGuard|
psp|FeatureSpace|
psp|Undefined|
psp|Unknown|
state|SUCCESSFUL|
state|REGISTERED|
state|PROCESSING|
state|WAITING_INPUT|
state|WAITING_APPROVAL|
state|FAILED|
state|INCONSISTENT|
state|CANCELLED|
state|REPROCESSING|
statusCode|SUCCESS|
statusCode|SUCCESS_WITHDRAWAL_APPROVAL|
statusCode|SUCCESS_WITHDRAWAL_AUTO_APPROVAL|
statusCode|SUCCESS_WAITING_CAPTURE|
statusCode|SUCCESS_WAITING_AUTO_CAPTURE|
statusCode|SUCCESS_AUTO_CAPTURED|
statusCode|SUCCESS_CAPTURED|
statusCode|REGISTERED|
statusCode|PROCESSING_PROVIDER|
statusCode|PROCESSING_MERCHANT|
statusCode|CONT_WITH_N3DS|
statusCode|REPROCESSING_PROVIDER|
statusCode|REPROCESSING_MERCHANT|
statusCode|WAITING_INPUT|
statusCode|WAITING_3D_SECURE|
statusCode|WAITING_DEPOSIT_CONFIRMATION|
statusCode|WAITING_NOTIFICATION|
statusCode|WAITING_DEPOSIT_APPROVAL|
statusCode|WAITING_WITHDRAWAL_APPROVAL|
statusCode|WAITING_DEPOSIT_AUTO_APPROVAL|
statusCode|WAITING_WITHDRAWAL_AUTO_APPROVAL|
statusCode|ERR_READ_TIMEOUT|
statusCode|ERR_REFERENCE_MISMATCH|
statusCode|ERR_INCONSISTENT_TRANSACTION|
statusCode|ERR_UNKNOWN_CALLBACK|
statusCode|ERR_IO_EXCEPTION|
statusCode|ERR_UNKNOWN_RESPONSE|
statusCode|ERR_SYSTEM_ERROR|
statusCode|ERR_FAILED_TO_CONNECT|
statusCode|ERR_DECLINED_BAD_REQUEST|
statusCode|ERR_DECLINED_FRAUD|
statusCode|ERR_DECLINED_NO_FUNDS|
statusCode|ERR_DECLINED_ACCOUNT_SUSPENDED|
statusCode|ERR_DECLINED_OTHER_REASON|
statusCode|ERR_DECLINED_CONTACT_SUPPORT|
statusCode|ERR_DECLINED_CONFIG_ERROR|
statusCode|ERR_NOT_AUTHENTICATED|
statusCode|ERR_INVALID_RESPONSE|
statusCode|ERR_DECLINED_REQ_BLOCKED|
statusCode|ERR_PSP_OUT_OF_SERVICE|
statusCode|ERR_DECLINED_NOT_AUTHORIZED|
statusCode|ERR_RESPONSE_CODE_UNKNOWN|
statusCode|ERR_PSP_ACCOUNT_USED_BY_OTHER_USER|
statusCode|ERR_PSP_ACCOUNT_NOT_USED|
statusCode|ERR_TOO_MANY_PSP_ACCOUNTS|
statusCode|ERR_DECLINED_DUPLICATE_TX_ID|
statusCode|ERR_DECLINED_INVALID_ACCOUNT_NUMBER|
statusCode|ERR_MERCHANT_OUT_OF_SERVICE|
statusCode|ERR_DECLINED_LIMIT_OVERDRAWN|
statusCode|ERR_MERCHANT_RESPONSE_CODE_UNKNOWN|
statusCode|ERR_DECLINED_NO_PROVIDER_FOUND|
statusCode|ERR_DECLINED_PROVIDER_ACCOUNT_CONFIG_ERROR|
statusCode|ERR_MERCHANT_INVALID_RESPONSE|
statusCode|ERR_DECLINED_3D_VALIDATION_FAILED|
statusCode|ERR_DECLINED_3D_EXPIRED|
statusCode|ERR_VAULTIQ_OUT_OF_SERVICE|
statusCode|ERR_DECLINED_IP_BLOCKED|
statusCode|ERR_DECLINED_BIN_BLOCKED|
statusCode|ERR_VAULTIQ_UNKNOWN_ACCOUNT|
statusCode|ERR_DECLINED_KYC_BLOCK|
statusCode|ERR_DECLINED_KYC_USER_UNDER_AGE|
statusCode|ERR_DECLINED_KYC_CHECK_FAILED|
statusCode|ERR_DECLINED_BIC_BLOCK|
statusCode|ERR_DECLINED_EXPIRED|
statusCode|ERR_DECLINED_REPEAT_CANCELLED|
statusCode|ERR_DECLINED_CURRENCY_NOT_SUPPORTED|
statusCode|ERR_DECLINED_FRAUD_SCORE_THRESHOLD_EXCEEDED|
statusCode|ERR_DECLINED_MERCHANT_NOT_FOUND|
statusCode|ERR_DECLINED_MERCHANT_NOT_ENABLED|
statusCode|ERR_DECLINED_PROVIDER_NOT_ENABLED|
statusCode|ERR_DECLINED_UNDER_MAINTENANCE|
statusCode|ERR_NO_REFERRAL_TX_FOUND|
statusCode|ERR_DECLINE_TX_NOT_FOUND|
statusCode|ERR_DECLINE_COUNTRY_NOT_SUPPORTED|
statusCode|ERR_DECLINED_NOT_SUPPORTED_PAYMENT_METHOD_FRAUD|
statusCode|ERR_DECLINED_FRAUD_PROVIDER_ACCOUNT_CONFIG_ERROR|
statusCode|ERR_CANCELLED_BY_USER|
statusCode|ERR_CANCELLED_BY_MERCHANT|
statusCode|ERR_CANCELLED_BY_PSP|
txType|CreditcardDeposit|
txType|CreditcardWithdrawal|
txType|EntropayDeposit|
txType|ICardDeposit|
txType|ICardWithdrawal|
txType|NetellerDeposit|
txType|NetellerWithdrawal|
txType|SkrillDeposit|
txType|SkrillWithdrawal|
txType|PayboxDeposit|
txType|ClickandBuyDeposit|
txType|ClickandBuyWithdrawal|
txType|PayPalDeposit|
txType|PayPalWithdrawal|
txType|MbankomatDeposit|
txType|IBanqDeposit|
txType|IBanqWithdrawal|
txType|LavaPayDeposit|
txType|LavaPayWithdrawal|
txType|InstadebitDeposit|
txType|InstadebitWithdrawal|
txType|IDebitDeposit|
txType|IDebitWithdrawal|
txType|EcoPayzDeposit|
txType|EcoPayzWithdrawal|
txType|AstroPayCardWithdrawal|
txType|AstroPayDirectDeposit|
txType|AstroPayDirectWithdrawal|
txType|VenusPointDeposit|
txType|VenusPointWithdrawal|
txType|MiFinityEWalletDeposit|
txType|MiFinityEWalletWithdrawal|
txType|IWalletDeposit|
txType|IWalletWithdrawal|
txType|EutellerDeposit|
txType|EnvoyDeposit|
txType|EnvoyWithdrawal|
txType|TrustlyDeposit|
txType|TrustlyWithdrawal|
txType|BankDeposit|
txType|BankLocalWithdrawal|
txType|BankIBANWithdrawal|
txType|BankIntIBANWithdrawal|
txType|IdealDeposit|
txType|ChinaUnionPayDeposit|
txType|BankIntlWithdrawal|
txType|ChinaUnionPayWithdrawal|
txType|BoletoBancarioDeposit|
txType|PaysafecardDeposit|
txType|UkashDeposit|
txType|UkashWithdrawal|
txType|PaysafecardWithdrawal|
txType|CashlibDeposit|
txType|TicketPremiumDeposit|
txType|FlexepinDeposit|
txType|FunangaDeposit|
txType|VisaVoucherDeposit|
txType|GiftcardDeposit|
txType|PugglePayDeposit|
txType|PaylevoDeposit|
txType|YuuCollectDeposit|
txType|NeosurfVoucherDeposit|
txType|OxxoDeposit|
txType|SeqrDeposit|
txType|SiruDeposit|
txType|SiruStatus|
txType|SiruPriceCalc|
txType|FortumoDeposit|
txType|BokuDeposit|
txType|BlikDeposit|
txType|PayGroundDeposit|
txType|SmsVoucherDeposit|
txType|QiwiDeposit|
txType|QiwiWithdrawal|
txType|AccentPayDeposit|
txType|AccentPayWithdrawal|
txType|WorldPayDeposit|
txType|WorldPayWithdrawal|
txType|PProDeposit|
txType|PProWithdrawal|
txType|EProPaymentWallDeposit|
txType|ApcoDeposit|
txType|SecureTradingDeposit|
txType|DotpayDeposit|
txType|Przelewy24Deposit|
txType|SweGiroDeposit|
txType|ToditoCashDeposit|
txType|TolaMobileDeposit|
txType|TeleingresoDeposit|
txType|ManualChargeback|
txType|ManualRefund|
txType|ManualCancel|
txType|ManualVoid|
txType|ManualChargeBackWon|
txType|Refund|
txType|Cancel|
txType|Void|
txType|Capture|
» status|ACTIVE|
» status|INACTIVE|
» status|NEW|
» status|DELETED|
» status|BLOCKED|
» type|CreditcardDeposit|
» type|CreditcardWithdrawal|
» type|EntropayDeposit|
» type|ICardDeposit|
» type|ICardWithdrawal|
» type|NetellerDeposit|
» type|NetellerWithdrawal|
» type|SkrillDeposit|
» type|SkrillWithdrawal|
» type|PayboxDeposit|
» type|ClickandBuyDeposit|
» type|ClickandBuyWithdrawal|
» type|PayPalDeposit|
» type|PayPalWithdrawal|
» type|MbankomatDeposit|
» type|IBanqDeposit|
» type|IBanqWithdrawal|
» type|LavaPayDeposit|
» type|LavaPayWithdrawal|
» type|InstadebitDeposit|
» type|InstadebitWithdrawal|
» type|IDebitDeposit|
» type|IDebitWithdrawal|
» type|EcoPayzDeposit|
» type|EcoPayzWithdrawal|
» type|AstroPayCardWithdrawal|
» type|AstroPayDirectDeposit|
» type|AstroPayDirectWithdrawal|
» type|VenusPointDeposit|
» type|VenusPointWithdrawal|
» type|MiFinityEWalletDeposit|
» type|MiFinityEWalletWithdrawal|
» type|IWalletDeposit|
» type|IWalletWithdrawal|
» type|EutellerDeposit|
» type|EnvoyDeposit|
» type|EnvoyWithdrawal|
» type|TrustlyDeposit|
» type|TrustlyWithdrawal|
» type|BankDeposit|
» type|BankLocalWithdrawal|
» type|BankIBANWithdrawal|
» type|BankIntIBANWithdrawal|
» type|IdealDeposit|
» type|ChinaUnionPayDeposit|
» type|BankIntlWithdrawal|
» type|ChinaUnionPayWithdrawal|
» type|BoletoBancarioDeposit|
» type|PaysafecardDeposit|
» type|UkashDeposit|
» type|UkashWithdrawal|
» type|PaysafecardWithdrawal|
» type|CashlibDeposit|
» type|TicketPremiumDeposit|
» type|FlexepinDeposit|
» type|FunangaDeposit|
» type|VisaVoucherDeposit|
» type|GiftcardDeposit|
» type|PugglePayDeposit|
» type|PaylevoDeposit|
» type|YuuCollectDeposit|
» type|NeosurfVoucherDeposit|
» type|OxxoDeposit|
» type|SeqrDeposit|
» type|SiruDeposit|
» type|SiruStatus|
» type|SiruPriceCalc|
» type|FortumoDeposit|
» type|BokuDeposit|
» type|BlikDeposit|
» type|PayGroundDeposit|
» type|SmsVoucherDeposit|
» type|QiwiDeposit|
» type|QiwiWithdrawal|
» type|AccentPayDeposit|
» type|AccentPayWithdrawal|
» type|WorldPayDeposit|
» type|WorldPayWithdrawal|
» type|PProDeposit|
» type|PProWithdrawal|
» type|EProPaymentWallDeposit|
» type|ApcoDeposit|
» type|SecureTradingDeposit|
» type|DotpayDeposit|
» type|Przelewy24Deposit|
» type|SweGiroDeposit|
» type|ToditoCashDeposit|
» type|TolaMobileDeposit|
» type|TeleingresoDeposit|
» type|ManualChargeback|
» type|ManualRefund|
» type|ManualCancel|
» type|ManualVoid|
» type|ManualChargeBackWon|
» type|Refund|
» type|Cancel|
» type|Void|
» type|Capture|


## PaymentTxResponseDto

<a name="schemapaymenttxresponsedto"></a>

```json
{
  "created": "2017-09-20T20:17:12Z",
  "errorMessage": "string",
  "id": 0,
  "lastUpdated": "2017-09-20T20:17:12Z",
  "merchantId": 0,
  "pspStatusCode": "string",
  "state": "SUCCESSFUL",
  "statusCode": "SUCCESS"
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
created|string(date-time)|false|No description
errorMessage|string|false|No description
id|integer(int64)|false|No description
lastUpdated|string(date-time)|false|No description
merchantId|integer(int32)|false|No description
pspStatusCode|string|false|No description
state|string|false|No description
statusCode|string|false|No description


#### Enumerated Values

|Property|Value|
|---|---|
state|SUCCESSFUL|
state|REGISTERED|
state|PROCESSING|
state|WAITING_INPUT|
state|WAITING_APPROVAL|
state|FAILED|
state|INCONSISTENT|
state|CANCELLED|
state|REPROCESSING|
statusCode|SUCCESS|
statusCode|SUCCESS_WITHDRAWAL_APPROVAL|
statusCode|SUCCESS_WITHDRAWAL_AUTO_APPROVAL|
statusCode|SUCCESS_WAITING_CAPTURE|
statusCode|SUCCESS_WAITING_AUTO_CAPTURE|
statusCode|SUCCESS_AUTO_CAPTURED|
statusCode|SUCCESS_CAPTURED|
statusCode|REGISTERED|
statusCode|PROCESSING_PROVIDER|
statusCode|PROCESSING_MERCHANT|
statusCode|CONT_WITH_N3DS|
statusCode|REPROCESSING_PROVIDER|
statusCode|REPROCESSING_MERCHANT|
statusCode|WAITING_INPUT|
statusCode|WAITING_3D_SECURE|
statusCode|WAITING_DEPOSIT_CONFIRMATION|
statusCode|WAITING_NOTIFICATION|
statusCode|WAITING_DEPOSIT_APPROVAL|
statusCode|WAITING_WITHDRAWAL_APPROVAL|
statusCode|WAITING_DEPOSIT_AUTO_APPROVAL|
statusCode|WAITING_WITHDRAWAL_AUTO_APPROVAL|
statusCode|ERR_READ_TIMEOUT|
statusCode|ERR_REFERENCE_MISMATCH|
statusCode|ERR_INCONSISTENT_TRANSACTION|
statusCode|ERR_UNKNOWN_CALLBACK|
statusCode|ERR_IO_EXCEPTION|
statusCode|ERR_UNKNOWN_RESPONSE|
statusCode|ERR_SYSTEM_ERROR|
statusCode|ERR_FAILED_TO_CONNECT|
statusCode|ERR_DECLINED_BAD_REQUEST|
statusCode|ERR_DECLINED_FRAUD|
statusCode|ERR_DECLINED_NO_FUNDS|
statusCode|ERR_DECLINED_ACCOUNT_SUSPENDED|
statusCode|ERR_DECLINED_OTHER_REASON|
statusCode|ERR_DECLINED_CONTACT_SUPPORT|
statusCode|ERR_DECLINED_CONFIG_ERROR|
statusCode|ERR_NOT_AUTHENTICATED|
statusCode|ERR_INVALID_RESPONSE|
statusCode|ERR_DECLINED_REQ_BLOCKED|
statusCode|ERR_PSP_OUT_OF_SERVICE|
statusCode|ERR_DECLINED_NOT_AUTHORIZED|
statusCode|ERR_RESPONSE_CODE_UNKNOWN|
statusCode|ERR_PSP_ACCOUNT_USED_BY_OTHER_USER|
statusCode|ERR_PSP_ACCOUNT_NOT_USED|
statusCode|ERR_TOO_MANY_PSP_ACCOUNTS|
statusCode|ERR_DECLINED_DUPLICATE_TX_ID|
statusCode|ERR_DECLINED_INVALID_ACCOUNT_NUMBER|
statusCode|ERR_MERCHANT_OUT_OF_SERVICE|
statusCode|ERR_DECLINED_LIMIT_OVERDRAWN|
statusCode|ERR_MERCHANT_RESPONSE_CODE_UNKNOWN|
statusCode|ERR_DECLINED_NO_PROVIDER_FOUND|
statusCode|ERR_DECLINED_PROVIDER_ACCOUNT_CONFIG_ERROR|
statusCode|ERR_MERCHANT_INVALID_RESPONSE|
statusCode|ERR_DECLINED_3D_VALIDATION_FAILED|
statusCode|ERR_DECLINED_3D_EXPIRED|
statusCode|ERR_VAULTIQ_OUT_OF_SERVICE|
statusCode|ERR_DECLINED_IP_BLOCKED|
statusCode|ERR_DECLINED_BIN_BLOCKED|
statusCode|ERR_VAULTIQ_UNKNOWN_ACCOUNT|
statusCode|ERR_DECLINED_KYC_BLOCK|
statusCode|ERR_DECLINED_KYC_USER_UNDER_AGE|
statusCode|ERR_DECLINED_KYC_CHECK_FAILED|
statusCode|ERR_DECLINED_BIC_BLOCK|
statusCode|ERR_DECLINED_EXPIRED|
statusCode|ERR_DECLINED_REPEAT_CANCELLED|
statusCode|ERR_DECLINED_CURRENCY_NOT_SUPPORTED|
statusCode|ERR_DECLINED_FRAUD_SCORE_THRESHOLD_EXCEEDED|
statusCode|ERR_DECLINED_MERCHANT_NOT_FOUND|
statusCode|ERR_DECLINED_MERCHANT_NOT_ENABLED|
statusCode|ERR_DECLINED_PROVIDER_NOT_ENABLED|
statusCode|ERR_DECLINED_UNDER_MAINTENANCE|
statusCode|ERR_NO_REFERRAL_TX_FOUND|
statusCode|ERR_DECLINE_TX_NOT_FOUND|
statusCode|ERR_DECLINE_COUNTRY_NOT_SUPPORTED|
statusCode|ERR_DECLINED_NOT_SUPPORTED_PAYMENT_METHOD_FRAUD|
statusCode|ERR_DECLINED_FRAUD_PROVIDER_ACCOUNT_CONFIG_ERROR|
statusCode|ERR_CANCELLED_BY_USER|
statusCode|ERR_CANCELLED_BY_MERCHANT|
statusCode|ERR_CANCELLED_BY_PSP|


## RefundSummary

<a name="schemarefundsummary"></a>

```json
{
  "originalAmount": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "originalTxAmount": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "refundedTxAmount": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  },
  "remainingTxAmount": {
    "amount": 0,
    "amountInFractionUnit": 0,
    "currency": "string",
    "currencyCode": "string",
    "currencyNumeric3Code": "string",
    "fractionDigits": 0,
    "negative": true,
    "positive": true,
    "zero": true
  }
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
originalAmount|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
originalTxAmount|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
refundedTxAmount|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
remainingTxAmount|[Money](#schemamoney)|false|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description



## SuccessStoreEntity

<a name="schemasuccessstoreentity"></a>

```json
{
  "accessKey": "string",
  "alreadyStored": true,
  "clientEncryptionKey": "string",
  "localWrappedEncryptionKey": "string",
  "maskedPan": "string",
  "vaultiqKey": "string"
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
accessKey|string|false|No description
alreadyStored|boolean|false|No description
clientEncryptionKey|string|false|No description
localWrappedEncryptionKey|string|false|No description
maskedPan|string|false|No description
vaultiqKey|string|false|No description



## UserPspAccountDetails

<a name="schemauserpspaccountdetails"></a>

```json
{
  "accountUuid": "string",
  "blockReason": "string",
  "description": "string",
  "directDebit": true,
  "expiryDate": "2017-09-20T20:17:12Z",
  "extAccountRefId": "string",
  "firstUsed": "2017-09-20T20:17:12Z",
  "hashedAccount": "string",
  "holder": "string",
  "id": 0,
  "lastSuccess": "2017-09-20T20:17:12Z",
  "lastUsed": "2017-09-20T20:17:12Z",
  "maskedAccount": "string",
  "merchantId": 0,
  "merchantUserId": "string",
  "new": true,
  "noFailedTx": 0,
  "noSuccessfulTx": 0,
  "providerType": "string",
  "startDate": "2017-09-20T20:17:12Z",
  "status": "ACTIVE",
  "storeAccount": true,
  "type": "CreditcardDeposit",
  "vaultData": {
    "property1": "string",
    "property2": "string"
  },
  "vaultIQData": {
    "property1": "string",
    "property2": "string"
  },
  "vaultIQUuid": "string",
  "vaultUuid": "string",
  "visibilityResetAllowed": true,
  "visible": true
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
accountUuid|string|false|No description
blockReason|string|false|No description
description|string|false|No description
directDebit|boolean|false|No description
expiryDate|string(date-time)|false|No description
extAccountRefId|string|false|No description
firstUsed|string(date-time)|false|No description
hashedAccount|string|false|No description
holder|string|false|No description
id|integer(int64)|false|No description
lastSuccess|string(date-time)|false|No description
lastUsed|string(date-time)|false|No description
maskedAccount|string|false|No description
merchantId|integer(int32)|false|No description
merchantUserId|string|false|No description
new|boolean|false|No description
noFailedTx|integer(int32)|false|No description
noSuccessfulTx|integer(int32)|false|No description
providerType|string|false|No description
startDate|string(date-time)|false|No description
status|string|false|No description
storeAccount|boolean|false|No description
type|string|false|No description
vaultData|object|false|No description
vaultIQData|object|false|No description
vaultIQUuid|string|false|No description
vaultUuid|string|false|No description
visibilityResetAllowed|boolean|false|No description
visible|boolean|false|No description


#### Enumerated Values

|Property|Value|
|---|---|
status|ACTIVE|
status|INACTIVE|
status|NEW|
status|DELETED|
status|BLOCKED|
type|CreditcardDeposit|
type|CreditcardWithdrawal|
type|EntropayDeposit|
type|ICardDeposit|
type|ICardWithdrawal|
type|NetellerDeposit|
type|NetellerWithdrawal|
type|SkrillDeposit|
type|SkrillWithdrawal|
type|PayboxDeposit|
type|ClickandBuyDeposit|
type|ClickandBuyWithdrawal|
type|PayPalDeposit|
type|PayPalWithdrawal|
type|MbankomatDeposit|
type|IBanqDeposit|
type|IBanqWithdrawal|
type|LavaPayDeposit|
type|LavaPayWithdrawal|
type|InstadebitDeposit|
type|InstadebitWithdrawal|
type|IDebitDeposit|
type|IDebitWithdrawal|
type|EcoPayzDeposit|
type|EcoPayzWithdrawal|
type|AstroPayCardWithdrawal|
type|AstroPayDirectDeposit|
type|AstroPayDirectWithdrawal|
type|VenusPointDeposit|
type|VenusPointWithdrawal|
type|MiFinityEWalletDeposit|
type|MiFinityEWalletWithdrawal|
type|IWalletDeposit|
type|IWalletWithdrawal|
type|EutellerDeposit|
type|EnvoyDeposit|
type|EnvoyWithdrawal|
type|TrustlyDeposit|
type|TrustlyWithdrawal|
type|BankDeposit|
type|BankLocalWithdrawal|
type|BankIBANWithdrawal|
type|BankIntIBANWithdrawal|
type|IdealDeposit|
type|ChinaUnionPayDeposit|
type|BankIntlWithdrawal|
type|ChinaUnionPayWithdrawal|
type|BoletoBancarioDeposit|
type|PaysafecardDeposit|
type|UkashDeposit|
type|UkashWithdrawal|
type|PaysafecardWithdrawal|
type|CashlibDeposit|
type|TicketPremiumDeposit|
type|FlexepinDeposit|
type|FunangaDeposit|
type|VisaVoucherDeposit|
type|GiftcardDeposit|
type|PugglePayDeposit|
type|PaylevoDeposit|
type|YuuCollectDeposit|
type|NeosurfVoucherDeposit|
type|OxxoDeposit|
type|SeqrDeposit|
type|SiruDeposit|
type|SiruStatus|
type|SiruPriceCalc|
type|FortumoDeposit|
type|BokuDeposit|
type|BlikDeposit|
type|PayGroundDeposit|
type|SmsVoucherDeposit|
type|QiwiDeposit|
type|QiwiWithdrawal|
type|AccentPayDeposit|
type|AccentPayWithdrawal|
type|WorldPayDeposit|
type|WorldPayWithdrawal|
type|PProDeposit|
type|PProWithdrawal|
type|EProPaymentWallDeposit|
type|ApcoDeposit|
type|SecureTradingDeposit|
type|DotpayDeposit|
type|Przelewy24Deposit|
type|SweGiroDeposit|
type|ToditoCashDeposit|
type|TolaMobileDeposit|
type|TeleingresoDeposit|
type|ManualChargeback|
type|ManualRefund|
type|ManualCancel|
type|ManualVoid|
type|ManualChargeBackWon|
type|Refund|
type|Cancel|
type|Void|
type|Capture|


## ConfigValueLoader_object_

<a name="schemaconfigvalueloader_object_"></a>

```json
{} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
undefined|object|false|No description



## JsonResult_RefundSummary_

<a name="schemajsonresult_refundsummary_"></a>

```json
{
  "errors": {
    "property1": "string",
    "property2": "string"
  },
  "message": "string",
  "result": {
    "originalAmount": {
      "amount": 0,
      "amountInFractionUnit": 0,
      "currency": "string",
      "currencyCode": "string",
      "currencyNumeric3Code": "string",
      "fractionDigits": 0,
      "negative": true,
      "positive": true,
      "zero": true
    },
    "originalTxAmount": {
      "amount": 0,
      "amountInFractionUnit": 0,
      "currency": "string",
      "currencyCode": "string",
      "currencyNumeric3Code": "string",
      "fractionDigits": 0,
      "negative": true,
      "positive": true,
      "zero": true
    },
    "refundedTxAmount": {
      "amount": 0,
      "amountInFractionUnit": 0,
      "currency": "string",
      "currencyCode": "string",
      "currencyNumeric3Code": "string",
      "fractionDigits": 0,
      "negative": true,
      "positive": true,
      "zero": true
    },
    "remainingTxAmount": {
      "amount": 0,
      "amountInFractionUnit": 0,
      "currency": "string",
      "currencyCode": "string",
      "currencyNumeric3Code": "string",
      "fractionDigits": 0,
      "negative": true,
      "positive": true,
      "zero": true
    }
  },
  "success": true,
  "total": 0
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
errors|object|false|No description
message|string|false|No description
result|[RefundSummary](#schemarefundsummary)|false|No description
» originalAmount|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» originalTxAmount|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» refundedTxAmount|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» remainingTxAmount|[Money](#schemamoney)|false|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
success|boolean|false|No description
total|integer(int64)|false|No description



## Matcher_DecisionTableQuery_

<a name="schemamatcher_decisiontablequery_"></a>

```json
{} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
undefined|object|false|No description



## Matcher_object_

<a name="schemamatcher_object_"></a>

```json
{} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
undefined|object|false|No description





