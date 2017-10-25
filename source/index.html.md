---
title: PaymentIQ Admin API v1.3.5
language_tabs: []
toc_footers: []
includes: []
search: true
highlight_theme: darkula
---

# PaymentIQ Admin API v1.3.5

> Scroll down for example requests and responses.

The PaymentIQ Admin API is organized around REST and uses JSON. It is language independent and supported
for virtually all programming languages.

Base URLs:

* <a href="/paymentiq">/paymentiq</a>



Email: <a href="mailto:technicalsupport@bambora.com">PaymentIQ</a> Web: <a href="https://backoffice.paymentiq.io">PaymentIQ</a> 
License: <a href="https://backoffice.paymentiq.io">PaymentIQ 1.0</a>

# Authentication



- oAuth2 authentication test 23. 

    - Flow: password

    - Token URL = [oauth/token](oauth/token)

|Scope|Scope Description|
|---|---|
|default|default scope|




# Payment Admin

## approve

`POST /backoffice/api/v2/paymenttx/approve/{txId}`

*approve*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId


> Example responses

```json
{
  "created": "2017-09-15",
  "errorMessage": "Failed transaction",
  "id": "250EAO",
  "lastUpdated": "2017-09-16",
  "merchantId": 100000000,
  "pspStatusCode": "10001",
  "state": "0",
  "statusCode": "500"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentActionResponse](#schemapaymentactionresponse)
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction not found|None
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## cancel

`POST /backoffice/api/v2/paymenttx/cancel/{txId}`

*cancel*

> Body parameter

```json
{
  "amount": "16.22",
  "authAmount": "123.2",
  "feeAmount": "32.32",
  "force": false,
  "info": "Suspect fraud behaviour",
  "tagId": "100",
  "txAmount": "14.00"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetailsRequest](#schemacorrectiondetailsrequest)|false|details
» amount|body|string|true|Amount
» authAmount|body|string|true|Auth amount
» feeAmount|body|string|true|Fee amount
» force|body|boolean|true|Force correction
» info|body|string|true|Information to provide reason
» tagId|body|string|true|Tag id
» txAmount|body|string|true|Transaction amount


> Example responses

```json
{
  "created": "2017-09-15",
  "errorMessage": "Failed transaction",
  "id": "250EAO",
  "lastUpdated": "2017-09-16",
  "merchantId": 100000000,
  "pspStatusCode": "10001",
  "state": "0",
  "statusCode": "500"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentActionResponse](#schemapaymentactionresponse)
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction not found|None
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## capture

`POST /backoffice/api/v2/paymenttx/capture/{txId}`

*capture*

> Body parameter

```json
{
  "amount": "16.22",
  "authAmount": "123.2",
  "feeAmount": "32.32",
  "force": false,
  "info": "Suspect fraud behaviour",
  "tagId": "100",
  "txAmount": "14.00"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetailsRequest](#schemacorrectiondetailsrequest)|true|details
» amount|body|string|true|Amount
» authAmount|body|string|true|Auth amount
» feeAmount|body|string|true|Fee amount
» force|body|boolean|true|Force correction
» info|body|string|true|Information to provide reason
» tagId|body|string|true|Tag id
» txAmount|body|string|true|Transaction amount


> Example responses

```json
{
  "created": "2017-09-15",
  "errorMessage": "Failed transaction",
  "id": "250EAO",
  "lastUpdated": "2017-09-16",
  "merchantId": 100000000,
  "pspStatusCode": "10001",
  "state": "0",
  "statusCode": "500"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentActionResponse](#schemapaymentactionresponse)
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction not found|None
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## correctionChargeback

`POST /backoffice/api/v2/paymenttx/correction/chargeback/{txId}`

*correctionChargeback*

> Body parameter

```json
{
  "amount": "16.22",
  "authAmount": "123.2",
  "feeAmount": "32.32",
  "force": false,
  "info": "Suspect fraud behaviour",
  "tagId": "100",
  "txAmount": "14.00"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetailsRequest](#schemacorrectiondetailsrequest)|true|details
» amount|body|string|true|Amount
» authAmount|body|string|true|Auth amount
» feeAmount|body|string|true|Fee amount
» force|body|boolean|true|Force correction
» info|body|string|true|Information to provide reason
» tagId|body|string|true|Tag id
» txAmount|body|string|true|Transaction amount


> Example responses

```json
{
  "created": "2017-09-15",
  "errorMessage": "Failed transaction",
  "id": "250EAO",
  "lastUpdated": "2017-09-16",
  "merchantId": 100000000,
  "pspStatusCode": "10001",
  "state": "0",
  "statusCode": "500"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentActionResponse](#schemapaymentactionresponse)
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction not found|None
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## correctionChargebackWon

`POST /backoffice/api/v2/paymenttx/correction/chargebackwon/{txId}`

*correctionChargebackWon*

> Body parameter

```json
{
  "amount": "16.22",
  "authAmount": "123.2",
  "feeAmount": "32.32",
  "force": false,
  "info": "Suspect fraud behaviour",
  "tagId": "100",
  "txAmount": "14.00"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetailsRequest](#schemacorrectiondetailsrequest)|true|details
» amount|body|string|true|Amount
» authAmount|body|string|true|Auth amount
» feeAmount|body|string|true|Fee amount
» force|body|boolean|true|Force correction
» info|body|string|true|Information to provide reason
» tagId|body|string|true|Tag id
» txAmount|body|string|true|Transaction amount


> Example responses

```json
{
  "created": "2017-09-15",
  "errorMessage": "Failed transaction",
  "id": "250EAO",
  "lastUpdated": "2017-09-16",
  "merchantId": 100000000,
  "pspStatusCode": "10001",
  "state": "0",
  "statusCode": "500"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentActionResponse](#schemapaymentactionresponse)
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction not found|None
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## correctionPartialRefund

`POST /backoffice/api/v2/paymenttx/correction/partialrefund/{txId}`

*correctionPartialRefund*

> Body parameter

```json
{
  "amount": "16.22",
  "authAmount": "123.2",
  "feeAmount": "32.32",
  "force": false,
  "info": "Suspect fraud behaviour",
  "tagId": "100",
  "txAmount": "14.00"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetailsRequest](#schemacorrectiondetailsrequest)|true|details
» amount|body|string|true|Amount
» authAmount|body|string|true|Auth amount
» feeAmount|body|string|true|Fee amount
» force|body|boolean|true|Force correction
» info|body|string|true|Information to provide reason
» tagId|body|string|true|Tag id
» txAmount|body|string|true|Transaction amount


> Example responses

```json
{
  "created": "2017-09-15",
  "errorMessage": "Failed transaction",
  "id": "250EAO",
  "lastUpdated": "2017-09-16",
  "merchantId": 100000000,
  "pspStatusCode": "10001",
  "state": "0",
  "statusCode": "500"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentActionResponse](#schemapaymentactionresponse)
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction not found|None
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## correctionRefund

`POST /backoffice/api/v2/paymenttx/correction/refund/{txId}`

*correctionRefund*

> Body parameter

```json
{
  "amount": "16.22",
  "authAmount": "123.2",
  "feeAmount": "32.32",
  "force": false,
  "info": "Suspect fraud behaviour",
  "tagId": "100",
  "txAmount": "14.00"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetailsRequest](#schemacorrectiondetailsrequest)|true|details
» amount|body|string|true|Amount
» authAmount|body|string|true|Auth amount
» feeAmount|body|string|true|Fee amount
» force|body|boolean|true|Force correction
» info|body|string|true|Information to provide reason
» tagId|body|string|true|Tag id
» txAmount|body|string|true|Transaction amount


> Example responses

```json
{
  "created": "2017-09-15",
  "errorMessage": "Failed transaction",
  "id": "250EAO",
  "lastUpdated": "2017-09-16",
  "merchantId": 100000000,
  "pspStatusCode": "10001",
  "state": "0",
  "statusCode": "500"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentActionResponse](#schemapaymentactionresponse)
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction not found|None
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## correctionVoid

`POST /backoffice/api/v2/paymenttx/correction/void/{txId}`

*correctionVoid*

> Body parameter

```json
{
  "amount": "16.22",
  "authAmount": "123.2",
  "feeAmount": "32.32",
  "force": false,
  "info": "Suspect fraud behaviour",
  "tagId": "100",
  "txAmount": "14.00"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetailsRequest](#schemacorrectiondetailsrequest)|true|details
» amount|body|string|true|Amount
» authAmount|body|string|true|Auth amount
» feeAmount|body|string|true|Fee amount
» force|body|boolean|true|Force correction
» info|body|string|true|Information to provide reason
» tagId|body|string|true|Tag id
» txAmount|body|string|true|Transaction amount


> Example responses

```json
{
  "created": "2017-09-15",
  "errorMessage": "Failed transaction",
  "id": "250EAO",
  "lastUpdated": "2017-09-16",
  "merchantId": 100000000,
  "pspStatusCode": "10001",
  "state": "0",
  "statusCode": "500"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentActionResponse](#schemapaymentactionresponse)
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction not found|None
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## deny

`POST /backoffice/api/v2/paymenttx/deny/{txId}`

*deny*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId


> Example responses

```json
{
  "created": "2017-09-15",
  "errorMessage": "Failed transaction",
  "id": "250EAO",
  "lastUpdated": "2017-09-16",
  "merchantId": 100000000,
  "pspStatusCode": "10001",
  "state": "0",
  "statusCode": "500"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentActionResponse](#schemapaymentactionresponse)
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction not found|None
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## forceFailed

`POST /backoffice/api/v2/paymenttx/force/failed/{txId}`

*forceFailed*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId


> Example responses

```json
{
  "created": "2017-09-15",
  "errorMessage": "Failed transaction",
  "id": "250EAO",
  "lastUpdated": "2017-09-16",
  "merchantId": 100000000,
  "pspStatusCode": "10001",
  "state": "0",
  "statusCode": "500"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentActionResponse](#schemapaymentactionresponse)
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction not found|None
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## forceInconsistent

`POST /backoffice/api/v2/paymenttx/force/inconsistent/{txId}`

*forceInconsistent*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId


> Example responses

### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentActionResponse](#schemapaymentactionresponse)
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction not found|None
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## forceSuccessful

`POST /backoffice/api/v2/paymenttx/force/successful/{txId}`

*forceSuccessful*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId


> Example responses

```json
{
  "created": "2017-09-15",
  "errorMessage": "Failed transaction",
  "id": "250EAO",
  "lastUpdated": "2017-09-16",
  "merchantId": 100000000,
  "pspStatusCode": "10001",
  "state": "0",
  "statusCode": "500"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentActionResponse](#schemapaymentactionresponse)
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction not found|None
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## refund

`POST /backoffice/api/v2/paymenttx/partialrefund/{txId}`

*refund*

> Body parameter

```json
{
  "amount": "16.22",
  "authAmount": "123.2",
  "feeAmount": "32.32",
  "force": false,
  "info": "Suspect fraud behaviour",
  "tagId": "100",
  "txAmount": "14.00"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetailsRequest](#schemacorrectiondetailsrequest)|false|details
» amount|body|string|true|Amount
» authAmount|body|string|true|Auth amount
» feeAmount|body|string|true|Fee amount
» force|body|boolean|true|Force correction
» info|body|string|true|Information to provide reason
» tagId|body|string|true|Tag id
» txAmount|body|string|true|Transaction amount


> Example responses

```json
{
  "created": "2017-09-15",
  "errorMessage": "Failed transaction",
  "id": "250EAO",
  "lastUpdated": "2017-09-16",
  "merchantId": 100000000,
  "pspStatusCode": "10001",
  "state": "0",
  "statusCode": "500"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentActionResponse](#schemapaymentactionresponse)
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction not found|None
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## remainingRefund

`GET /backoffice/api/v2/paymenttx/refund/summary/{txId}`

*remainingRefund*

> Body parameter

```json
{
  "amount": "16.22",
  "authAmount": "123.2",
  "feeAmount": "32.32",
  "force": false,
  "info": "Suspect fraud behaviour",
  "tagId": "100",
  "txAmount": "14.00"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetailsRequest](#schemacorrectiondetailsrequest)|false|details
» amount|body|string|true|Amount
» authAmount|body|string|true|Auth amount
» feeAmount|body|string|true|Fee amount
» force|body|boolean|true|Force correction
» info|body|string|true|Information to provide reason
» tagId|body|string|true|Tag id
» txAmount|body|string|true|Transaction amount


> Example responses

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
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[RefundSummaryResponse](#schemarefundsummaryresponse)
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction not found|None
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## refund_1

`POST /backoffice/api/v2/paymenttx/refund/{txId}`

*refund*

> Body parameter

```json
{
  "amount": "16.22",
  "authAmount": "123.2",
  "feeAmount": "32.32",
  "force": false,
  "info": "Suspect fraud behaviour",
  "tagId": "100",
  "txAmount": "14.00"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetailsRequest](#schemacorrectiondetailsrequest)|false|details
» amount|body|string|true|Amount
» authAmount|body|string|true|Auth amount
» feeAmount|body|string|true|Fee amount
» force|body|boolean|true|Force correction
» info|body|string|true|Information to provide reason
» tagId|body|string|true|Tag id
» txAmount|body|string|true|Transaction amount


> Example responses

```json
{
  "created": "2017-09-15",
  "errorMessage": "Failed transaction",
  "id": "250EAO",
  "lastUpdated": "2017-09-16",
  "merchantId": 100000000,
  "pspStatusCode": "10001",
  "state": "0",
  "statusCode": "500"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentActionResponse](#schemapaymentactionresponse)
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction not found|None
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

## doVoid

`POST /backoffice/api/v2/paymenttx/void/{txId}`

*doVoid*

> Body parameter

```json
{
  "amount": "16.22",
  "authAmount": "123.2",
  "feeAmount": "32.32",
  "force": false,
  "info": "Suspect fraud behaviour",
  "tagId": "100",
  "txAmount": "14.00"
}
```
### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
txId|path|integer(int64)|true|txId
merchantId|query|integer(int32)|true|merchantId
body|body|[CorrectionDetailsRequest](#schemacorrectiondetailsrequest)|false|details
» amount|body|string|true|Amount
» authAmount|body|string|true|Auth amount
» feeAmount|body|string|true|Fee amount
» force|body|boolean|true|Force correction
» info|body|string|true|Information to provide reason
» tagId|body|string|true|Tag id
» txAmount|body|string|true|Transaction amount


> Example responses

```json
{
  "created": "2017-09-15",
  "errorMessage": "Failed transaction",
  "id": "250EAO",
  "lastUpdated": "2017-09-16",
  "merchantId": 100000000,
  "pspStatusCode": "10001",
  "state": "0",
  "statusCode": "500"
}
```
### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentActionResponse](#schemapaymentactionresponse)
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction not found|None
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

# Payment

## findByQuery

`GET /backoffice/api/v2/paymenttx/findByQuery`

*findByQuery*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
merchantId|query|integer(int32)|true|merchantId


> Example responses

### Responses

Status|Meaning|Description|Schema
---|---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[PaymentResponse](#schemapaymentresponse)
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction not found|None
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: default )
</aside>

# Schemas

## AbstractTxCmd

<a name="schemaabstracttxcmd"></a>

```json
{
  "created": "2017-09-27T16:16:27Z",
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



## CorrectionDetailsRequest

<a name="schemacorrectiondetailsrequest"></a>

```json
{
  "amount": "16.22",
  "authAmount": "123.2",
  "feeAmount": "32.32",
  "force": false,
  "info": "Suspect fraud behaviour",
  "tagId": "100",
  "txAmount": "14.00"
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
amount|string|true|Amount
authAmount|string|true|Auth amount
feeAmount|string|true|Fee amount
force|boolean|true|Force correction
info|string|true|Information to provide reason
tagId|string|true|Tag id
txAmount|string|true|Transaction amount



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
  "updated": "2017-09-27T16:16:27Z"
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
  "created": "2017-09-27T16:16:27Z",
  "fault": true,
  "mostRecentResult": {
    "ageStatus": "ERROR",
    "idStatus": "ERROR",
    "provider": "CALLCREDIT",
    "score": 0,
    "status": "VERIFIED",
    "txId": 0,
    "updated": "2017-09-27T16:16:27Z"
  },
  "results": [
    {
      "ageStatus": "ERROR",
      "idStatus": "ERROR",
      "provider": "CALLCREDIT",
      "score": 0,
      "status": "VERIFIED",
      "txId": 0,
      "updated": "2017-09-27T16:16:27Z"
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



## PaymentActionResponse

<a name="schemapaymentactionresponse"></a>

```json
{
  "created": "2017-09-15",
  "errorMessage": "Failed transaction",
  "id": "250EAO",
  "lastUpdated": "2017-09-16",
  "merchantId": 100000000,
  "pspStatusCode": "10001",
  "state": "0",
  "statusCode": "500"
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|
created|string(date-time)|true|Timestamp for created
errorMessage|string|false|Error message that describes what went wrong
id|integer(int64)|true|Unique transaction id
lastUpdated|string(date-time)|true|Unique identify a merchant
merchantId|integer(int32)|true|Unique identify a merchant
pspStatusCode|string|true|Unique identify a merchant
state|string|true|Unique identify a merchant
statusCode|string|true|System error


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


## PaymentResponse

<a name="schemapaymentresponse"></a>

```json
{
  "accountHolderName": "test test",
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
  "blockedAccountReason": "250EAO",
  "bonusCode": "1111",
  "captured": true,
  "channelId": "12345",
  "contextMap": "12.00 EUR",
  "created": "2017-04-27 14:10:38",
  "deposit": true,
  "depositType": "Standard",
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
  "id": 193027,
  "info": "A system error prevented enrollment from completing. This card is not eligible for 3-D Secure processing.",
  "initiatedPsp": "Entropay",
  "initiatedPspAccount": "3DS",
  "initiatedPspId": 108,
  "ipAddr": "141.8.92.216",
  "ipCity": "Msida",
  "ipCountry": "MLT",
  "ipRegion": "string",
  "issuerCountry": "ZZZ",
  "kycResult": {
    "created": "2017-09-27T16:16:27Z",
    "fault": true,
    "mostRecentResult": {
      "ageStatus": "ERROR",
      "idStatus": "ERROR",
      "provider": "CALLCREDIT",
      "score": 0,
      "status": "VERIFIED",
      "txId": 0,
      "updated": "2017-09-27T16:16:27Z"
    },
    "results": [
      {
        "ageStatus": "ERROR",
        "idStatus": "ERROR",
        "provider": "CALLCREDIT",
        "score": 0,
        "status": "VERIFIED",
        "txId": 0,
        "updated": "2017-09-27T16:16:27Z"
      }
    ],
    "retry": true
  },
  "kycStatus": "Accept",
  "lastUpdated": "2017-04-27 14:10:40",
  "latestTxCmdMap": {
    "property1": {
      "created": "2017-09-27T16:16:27Z",
      "fault": true,
      "retry": true
    },
    "property2": {
      "created": "2017-09-27T16:16:27Z",
      "fault": true,
      "retry": true
    }
  },
  "maskedUserAccount": "23232*****232",
  "merchantAuthCode": "cc3056ec-735c-4ef6-8126-0b0d94b96b49",
  "merchantErrCode": "1001",
  "merchantId": 1980,
  "merchantTxId": "c15eef34-1f37-43a4-a19b-473dbef541ed",
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
  "merchantUserCat": "TEST",
  "merchantUserCountry": "AUS",
  "merchantUserEmail": "test@example.com",
  "merchantUserId": "TEST_USER",
  "originTxId": 193027,
  "processing": true,
  "psp": "Entropay",
  "pspAccount": "3DS",
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
  "pspFraudScore": 0.02,
  "pspId": 108,
  "pspRefId": "C873789149330223994317",
  "pspService": "250EAO",
  "pspStatusCode": "PENDING",
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
  "reversedMerchantTxId": "250EAO",
  "reversedTxId": 1000,
  "rules": [
    "string"
  ],
  "state": "SUCCESSFUL",
  "stateInt": 0,
  "statusCode": "SUCCESS",
  "statusCodeInt": 0,
  "successful": true,
  "suspectedAbuseReason": "250EAO",
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
      "created": "2017-09-27T16:16:27Z",
      "fault": true,
      "retry": true
    }
  ],
  "txRefId": "string",
  "txType": "CreditcardDeposit",
  "txTypeInt": 108,
  "updatedBy": "string",
  "userPspAccountDetails": {
    "accountUuid": "string",
    "blockReason": "string",
    "description": "string",
    "directDebit": true,
    "expiryDate": "2017-09-27T16:16:27Z",
    "extAccountRefId": "string",
    "firstUsed": "2017-09-27T16:16:27Z",
    "hashedAccount": "string",
    "holder": "string",
    "id": 0,
    "lastSuccess": "2017-09-27T16:16:27Z",
    "lastUsed": "2017-09-27T16:16:27Z",
    "maskedAccount": "string",
    "merchantId": 0,
    "merchantUserId": "string",
    "new": true,
    "noFailedTx": 0,
    "noSuccessfulTx": 0,
    "providerType": "string",
    "startDate": "2017-09-27T16:16:27Z",
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
  "userPspAccountId": "404200******8008",
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
accountHolderName|string|true|Account holder name
amount|[Money](#schemamoney)|true|No description
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
amountBase|[Money](#schemamoney)|true|No description
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
blockedAccountReason|string|false|Blocked Account Reason
bonusCode|string|true|Optional bonus code.
captured|boolean|false|No description
channelId|string|true|Optional channel-id provided by merchant
contextMap|object|true|Context map
created|string(date-time)|true|Date and time when transaction was created
deposit|boolean|false|No description
depositType|string|true|Deposit Type
failure|boolean|false|No description
failureOrInconsistent|boolean|false|No description
fee|[Money](#schemamoney)|true|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
feeBase|[Money](#schemamoney)|true|No description
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
id|integer(int64)|true|Unique transaction id
info|string|true|Misc payment info
initiatedPsp|string|false|No description
initiatedPspAccount|string|true|Provider account used in the transaction
initiatedPspId|integer(int32)|true|Representation of provider who initiated the transaction, e.g. Skrill, Neteller or PayPoint
ipAddr|string|true|IP Address
ipCity|string|true|IP City
ipCountry|string|true|IP Country
ipRegion|string|true|IP Region
issuerCountry|string|true|Optional info for credit cards .. Three letter iso standard
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
kycStatus|string|true|Know Your Customer (KYC) status. Value returned by merchant. Used for checking tx
lastUpdated|string(date-time)|true|Last date and time when transaction was updated
latestTxCmdMap|object|false|No description
» created|string(date-time)|false|No description
» fault|boolean|false|No description
» retry|boolean|false|No description
maskedUserAccount|string|true|User's account masked
merchantAuthCode|string|true|Merchant's authorization code from the authorize request
merchantErrCode|string|true|Merchant error code, e.g. verify user failed
merchantId|integer(int32)|true|Unique transaction id
merchantTxId|string|true|Merchant's tx id.
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
merchantUserBal|[Money](#schemamoney)|true|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
merchantUserCat|string|true|Merchant's user category
merchantUserCountry|string|true|Merchant user country
merchantUserEmail|string|true|Merchant user email
merchantUserId|string|true|Merchant's user id
originTxId|integer(int64)|true|Transaction id that is origin to this transaction
processing|boolean|false|No description
psp|string|false|No description
pspAccount|string|true|Provider account used in the transaction
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
pspFraudScore|number(double)|false|Normalized PSP fraud score (0-10).
pspId|integer(int32)|true|Representation of provider who has processed the transaction, e.g. Skrill, Neteller or PayPoint
pspRefId|string|true|Provider reference id
pspService|string|false|Representation of provider's sub service which will be used to do a payment
pspStatusCode|string|true|Provider specific status code
pspTxAmount|[Money](#schemamoney)|true|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
pspUserRef|string|true|PSP User ref 
reversedMerchantTxId|string|true|Merchant transaction that have been reversed by this transaction 
reversedTxId|integer(int64)|true|Transaction id that have been reversed by this transaction
state|string|true|Transaction state
stateInt|integer(int32)|false|No description
statusCode|string|true|Status code
statusCodeInt|integer(int32)|false|No description
successful|boolean|false|No description
suspectedAbuseReason|string|false|Suspected Abused Reason
txAmount|[Money](#schemamoney)|true|No description
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
txAmountBase|[Money](#schemamoney)|true|No description
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
txTypeInt|integer(int32)|true|Representation of transaction type, e.g. Skrill deposit, Neteller
updatedBy|string|true|Optional last user took same action on the transactions
userPspAccountDetails|[UserPspAccountDetails](#schemauserpspaccountdetails)|true|No description
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
userPspAccountId|integer(int64)|true|User PSP account unique id, reference to table 'user_psp_account.id
viqStoredEntity|[SuccessStoreEntity](#schemasuccessstoreentity)|true|No description
» accessKey|string|false|No description
» alreadyStored|boolean|false|No description
» clientEncryptionKey|string|false|No description
» localWrappedEncryptionKey|string|false|No description
» maskedPan|string|false|No description
» vaultiqKey|string|false|No description
withdrawal|boolean|false|No description
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
» sex|FEMALE|
» sex|MALE|
» sex|UNKNOWN|
» sex|X|
» communicationChannel|EMAIL|
» communicationChannel|SMS|
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


## RefundSummaryResponse

<a name="schemarefundsummaryresponse"></a>

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
originalAmount|[Money](#schemamoney)|true|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
originalTxAmount|[Money](#schemamoney)|true|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
refundedTxAmount|[Money](#schemamoney)|true|No description
» amount|number|false|No description
» amountInFractionUnit|integer(int64)|false|No description
» currency|string|false|No description
» currencyCode|string|false|No description
» currencyNumeric3Code|string|false|No description
» fractionDigits|integer(int32)|false|No description
» negative|boolean|false|No description
» positive|boolean|false|No description
» zero|boolean|false|No description
remainingTxAmount|[Money](#schemamoney)|true|No description
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
  "expiryDate": "2017-09-27T16:16:27Z",
  "extAccountRefId": "string",
  "firstUsed": "2017-09-27T16:16:27Z",
  "hashedAccount": "string",
  "holder": "string",
  "id": 0,
  "lastSuccess": "2017-09-27T16:16:27Z",
  "lastUsed": "2017-09-27T16:16:27Z",
  "maskedAccount": "string",
  "merchantId": 0,
  "merchantUserId": "string",
  "new": true,
  "noFailedTx": 0,
  "noSuccessfulTx": 0,
  "providerType": "string",
  "startDate": "2017-09-27T16:16:27Z",
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


## JsonResult_List_PaymentResponse_

<a name="schemajsonresult_list_paymentresponse_"></a>

```json
{
  "errors": {
    "property1": "string",
    "property2": "string"
  },
  "message": "string",
  "result": [
    {
      "accountHolderName": "test test",
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
      "blockedAccountReason": "250EAO",
      "bonusCode": "1111",
      "captured": true,
      "channelId": "12345",
      "contextMap": "12.00 EUR",
      "created": "2017-04-27 14:10:38",
      "deposit": true,
      "depositType": "Standard",
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
      "id": 193027,
      "info": "A system error prevented enrollment from completing. This card is not eligible for 3-D Secure processing.",
      "initiatedPsp": "Entropay",
      "initiatedPspAccount": "3DS",
      "initiatedPspId": 108,
      "ipAddr": "141.8.92.216",
      "ipCity": "Msida",
      "ipCountry": "MLT",
      "ipRegion": "string",
      "issuerCountry": "ZZZ",
      "kycResult": {
        "created": "2017-09-27T16:16:27Z",
        "fault": true,
        "mostRecentResult": {
          "ageStatus": "ERROR",
          "idStatus": "ERROR",
          "provider": "CALLCREDIT",
          "score": 0,
          "status": "VERIFIED",
          "txId": 0,
          "updated": "2017-09-27T16:16:27Z"
        },
        "results": [
          {
            "ageStatus": "ERROR",
            "idStatus": "ERROR",
            "provider": "CALLCREDIT",
            "score": 0,
            "status": "VERIFIED",
            "txId": 0,
            "updated": "2017-09-27T16:16:27Z"
          }
        ],
        "retry": true
      },
      "kycStatus": "Accept",
      "lastUpdated": "2017-04-27 14:10:40",
      "latestTxCmdMap": {
        "property1": {
          "created": "2017-09-27T16:16:27Z",
          "fault": true,
          "retry": true
        },
        "property2": {
          "created": "2017-09-27T16:16:27Z",
          "fault": true,
          "retry": true
        }
      },
      "maskedUserAccount": "23232*****232",
      "merchantAuthCode": "cc3056ec-735c-4ef6-8126-0b0d94b96b49",
      "merchantErrCode": "1001",
      "merchantId": 1980,
      "merchantTxId": "c15eef34-1f37-43a4-a19b-473dbef541ed",
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
      "merchantUserCat": "TEST",
      "merchantUserCountry": "AUS",
      "merchantUserEmail": "test@example.com",
      "merchantUserId": "TEST_USER",
      "originTxId": 193027,
      "processing": true,
      "psp": "Entropay",
      "pspAccount": "3DS",
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
      "pspFraudScore": 0.02,
      "pspId": 108,
      "pspRefId": "C873789149330223994317",
      "pspService": "250EAO",
      "pspStatusCode": "PENDING",
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
      "reversedMerchantTxId": "250EAO",
      "reversedTxId": 1000,
      "rules": [
        "string"
      ],
      "state": "SUCCESSFUL",
      "stateInt": 0,
      "statusCode": "SUCCESS",
      "statusCodeInt": 0,
      "successful": true,
      "suspectedAbuseReason": "250EAO",
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
          "created": "2017-09-27T16:16:27Z",
          "fault": true,
          "retry": true
        }
      ],
      "txRefId": "string",
      "txType": "CreditcardDeposit",
      "txTypeInt": 108,
      "updatedBy": "string",
      "userPspAccountDetails": {
        "accountUuid": "string",
        "blockReason": "string",
        "description": "string",
        "directDebit": true,
        "expiryDate": "2017-09-27T16:16:27Z",
        "extAccountRefId": "string",
        "firstUsed": "2017-09-27T16:16:27Z",
        "hashedAccount": "string",
        "holder": "string",
        "id": 0,
        "lastSuccess": "2017-09-27T16:16:27Z",
        "lastUsed": "2017-09-27T16:16:27Z",
        "maskedAccount": "string",
        "merchantId": 0,
        "merchantUserId": "string",
        "new": true,
        "noFailedTx": 0,
        "noSuccessfulTx": 0,
        "providerType": "string",
        "startDate": "2017-09-27T16:16:27Z",
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
      "userPspAccountId": "404200******8008",
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
result|[[PaymentResponse](#schemapaymentresponse)]|false|No description
» accountHolderName|string|true|Account holder name
» amount|[Money](#schemamoney)|true|No description
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
» amountBase|[Money](#schemamoney)|true|No description
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
» blockedAccountReason|string|false|Blocked Account Reason
» bonusCode|string|true|Optional bonus code.
» captured|boolean|false|No description
» channelId|string|true|Optional channel-id provided by merchant
» contextMap|object|true|Context map
» created|string(date-time)|true|Date and time when transaction was created
» deposit|boolean|false|No description
» depositType|string|true|Deposit Type
» failure|boolean|false|No description
» failureOrInconsistent|boolean|false|No description
» fee|[Money](#schemamoney)|true|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» feeBase|[Money](#schemamoney)|true|No description
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
» id|integer(int64)|true|Unique transaction id
» info|string|true|Misc payment info
» initiatedPsp|string|false|No description
» initiatedPspAccount|string|true|Provider account used in the transaction
» initiatedPspId|integer(int32)|true|Representation of provider who initiated the transaction, e.g. Skrill, Neteller or PayPoint
» ipAddr|string|true|IP Address
» ipCity|string|true|IP City
» ipCountry|string|true|IP Country
» ipRegion|string|true|IP Region
» issuerCountry|string|true|Optional info for credit cards .. Three letter iso standard
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
» kycStatus|string|true|Know Your Customer (KYC) status. Value returned by merchant. Used for checking tx
» lastUpdated|string(date-time)|true|Last date and time when transaction was updated
» latestTxCmdMap|object|false|No description
»» created|string(date-time)|false|No description
»» fault|boolean|false|No description
»» retry|boolean|false|No description
» maskedUserAccount|string|true|User's account masked
» merchantAuthCode|string|true|Merchant's authorization code from the authorize request
» merchantErrCode|string|true|Merchant error code, e.g. verify user failed
» merchantId|integer(int32)|true|Unique transaction id
» merchantTxId|string|true|Merchant's tx id.
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
» merchantUserBal|[Money](#schemamoney)|true|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» merchantUserCat|string|true|Merchant's user category
» merchantUserCountry|string|true|Merchant user country
» merchantUserEmail|string|true|Merchant user email
» merchantUserId|string|true|Merchant's user id
» originTxId|integer(int64)|true|Transaction id that is origin to this transaction
» processing|boolean|false|No description
» psp|string|false|No description
» pspAccount|string|true|Provider account used in the transaction
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
» pspFraudScore|number(double)|false|Normalized PSP fraud score (0-10).
» pspId|integer(int32)|true|Representation of provider who has processed the transaction, e.g. Skrill, Neteller or PayPoint
» pspRefId|string|true|Provider reference id
» pspService|string|false|Representation of provider's sub service which will be used to do a payment
» pspStatusCode|string|true|Provider specific status code
» pspTxAmount|[Money](#schemamoney)|true|No description
»» amount|number|false|No description
»» amountInFractionUnit|integer(int64)|false|No description
»» currency|string|false|No description
»» currencyCode|string|false|No description
»» currencyNumeric3Code|string|false|No description
»» fractionDigits|integer(int32)|false|No description
»» negative|boolean|false|No description
»» positive|boolean|false|No description
»» zero|boolean|false|No description
» pspUserRef|string|true|PSP User ref 
» reversedMerchantTxId|string|true|Merchant transaction that have been reversed by this transaction 
» reversedTxId|integer(int64)|true|Transaction id that have been reversed by this transaction
» state|string|true|Transaction state
» stateInt|integer(int32)|false|No description
» statusCode|string|true|Status code
» statusCodeInt|integer(int32)|false|No description
» successful|boolean|false|No description
» suspectedAbuseReason|string|false|Suspected Abused Reason
» txAmount|[Money](#schemamoney)|true|No description
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
» txAmountBase|[Money](#schemamoney)|true|No description
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
» txTypeInt|integer(int32)|true|Representation of transaction type, e.g. Skrill deposit, Neteller
» updatedBy|string|true|Optional last user took same action on the transactions
» userPspAccountDetails|[UserPspAccountDetails](#schemauserpspaccountdetails)|true|No description
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
» userPspAccountId|integer(int64)|true|User PSP account unique id, reference to table 'user_psp_account.id
» viqStoredEntity|[SuccessStoreEntity](#schemasuccessstoreentity)|true|No description
»» accessKey|string|false|No description
»» alreadyStored|boolean|false|No description
»» clientEncryptionKey|string|false|No description
»» localWrappedEncryptionKey|string|false|No description
»» maskedPan|string|false|No description
»» vaultiqKey|string|false|No description
» withdrawal|boolean|false|No description
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
»» sex|FEMALE|
»» sex|MALE|
»» sex|UNKNOWN|
»» sex|X|
»» communicationChannel|EMAIL|
»» communicationChannel|SMS|
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




