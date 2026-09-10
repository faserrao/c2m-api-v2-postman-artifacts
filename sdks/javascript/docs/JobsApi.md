# C2MApiV2.JobsApi

All URIs are relative to *https://api.click2mail.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitMultiDocMergeParams**](JobsApi.md#submitMultiDocMergeParams) | **POST** /mail-merge | Submitmultidocmergeparams
[**submitMultiDocParams**](JobsApi.md#submitMultiDocParams) | **POST** /static/multi | Submitmultidocparams
[**submitMultiZipAddressCaptureParams**](JobsApi.md#submitMultiZipAddressCaptureParams) | **POST** /batch/zip/address-capture | Submitmultizipaddresscaptureparams
[**submitMultiZipParams**](JobsApi.md#submitMultiZipParams) | **POST** /batch/zip | Submitmultizipparams
[**submitSingleDocParams**](JobsApi.md#submitSingleDocParams) | **POST** /static | Submitsingledocparams
[**submitSinglePdfAddressCaptureParams**](JobsApi.md#submitSinglePdfAddressCaptureParams) | **POST** /static/address-capture | Submitsinglepdfaddresscaptureparams
[**submitSinglePdfSplitAddressCaptureParams**](JobsApi.md#submitSinglePdfSplitAddressCaptureParams) | **POST** /batch/split/address-capture | Submitsinglepdfsplitaddresscaptureparams
[**submitSinglePdfSplitParams**](JobsApi.md#submitSinglePdfSplitParams) | **POST** /batch/split | Submitsinglepdfsplitparams



## submitMultiDocMergeParams

> StandardResponse submitMultiDocMergeParams(submitMultiDocMergeParams)

Submitmultidocmergeparams

API endpoint for submitMultiDocMergeParams

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

Submitmultidocparams

API endpoint for submitMultiDocParams

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

Submitmultizipaddresscaptureparams

API endpoint for submitMultiZipAddressCaptureParams

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

Submitmultizipparams

API endpoint for submitMultiZipParams

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

Submitsingledocparams

API endpoint for submitSingleDocParams

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

Submitsinglepdfaddresscaptureparams

API endpoint for submitSinglePdfAddressCaptureParams

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

Submitsinglepdfsplitaddresscaptureparams

API endpoint for submitSinglePdfSplitAddressCaptureParams

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

Submitsinglepdfsplitparams

API endpoint for submitSinglePdfSplitParams

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

