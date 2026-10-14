# JobsApi

All URIs are relative to *https://api.click2mail.com/v2*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**submitDocParams**](JobsApi.md#submitDocParams) | **POST** /static | Submit single document |
| [**submitMultiDocMergeParams**](JobsApi.md#submitMultiDocMergeParams) | **POST** /mail-merge | Submit mail merge |
| [**submitMultiZipAddressCaptureParams**](JobsApi.md#submitMultiZipAddressCaptureParams) | **POST** /batch/zip/address-capture | Submit ZIP batch — address capture |
| [**submitMultiZipParams**](JobsApi.md#submitMultiZipParams) | **POST** /batch/zip | Submit ZIP batch |
| [**submitSinglePdfAddressCaptureParams**](JobsApi.md#submitSinglePdfAddressCaptureParams) | **POST** /static/address-capture | Submit single document — address capture |
| [**submitSinglePdfSplitAddressCaptureParams**](JobsApi.md#submitSinglePdfSplitAddressCaptureParams) | **POST** /batch/split/address-capture | Submit PDF split — address capture |
| [**submitSinglePdfSplitParams**](JobsApi.md#submitSinglePdfSplitParams) | **POST** /batch/split | Submit PDF split |


<a id="submitDocParams"></a>
# **submitDocParams**
> StandardResponse submitDocParams(submitDocParams)

Submit single document

Submits a mailing job for a single document to one or more recipients. The request body must include a document source, recipient address information, and payment details.

### Example
```kotlin
// Import classes:
//import com.c2m.api.infrastructure.*
//import com.c2m.api.models.*

val apiInstance = JobsApi()
val submitDocParams : SubmitDocParams = {"docSourceAll":{"documentIdSource":{"documentId":85766}},"recipientAddressSource":{"recipientAddressByList":{"mappingId":5001,"addressList":[{"firstName":"Jeremy","lastName":"Meadows","address1":"32243 John Union Apt. 308","city":"Nathanielland","state":"GU","zip":"84642","country":"USA","address2":"Suite 100","address3":"","foo1":"Custom Field 1","foo2":"Custom Field 2"}],"addressListName":"Marketing Campaign Q1"}},"paymentDetails":{"paymentType":"creditCard","creditCardDetails":{"cardType":"visa","cardNumber":"4111111111111111","expirationDate":{"month":12,"year":2029},"cvv":123}},"returnAddress":{"firstName":"Kayla","lastName":"Wood","company":"Ochoa-Hudson","address1":"740 Michael Fork Apt. 349","city":"Marcusmouth","state":"WV","zip":"39348","country":"USA","address2":"Suite 100","address3":""},"jobOptions":{"documentClass":"letter","layout":"address_on_first_page","productionTime":"next_day","envelope":"standard","color":"full_color","paperType":"white","printOption":"double_sided","mailClass":"first_class"},"tags":["q1-campaign"]} // SubmitDocParams | 
try {
    val result : StandardResponse = apiInstance.submitDocParams(submitDocParams)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling JobsApi#submitDocParams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling JobsApi#submitDocParams")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submitDocParams** | [**SubmitDocParams**](SubmitDocParams.md)|  | |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="submitMultiDocMergeParams"></a>
# **submitMultiDocMergeParams**
> StandardResponse submitMultiDocMergeParams(submitMultiDocMergeParams)

Submit mail merge

Merges multiple documents into a single mailing sent to each recipient. Useful for creating document packets or multi-page letters.

### Example
```kotlin
// Import classes:
//import com.c2m.api.infrastructure.*
//import com.c2m.api.models.*

val apiInstance = JobsApi()
val submitMultiDocMergeParams : SubmitMultiDocMergeParams = {"mergeDocumentSource":[{"mergeByDocumentId":{"documentId":10624}}],"recipientAddressSource":{"recipientAddressByList":{"mappingId":5001,"addressList":[{"firstName":"Shane","lastName":"Woods","address1":"47426 Fuentes Spurs Suite 134","city":"West Christina","state":"PA","zip":"62388","country":"USA","address2":"Suite 100","address3":"","foo1":"Custom Field 1","foo2":"Custom Field 2"}],"addressListName":"Marketing Campaign Q1"}},"paymentDetails":{"paymentType":"creditCard","creditCardDetails":{"cardType":"visa","cardNumber":"4111111111111111","expirationDate":{"month":12,"year":2029},"cvv":123}},"returnAddress":{"firstName":"Matthew","lastName":"Hickman","company":"Good, Marshall and Lambert","address1":"57131 Mark Parkways Apt. 606","city":"North Janice","state":"VA","zip":"44006","country":"USA","address2":"Suite 100","address3":""},"jobOptions":{"documentClass":"letter","layout":"address_on_first_page","productionTime":"next_day","envelope":"standard","color":"full_color","paperType":"white","printOption":"double_sided","mailClass":"first_class"},"tags":["q1-campaign"]} // SubmitMultiDocMergeParams | 
try {
    val result : StandardResponse = apiInstance.submitMultiDocMergeParams(submitMultiDocMergeParams)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling JobsApi#submitMultiDocMergeParams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling JobsApi#submitMultiDocMergeParams")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submitMultiDocMergeParams** | [**SubmitMultiDocMergeParams**](SubmitMultiDocMergeParams.md)|  | |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="submitMultiZipAddressCaptureParams"></a>
# **submitMultiZipAddressCaptureParams**
> StandardResponse submitMultiZipAddressCaptureParams(submitMultiZipAddressCaptureParams)

Submit ZIP batch — address capture

Submits a ZIP-based mailing batch where recipient addresses are captured externally. No inline recipient addresses are required.

### Example
```kotlin
// Import classes:
//import com.c2m.api.infrastructure.*
//import com.c2m.api.models.*

val apiInstance = JobsApi()
val submitMultiZipAddressCaptureParams : SubmitMultiZipAddressCaptureParams = {"zipDocumentSource":{"zipDocumentIdSource":{"zipDocumentId":73154,"filename":"document.pdf"}},"paymentDetails":{"paymentType":"creditCard","creditCardDetails":{"cardType":"visa","cardNumber":"4111111111111111","expirationDate":{"month":12,"year":2029},"cvv":123}},"returnAddress":{"firstName":"Debra","lastName":"Clark","company":"Flores, Carter and Sharp","address1":"97182 Collins Loop Suite 303","city":"Rowlandburgh","state":"VA","zip":"32417","country":"USA","address2":"Suite 100","address3":""},"jobOptions":{"documentClass":"letter","layout":"address_on_first_page","productionTime":"next_day","envelope":"standard","color":"full_color","paperType":"white","printOption":"double_sided","mailClass":"first_class"},"tags":["q1-campaign"]} // SubmitMultiZipAddressCaptureParams | 
try {
    val result : StandardResponse = apiInstance.submitMultiZipAddressCaptureParams(submitMultiZipAddressCaptureParams)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling JobsApi#submitMultiZipAddressCaptureParams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling JobsApi#submitMultiZipAddressCaptureParams")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submitMultiZipAddressCaptureParams** | [**SubmitMultiZipAddressCaptureParams**](SubmitMultiZipAddressCaptureParams.md)|  | |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="submitMultiZipParams"></a>
# **submitMultiZipParams**
> StandardResponse submitMultiZipParams(submitMultiZipParams)

Submit ZIP batch

Submits multiple mailing jobs sourced from files inside a single ZIP archive. Each job item specifies which file within the ZIP and the recipient address.

### Example
```kotlin
// Import classes:
//import com.c2m.api.infrastructure.*
//import com.c2m.api.models.*

val apiInstance = JobsApi()
val submitMultiZipParams : SubmitMultiZipParams = {"docSourceZipFileRef":{"zipDocumentIdOnly":{"zipDocumentId":74883}},"multiZipJobs":[{"jobTemplate":"standard_letter","filename":"document.pdf","recipientAddressSource":{"recipientAddressByList":{"mappingId":5001,"addressList":[{"firstName":"Ryan","lastName":"Gonzalez","address1":"09884 David Hills Apt. 312","city":"East Darlenefort","state":"NJ","zip":"44566","country":"USA","address2":"Suite 100","address3":"","foo1":"Custom Field 1","foo2":"Custom Field 2"}],"addressListName":"Marketing Campaign Q1"}}}],"paymentDetails":{"paymentType":"creditCard","creditCardDetails":{"cardType":"visa","cardNumber":"4111111111111111","expirationDate":{"month":12,"year":2029},"cvv":123}},"returnAddress":{"firstName":"Jay","lastName":"Wilson","company":"Carter-Lopez","address1":"49364 Sarah Viaduct Suite 794","city":"New April","state":"TX","zip":"75032","country":"USA","address2":"Suite 100","address3":""},"jobOptions":{"documentClass":"letter","layout":"address_on_first_page","productionTime":"next_day","envelope":"standard","color":"full_color","paperType":"white","printOption":"double_sided","mailClass":"first_class"},"tags":["q1-campaign"]} // SubmitMultiZipParams | 
try {
    val result : StandardResponse = apiInstance.submitMultiZipParams(submitMultiZipParams)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling JobsApi#submitMultiZipParams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling JobsApi#submitMultiZipParams")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submitMultiZipParams** | [**SubmitMultiZipParams**](SubmitMultiZipParams.md)|  | |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="submitSinglePdfAddressCaptureParams"></a>
# **submitSinglePdfAddressCaptureParams**
> StandardResponse submitSinglePdfAddressCaptureParams(submitSinglePdfAddressCaptureParams)

Submit single document — address capture

Submits a mailing job for a single PDF where recipient addresses are captured from the document via OCR. No inline recipient address is required.

### Example
```kotlin
// Import classes:
//import com.c2m.api.infrastructure.*
//import com.c2m.api.models.*

val apiInstance = JobsApi()
val submitSinglePdfAddressCaptureParams : SubmitSinglePdfAddressCaptureParams = {"docSourceStandard":{"documentIdSource":{"documentId":77618}},"paymentDetails":{"paymentType":"creditCard","creditCardDetails":{"cardType":"visa","cardNumber":"4111111111111111","expirationDate":{"month":12,"year":2029},"cvv":123}},"returnAddress":{"firstName":"Daniel","lastName":"Schultz","company":"Simmons-Munoz","address1":"847 Smith Falls","city":"New Emilytown","state":"IN","zip":"98956","country":"USA","address2":"Suite 100","address3":""},"jobOptions":{"documentClass":"letter","layout":"address_on_first_page","productionTime":"next_day","envelope":"standard","color":"full_color","paperType":"white","printOption":"double_sided","mailClass":"first_class"},"tags":["q1-campaign"]} // SubmitSinglePdfAddressCaptureParams | 
try {
    val result : StandardResponse = apiInstance.submitSinglePdfAddressCaptureParams(submitSinglePdfAddressCaptureParams)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling JobsApi#submitSinglePdfAddressCaptureParams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling JobsApi#submitSinglePdfAddressCaptureParams")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submitSinglePdfAddressCaptureParams** | [**SubmitSinglePdfAddressCaptureParams**](SubmitSinglePdfAddressCaptureParams.md)|  | |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="submitSinglePdfSplitAddressCaptureParams"></a>
# **submitSinglePdfSplitAddressCaptureParams**
> StandardResponse submitSinglePdfSplitAddressCaptureParams(submitSinglePdfSplitAddressCaptureParams)

Submit PDF split — address capture

Splits a single PDF into page ranges where recipient addresses are captured from the PDF. No inline recipient addresses are required.

### Example
```kotlin
// Import classes:
//import com.c2m.api.infrastructure.*
//import com.c2m.api.models.*

val apiInstance = JobsApi()
val submitSinglePdfSplitAddressCaptureParams : SubmitSinglePdfSplitAddressCaptureParams = {"docSourceStandard":{"documentIdSource":{"documentId":55813}},"pdfSplitJobsNoAddress":[{"jobTemplate":"standard_letter","startPage":4,"endPage":9}],"paymentDetails":{"paymentType":"creditCard","creditCardDetails":{"cardType":"visa","cardNumber":"4111111111111111","expirationDate":{"month":12,"year":2029},"cvv":123}},"returnAddress":{"firstName":"Jonathan","lastName":"Davila","company":"Williams, Miller and Nunez","address1":"516 Cross Circles Apt. 409","city":"Wendyberg","state":"RI","zip":"25051","country":"USA","address2":"Suite 100","address3":""},"jobOptions":{"documentClass":"letter","layout":"address_on_first_page","productionTime":"next_day","envelope":"standard","color":"full_color","paperType":"white","printOption":"double_sided","mailClass":"first_class"},"tags":["q1-campaign"]} // SubmitSinglePdfSplitAddressCaptureParams | 
try {
    val result : StandardResponse = apiInstance.submitSinglePdfSplitAddressCaptureParams(submitSinglePdfSplitAddressCaptureParams)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling JobsApi#submitSinglePdfSplitAddressCaptureParams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling JobsApi#submitSinglePdfSplitAddressCaptureParams")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submitSinglePdfSplitAddressCaptureParams** | [**SubmitSinglePdfSplitAddressCaptureParams**](SubmitSinglePdfSplitAddressCaptureParams.md)|  | |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="submitSinglePdfSplitParams"></a>
# **submitSinglePdfSplitParams**
> StandardResponse submitSinglePdfSplitParams(submitSinglePdfSplitParams)

Submit PDF split

Splits a single PDF into page ranges and mails each range to a different recipient. Each job item specifies page range and recipient address.

### Example
```kotlin
// Import classes:
//import com.c2m.api.infrastructure.*
//import com.c2m.api.models.*

val apiInstance = JobsApi()
val submitSinglePdfSplitParams : SubmitSinglePdfSplitParams = {"docSourceStandard":{"documentIdSource":{"documentId":27947}},"pdfSplitJobsWithAddress":[{"jobTemplate":"standard_letter","startPage":1,"endPage":6,"recipientAddressSource":{"recipientAddressByList":{"mappingId":5001,"addressList":[{"firstName":"Patricia","lastName":"Thomas","address1":"149 Alexander Villages","city":"Lake Christopher","state":"TX","zip":"21382","country":"USA","address2":"Suite 100","address3":"","foo1":"Custom Field 1","foo2":"Custom Field 2"}],"addressListName":"Marketing Campaign Q1"}}}],"paymentDetails":{"paymentType":"creditCard","creditCardDetails":{"cardType":"visa","cardNumber":"4111111111111111","expirationDate":{"month":12,"year":2029},"cvv":123}},"returnAddress":{"firstName":"George","lastName":"Weaver","company":"Benitez Group","address1":"5725 Duffy Walks","city":"Samuelview","state":"GU","zip":"40786","country":"USA","address2":"Suite 100","address3":""},"jobOptions":{"documentClass":"letter","layout":"address_on_first_page","productionTime":"next_day","envelope":"standard","color":"full_color","paperType":"white","printOption":"double_sided","mailClass":"first_class"},"tags":["q1-campaign"]} // SubmitSinglePdfSplitParams | 
try {
    val result : StandardResponse = apiInstance.submitSinglePdfSplitParams(submitSinglePdfSplitParams)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling JobsApi#submitSinglePdfSplitParams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling JobsApi#submitSinglePdfSplitParams")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submitSinglePdfSplitParams** | [**SubmitSinglePdfSplitParams**](SubmitSinglePdfSplitParams.md)|  | |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

