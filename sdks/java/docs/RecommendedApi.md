# RecommendedApi

All URIs are relative to *https://api.example.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**submitMultiDocMergeParams**](RecommendedApi.md#submitMultiDocMergeParams) | **POST** /jobs/submit/multi/doc/merge | Submit a multi doc merge job |
| [**submitMultiDocParams**](RecommendedApi.md#submitMultiDocParams) | **POST** /jobs/submit/multi/doc | Submit a multi doc job |
| [**submitSingleDocParams**](RecommendedApi.md#submitSingleDocParams) | **POST** /jobs/submit/single/doc | Submit a single doc job |


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
import com.c2m.api.RecommendedApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.example.com/v1");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    RecommendedApi apiInstance = new RecommendedApi(defaultClient);
    SubmitMultiDocMergeParams submitMultiDocMergeParams = new SubmitMultiDocMergeParams(); // SubmitMultiDocMergeParams | 
    try {
      StandardResponse result = apiInstance.submitMultiDocMergeParams(submitMultiDocMergeParams);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RecommendedApi#submitMultiDocMergeParams");
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
import com.c2m.api.RecommendedApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.example.com/v1");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    RecommendedApi apiInstance = new RecommendedApi(defaultClient);
    SubmitMultiDocParams submitMultiDocParams = new SubmitMultiDocParams(); // SubmitMultiDocParams | 
    try {
      StandardResponse result = apiInstance.submitMultiDocParams(submitMultiDocParams);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RecommendedApi#submitMultiDocParams");
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
import com.c2m.api.RecommendedApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.example.com/v1");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    RecommendedApi apiInstance = new RecommendedApi(defaultClient);
    SubmitSingleDocParams submitSingleDocParams = new SubmitSingleDocParams(); // SubmitSingleDocParams | 
    try {
      StandardResponse result = apiInstance.submitSingleDocParams(submitSingleDocParams);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RecommendedApi#submitSingleDocParams");
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

