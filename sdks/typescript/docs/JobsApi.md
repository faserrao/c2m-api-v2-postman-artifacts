# JobsApi

All URIs are relative to *https://api.click2mail.com/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**submitMultiDocMergeParams**](#submitmultidocmergeparams) | **POST** /mail-merge | Submitmultidocmergeparams|
|[**submitMultiDocParams**](#submitmultidocparams) | **POST** /static/multi | Submitmultidocparams|
|[**submitMultiZipAddressCaptureParams**](#submitmultizipaddresscaptureparams) | **POST** /batch/zip/address-capture | Submitmultizipaddresscaptureparams|
|[**submitMultiZipParams**](#submitmultizipparams) | **POST** /batch/zip | Submitmultizipparams|
|[**submitSingleDocParams**](#submitsingledocparams) | **POST** /static | Submitsingledocparams|
|[**submitSinglePdfAddressCaptureParams**](#submitsinglepdfaddresscaptureparams) | **POST** /static/address-capture | Submitsinglepdfaddresscaptureparams|
|[**submitSinglePdfSplitAddressCaptureParams**](#submitsinglepdfsplitaddresscaptureparams) | **POST** /batch/split/address-capture | Submitsinglepdfsplitaddresscaptureparams|
|[**submitSinglePdfSplitParams**](#submitsinglepdfsplitparams) | **POST** /batch/split | Submitsinglepdfsplitparams|

# **submitMultiDocMergeParams**
> StandardResponse submitMultiDocMergeParams(submitMultiDocMergeParams)

API endpoint for submitMultiDocMergeParams

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

API endpoint for submitMultiDocParams

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

API endpoint for submitMultiZipAddressCaptureParams

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

API endpoint for submitMultiZipParams

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

API endpoint for submitSingleDocParams

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

API endpoint for submitSinglePdfAddressCaptureParams

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

API endpoint for submitSinglePdfSplitAddressCaptureParams

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

API endpoint for submitSinglePdfSplitParams

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

