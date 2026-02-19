# \JobsApi

All URIs are relative to *https://api.click2mail.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submit_multi_doc_merge_params**](JobsApi.md#submit_multi_doc_merge_params) | **POST** /jobs/submit/multi/doc/merge | Submit a multi doc merge job
[**submit_multi_doc_params**](JobsApi.md#submit_multi_doc_params) | **POST** /jobs/submit/multi/doc | Submit a multi doc job
[**submit_multi_zip_address_capture_params**](JobsApi.md#submit_multi_zip_address_capture_params) | **POST** /jobs/submit/multi/zip/addressCapture | Submit a multi zip addressCapture job
[**submit_multi_zip_params**](JobsApi.md#submit_multi_zip_params) | **POST** /jobs/submit/multi/zip | Submit a multi zip job
[**submit_single_doc_params**](JobsApi.md#submit_single_doc_params) | **POST** /jobs/submit/single/doc | Submit a single doc job
[**submit_single_pdf_address_capture_params**](JobsApi.md#submit_single_pdf_address_capture_params) | **POST** /jobs/submit/single/pdf/addressCapture | Submit a single pdf addressCapture job
[**submit_single_pdf_split_address_capture_params**](JobsApi.md#submit_single_pdf_split_address_capture_params) | **POST** /jobs/submit/single/pdf/split/addressCapture | Submit a single pdf split addressCapture job
[**submit_single_pdf_split_params**](JobsApi.md#submit_single_pdf_split_params) | **POST** /jobs/submit/single/pdf/split | Submit a single pdf split job



## submit_multi_doc_merge_params

> models::StandardResponse submit_multi_doc_merge_params(submit_multi_doc_merge_params)
Submit a multi doc merge job

Submits a mailing job (multi doc merge). The request body contains job parameters including document source, recipient address information, and payment details.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_multi_doc_merge_params** | [**SubmitMultiDocMergeParams**](SubmitMultiDocMergeParams.md) |  | [required] |

### Return type

[**models::StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_multi_doc_params

> models::StandardResponse submit_multi_doc_params(submit_multi_doc_params)
Submit a multi doc job

Submits a mailing job (multi doc). The request body contains job parameters including document source, recipient address information, and payment details.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_multi_doc_params** | [**SubmitMultiDocParams**](SubmitMultiDocParams.md) |  | [required] |

### Return type

[**models::StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_multi_zip_address_capture_params

> models::StandardResponse submit_multi_zip_address_capture_params(submit_multi_zip_address_capture_params)
Submit a multi zip addressCapture job

Submits a mailing job (multi zip addressCapture). The request body contains job parameters including document source, recipient address information, and payment details.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_multi_zip_address_capture_params** | [**SubmitMultiZipAddressCaptureParams**](SubmitMultiZipAddressCaptureParams.md) |  | [required] |

### Return type

[**models::StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_multi_zip_params

> models::StandardResponse submit_multi_zip_params(submit_multi_zip_params)
Submit a multi zip job

Submits a mailing job (multi zip). The request body contains job parameters including document source, recipient address information, and payment details.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_multi_zip_params** | [**SubmitMultiZipParams**](SubmitMultiZipParams.md) |  | [required] |

### Return type

[**models::StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_single_doc_params

> models::StandardResponse submit_single_doc_params(submit_single_doc_params)
Submit a single doc job

Submits a mailing job (single doc). The request body contains job parameters including document source, recipient address information, and payment details.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_single_doc_params** | [**SubmitSingleDocParams**](SubmitSingleDocParams.md) |  | [required] |

### Return type

[**models::StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_single_pdf_address_capture_params

> models::StandardResponse submit_single_pdf_address_capture_params(submit_single_pdf_address_capture_params)
Submit a single pdf addressCapture job

Submits a mailing job (single pdf addressCapture). The request body contains job parameters including document source, recipient address information, and payment details.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_single_pdf_address_capture_params** | [**SubmitSinglePdfAddressCaptureParams**](SubmitSinglePdfAddressCaptureParams.md) |  | [required] |

### Return type

[**models::StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_single_pdf_split_address_capture_params

> models::StandardResponse submit_single_pdf_split_address_capture_params(submit_single_pdf_split_address_capture_params)
Submit a single pdf split addressCapture job

Submits a mailing job (single pdf split addressCapture). The request body contains job parameters including document source, recipient address information, and payment details.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_single_pdf_split_address_capture_params** | [**SubmitSinglePdfSplitAddressCaptureParams**](SubmitSinglePdfSplitAddressCaptureParams.md) |  | [required] |

### Return type

[**models::StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_single_pdf_split_params

> models::StandardResponse submit_single_pdf_split_params(submit_single_pdf_split_params)
Submit a single pdf split job

Submits a mailing job (single pdf split). The request body contains job parameters including document source, recipient address information, and payment details.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**submit_single_pdf_split_params** | [**SubmitSinglePdfSplitParams**](SubmitSinglePdfSplitParams.md) |  | [required] |

### Return type

[**models::StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

