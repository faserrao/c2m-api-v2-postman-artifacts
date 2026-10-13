# C2MApiV2.JobsApi

All URIs are relative to *https://api.click2mail.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitDocParams**](JobsApi.md#submitDocParams) | **POST** /static | Submit single document
[**submitMultiDocMergeParams**](JobsApi.md#submitMultiDocMergeParams) | **POST** /mail-merge | Submit mail merge
[**submitMultiZipAddressCaptureParams**](JobsApi.md#submitMultiZipAddressCaptureParams) | **POST** /batch/zip/address-capture | Submit ZIP batch — address capture
[**submitMultiZipParams**](JobsApi.md#submitMultiZipParams) | **POST** /batch/zip | Submit ZIP batch
[**submitSinglePdfAddressCaptureParams**](JobsApi.md#submitSinglePdfAddressCaptureParams) | **POST** /static/address-capture | Submit single document — address capture
[**submitSinglePdfSplitAddressCaptureParams**](JobsApi.md#submitSinglePdfSplitAddressCaptureParams) | **POST** /batch/split/address-capture | Submit PDF split — address capture
[**submitSinglePdfSplitParams**](JobsApi.md#submitSinglePdfSplitParams) | **POST** /batch/split | Submit PDF split



## submitDocParams

> StandardResponse submitDocParams(submitDocParams)

Submit single document

Submits a mailing job for a single document to one or more recipients. The request body must include a document source, recipient address information, and payment details.

### Example

```javascript
import C2MApiV2 from 'c2_m_api_v2';
let defaultClient = C2MApiV2.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new C2MApiV2.JobsApi();
let submitDocParams = {"docSourceAll":{"documentIdSource":{"documentId":85766}},"recipientAddressSource":{"recipientAddressByList":{"mappingId":5001,"addressList":[{"firstName":"Jeremy","lastName":"Meadows","address1":"32243 John Union Apt. 308","city":"Nathanielland","state":"GU","zip":"84642","country":"USA","address2":"Suite 100","address3":"","foo1":"Custom Field 1","foo2":"Custom Field 2"}],"addressListName":"Marketing Campaign Q1"}},"paymentDetails":{"paymentType":"creditCard","creditCardDetails":{"cardType":"visa","cardNumber":"4111111111111111","expirationDate":{"month":12,"year":2029},"cvv":123}},"returnAddress":{"firstName":"Kayla","lastName":"Wood","company":"Ochoa-Hudson","address1":"740 Michael Fork Apt. 349","city":"Marcusmouth","state":"WV","zip":"39348","country":"USA","address2":"Suite 100","address3":""},"jobOptions":{"documentClass":"letter","layout":"address_on_first_page","productionTime":"next_day","envelope":"standard","color":"full_color","paperType":"white","printOption":"double_sided","mailClass":"first_class"},"tags":["q1-campaign"]}; // SubmitDocParams | 
apiInstance.submitDocParams(submitDocParams, (error, data, response) => {
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
 **submitDocParams** | [**SubmitDocParams**](SubmitDocParams.md)|  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitMultiDocMergeParams

> StandardResponse submitMultiDocMergeParams(submitMultiDocMergeParams)

Submit mail merge

Merges multiple documents into a single mailing sent to each recipient. Useful for creating document packets or multi-page letters.

### Example

```javascript
import C2MApiV2 from 'c2_m_api_v2';
let defaultClient = C2MApiV2.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new C2MApiV2.JobsApi();
let submitMultiDocMergeParams = {"mergeDocumentSource":[{"mergeByDocumentId":{"documentId":10624}}],"recipientAddressSource":{"recipientAddressByList":{"mappingId":5001,"addressList":[{"firstName":"Shane","lastName":"Woods","address1":"47426 Fuentes Spurs Suite 134","city":"West Christina","state":"PA","zip":"62388","country":"USA","address2":"Suite 100","address3":"","foo1":"Custom Field 1","foo2":"Custom Field 2"}],"addressListName":"Marketing Campaign Q1"}},"paymentDetails":{"paymentType":"creditCard","creditCardDetails":{"cardType":"visa","cardNumber":"4111111111111111","expirationDate":{"month":12,"year":2029},"cvv":123}},"returnAddress":{"firstName":"Matthew","lastName":"Hickman","company":"Good, Marshall and Lambert","address1":"57131 Mark Parkways Apt. 606","city":"North Janice","state":"VA","zip":"44006","country":"USA","address2":"Suite 100","address3":""},"jobOptions":{"documentClass":"letter","layout":"address_on_first_page","productionTime":"next_day","envelope":"standard","color":"full_color","paperType":"white","printOption":"double_sided","mailClass":"first_class"},"tags":["q1-campaign"]}; // SubmitMultiDocMergeParams | 
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


## submitMultiZipAddressCaptureParams

> StandardResponse submitMultiZipAddressCaptureParams(submitMultiZipAddressCaptureParams)

Submit ZIP batch — address capture

Submits a ZIP-based mailing batch where recipient addresses are captured externally. No inline recipient addresses are required.

### Example

```javascript
import C2MApiV2 from 'c2_m_api_v2';
let defaultClient = C2MApiV2.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new C2MApiV2.JobsApi();
let submitMultiZipAddressCaptureParams = {"zipDocumentSource":{"zipDocumentIdSource":{"zipDocumentId":73154,"filename":"document.pdf"}},"paymentDetails":{"paymentType":"creditCard","creditCardDetails":{"cardType":"visa","cardNumber":"4111111111111111","expirationDate":{"month":12,"year":2029},"cvv":123}},"returnAddress":{"firstName":"Debra","lastName":"Clark","company":"Flores, Carter and Sharp","address1":"97182 Collins Loop Suite 303","city":"Rowlandburgh","state":"VA","zip":"32417","country":"USA","address2":"Suite 100","address3":""},"jobOptions":{"documentClass":"letter","layout":"address_on_first_page","productionTime":"next_day","envelope":"standard","color":"full_color","paperType":"white","printOption":"double_sided","mailClass":"first_class"},"tags":["q1-campaign"]}; // SubmitMultiZipAddressCaptureParams | 
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

Submit ZIP batch

Submits multiple mailing jobs sourced from files inside a single ZIP archive. Each job item specifies which file within the ZIP and the recipient address.

### Example

```javascript
import C2MApiV2 from 'c2_m_api_v2';
let defaultClient = C2MApiV2.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new C2MApiV2.JobsApi();
let submitMultiZipParams = {"docSourceZipFileRef":{"zipDocumentIdOnly":{"zipDocumentId":74883}},"multiZipJobs":[{"jobTemplate":"standard_letter","filename":"document.pdf","recipientAddressSource":{"recipientAddressByList":{"mappingId":5001,"addressList":[{"firstName":"Ryan","lastName":"Gonzalez","address1":"09884 David Hills Apt. 312","city":"East Darlenefort","state":"NJ","zip":"44566","country":"USA","address2":"Suite 100","address3":"","foo1":"Custom Field 1","foo2":"Custom Field 2"}],"addressListName":"Marketing Campaign Q1"}}}],"paymentDetails":{"paymentType":"creditCard","creditCardDetails":{"cardType":"visa","cardNumber":"4111111111111111","expirationDate":{"month":12,"year":2029},"cvv":123}},"tags":["q1-campaign"]}; // SubmitMultiZipParams | 
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

Submit single document — address capture

Submits a mailing job for a single PDF where recipient addresses are captured from the document via OCR. No inline recipient address is required.

### Example

```javascript
import C2MApiV2 from 'c2_m_api_v2';
let defaultClient = C2MApiV2.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new C2MApiV2.JobsApi();
let submitSinglePdfAddressCaptureParams = {"docSourceStandard":{"documentIdSource":{"documentId":77618}},"paymentDetails":{"paymentType":"creditCard","creditCardDetails":{"cardType":"visa","cardNumber":"4111111111111111","expirationDate":{"month":12,"year":2029},"cvv":123}},"returnAddress":{"firstName":"Daniel","lastName":"Schultz","company":"Simmons-Munoz","address1":"847 Smith Falls","city":"New Emilytown","state":"IN","zip":"98956","country":"USA","address2":"Suite 100","address3":""},"jobOptions":{"documentClass":"letter","layout":"address_on_first_page","productionTime":"next_day","envelope":"standard","color":"full_color","paperType":"white","printOption":"double_sided","mailClass":"first_class"},"tags":["q1-campaign"]}; // SubmitSinglePdfAddressCaptureParams | 
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

Submit PDF split — address capture

Splits a single PDF into page ranges where recipient addresses are captured from the PDF. No inline recipient addresses are required.

### Example

```javascript
import C2MApiV2 from 'c2_m_api_v2';
let defaultClient = C2MApiV2.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new C2MApiV2.JobsApi();
let submitSinglePdfSplitAddressCaptureParams = {"docSourceStandard":{"documentIdSource":{"documentId":55813}},"pdfSplitJobsNoAddress":[{"jobTemplate":"standard_letter","startPage":4,"endPage":9}],"paymentDetails":{"paymentType":"creditCard","creditCardDetails":{"cardType":"visa","cardNumber":"4111111111111111","expirationDate":{"month":12,"year":2029},"cvv":123}},"returnAddress":{"firstName":"Jonathan","lastName":"Davila","company":"Williams, Miller and Nunez","address1":"516 Cross Circles Apt. 409","city":"Wendyberg","state":"RI","zip":"25051","country":"USA","address2":"Suite 100","address3":""},"jobOptions":{"documentClass":"letter","layout":"address_on_first_page","productionTime":"next_day","envelope":"standard","color":"full_color","paperType":"white","printOption":"double_sided","mailClass":"first_class"},"tags":["q1-campaign"]}; // SubmitSinglePdfSplitAddressCaptureParams | 
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

Submit PDF split

Splits a single PDF into page ranges and mails each range to a different recipient. Each job item specifies page range and recipient address.

### Example

```javascript
import C2MApiV2 from 'c2_m_api_v2';
let defaultClient = C2MApiV2.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new C2MApiV2.JobsApi();
let submitSinglePdfSplitParams = {"docSourceStandard":{"documentIdSource":{"documentId":27947}},"pdfSplitJobsWithAddress":[{"jobTemplate":"standard_letter","startPage":1,"endPage":6,"recipientAddressSource":{"recipientAddressByList":{"mappingId":5001,"addressList":[{"firstName":"Patricia","lastName":"Thomas","address1":"149 Alexander Villages","city":"Lake Christopher","state":"TX","zip":"21382","country":"USA","address2":"Suite 100","address3":"","foo1":"Custom Field 1","foo2":"Custom Field 2"}],"addressListName":"Marketing Campaign Q1"}}}],"paymentDetails":{"paymentType":"creditCard","creditCardDetails":{"cardType":"visa","cardNumber":"4111111111111111","expirationDate":{"month":12,"year":2029},"cvv":123}},"returnAddress":{"firstName":"George","lastName":"Weaver","company":"Benitez Group","address1":"5725 Duffy Walks","city":"Samuelview","state":"GU","zip":"40786","country":"USA","address2":"Suite 100","address3":""},"jobOptions":{"documentClass":"letter","layout":"address_on_first_page","productionTime":"next_day","envelope":"standard","color":"full_color","paperType":"white","printOption":"double_sided","mailClass":"first_class"},"tags":["q1-campaign"]}; // SubmitSinglePdfSplitParams | 
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

