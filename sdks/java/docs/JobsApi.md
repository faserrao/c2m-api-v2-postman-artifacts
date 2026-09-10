# JobsApi

All URIs are relative to *https://api.click2mail.com/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**submitMultiDocMergeParams**](JobsApi.md#submitMultiDocMergeParams) | **POST** /mail-merge | Submitmultidocmergeparams |
| [**submitMultiDocParams**](JobsApi.md#submitMultiDocParams) | **POST** /static/multi | Submitmultidocparams |
| [**submitMultiZipAddressCaptureParams**](JobsApi.md#submitMultiZipAddressCaptureParams) | **POST** /batch/zip/address-capture | Submitmultizipaddresscaptureparams |
| [**submitMultiZipParams**](JobsApi.md#submitMultiZipParams) | **POST** /batch/zip | Submitmultizipparams |
| [**submitSingleDocParams**](JobsApi.md#submitSingleDocParams) | **POST** /static | Submitsingledocparams |
| [**submitSinglePdfAddressCaptureParams**](JobsApi.md#submitSinglePdfAddressCaptureParams) | **POST** /static/address-capture | Submitsinglepdfaddresscaptureparams |
| [**submitSinglePdfSplitAddressCaptureParams**](JobsApi.md#submitSinglePdfSplitAddressCaptureParams) | **POST** /batch/split/address-capture | Submitsinglepdfsplitaddresscaptureparams |
| [**submitSinglePdfSplitParams**](JobsApi.md#submitSinglePdfSplitParams) | **POST** /batch/split | Submitsinglepdfsplitparams |


<a id="submitMultiDocMergeParams"></a>
# **submitMultiDocMergeParams**
> StandardResponse submitMultiDocMergeParams(submitMultiDocMergeParams)

Submitmultidocmergeparams

API endpoint for submitMultiDocMergeParams

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
    defaultClient.setBasePath("https://api.click2mail.com/v2");
    
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

Submitmultidocparams

API endpoint for submitMultiDocParams

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
    defaultClient.setBasePath("https://api.click2mail.com/v2");
    
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

Submitmultizipaddresscaptureparams

API endpoint for submitMultiZipAddressCaptureParams

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
    defaultClient.setBasePath("https://api.click2mail.com/v2");
    
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

Submitmultizipparams

API endpoint for submitMultiZipParams

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
    defaultClient.setBasePath("https://api.click2mail.com/v2");
    
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

Submitsingledocparams

API endpoint for submitSingleDocParams

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
    defaultClient.setBasePath("https://api.click2mail.com/v2");
    
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

Submitsinglepdfaddresscaptureparams

API endpoint for submitSinglePdfAddressCaptureParams

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
    defaultClient.setBasePath("https://api.click2mail.com/v2");
    
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

Submitsinglepdfsplitaddresscaptureparams

API endpoint for submitSinglePdfSplitAddressCaptureParams

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
    defaultClient.setBasePath("https://api.click2mail.com/v2");
    
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

Submitsinglepdfsplitparams

API endpoint for submitSinglePdfSplitParams

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
    defaultClient.setBasePath("https://api.click2mail.com/v2");
    
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

