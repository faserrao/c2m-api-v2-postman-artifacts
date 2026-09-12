# \JobsApi

All URIs are relative to *https://api.click2mail.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submit_doc_params**](JobsApi.md#submit_doc_params) | **POST** /static | Submit single document
[**submit_multi_doc_merge_params**](JobsApi.md#submit_multi_doc_merge_params) | **POST** /mail-merge | Submit mail merge
[**submit_multi_zip_address_capture_params**](JobsApi.md#submit_multi_zip_address_capture_params) | **POST** /batch/zip/address-capture | Submit ZIP batch — address capture
[**submit_multi_zip_params**](JobsApi.md#submit_multi_zip_params) | **POST** /batch/zip | Submit ZIP batch
[**submit_single_pdf_address_capture_params**](JobsApi.md#submit_single_pdf_address_capture_params) | **POST** /static/address-capture | Submit single document — address capture
[**submit_single_pdf_split_address_capture_params**](JobsApi.md#submit_single_pdf_split_address_capture_params) | **POST** /batch/split/address-capture | Submit PDF split — address capture
[**submit_single_pdf_split_params**](JobsApi.md#submit_single_pdf_split_params) | **POST** /batch/split | Submit PDF split



## submit_doc_params

> models::StandardResponse submit_doc_params(submit_doc_params)
Submit single document

Submits a mailing job for a single document to one or more recipients. The request body must include a document source, recipient address information, and payment details.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_doc_params** | [**SubmitDocParams**](SubmitDocParams.md) |  | [required] |

### Return type

[**models::StandardResponse**](standardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_multi_doc_merge_params

> models::StandardResponse submit_multi_doc_merge_params(submit_multi_doc_merge_params)
Submit mail merge

Merges multiple documents into a single mailing sent to one recipient. Useful for creating document packets or multi-page letters.

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


## submit_multi_zip_address_capture_params

> models::StandardResponse submit_multi_zip_address_capture_params(submit_multi_zip_address_capture_params)
Submit ZIP batch — address capture

Submits a ZIP-based mailing batch where recipient addresses are captured externally. No inline recipient addresses are required.

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
Submit ZIP batch

Submits multiple mailing jobs sourced from files inside a single ZIP archive. Each job item specifies which file within the ZIP and the recipient address.

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


## submit_single_pdf_address_capture_params

> models::StandardResponse submit_single_pdf_address_capture_params(submit_single_pdf_address_capture_params)
Submit single document — address capture

Submits a mailing job for a single PDF where recipient addresses are captured from the document via OCR. No inline recipient address is required.

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
Submit PDF split — address capture

Splits a single PDF into page ranges where recipient addresses are captured from the PDF. No inline recipient addresses are required.

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
Submit PDF split

Splits a single PDF into page ranges and mails each range to a different recipient. Each job item specifies page range and recipient address.

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

