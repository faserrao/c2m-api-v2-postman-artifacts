# \JobsApi

All URIs are relative to *https://api.click2mail.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submit_multi_doc_merge_params**](JobsApi.md#submit_multi_doc_merge_params) | **POST** /mail-merge | Submitmultidocmergeparams
[**submit_multi_doc_params**](JobsApi.md#submit_multi_doc_params) | **POST** /static/multi | Submitmultidocparams
[**submit_multi_zip_address_capture_params**](JobsApi.md#submit_multi_zip_address_capture_params) | **POST** /batch/zip/address-capture | Submitmultizipaddresscaptureparams
[**submit_multi_zip_params**](JobsApi.md#submit_multi_zip_params) | **POST** /batch/zip | Submitmultizipparams
[**submit_single_doc_params**](JobsApi.md#submit_single_doc_params) | **POST** /static | Submitsingledocparams
[**submit_single_pdf_address_capture_params**](JobsApi.md#submit_single_pdf_address_capture_params) | **POST** /static/address-capture | Submitsinglepdfaddresscaptureparams
[**submit_single_pdf_split_address_capture_params**](JobsApi.md#submit_single_pdf_split_address_capture_params) | **POST** /batch/split/address-capture | Submitsinglepdfsplitaddresscaptureparams
[**submit_single_pdf_split_params**](JobsApi.md#submit_single_pdf_split_params) | **POST** /batch/split | Submitsinglepdfsplitparams



## submit_multi_doc_merge_params

> models::StandardResponse submit_multi_doc_merge_params(submit_multi_doc_merge_params)
Submitmultidocmergeparams

API endpoint for submitMultiDocMergeParams

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_multi_doc_merge_params** | [**SubmitMultiDocMergeParams**](SubmitMultiDocMergeParams.md) |  | [required] |

### Return type

[**models::StandardResponse**](standardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_multi_doc_params

> models::StandardResponse submit_multi_doc_params(submit_multi_doc_params)
Submitmultidocparams

API endpoint for submitMultiDocParams

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_multi_doc_params** | [**SubmitMultiDocParams**](SubmitMultiDocParams.md) |  | [required] |

### Return type

[**models::StandardResponse**](standardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_multi_zip_address_capture_params

> models::StandardResponse submit_multi_zip_address_capture_params(submit_multi_zip_address_capture_params)
Submitmultizipaddresscaptureparams

API endpoint for submitMultiZipAddressCaptureParams

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_multi_zip_address_capture_params** | [**SubmitMultiZipAddressCaptureParams**](SubmitMultiZipAddressCaptureParams.md) |  | [required] |

### Return type

[**models::StandardResponse**](standardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_multi_zip_params

> models::StandardResponse submit_multi_zip_params(submit_multi_zip_params)
Submitmultizipparams

API endpoint for submitMultiZipParams

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_multi_zip_params** | [**SubmitMultiZipParams**](SubmitMultiZipParams.md) |  | [required] |

### Return type

[**models::StandardResponse**](standardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_single_doc_params

> models::StandardResponse submit_single_doc_params(submit_single_doc_params)
Submitsingledocparams

API endpoint for submitSingleDocParams

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_single_doc_params** | [**SubmitSingleDocParams**](SubmitSingleDocParams.md) |  | [required] |

### Return type

[**models::StandardResponse**](standardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_single_pdf_address_capture_params

> models::StandardResponse submit_single_pdf_address_capture_params(submit_single_pdf_address_capture_params)
Submitsinglepdfaddresscaptureparams

API endpoint for submitSinglePdfAddressCaptureParams

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_single_pdf_address_capture_params** | [**SubmitSinglePdfAddressCaptureParams**](SubmitSinglePdfAddressCaptureParams.md) |  | [required] |

### Return type

[**models::StandardResponse**](standardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_single_pdf_split_address_capture_params

> models::StandardResponse submit_single_pdf_split_address_capture_params(submit_single_pdf_split_address_capture_params)
Submitsinglepdfsplitaddresscaptureparams

API endpoint for submitSinglePdfSplitAddressCaptureParams

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_single_pdf_split_address_capture_params** | [**SubmitSinglePdfSplitAddressCaptureParams**](SubmitSinglePdfSplitAddressCaptureParams.md) |  | [required] |

### Return type

[**models::StandardResponse**](standardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_single_pdf_split_params

> models::StandardResponse submit_single_pdf_split_params(submit_single_pdf_split_params)
Submitsinglepdfsplitparams

API endpoint for submitSinglePdfSplitParams

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_single_pdf_split_params** | [**SubmitSinglePdfSplitParams**](SubmitSinglePdfSplitParams.md) |  | [required] |

### Return type

[**models::StandardResponse**](standardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

