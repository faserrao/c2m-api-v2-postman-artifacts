# C2M.Api.Api.JobsApi

All URIs are relative to *https://api.click2mail.com/v2*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**SubmitMultiDocMergeParams**](JobsApi.md#submitmultidocmergeparams) | **POST** /mail-merge | Submit mail merge |
| [**SubmitMultiZipAddressCaptureParams**](JobsApi.md#submitmultizipaddresscaptureparams) | **POST** /batch/zip/address-capture | Submit ZIP batch — address capture |
| [**SubmitMultiZipParams**](JobsApi.md#submitmultizipparams) | **POST** /batch/zip | Submit ZIP batch |
| [**SubmitSingleDocParams**](JobsApi.md#submitsingledocparams) | **POST** /static | Submit single document |
| [**SubmitSinglePdfAddressCaptureParams**](JobsApi.md#submitsinglepdfaddresscaptureparams) | **POST** /static/address-capture | Submit single document — address capture |
| [**SubmitSinglePdfSplitAddressCaptureParams**](JobsApi.md#submitsinglepdfsplitaddresscaptureparams) | **POST** /batch/split/address-capture | Submit PDF split — address capture |
| [**SubmitSinglePdfSplitParams**](JobsApi.md#submitsinglepdfsplitparams) | **POST** /batch/split | Submit PDF split |

<a id="submitmultidocmergeparams"></a>
# **SubmitMultiDocMergeParams**
> StandardResponse SubmitMultiDocMergeParams (SubmitMultiDocMergeParams submitMultiDocMergeParams)

Submit mail merge

Merges multiple documents into a single mailing sent to one recipient. Useful for creating document packets or multi-page letters.


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

<a id="submitmultizipaddresscaptureparams"></a>
# **SubmitMultiZipAddressCaptureParams**
> StandardResponse SubmitMultiZipAddressCaptureParams (SubmitMultiZipAddressCaptureParams submitMultiZipAddressCaptureParams)

Submit ZIP batch — address capture

Submits a ZIP-based mailing batch where recipient addresses are captured externally. No inline recipient addresses are required.


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

Submit ZIP batch

Submits multiple mailing jobs sourced from files inside a single ZIP archive. Each job item specifies which file within the ZIP and the recipient address.


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

Submit single document

Submits a mailing job for a single document to one or more recipients. The request body must include a document source, recipient address information, and payment details.


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

Submit single document — address capture

Submits a mailing job for a single PDF where recipient addresses are captured from the document via OCR. No inline recipient address is required.


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

Submit PDF split — address capture

Splits a single PDF into page ranges where recipient addresses are captured from the PDF. No inline recipient addresses are required.


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

Submit PDF split

Splits a single PDF into page ranges and mails each range to a different recipient. Each job item specifies page range and recipient address.


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

