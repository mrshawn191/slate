--- 

title: PaymentIQ Integration API 

language_tabs: 
   - shell 

toc_footers: 
   - <a href='#'>Sign Up for a Developer Key</a> 
   - <a href='https://github.com/lavkumarv'>Documentation Powered by lav</a> 

includes: 
   - errors 

search: true 

--- 

# Introduction 

The intended audience for this document is the person responsible for the technical integration. Basic knowledge of networking programming and monetary transactions are required. Any operating system and any programming language can be used to implement the Integration API which is needed by PaymentIQ. The PaymentIQ Integration API uses JSON, http://en.wikipedia.org/wiki/JSON, for all data interchang. It is language independent and supported for virtually all programming languages. All methods are invoked by sending a valid JSON request via HTTPS POST . Note: The PaymentIQ Integration API expects all requests and responses to be UTF-8 encoded Valid currency codes are upper case 3-letter characters according to ISO 4217, http://en.wikipedia.org/wiki/ISO_4217. Number of digits after the decimal are also defined by the ISO standard, e.g JPY (Japanese yen) has 0 digits after the decimal.  

**Version:** 1.1.16 

[Find out more about PaymentIQ](http://swagger.io) 

# /VERIFYUSER
## ***POST*** 

**Summary:** Verify user account

**Description:** This method is used by PaymentIQ to authorize a future transfer. The merchant should use this method to verify that the user account is correct and valid, reserve amount for future debit and check that the account will not be over credited.

### HTTP Request 
`***POST*** /verifyuser` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body | Verify user details | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | successful operation |
| 405 | Invalid input |

# /AUTHORIZE
## ***POST*** 

**Summary:** Authorize user account

**Description:** This method is used by PaymentIQ to authorize a future transfer. The merchant should use this method to verify that the user account is correct and valid, reserve amount for future debit and check that the account will not be over credited. 

### HTTP Request 
`***POST*** /authorize` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body | Authorize user details | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | successful operation |
| 400 | Invalid status value |

# /TRANSFER
## ***POST*** 

**Summary:** Increase or decrease credit on user account

**Description:** The implementation must be idempotent, that transfer can be applied several times without changing the user account balance.

### HTTP Request 
`***POST*** /transfer` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body | Transfer credit | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | successful operation |
| 400 | Invalid status value |

# /CANCEL
## ***POST*** 

**Summary:** Cancel a ongoing transaction

**Description:** This method is used by PaymentIQ to notify that an authorization has been canceled, i.e merchant should release reserved money. Note: The implementation must be idempotent, that the method can be applied several times without any negative effects. 

### HTTP Request 
`***POST*** /cancel` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body | Transfer credit | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | successful operation |
| 400 | Invalid status value |

<!-- Converted with the swagger-to-slate https://github.com/lavkumarv/swagger-to-slate -->
