# JobsApi

All URIs are relative to *https://api.example.com/v1*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**submitMultiZipAddressCaptureParams**](JobsApi.md#submitMultiZipAddressCaptureParams) | **POST** /jobs/submit/multi/zip/addressCapture | Submit a multi zip addressCapture job |
| [**submitMultiZipParams**](JobsApi.md#submitMultiZipParams) | **POST** /jobs/submit/multi/zip | Submit a multi zip job |
| [**submitSinglePdfAddressCaptureParams**](JobsApi.md#submitSinglePdfAddressCaptureParams) | **POST** /jobs/submit/single/pdf/addressCapture | Submit a single pdf addressCapture job |
| [**submitSinglePdfSplitAddressCaptureParams**](JobsApi.md#submitSinglePdfSplitAddressCaptureParams) | **POST** /jobs/submit/single/pdf/split/addressCapture | Submit a single pdf split addressCapture job |
| [**submitSinglePdfSplitParams**](JobsApi.md#submitSinglePdfSplitParams) | **POST** /jobs/submit/single/pdf/split | Submit a single pdf split job |


<a id="submitMultiZipAddressCaptureParams"></a>
# **submitMultiZipAddressCaptureParams**
> StandardResponse submitMultiZipAddressCaptureParams(submitMultiZipAddressCaptureParams)

Submit a multi zip addressCapture job

Submits a multi zip addressCapture mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```kotlin
// Import classes:
//import com.c2m.api.infrastructure.*
//import com.c2m.api.models.*

val apiInstance = JobsApi()
val submitMultiZipAddressCaptureParams : SubmitMultiZipAddressCaptureParams =  // SubmitMultiZipAddressCaptureParams | 
try {
    val result : StandardResponse = apiInstance.submitMultiZipAddressCaptureParams(submitMultiZipAddressCaptureParams)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling JobsApi#submitMultiZipAddressCaptureParams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling JobsApi#submitMultiZipAddressCaptureParams")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submitMultiZipAddressCaptureParams** | [**SubmitMultiZipAddressCaptureParams**](SubmitMultiZipAddressCaptureParams.md)|  | |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="submitMultiZipParams"></a>
# **submitMultiZipParams**
> StandardResponse submitMultiZipParams(submitMultiZipParams)

Submit a multi zip job

Submits a multi zip mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```kotlin
// Import classes:
//import com.c2m.api.infrastructure.*
//import com.c2m.api.models.*

val apiInstance = JobsApi()
val submitMultiZipParams : SubmitMultiZipParams =  // SubmitMultiZipParams | 
try {
    val result : StandardResponse = apiInstance.submitMultiZipParams(submitMultiZipParams)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling JobsApi#submitMultiZipParams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling JobsApi#submitMultiZipParams")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submitMultiZipParams** | [**SubmitMultiZipParams**](SubmitMultiZipParams.md)|  | |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="submitSinglePdfAddressCaptureParams"></a>
# **submitSinglePdfAddressCaptureParams**
> StandardResponse submitSinglePdfAddressCaptureParams(submitSinglePdfAddressCaptureParams)

Submit a single pdf addressCapture job

Submits a single pdf addressCapture mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```kotlin
// Import classes:
//import com.c2m.api.infrastructure.*
//import com.c2m.api.models.*

val apiInstance = JobsApi()
val submitSinglePdfAddressCaptureParams : SubmitSinglePdfAddressCaptureParams =  // SubmitSinglePdfAddressCaptureParams | 
try {
    val result : StandardResponse = apiInstance.submitSinglePdfAddressCaptureParams(submitSinglePdfAddressCaptureParams)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling JobsApi#submitSinglePdfAddressCaptureParams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling JobsApi#submitSinglePdfAddressCaptureParams")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submitSinglePdfAddressCaptureParams** | [**SubmitSinglePdfAddressCaptureParams**](SubmitSinglePdfAddressCaptureParams.md)|  | |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="submitSinglePdfSplitAddressCaptureParams"></a>
# **submitSinglePdfSplitAddressCaptureParams**
> StandardResponse submitSinglePdfSplitAddressCaptureParams(submitSinglePdfSplitAddressCaptureParams)

Submit a single pdf split addressCapture job

Submits a single pdf split addressCapture mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```kotlin
// Import classes:
//import com.c2m.api.infrastructure.*
//import com.c2m.api.models.*

val apiInstance = JobsApi()
val submitSinglePdfSplitAddressCaptureParams : SubmitSinglePdfSplitAddressCaptureParams =  // SubmitSinglePdfSplitAddressCaptureParams | 
try {
    val result : StandardResponse = apiInstance.submitSinglePdfSplitAddressCaptureParams(submitSinglePdfSplitAddressCaptureParams)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling JobsApi#submitSinglePdfSplitAddressCaptureParams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling JobsApi#submitSinglePdfSplitAddressCaptureParams")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submitSinglePdfSplitAddressCaptureParams** | [**SubmitSinglePdfSplitAddressCaptureParams**](SubmitSinglePdfSplitAddressCaptureParams.md)|  | |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="submitSinglePdfSplitParams"></a>
# **submitSinglePdfSplitParams**
> StandardResponse submitSinglePdfSplitParams(submitSinglePdfSplitParams)

Submit a single pdf split job

Submits a single pdf split mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```kotlin
// Import classes:
//import com.c2m.api.infrastructure.*
//import com.c2m.api.models.*

val apiInstance = JobsApi()
val submitSinglePdfSplitParams : SubmitSinglePdfSplitParams =  // SubmitSinglePdfSplitParams | 
try {
    val result : StandardResponse = apiInstance.submitSinglePdfSplitParams(submitSinglePdfSplitParams)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling JobsApi#submitSinglePdfSplitParams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling JobsApi#submitSinglePdfSplitParams")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submitSinglePdfSplitParams** | [**SubmitSinglePdfSplitParams**](SubmitSinglePdfSplitParams.md)|  | |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

