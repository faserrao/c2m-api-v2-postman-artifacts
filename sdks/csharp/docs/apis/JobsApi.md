# C2M.Api.Api.JobsApi

All URIs are relative to *https://api.click2mail.com/v2*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**SubmitMultiDocMergeParams**](JobsApi.md#submitmultidocmergeparams) | **POST** /mail-merge | Submitmultidocmergeparams |
| [**SubmitMultiDocParams**](JobsApi.md#submitmultidocparams) | **POST** /static/multi | Submitmultidocparams |
| [**SubmitMultiZipAddressCaptureParams**](JobsApi.md#submitmultizipaddresscaptureparams) | **POST** /batch/zip/address-capture | Submitmultizipaddresscaptureparams |
| [**SubmitMultiZipParams**](JobsApi.md#submitmultizipparams) | **POST** /batch/zip | Submitmultizipparams |
| [**SubmitSingleDocParams**](JobsApi.md#submitsingledocparams) | **POST** /static | Submitsingledocparams |
| [**SubmitSinglePdfAddressCaptureParams**](JobsApi.md#submitsinglepdfaddresscaptureparams) | **POST** /static/address-capture | Submitsinglepdfaddresscaptureparams |
| [**SubmitSinglePdfSplitAddressCaptureParams**](JobsApi.md#submitsinglepdfsplitaddresscaptureparams) | **POST** /batch/split/address-capture | Submitsinglepdfsplitaddresscaptureparams |
| [**SubmitSinglePdfSplitParams**](JobsApi.md#submitsinglepdfsplitparams) | **POST** /batch/split | Submitsinglepdfsplitparams |

<a id="submitmultidocmergeparams"></a>
# **SubmitMultiDocMergeParams**
> StandardResponse SubmitMultiDocMergeParams (SubmitMultiDocMergeParams submitMultiDocMergeParams)

Submitmultidocmergeparams

API endpoint for submitMultiDocMergeParams


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

Submitmultidocparams

API endpoint for submitMultiDocParams


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

Submitmultizipaddresscaptureparams

API endpoint for submitMultiZipAddressCaptureParams


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

Submitmultizipparams

API endpoint for submitMultiZipParams


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

Submitsingledocparams

API endpoint for submitSingleDocParams


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

Submitsinglepdfaddresscaptureparams

API endpoint for submitSinglePdfAddressCaptureParams


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

Submitsinglepdfsplitaddresscaptureparams

API endpoint for submitSinglePdfSplitAddressCaptureParams


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

Submitsinglepdfsplitparams

API endpoint for submitSinglePdfSplitParams


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

