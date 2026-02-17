# TemplatesApi

All URIs are relative to *https://api.example.com/v1*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**submitMultiDocMergeParams**](TemplatesApi.md#submitMultiDocMergeParams) | **POST** /jobs/submit/multi/doc/merge | Submit a multi doc merge job |
| [**submitMultiDocParams**](TemplatesApi.md#submitMultiDocParams) | **POST** /jobs/submit/multi/doc | Submit a multi doc job |
| [**submitSingleDocParams**](TemplatesApi.md#submitSingleDocParams) | **POST** /jobs/submit/single/doc | Submit a single doc job |


<a id="submitMultiDocMergeParams"></a>
# **submitMultiDocMergeParams**
> StandardResponse submitMultiDocMergeParams(submitMultiDocMergeParams)

Submit a multi doc merge job

Submits a multi doc merge mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```kotlin
// Import classes:
//import com.c2m.api.infrastructure.*
//import com.c2m.api.models.*

val apiInstance = TemplatesApi()
val submitMultiDocMergeParams : SubmitMultiDocMergeParams =  // SubmitMultiDocMergeParams | 
try {
    val result : StandardResponse = apiInstance.submitMultiDocMergeParams(submitMultiDocMergeParams)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TemplatesApi#submitMultiDocMergeParams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TemplatesApi#submitMultiDocMergeParams")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submitMultiDocMergeParams** | [**SubmitMultiDocMergeParams**](SubmitMultiDocMergeParams.md)|  | |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="submitMultiDocParams"></a>
# **submitMultiDocParams**
> StandardResponse submitMultiDocParams(submitMultiDocParams)

Submit a multi doc job

Submits a mailing job with multiple documents to be sent to recipients. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```kotlin
// Import classes:
//import com.c2m.api.infrastructure.*
//import com.c2m.api.models.*

val apiInstance = TemplatesApi()
val submitMultiDocParams : SubmitMultiDocParams =  // SubmitMultiDocParams | 
try {
    val result : StandardResponse = apiInstance.submitMultiDocParams(submitMultiDocParams)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TemplatesApi#submitMultiDocParams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TemplatesApi#submitMultiDocParams")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submitMultiDocParams** | [**SubmitMultiDocParams**](SubmitMultiDocParams.md)|  | |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="submitSingleDocParams"></a>
# **submitSingleDocParams**
> StandardResponse submitSingleDocParams(submitSingleDocParams)

Submit a single doc job

Submits a mailing job with a single document to be sent to one or more recipients. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```kotlin
// Import classes:
//import com.c2m.api.infrastructure.*
//import com.c2m.api.models.*

val apiInstance = TemplatesApi()
val submitSingleDocParams : SubmitSingleDocParams =  // SubmitSingleDocParams | 
try {
    val result : StandardResponse = apiInstance.submitSingleDocParams(submitSingleDocParams)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TemplatesApi#submitSingleDocParams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TemplatesApi#submitSingleDocParams")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submitSingleDocParams** | [**SubmitSingleDocParams**](SubmitSingleDocParams.md)|  | |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

