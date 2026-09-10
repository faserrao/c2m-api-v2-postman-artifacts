# JobsApi

All URIs are relative to *https://api.click2mail.com/v2*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**submitMultiDocMergeParams**](JobsApi.md#submitMultiDocMergeParams) | **POST** /mail-merge | Submitmultidocmergeparams |
| [**submitMultiDocParams**](JobsApi.md#submitMultiDocParams) | **POST** /static/multi | Submitmultidocparams |
| [**submitMultiZipAddressCaptureParams**](JobsApi.md#submitMultiZipAddressCaptureParams) | **POST** /batch/zip/address-capture | Submitmultizipaddresscaptureparams |
| [**submitMultiZipParams**](JobsApi.md#submitMultiZipParams) | **POST** /batch/zip | Submitmultizipparams |
| [**submitSingleDocParams**](JobsApi.md#submitSingleDocParams) | **POST** /static | Submitsingledocparams |
| [**submitSinglePdfAddressCaptureParams**](JobsApi.md#submitSinglePdfAddressCaptureParams) | **POST** /static/address-capture | Submitsinglepdfaddresscaptureparams |
| [**submitSinglePdfSplitAddressCaptureParams**](JobsApi.md#submitSinglePdfSplitAddressCaptureParams) | **POST** /batch/split/address-capture | Submitsinglepdfsplitaddresscaptureparams |
| [**submitSinglePdfSplitParams**](JobsApi.md#submitSinglePdfSplitParams) | **POST** /batch/split | Submitsinglepdfsplitparams |


<a id="submitMultiDocMergeParams"></a>
# **submitMultiDocMergeParams**
> StandardResponse submitMultiDocMergeParams(submitMultiDocMergeParams)

Submitmultidocmergeparams

API endpoint for submitMultiDocMergeParams

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

Submitmultidocparams

API endpoint for submitMultiDocParams

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

Submitmultizipaddresscaptureparams

API endpoint for submitMultiZipAddressCaptureParams

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

Submitmultizipparams

API endpoint for submitMultiZipParams

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

Submitsingledocparams

API endpoint for submitSingleDocParams

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

Submitsinglepdfaddresscaptureparams

API endpoint for submitSinglePdfAddressCaptureParams

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

Submitsinglepdfsplitaddresscaptureparams

API endpoint for submitSinglePdfSplitAddressCaptureParams

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

Submitsinglepdfsplitparams

API endpoint for submitSinglePdfSplitParams

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

