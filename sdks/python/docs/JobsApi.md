# c2m_api.JobsApi

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


# **submit_doc_params**
> StandardResponse submit_doc_params(submit_doc_params)

Submit single document

Submits a mailing job for a single document to one or more recipients. The request body must include a document source, recipient address information, and payment details.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import c2m_api
from c2m_api.models.standard_response import StandardResponse
from c2m_api.models.submit_doc_params import SubmitDocParams
from c2m_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.click2mail.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = c2m_api.Configuration(
    host = "https://api.click2mail.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = c2m_api.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with c2m_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = c2m_api.JobsApi(api_client)
    submit_doc_params = c2m_api.SubmitDocParams() # SubmitDocParams | 

    try:
        # Submit single document
        api_response = api_instance.submit_doc_params(submit_doc_params)
        print("The response of JobsApi->submit_doc_params:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->submit_doc_params: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submit_doc_params** | [**SubmitDocParams**](SubmitDocParams.md)|  | 

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
**200** | Success |  -  |
**400** | Bad Request - Invalid request parameters |  -  |
**401** | Unauthorized - Missing or invalid authentication |  -  |
**403** | Forbidden - Insufficient permissions |  -  |
**404** | Not Found - Resource not found |  -  |
**422** | Unprocessable Entity - Validation failed |  -  |
**500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit_multi_doc_merge_params**
> StandardResponse submit_multi_doc_merge_params(submit_multi_doc_merge_params)

Submit mail merge

Merges multiple documents into a single mailing sent to one recipient. Useful for creating document packets or multi-page letters.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import c2m_api
from c2m_api.models.standard_response import StandardResponse
from c2m_api.models.submit_multi_doc_merge_params import SubmitMultiDocMergeParams
from c2m_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.click2mail.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = c2m_api.Configuration(
    host = "https://api.click2mail.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = c2m_api.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with c2m_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = c2m_api.JobsApi(api_client)
    submit_multi_doc_merge_params = c2m_api.SubmitMultiDocMergeParams() # SubmitMultiDocMergeParams | 

    try:
        # Submit mail merge
        api_response = api_instance.submit_multi_doc_merge_params(submit_multi_doc_merge_params)
        print("The response of JobsApi->submit_multi_doc_merge_params:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->submit_multi_doc_merge_params: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submit_multi_doc_merge_params** | [**SubmitMultiDocMergeParams**](SubmitMultiDocMergeParams.md)|  | 

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
**200** | Success |  -  |
**400** | Bad Request - Invalid request parameters |  -  |
**401** | Unauthorized - Missing or invalid authentication |  -  |
**403** | Forbidden - Insufficient permissions |  -  |
**404** | Not Found - Resource not found |  -  |
**422** | Unprocessable Entity - Validation failed |  -  |
**500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit_multi_zip_address_capture_params**
> StandardResponse submit_multi_zip_address_capture_params(submit_multi_zip_address_capture_params)

Submit ZIP batch — address capture

Submits a ZIP-based mailing batch where recipient addresses are captured externally. No inline recipient addresses are required.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import c2m_api
from c2m_api.models.standard_response import StandardResponse
from c2m_api.models.submit_multi_zip_address_capture_params import SubmitMultiZipAddressCaptureParams
from c2m_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.click2mail.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = c2m_api.Configuration(
    host = "https://api.click2mail.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = c2m_api.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with c2m_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = c2m_api.JobsApi(api_client)
    submit_multi_zip_address_capture_params = c2m_api.SubmitMultiZipAddressCaptureParams() # SubmitMultiZipAddressCaptureParams | 

    try:
        # Submit ZIP batch — address capture
        api_response = api_instance.submit_multi_zip_address_capture_params(submit_multi_zip_address_capture_params)
        print("The response of JobsApi->submit_multi_zip_address_capture_params:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->submit_multi_zip_address_capture_params: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submit_multi_zip_address_capture_params** | [**SubmitMultiZipAddressCaptureParams**](SubmitMultiZipAddressCaptureParams.md)|  | 

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
**200** | Success |  -  |
**400** | Bad Request - Invalid request parameters |  -  |
**401** | Unauthorized - Missing or invalid authentication |  -  |
**403** | Forbidden - Insufficient permissions |  -  |
**404** | Not Found - Resource not found |  -  |
**422** | Unprocessable Entity - Validation failed |  -  |
**500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit_multi_zip_params**
> StandardResponse submit_multi_zip_params(submit_multi_zip_params)

Submit ZIP batch

Submits multiple mailing jobs sourced from files inside a single ZIP archive. Each job item specifies which file within the ZIP and the recipient address.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import c2m_api
from c2m_api.models.standard_response import StandardResponse
from c2m_api.models.submit_multi_zip_params import SubmitMultiZipParams
from c2m_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.click2mail.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = c2m_api.Configuration(
    host = "https://api.click2mail.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = c2m_api.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with c2m_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = c2m_api.JobsApi(api_client)
    submit_multi_zip_params = c2m_api.SubmitMultiZipParams() # SubmitMultiZipParams | 

    try:
        # Submit ZIP batch
        api_response = api_instance.submit_multi_zip_params(submit_multi_zip_params)
        print("The response of JobsApi->submit_multi_zip_params:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->submit_multi_zip_params: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submit_multi_zip_params** | [**SubmitMultiZipParams**](SubmitMultiZipParams.md)|  | 

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
**200** | Success |  -  |
**400** | Bad Request - Invalid request parameters |  -  |
**401** | Unauthorized - Missing or invalid authentication |  -  |
**403** | Forbidden - Insufficient permissions |  -  |
**404** | Not Found - Resource not found |  -  |
**422** | Unprocessable Entity - Validation failed |  -  |
**500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit_single_pdf_address_capture_params**
> StandardResponse submit_single_pdf_address_capture_params(submit_single_pdf_address_capture_params)

Submit single document — address capture

Submits a mailing job for a single PDF where recipient addresses are captured from the document via OCR. No inline recipient address is required.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import c2m_api
from c2m_api.models.standard_response import StandardResponse
from c2m_api.models.submit_single_pdf_address_capture_params import SubmitSinglePdfAddressCaptureParams
from c2m_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.click2mail.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = c2m_api.Configuration(
    host = "https://api.click2mail.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = c2m_api.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with c2m_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = c2m_api.JobsApi(api_client)
    submit_single_pdf_address_capture_params = c2m_api.SubmitSinglePdfAddressCaptureParams() # SubmitSinglePdfAddressCaptureParams | 

    try:
        # Submit single document — address capture
        api_response = api_instance.submit_single_pdf_address_capture_params(submit_single_pdf_address_capture_params)
        print("The response of JobsApi->submit_single_pdf_address_capture_params:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->submit_single_pdf_address_capture_params: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submit_single_pdf_address_capture_params** | [**SubmitSinglePdfAddressCaptureParams**](SubmitSinglePdfAddressCaptureParams.md)|  | 

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
**200** | Success |  -  |
**400** | Bad Request - Invalid request parameters |  -  |
**401** | Unauthorized - Missing or invalid authentication |  -  |
**403** | Forbidden - Insufficient permissions |  -  |
**404** | Not Found - Resource not found |  -  |
**422** | Unprocessable Entity - Validation failed |  -  |
**500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit_single_pdf_split_address_capture_params**
> StandardResponse submit_single_pdf_split_address_capture_params(submit_single_pdf_split_address_capture_params)

Submit PDF split — address capture

Splits a single PDF into page ranges where recipient addresses are captured from the PDF. No inline recipient addresses are required.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import c2m_api
from c2m_api.models.standard_response import StandardResponse
from c2m_api.models.submit_single_pdf_split_address_capture_params import SubmitSinglePdfSplitAddressCaptureParams
from c2m_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.click2mail.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = c2m_api.Configuration(
    host = "https://api.click2mail.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = c2m_api.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with c2m_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = c2m_api.JobsApi(api_client)
    submit_single_pdf_split_address_capture_params = c2m_api.SubmitSinglePdfSplitAddressCaptureParams() # SubmitSinglePdfSplitAddressCaptureParams | 

    try:
        # Submit PDF split — address capture
        api_response = api_instance.submit_single_pdf_split_address_capture_params(submit_single_pdf_split_address_capture_params)
        print("The response of JobsApi->submit_single_pdf_split_address_capture_params:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->submit_single_pdf_split_address_capture_params: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submit_single_pdf_split_address_capture_params** | [**SubmitSinglePdfSplitAddressCaptureParams**](SubmitSinglePdfSplitAddressCaptureParams.md)|  | 

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
**200** | Success |  -  |
**400** | Bad Request - Invalid request parameters |  -  |
**401** | Unauthorized - Missing or invalid authentication |  -  |
**403** | Forbidden - Insufficient permissions |  -  |
**404** | Not Found - Resource not found |  -  |
**422** | Unprocessable Entity - Validation failed |  -  |
**500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit_single_pdf_split_params**
> StandardResponse submit_single_pdf_split_params(submit_single_pdf_split_params)

Submit PDF split

Splits a single PDF into page ranges and mails each range to a different recipient. Each job item specifies page range and recipient address.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import c2m_api
from c2m_api.models.standard_response import StandardResponse
from c2m_api.models.submit_single_pdf_split_params import SubmitSinglePdfSplitParams
from c2m_api.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.click2mail.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = c2m_api.Configuration(
    host = "https://api.click2mail.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = c2m_api.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with c2m_api.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = c2m_api.JobsApi(api_client)
    submit_single_pdf_split_params = c2m_api.SubmitSinglePdfSplitParams() # SubmitSinglePdfSplitParams | 

    try:
        # Submit PDF split
        api_response = api_instance.submit_single_pdf_split_params(submit_single_pdf_split_params)
        print("The response of JobsApi->submit_single_pdf_split_params:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->submit_single_pdf_split_params: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submit_single_pdf_split_params** | [**SubmitSinglePdfSplitParams**](SubmitSinglePdfSplitParams.md)|  | 

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
**200** | Success |  -  |
**400** | Bad Request - Invalid request parameters |  -  |
**401** | Unauthorized - Missing or invalid authentication |  -  |
**403** | Forbidden - Insufficient permissions |  -  |
**404** | Not Found - Resource not found |  -  |
**422** | Unprocessable Entity - Validation failed |  -  |
**500** | Internal Server Error - Server encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

