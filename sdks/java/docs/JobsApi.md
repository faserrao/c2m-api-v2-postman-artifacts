# JobsApi

All URIs are relative to *https://api.example.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**submitMultiDocMergeParams**](JobsApi.md#submitMultiDocMergeParams) | **POST** /jobs/submit/multi/doc/merge | Submit a multi doc merge job |
| [**submitMultiDocParams**](JobsApi.md#submitMultiDocParams) | **POST** /jobs/submit/multi/doc | Submit a multi doc job |
| [**submitMultiZipAddressCaptureParams**](JobsApi.md#submitMultiZipAddressCaptureParams) | **POST** /jobs/submit/multi/zip/addressCapture | Submit a multi zip addressCapture job |
| [**submitMultiZipParams**](JobsApi.md#submitMultiZipParams) | **POST** /jobs/submit/multi/zip | Submit a multi zip job |
| [**submitSingleDocParams**](JobsApi.md#submitSingleDocParams) | **POST** /jobs/submit/single/doc | Submit a single doc job |
| [**submitSinglePdfAddressCaptureParams**](JobsApi.md#submitSinglePdfAddressCaptureParams) | **POST** /jobs/submit/single/pdf/addressCapture | Submit a single pdf addressCapture job |
| [**submitSinglePdfSplitAddressCaptureParams**](JobsApi.md#submitSinglePdfSplitAddressCaptureParams) | **POST** /jobs/submit/single/pdf/split/addressCapture | Submit a single pdf split addressCapture job |
| [**submitSinglePdfSplitParams**](JobsApi.md#submitSinglePdfSplitParams) | **POST** /jobs/submit/single/pdf/split | Submit a single pdf split job |


<a id="submitMultiDocMergeParams"></a>
# **submitMultiDocMergeParams**
> StandardResponse submitMultiDocMergeParams(submitMultiDocMergeParams)

Submit a multi doc merge job

Submits a multi doc merge mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```java
// Import classes:
import com.c2m.ApiClient;
import com.c2m.ApiException;
import com.c2m.Configuration;
import com.c2m.auth.*;
import com.c2m.models.*;
import com.c2m.api.JobsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.example.com/v1");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    JobsApi apiInstance = new JobsApi(defaultClient);
    SubmitMultiDocMergeParams submitMultiDocMergeParams = new SubmitMultiDocMergeParams(); // SubmitMultiDocMergeParams | 
    try {
      StandardResponse result = apiInstance.submitMultiDocMergeParams(submitMultiDocMergeParams);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling JobsApi#submitMultiDocMergeParams");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **submitMultiDocMergeParams** | [**SubmitMultiDocMergeParams**](SubmitMultiDocMergeParams.md)|  | |

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

<a id="submitMultiDocParams"></a>
# **submitMultiDocParams**
> StandardResponse submitMultiDocParams(submitMultiDocParams)

Submit a multi doc job

Submits a mailing job with multiple documents to be sent to recipients. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```java
// Import classes:
import com.c2m.ApiClient;
import com.c2m.ApiException;
import com.c2m.Configuration;
import com.c2m.auth.*;
import com.c2m.models.*;
import com.c2m.api.JobsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.example.com/v1");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    JobsApi apiInstance = new JobsApi(defaultClient);
    SubmitMultiDocParams submitMultiDocParams = new SubmitMultiDocParams(); // SubmitMultiDocParams | 
    try {
      StandardResponse result = apiInstance.submitMultiDocParams(submitMultiDocParams);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling JobsApi#submitMultiDocParams");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **submitMultiDocParams** | [**SubmitMultiDocParams**](SubmitMultiDocParams.md)|  | |

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

<a id="submitMultiZipAddressCaptureParams"></a>
# **submitMultiZipAddressCaptureParams**
> StandardResponse submitMultiZipAddressCaptureParams(submitMultiZipAddressCaptureParams)

Submit a multi zip addressCapture job

Submits a multi zip addressCapture mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```java
// Import classes:
import com.c2m.ApiClient;
import com.c2m.ApiException;
import com.c2m.Configuration;
import com.c2m.auth.*;
import com.c2m.models.*;
import com.c2m.api.JobsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.example.com/v1");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    JobsApi apiInstance = new JobsApi(defaultClient);
    SubmitMultiZipAddressCaptureParams submitMultiZipAddressCaptureParams = new SubmitMultiZipAddressCaptureParams(); // SubmitMultiZipAddressCaptureParams | 
    try {
      StandardResponse result = apiInstance.submitMultiZipAddressCaptureParams(submitMultiZipAddressCaptureParams);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling JobsApi#submitMultiZipAddressCaptureParams");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **submitMultiZipAddressCaptureParams** | [**SubmitMultiZipAddressCaptureParams**](SubmitMultiZipAddressCaptureParams.md)|  | |

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

<a id="submitMultiZipParams"></a>
# **submitMultiZipParams**
> StandardResponse submitMultiZipParams(submitMultiZipParams)

Submit a multi zip job

Submits a multi zip mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```java
// Import classes:
import com.c2m.ApiClient;
import com.c2m.ApiException;
import com.c2m.Configuration;
import com.c2m.auth.*;
import com.c2m.models.*;
import com.c2m.api.JobsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.example.com/v1");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    JobsApi apiInstance = new JobsApi(defaultClient);
    SubmitMultiZipParams submitMultiZipParams = new SubmitMultiZipParams(); // SubmitMultiZipParams | 
    try {
      StandardResponse result = apiInstance.submitMultiZipParams(submitMultiZipParams);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling JobsApi#submitMultiZipParams");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **submitMultiZipParams** | [**SubmitMultiZipParams**](SubmitMultiZipParams.md)|  | |

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

<a id="submitSingleDocParams"></a>
# **submitSingleDocParams**
> StandardResponse submitSingleDocParams(submitSingleDocParams)

Submit a single doc job

Submits a mailing job with a single document to be sent to one or more recipients. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```java
// Import classes:
import com.c2m.ApiClient;
import com.c2m.ApiException;
import com.c2m.Configuration;
import com.c2m.auth.*;
import com.c2m.models.*;
import com.c2m.api.JobsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.example.com/v1");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    JobsApi apiInstance = new JobsApi(defaultClient);
    SubmitSingleDocParams submitSingleDocParams = new SubmitSingleDocParams(); // SubmitSingleDocParams | 
    try {
      StandardResponse result = apiInstance.submitSingleDocParams(submitSingleDocParams);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling JobsApi#submitSingleDocParams");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **submitSingleDocParams** | [**SubmitSingleDocParams**](SubmitSingleDocParams.md)|  | |

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

<a id="submitSinglePdfAddressCaptureParams"></a>
# **submitSinglePdfAddressCaptureParams**
> StandardResponse submitSinglePdfAddressCaptureParams(submitSinglePdfAddressCaptureParams)

Submit a single pdf addressCapture job

Submits a single pdf addressCapture mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```java
// Import classes:
import com.c2m.ApiClient;
import com.c2m.ApiException;
import com.c2m.Configuration;
import com.c2m.auth.*;
import com.c2m.models.*;
import com.c2m.api.JobsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.example.com/v1");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    JobsApi apiInstance = new JobsApi(defaultClient);
    SubmitSinglePdfAddressCaptureParams submitSinglePdfAddressCaptureParams = new SubmitSinglePdfAddressCaptureParams(); // SubmitSinglePdfAddressCaptureParams | 
    try {
      StandardResponse result = apiInstance.submitSinglePdfAddressCaptureParams(submitSinglePdfAddressCaptureParams);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling JobsApi#submitSinglePdfAddressCaptureParams");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **submitSinglePdfAddressCaptureParams** | [**SubmitSinglePdfAddressCaptureParams**](SubmitSinglePdfAddressCaptureParams.md)|  | |

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

<a id="submitSinglePdfSplitAddressCaptureParams"></a>
# **submitSinglePdfSplitAddressCaptureParams**
> StandardResponse submitSinglePdfSplitAddressCaptureParams(submitSinglePdfSplitAddressCaptureParams)

Submit a single pdf split addressCapture job

Submits a single pdf split addressCapture mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```java
// Import classes:
import com.c2m.ApiClient;
import com.c2m.ApiException;
import com.c2m.Configuration;
import com.c2m.auth.*;
import com.c2m.models.*;
import com.c2m.api.JobsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.example.com/v1");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    JobsApi apiInstance = new JobsApi(defaultClient);
    SubmitSinglePdfSplitAddressCaptureParams submitSinglePdfSplitAddressCaptureParams = new SubmitSinglePdfSplitAddressCaptureParams(); // SubmitSinglePdfSplitAddressCaptureParams | 
    try {
      StandardResponse result = apiInstance.submitSinglePdfSplitAddressCaptureParams(submitSinglePdfSplitAddressCaptureParams);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling JobsApi#submitSinglePdfSplitAddressCaptureParams");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **submitSinglePdfSplitAddressCaptureParams** | [**SubmitSinglePdfSplitAddressCaptureParams**](SubmitSinglePdfSplitAddressCaptureParams.md)|  | |

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

<a id="submitSinglePdfSplitParams"></a>
# **submitSinglePdfSplitParams**
> StandardResponse submitSinglePdfSplitParams(submitSinglePdfSplitParams)

Submit a single pdf split job

Submits a single pdf split mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```java
// Import classes:
import com.c2m.ApiClient;
import com.c2m.ApiException;
import com.c2m.Configuration;
import com.c2m.auth.*;
import com.c2m.models.*;
import com.c2m.api.JobsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.example.com/v1");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    JobsApi apiInstance = new JobsApi(defaultClient);
    SubmitSinglePdfSplitParams submitSinglePdfSplitParams = new SubmitSinglePdfSplitParams(); // SubmitSinglePdfSplitParams | 
    try {
      StandardResponse result = apiInstance.submitSinglePdfSplitParams(submitSinglePdfSplitParams);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling JobsApi#submitSinglePdfSplitParams");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **submitSinglePdfSplitParams** | [**SubmitSinglePdfSplitParams**](SubmitSinglePdfSplitParams.md)|  | |

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

