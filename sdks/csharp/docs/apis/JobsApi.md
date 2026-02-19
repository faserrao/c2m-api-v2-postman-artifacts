# C2M.Api.Api.JobsApi

All URIs are relative to *https://api.click2mail.com/v2*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**SubmitMultiDocMergeParams**](JobsApi.md#submitmultidocmergeparams) | **POST** /jobs/submit/multi/doc/merge | Submit a multi doc merge job |
| [**SubmitMultiDocParams**](JobsApi.md#submitmultidocparams) | **POST** /jobs/submit/multi/doc | Submit a multi doc job |
| [**SubmitMultiZipAddressCaptureParams**](JobsApi.md#submitmultizipaddresscaptureparams) | **POST** /jobs/submit/multi/zip/addressCapture | Submit a multi zip addressCapture job |
| [**SubmitMultiZipParams**](JobsApi.md#submitmultizipparams) | **POST** /jobs/submit/multi/zip | Submit a multi zip job |
| [**SubmitSingleDocParams**](JobsApi.md#submitsingledocparams) | **POST** /jobs/submit/single/doc | Submit a single doc job |
| [**SubmitSinglePdfAddressCaptureParams**](JobsApi.md#submitsinglepdfaddresscaptureparams) | **POST** /jobs/submit/single/pdf/addressCapture | Submit a single pdf addressCapture job |
| [**SubmitSinglePdfSplitAddressCaptureParams**](JobsApi.md#submitsinglepdfsplitaddresscaptureparams) | **POST** /jobs/submit/single/pdf/split/addressCapture | Submit a single pdf split addressCapture job |
| [**SubmitSinglePdfSplitParams**](JobsApi.md#submitsinglepdfsplitparams) | **POST** /jobs/submit/single/pdf/split | Submit a single pdf split job |

<a id="submitmultidocmergeparams"></a>
# **SubmitMultiDocMergeParams**
> StandardResponse SubmitMultiDocMergeParams (SubmitMultiDocMergeParams submitMultiDocMergeParams)

Submit a multi doc merge job

Submits a mailing job (multi doc merge). The request body contains job parameters including document source, recipient address information, and payment details.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **submitMultiDocMergeParams** | [**SubmitMultiDocMergeParams**](SubmitMultiDocMergeParams.md) |  |  |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request - Invalid request parameters |  -  |
| **401** | Unauthorized - Missing or invalid authentication |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Not Found - Resource not found |  -  |
| **422** | Unprocessable Entity - Validation failed |  -  |
| **500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="submitmultidocparams"></a>
# **SubmitMultiDocParams**
> StandardResponse SubmitMultiDocParams (SubmitMultiDocParams submitMultiDocParams)

Submit a multi doc job

Submits a mailing job (multi doc). The request body contains job parameters including document source, recipient address information, and payment details.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **submitMultiDocParams** | [**SubmitMultiDocParams**](SubmitMultiDocParams.md) |  |  |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request - Invalid request parameters |  -  |
| **401** | Unauthorized - Missing or invalid authentication |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Not Found - Resource not found |  -  |
| **422** | Unprocessable Entity - Validation failed |  -  |
| **500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="submitmultizipaddresscaptureparams"></a>
# **SubmitMultiZipAddressCaptureParams**
> StandardResponse SubmitMultiZipAddressCaptureParams (SubmitMultiZipAddressCaptureParams submitMultiZipAddressCaptureParams)

Submit a multi zip addressCapture job

Submits a mailing job (multi zip addressCapture). The request body contains job parameters including document source, recipient address information, and payment details.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **submitMultiZipAddressCaptureParams** | [**SubmitMultiZipAddressCaptureParams**](SubmitMultiZipAddressCaptureParams.md) |  |  |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request - Invalid request parameters |  -  |
| **401** | Unauthorized - Missing or invalid authentication |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Not Found - Resource not found |  -  |
| **422** | Unprocessable Entity - Validation failed |  -  |
| **500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="submitmultizipparams"></a>
# **SubmitMultiZipParams**
> StandardResponse SubmitMultiZipParams (SubmitMultiZipParams submitMultiZipParams)

Submit a multi zip job

Submits a mailing job (multi zip). The request body contains job parameters including document source, recipient address information, and payment details.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **submitMultiZipParams** | [**SubmitMultiZipParams**](SubmitMultiZipParams.md) |  |  |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request - Invalid request parameters |  -  |
| **401** | Unauthorized - Missing or invalid authentication |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Not Found - Resource not found |  -  |
| **422** | Unprocessable Entity - Validation failed |  -  |
| **500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="submitsingledocparams"></a>
# **SubmitSingleDocParams**
> StandardResponse SubmitSingleDocParams (SubmitSingleDocParams submitSingleDocParams)

Submit a single doc job

Submits a mailing job (single doc). The request body contains job parameters including document source, recipient address information, and payment details.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **submitSingleDocParams** | [**SubmitSingleDocParams**](SubmitSingleDocParams.md) |  |  |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request - Invalid request parameters |  -  |
| **401** | Unauthorized - Missing or invalid authentication |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Not Found - Resource not found |  -  |
| **422** | Unprocessable Entity - Validation failed |  -  |
| **500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="submitsinglepdfaddresscaptureparams"></a>
# **SubmitSinglePdfAddressCaptureParams**
> StandardResponse SubmitSinglePdfAddressCaptureParams (SubmitSinglePdfAddressCaptureParams submitSinglePdfAddressCaptureParams)

Submit a single pdf addressCapture job

Submits a mailing job (single pdf addressCapture). The request body contains job parameters including document source, recipient address information, and payment details.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **submitSinglePdfAddressCaptureParams** | [**SubmitSinglePdfAddressCaptureParams**](SubmitSinglePdfAddressCaptureParams.md) |  |  |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request - Invalid request parameters |  -  |
| **401** | Unauthorized - Missing or invalid authentication |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Not Found - Resource not found |  -  |
| **422** | Unprocessable Entity - Validation failed |  -  |
| **500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="submitsinglepdfsplitaddresscaptureparams"></a>
# **SubmitSinglePdfSplitAddressCaptureParams**
> StandardResponse SubmitSinglePdfSplitAddressCaptureParams (SubmitSinglePdfSplitAddressCaptureParams submitSinglePdfSplitAddressCaptureParams)

Submit a single pdf split addressCapture job

Submits a mailing job (single pdf split addressCapture). The request body contains job parameters including document source, recipient address information, and payment details.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **submitSinglePdfSplitAddressCaptureParams** | [**SubmitSinglePdfSplitAddressCaptureParams**](SubmitSinglePdfSplitAddressCaptureParams.md) |  |  |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request - Invalid request parameters |  -  |
| **401** | Unauthorized - Missing or invalid authentication |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Not Found - Resource not found |  -  |
| **422** | Unprocessable Entity - Validation failed |  -  |
| **500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="submitsinglepdfsplitparams"></a>
# **SubmitSinglePdfSplitParams**
> StandardResponse SubmitSinglePdfSplitParams (SubmitSinglePdfSplitParams submitSinglePdfSplitParams)

Submit a single pdf split job

Submits a mailing job (single pdf split). The request body contains job parameters including document source, recipient address information, and payment details.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **submitSinglePdfSplitParams** | [**SubmitSinglePdfSplitParams**](SubmitSinglePdfSplitParams.md) |  |  |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request - Invalid request parameters |  -  |
| **401** | Unauthorized - Missing or invalid authentication |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Not Found - Resource not found |  -  |
| **422** | Unprocessable Entity - Validation failed |  -  |
| **500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

