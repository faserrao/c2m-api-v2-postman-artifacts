# \RecommendedApi

All URIs are relative to *https://api.example.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submit_multi_doc_merge_params**](RecommendedApi.md#submit_multi_doc_merge_params) | **POST** /jobs/submit/multi/doc/merge | Submit a multi doc merge job
[**submit_multi_doc_params**](RecommendedApi.md#submit_multi_doc_params) | **POST** /jobs/submit/multi/doc | Submit a multi doc job
[**submit_single_doc_params**](RecommendedApi.md#submit_single_doc_params) | **POST** /jobs/submit/single/doc | Submit a single doc job



## submit_multi_doc_merge_params

> models::StandardResponse submit_multi_doc_merge_params(submit_multi_doc_merge_params)
Submit a multi doc merge job

Submits a multi doc merge mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

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

Submits a mailing job with multiple documents to be sent to recipients. The request body contains job parameters including document source, recipient address information, and payment details.

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


## submit_single_doc_params

> models::StandardResponse submit_single_doc_params(submit_single_doc_params)
Submit a single doc job

Submits a mailing job with a single document to be sent to one or more recipients. The request body contains job parameters including document source, recipient address information, and payment details.

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

