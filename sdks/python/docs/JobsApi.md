# c2m_api.JobsApi

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


# **submit_multi_doc_merge_params**
> StandardResponse submit_multi_doc_merge_params(submit_multi_doc_merge_params)

Submit a multi doc merge job

Submits a mailing job (multi doc merge). The request body contains job parameters including document source, recipient address information, and payment details.

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
        # Submit a multi doc merge job
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

# **submit_multi_doc_params**
> StandardResponse submit_multi_doc_params(submit_multi_doc_params)

Submit a multi doc job

Submits a mailing job (multi doc). The request body contains job parameters including document source, recipient address information, and payment details.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import c2m_api
from c2m_api.models.standard_response import StandardResponse
from c2m_api.models.submit_multi_doc_params import SubmitMultiDocParams
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
    submit_multi_doc_params = c2m_api.SubmitMultiDocParams() # SubmitMultiDocParams | 

    try:
        # Submit a multi doc job
        api_response = api_instance.submit_multi_doc_params(submit_multi_doc_params)
        print("The response of JobsApi->submit_multi_doc_params:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->submit_multi_doc_params: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submit_multi_doc_params** | [**SubmitMultiDocParams**](SubmitMultiDocParams.md)|  | 

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

Submit a multi zip addressCapture job

Submits a mailing job (multi zip addressCapture). The request body contains job parameters including document source, recipient address information, and payment details.

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
        # Submit a multi zip addressCapture job
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

Submit a multi zip job

Submits a mailing job (multi zip). The request body contains job parameters including document source, recipient address information, and payment details.

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
        # Submit a multi zip job
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

# **submit_single_doc_params**
> StandardResponse submit_single_doc_params(submit_single_doc_params)

Submit a single doc job

Submits a mailing job (single doc). The request body contains job parameters including document source, recipient address information, and payment details.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import c2m_api
from c2m_api.models.standard_response import StandardResponse
from c2m_api.models.submit_single_doc_params import SubmitSingleDocParams
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
    submit_single_doc_params = c2m_api.SubmitSingleDocParams() # SubmitSingleDocParams | 

    try:
        # Submit a single doc job
        api_response = api_instance.submit_single_doc_params(submit_single_doc_params)
        print("The response of JobsApi->submit_single_doc_params:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->submit_single_doc_params: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submit_single_doc_params** | [**SubmitSingleDocParams**](SubmitSingleDocParams.md)|  | 

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

Submit a single pdf addressCapture job

Submits a mailing job (single pdf addressCapture). The request body contains job parameters including document source, recipient address information, and payment details.

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
        # Submit a single pdf addressCapture job
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

Submit a single pdf split addressCapture job

Submits a mailing job (single pdf split addressCapture). The request body contains job parameters including document source, recipient address information, and payment details.

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
        # Submit a single pdf split addressCapture job
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

Submit a single pdf split job

Submits a mailing job (single pdf split). The request body contains job parameters including document source, recipient address information, and payment details.

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
        # Submit a single pdf split job
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

