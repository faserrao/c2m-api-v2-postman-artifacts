# C2MApiV2.JobsApi

All URIs are relative to *https://api.example.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitMultiDocMergeParams**](JobsApi.md#submitMultiDocMergeParams) | **POST** /jobs/submit/multi/doc/merge | Submit a multi doc merge job
[**submitMultiDocParams**](JobsApi.md#submitMultiDocParams) | **POST** /jobs/submit/multi/doc | Submit a multi doc job
[**submitMultiZipAddressCaptureParams**](JobsApi.md#submitMultiZipAddressCaptureParams) | **POST** /jobs/submit/multi/zip/addressCapture | Submit a multi zip addressCapture job
[**submitMultiZipParams**](JobsApi.md#submitMultiZipParams) | **POST** /jobs/submit/multi/zip | Submit a multi zip job
[**submitSingleDocParams**](JobsApi.md#submitSingleDocParams) | **POST** /jobs/submit/single/doc | Submit a single doc job
[**submitSinglePdfAddressCaptureParams**](JobsApi.md#submitSinglePdfAddressCaptureParams) | **POST** /jobs/submit/single/pdf/addressCapture | Submit a single pdf addressCapture job
[**submitSinglePdfSplitAddressCaptureParams**](JobsApi.md#submitSinglePdfSplitAddressCaptureParams) | **POST** /jobs/submit/single/pdf/split/addressCapture | Submit a single pdf split addressCapture job
[**submitSinglePdfSplitParams**](JobsApi.md#submitSinglePdfSplitParams) | **POST** /jobs/submit/single/pdf/split | Submit a single pdf split job



## submitMultiDocMergeParams

> StandardResponse submitMultiDocMergeParams(submitMultiDocMergeParams)

Submit a multi doc merge job

Submits a multi doc merge mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```javascript
import C2MApiV2 from 'c2_m_api_v2';
let defaultClient = C2MApiV2.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new C2MApiV2.JobsApi();
let submitMultiDocMergeParams = new C2MApiV2.SubmitMultiDocMergeParams(); // SubmitMultiDocMergeParams | 
apiInstance.submitMultiDocMergeParams(submitMultiDocMergeParams, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitMultiDocMergeParams** | [**SubmitMultiDocMergeParams**](SubmitMultiDocMergeParams.md)|  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitMultiDocParams

> StandardResponse submitMultiDocParams(submitMultiDocParams)

Submit a multi doc job

Submits a mailing job with multiple documents to be sent to recipients. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```javascript
import C2MApiV2 from 'c2_m_api_v2';
let defaultClient = C2MApiV2.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new C2MApiV2.JobsApi();
let submitMultiDocParams = new C2MApiV2.SubmitMultiDocParams(); // SubmitMultiDocParams | 
apiInstance.submitMultiDocParams(submitMultiDocParams, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitMultiDocParams** | [**SubmitMultiDocParams**](SubmitMultiDocParams.md)|  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitMultiZipAddressCaptureParams

> StandardResponse submitMultiZipAddressCaptureParams(submitMultiZipAddressCaptureParams)

Submit a multi zip addressCapture job

Submits a multi zip addressCapture mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```javascript
import C2MApiV2 from 'c2_m_api_v2';
let defaultClient = C2MApiV2.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new C2MApiV2.JobsApi();
let submitMultiZipAddressCaptureParams = new C2MApiV2.SubmitMultiZipAddressCaptureParams(); // SubmitMultiZipAddressCaptureParams | 
apiInstance.submitMultiZipAddressCaptureParams(submitMultiZipAddressCaptureParams, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitMultiZipAddressCaptureParams** | [**SubmitMultiZipAddressCaptureParams**](SubmitMultiZipAddressCaptureParams.md)|  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitMultiZipParams

> StandardResponse submitMultiZipParams(submitMultiZipParams)

Submit a multi zip job

Submits a multi zip mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```javascript
import C2MApiV2 from 'c2_m_api_v2';
let defaultClient = C2MApiV2.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new C2MApiV2.JobsApi();
let submitMultiZipParams = new C2MApiV2.SubmitMultiZipParams(); // SubmitMultiZipParams | 
apiInstance.submitMultiZipParams(submitMultiZipParams, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitMultiZipParams** | [**SubmitMultiZipParams**](SubmitMultiZipParams.md)|  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitSingleDocParams

> StandardResponse submitSingleDocParams(submitSingleDocParams)

Submit a single doc job

Submits a mailing job with a single document to be sent to one or more recipients. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```javascript
import C2MApiV2 from 'c2_m_api_v2';
let defaultClient = C2MApiV2.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new C2MApiV2.JobsApi();
let submitSingleDocParams = new C2MApiV2.SubmitSingleDocParams(); // SubmitSingleDocParams | 
apiInstance.submitSingleDocParams(submitSingleDocParams, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitSingleDocParams** | [**SubmitSingleDocParams**](SubmitSingleDocParams.md)|  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitSinglePdfAddressCaptureParams

> StandardResponse submitSinglePdfAddressCaptureParams(submitSinglePdfAddressCaptureParams)

Submit a single pdf addressCapture job

Submits a single pdf addressCapture mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```javascript
import C2MApiV2 from 'c2_m_api_v2';
let defaultClient = C2MApiV2.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new C2MApiV2.JobsApi();
let submitSinglePdfAddressCaptureParams = new C2MApiV2.SubmitSinglePdfAddressCaptureParams(); // SubmitSinglePdfAddressCaptureParams | 
apiInstance.submitSinglePdfAddressCaptureParams(submitSinglePdfAddressCaptureParams, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitSinglePdfAddressCaptureParams** | [**SubmitSinglePdfAddressCaptureParams**](SubmitSinglePdfAddressCaptureParams.md)|  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitSinglePdfSplitAddressCaptureParams

> StandardResponse submitSinglePdfSplitAddressCaptureParams(submitSinglePdfSplitAddressCaptureParams)

Submit a single pdf split addressCapture job

Submits a single pdf split addressCapture mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```javascript
import C2MApiV2 from 'c2_m_api_v2';
let defaultClient = C2MApiV2.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new C2MApiV2.JobsApi();
let submitSinglePdfSplitAddressCaptureParams = new C2MApiV2.SubmitSinglePdfSplitAddressCaptureParams(); // SubmitSinglePdfSplitAddressCaptureParams | 
apiInstance.submitSinglePdfSplitAddressCaptureParams(submitSinglePdfSplitAddressCaptureParams, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitSinglePdfSplitAddressCaptureParams** | [**SubmitSinglePdfSplitAddressCaptureParams**](SubmitSinglePdfSplitAddressCaptureParams.md)|  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitSinglePdfSplitParams

> StandardResponse submitSinglePdfSplitParams(submitSinglePdfSplitParams)

Submit a single pdf split job

Submits a single pdf split mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```javascript
import C2MApiV2 from 'c2_m_api_v2';
let defaultClient = C2MApiV2.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new C2MApiV2.JobsApi();
let submitSinglePdfSplitParams = new C2MApiV2.SubmitSinglePdfSplitParams(); // SubmitSinglePdfSplitParams | 
apiInstance.submitSinglePdfSplitParams(submitSinglePdfSplitParams, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitSinglePdfSplitParams** | [**SubmitSinglePdfSplitParams**](SubmitSinglePdfSplitParams.md)|  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

