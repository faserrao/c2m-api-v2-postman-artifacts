# C2MApiV2.JobsApi

All URIs are relative to *https://api.example.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitMultiZipAddressCaptureParams**](JobsApi.md#submitMultiZipAddressCaptureParams) | **POST** /jobs/submit/multi/zip/addressCapture | Submit a multi zip addressCapture job
[**submitMultiZipParams**](JobsApi.md#submitMultiZipParams) | **POST** /jobs/submit/multi/zip | Submit a multi zip job
[**submitSinglePdfAddressCaptureParams**](JobsApi.md#submitSinglePdfAddressCaptureParams) | **POST** /jobs/submit/single/pdf/addressCapture | Submit a single pdf addressCapture job
[**submitSinglePdfSplitAddressCaptureParams**](JobsApi.md#submitSinglePdfSplitAddressCaptureParams) | **POST** /jobs/submit/single/pdf/split/addressCapture | Submit a single pdf split addressCapture job
[**submitSinglePdfSplitParams**](JobsApi.md#submitSinglePdfSplitParams) | **POST** /jobs/submit/single/pdf/split | Submit a single pdf split job



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

