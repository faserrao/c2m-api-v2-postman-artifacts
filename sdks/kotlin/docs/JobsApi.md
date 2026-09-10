# JobsApi

All URIs are relative to *https://api.click2mail.com/v2*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**submitMultiDocMergeParams**](JobsApi.md#submitMultiDocMergeParams) | **POST** /mail-merge | Submit mail merge |
| [**submitMultiDocParams**](JobsApi.md#submitMultiDocParams) | **POST** /static/multi | Submit multiple documents |
| [**submitMultiZipAddressCaptureParams**](JobsApi.md#submitMultiZipAddressCaptureParams) | **POST** /batch/zip/address-capture | Submit ZIP batch — address capture |
| [**submitMultiZipParams**](JobsApi.md#submitMultiZipParams) | **POST** /batch/zip | Submit ZIP batch |
| [**submitSingleDocParams**](JobsApi.md#submitSingleDocParams) | **POST** /static | Submit single document |
| [**submitSinglePdfAddressCaptureParams**](JobsApi.md#submitSinglePdfAddressCaptureParams) | **POST** /static/address-capture | Submit single document — address capture |
| [**submitSinglePdfSplitAddressCaptureParams**](JobsApi.md#submitSinglePdfSplitAddressCaptureParams) | **POST** /batch/split/address-capture | Submit PDF split — address capture |
| [**submitSinglePdfSplitParams**](JobsApi.md#submitSinglePdfSplitParams) | **POST** /batch/split | Submit PDF split |


<a id="submitMultiDocMergeParams"></a>
# **submitMultiDocMergeParams**
> StandardResponse submitMultiDocMergeParams(submitMultiDocMergeParams)

Submit mail merge

Merges multiple documents into a single mailing sent to one recipient. Useful for creating document packets or multi-page letters.

### Example
```kotlin
// Import classes:
//import com.c2m.api.infrastructure.*
//import com.c2m.api.models.*

val apiInstance = JobsApi()
val submitMultiDocMergeParams : SubmitMultiDocMergeParams =  // SubmitMultiDocMergeParams | 
try {
    val result : StandardResponse = apiInstance.submitMultiDocMergeParams(submitMultiDocMergeParams)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling JobsApi#submitMultiDocMergeParams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling JobsApi#submitMultiDocMergeParams")
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

Submit multiple documents

Submits a batch of independent mailing jobs in a single request. Each job specifies its own document source and recipient address.

### Example
```kotlin
// Import classes:
//import com.c2m.api.infrastructure.*
//import com.c2m.api.models.*

val apiInstance = JobsApi()
val submitMultiDocParams : SubmitMultiDocParams =  // SubmitMultiDocParams | 
try {
    val result : StandardResponse = apiInstance.submitMultiDocParams(submitMultiDocParams)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling JobsApi#submitMultiDocParams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling JobsApi#submitMultiDocParams")
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

<a id="submitMultiZipAddressCaptureParams"></a>
# **submitMultiZipAddressCaptureParams**
> StandardResponse submitMultiZipAddressCaptureParams(submitMultiZipAddressCaptureParams)

Submit ZIP batch — address capture

Submits a ZIP-based mailing batch where recipient addresses are captured externally. No inline recipient addresses are required.

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

Submit ZIP batch

Submits multiple mailing jobs sourced from files inside a single ZIP archive. Each job item specifies which file within the ZIP and the recipient address.

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

<a id="submitSingleDocParams"></a>
# **submitSingleDocParams**
> StandardResponse submitSingleDocParams(submitSingleDocParams)

Submit single document

Submits a mailing job for a single document to one or more recipients. The request body must include a document source, recipient address information, and payment details.

### Example
```kotlin
// Import classes:
//import com.c2m.api.infrastructure.*
//import com.c2m.api.models.*

val apiInstance = JobsApi()
val submitSingleDocParams : SubmitSingleDocParams =  // SubmitSingleDocParams | 
try {
    val result : StandardResponse = apiInstance.submitSingleDocParams(submitSingleDocParams)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling JobsApi#submitSingleDocParams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling JobsApi#submitSingleDocParams")
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

<a id="submitSinglePdfAddressCaptureParams"></a>
# **submitSinglePdfAddressCaptureParams**
> StandardResponse submitSinglePdfAddressCaptureParams(submitSinglePdfAddressCaptureParams)

Submit single document — address capture

Submits a mailing job for a single PDF where recipient addresses are captured from the document via OCR. No inline recipient address is required.

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

Submit PDF split — address capture

Splits a single PDF into page ranges where recipient addresses are captured from the PDF. No inline recipient addresses are required.

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

Submit PDF split

Splits a single PDF into page ranges and mails each range to a different recipient. Each job item specifies page range and recipient address.

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

