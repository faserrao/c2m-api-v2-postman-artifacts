# JobsApi

All URIs are relative to *https://api.example.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**submitMultiDocMergeParams**](#submitmultidocmergeparams) | **POST** /jobs/submit/multi/doc/merge | Submit a multi doc merge job|
|[**submitMultiDocParams**](#submitmultidocparams) | **POST** /jobs/submit/multi/doc | Submit a multi doc job|
|[**submitMultiZipAddressCaptureParams**](#submitmultizipaddresscaptureparams) | **POST** /jobs/submit/multi/zip/addressCapture | Submit a multi zip addressCapture job|
|[**submitMultiZipParams**](#submitmultizipparams) | **POST** /jobs/submit/multi/zip | Submit a multi zip job|
|[**submitSingleDocParams**](#submitsingledocparams) | **POST** /jobs/submit/single/doc | Submit a single doc job|
|[**submitSinglePdfAddressCaptureParams**](#submitsinglepdfaddresscaptureparams) | **POST** /jobs/submit/single/pdf/addressCapture | Submit a single pdf addressCapture job|
|[**submitSinglePdfSplitAddressCaptureParams**](#submitsinglepdfsplitaddresscaptureparams) | **POST** /jobs/submit/single/pdf/split/addressCapture | Submit a single pdf split addressCapture job|
|[**submitSinglePdfSplitParams**](#submitsinglepdfsplitparams) | **POST** /jobs/submit/single/pdf/split | Submit a single pdf split job|

# **submitMultiDocMergeParams**
> StandardResponse submitMultiDocMergeParams(submitMultiDocMergeParams)

Submits a multi doc merge mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```typescript
import {
    JobsApi,
    Configuration,
    SubmitMultiDocMergeParams
} from './api';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let submitMultiDocMergeParams: SubmitMultiDocMergeParams; //

const { status, data } = await apiInstance.submitMultiDocMergeParams(
    submitMultiDocMergeParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitMultiDocMergeParams** | **SubmitMultiDocMergeParams**|  | |


### Return type

**StandardResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request - Invalid request parameters |  -  |
|**401** | Unauthorized - Missing or invalid authentication |  -  |
|**403** | Forbidden - Insufficient permissions |  -  |
|**404** | Not Found - Resource not found |  -  |
|**422** | Unprocessable Entity - Validation failed |  -  |
|**500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitMultiDocParams**
> StandardResponse submitMultiDocParams(submitMultiDocParams)

Submits a mailing job with multiple documents to be sent to recipients. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```typescript
import {
    JobsApi,
    Configuration,
    SubmitMultiDocParams
} from './api';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let submitMultiDocParams: SubmitMultiDocParams; //

const { status, data } = await apiInstance.submitMultiDocParams(
    submitMultiDocParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitMultiDocParams** | **SubmitMultiDocParams**|  | |


### Return type

**StandardResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request - Invalid request parameters |  -  |
|**401** | Unauthorized - Missing or invalid authentication |  -  |
|**403** | Forbidden - Insufficient permissions |  -  |
|**404** | Not Found - Resource not found |  -  |
|**422** | Unprocessable Entity - Validation failed |  -  |
|**500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitMultiZipAddressCaptureParams**
> StandardResponse submitMultiZipAddressCaptureParams(submitMultiZipAddressCaptureParams)

Submits a multi zip addressCapture mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```typescript
import {
    JobsApi,
    Configuration,
    SubmitMultiZipAddressCaptureParams
} from './api';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let submitMultiZipAddressCaptureParams: SubmitMultiZipAddressCaptureParams; //

const { status, data } = await apiInstance.submitMultiZipAddressCaptureParams(
    submitMultiZipAddressCaptureParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitMultiZipAddressCaptureParams** | **SubmitMultiZipAddressCaptureParams**|  | |


### Return type

**StandardResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request - Invalid request parameters |  -  |
|**401** | Unauthorized - Missing or invalid authentication |  -  |
|**403** | Forbidden - Insufficient permissions |  -  |
|**404** | Not Found - Resource not found |  -  |
|**422** | Unprocessable Entity - Validation failed |  -  |
|**500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitMultiZipParams**
> StandardResponse submitMultiZipParams(submitMultiZipParams)

Submits a multi zip mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```typescript
import {
    JobsApi,
    Configuration,
    SubmitMultiZipParams
} from './api';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let submitMultiZipParams: SubmitMultiZipParams; //

const { status, data } = await apiInstance.submitMultiZipParams(
    submitMultiZipParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitMultiZipParams** | **SubmitMultiZipParams**|  | |


### Return type

**StandardResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request - Invalid request parameters |  -  |
|**401** | Unauthorized - Missing or invalid authentication |  -  |
|**403** | Forbidden - Insufficient permissions |  -  |
|**404** | Not Found - Resource not found |  -  |
|**422** | Unprocessable Entity - Validation failed |  -  |
|**500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitSingleDocParams**
> StandardResponse submitSingleDocParams(submitSingleDocParams)

Submits a mailing job with a single document to be sent to one or more recipients. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```typescript
import {
    JobsApi,
    Configuration,
    SubmitSingleDocParams
} from './api';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let submitSingleDocParams: SubmitSingleDocParams; //

const { status, data } = await apiInstance.submitSingleDocParams(
    submitSingleDocParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitSingleDocParams** | **SubmitSingleDocParams**|  | |


### Return type

**StandardResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request - Invalid request parameters |  -  |
|**401** | Unauthorized - Missing or invalid authentication |  -  |
|**403** | Forbidden - Insufficient permissions |  -  |
|**404** | Not Found - Resource not found |  -  |
|**422** | Unprocessable Entity - Validation failed |  -  |
|**500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitSinglePdfAddressCaptureParams**
> StandardResponse submitSinglePdfAddressCaptureParams(submitSinglePdfAddressCaptureParams)

Submits a single pdf addressCapture mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```typescript
import {
    JobsApi,
    Configuration,
    SubmitSinglePdfAddressCaptureParams
} from './api';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let submitSinglePdfAddressCaptureParams: SubmitSinglePdfAddressCaptureParams; //

const { status, data } = await apiInstance.submitSinglePdfAddressCaptureParams(
    submitSinglePdfAddressCaptureParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitSinglePdfAddressCaptureParams** | **SubmitSinglePdfAddressCaptureParams**|  | |


### Return type

**StandardResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request - Invalid request parameters |  -  |
|**401** | Unauthorized - Missing or invalid authentication |  -  |
|**403** | Forbidden - Insufficient permissions |  -  |
|**404** | Not Found - Resource not found |  -  |
|**422** | Unprocessable Entity - Validation failed |  -  |
|**500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitSinglePdfSplitAddressCaptureParams**
> StandardResponse submitSinglePdfSplitAddressCaptureParams(submitSinglePdfSplitAddressCaptureParams)

Submits a single pdf split addressCapture mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```typescript
import {
    JobsApi,
    Configuration,
    SubmitSinglePdfSplitAddressCaptureParams
} from './api';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let submitSinglePdfSplitAddressCaptureParams: SubmitSinglePdfSplitAddressCaptureParams; //

const { status, data } = await apiInstance.submitSinglePdfSplitAddressCaptureParams(
    submitSinglePdfSplitAddressCaptureParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitSinglePdfSplitAddressCaptureParams** | **SubmitSinglePdfSplitAddressCaptureParams**|  | |


### Return type

**StandardResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request - Invalid request parameters |  -  |
|**401** | Unauthorized - Missing or invalid authentication |  -  |
|**403** | Forbidden - Insufficient permissions |  -  |
|**404** | Not Found - Resource not found |  -  |
|**422** | Unprocessable Entity - Validation failed |  -  |
|**500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitSinglePdfSplitParams**
> StandardResponse submitSinglePdfSplitParams(submitSinglePdfSplitParams)

Submits a single pdf split mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```typescript
import {
    JobsApi,
    Configuration,
    SubmitSinglePdfSplitParams
} from './api';

const configuration = new Configuration();
const apiInstance = new JobsApi(configuration);

let submitSinglePdfSplitParams: SubmitSinglePdfSplitParams; //

const { status, data } = await apiInstance.submitSinglePdfSplitParams(
    submitSinglePdfSplitParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitSinglePdfSplitParams** | **SubmitSinglePdfSplitParams**|  | |


### Return type

**StandardResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request - Invalid request parameters |  -  |
|**401** | Unauthorized - Missing or invalid authentication |  -  |
|**403** | Forbidden - Insufficient permissions |  -  |
|**404** | Not Found - Resource not found |  -  |
|**422** | Unprocessable Entity - Validation failed |  -  |
|**500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

