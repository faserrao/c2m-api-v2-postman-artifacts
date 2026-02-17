# MostCommonApi

All URIs are relative to *https://api.example.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**submitMultiDocMergeParams**](#submitmultidocmergeparams) | **POST** /jobs/submit/multi/doc/merge | Submit a multi doc merge job|
|[**submitMultiDocParams**](#submitmultidocparams) | **POST** /jobs/submit/multi/doc | Submit a multi doc job|
|[**submitSingleDocParams**](#submitsingledocparams) | **POST** /jobs/submit/single/doc | Submit a single doc job|

# **submitMultiDocMergeParams**
> StandardResponse submitMultiDocMergeParams(submitMultiDocMergeParams)

Submits a multi doc merge mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```typescript
import {
    MostCommonApi,
    Configuration,
    SubmitMultiDocMergeParams
} from './api';

const configuration = new Configuration();
const apiInstance = new MostCommonApi(configuration);

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
    MostCommonApi,
    Configuration,
    SubmitMultiDocParams
} from './api';

const configuration = new Configuration();
const apiInstance = new MostCommonApi(configuration);

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

# **submitSingleDocParams**
> StandardResponse submitSingleDocParams(submitSingleDocParams)

Submits a mailing job with a single document to be sent to one or more recipients. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```typescript
import {
    MostCommonApi,
    Configuration,
    SubmitSingleDocParams
} from './api';

const configuration = new Configuration();
const apiInstance = new MostCommonApi(configuration);

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

