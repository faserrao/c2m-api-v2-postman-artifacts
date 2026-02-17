# JobsAPI

All URIs are relative to *https://api.example.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitMultiZipAddressCaptureParams**](JobsAPI.md#submitmultizipaddresscaptureparams) | **POST** /jobs/submit/multi/zip/addressCapture | Submit a multi zip addressCapture job
[**submitMultiZipParams**](JobsAPI.md#submitmultizipparams) | **POST** /jobs/submit/multi/zip | Submit a multi zip job
[**submitSinglePdfAddressCaptureParams**](JobsAPI.md#submitsinglepdfaddresscaptureparams) | **POST** /jobs/submit/single/pdf/addressCapture | Submit a single pdf addressCapture job
[**submitSinglePdfSplitAddressCaptureParams**](JobsAPI.md#submitsinglepdfsplitaddresscaptureparams) | **POST** /jobs/submit/single/pdf/split/addressCapture | Submit a single pdf split addressCapture job
[**submitSinglePdfSplitParams**](JobsAPI.md#submitsinglepdfsplitparams) | **POST** /jobs/submit/single/pdf/split | Submit a single pdf split job


# **submitMultiZipAddressCaptureParams**
```swift
    open class func submitMultiZipAddressCaptureParams(submitMultiZipAddressCaptureParams: SubmitMultiZipAddressCaptureParams, completion: @escaping (_ data: StandardResponse?, _ error: Error?) -> Void)
```

Submit a multi zip addressCapture job

Submits a multi zip addressCapture mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitMultiZipAddressCaptureParams = submitMultiZipAddressCaptureParams(jobTemplate: "jobTemplate_example", zipDocumentSource: zipDocumentSource(zipDocumentId: 123, filename: "filename_example", requestId: 123, zipFilename: "zipFilename_example"), paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), returnAddress: returnAddress(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example"), jobOptions: jobOptions(documentClass: "documentClass_example", layout: "layout_example", productionTime: "productionTime_example", envelope: "envelope_example", color: "color_example", paperType: "paperType_example", printOption: "printOption_example", mailClass: "mailClass_example"), tags: ["tags_example"]) // SubmitMultiZipAddressCaptureParams | 

// Submit a multi zip addressCapture job
JobsAPI.submitMultiZipAddressCaptureParams(submitMultiZipAddressCaptureParams: submitMultiZipAddressCaptureParams) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitMultiZipAddressCaptureParams** | [**SubmitMultiZipAddressCaptureParams**](SubmitMultiZipAddressCaptureParams.md) |  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitMultiZipParams**
```swift
    open class func submitMultiZipParams(submitMultiZipParams: SubmitMultiZipParams, completion: @escaping (_ data: StandardResponse?, _ error: Error?) -> Void)
```

Submit a multi zip job

Submits a multi zip mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitMultiZipParams = submitMultiZipParams(jobTemplate: "jobTemplate_example", multiZipJobs: [multiZipJobItem(jobTemplate: "jobTemplate_example", docSourceZipFile: docSourceZipFile(zipDocumentId: 123, filename: "filename_example", requestId: 123, zipFilename: "zipFilename_example"), recipientAddressSource: recipientAddressSource(mappingId: 123, singleAddress: address(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example", foo1: "foo1_example", foo2: "foo2_example"), addressName: "addressName_example", addressList: [nil], addressListName: "addressListName_example", addressListId: 123))], paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), tags: ["tags_example"]) // SubmitMultiZipParams | 

// Submit a multi zip job
JobsAPI.submitMultiZipParams(submitMultiZipParams: submitMultiZipParams) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitMultiZipParams** | [**SubmitMultiZipParams**](SubmitMultiZipParams.md) |  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitSinglePdfAddressCaptureParams**
```swift
    open class func submitSinglePdfAddressCaptureParams(submitSinglePdfAddressCaptureParams: SubmitSinglePdfAddressCaptureParams, completion: @escaping (_ data: StandardResponse?, _ error: Error?) -> Void)
```

Submit a single pdf addressCapture job

Submits a single pdf addressCapture mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitSinglePdfAddressCaptureParams = submitSinglePdfAddressCaptureParams(jobTemplate: "jobTemplate_example", docSourceStandard: docSourceStandard(requestId: 123, filename: "filename_example"), paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), returnAddress: returnAddress(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example"), jobOptions: jobOptions(documentClass: "documentClass_example", layout: "layout_example", productionTime: "productionTime_example", envelope: "envelope_example", color: "color_example", paperType: "paperType_example", printOption: "printOption_example", mailClass: "mailClass_example"), tags: ["tags_example"]) // SubmitSinglePdfAddressCaptureParams | 

// Submit a single pdf addressCapture job
JobsAPI.submitSinglePdfAddressCaptureParams(submitSinglePdfAddressCaptureParams: submitSinglePdfAddressCaptureParams) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitSinglePdfAddressCaptureParams** | [**SubmitSinglePdfAddressCaptureParams**](SubmitSinglePdfAddressCaptureParams.md) |  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitSinglePdfSplitAddressCaptureParams**
```swift
    open class func submitSinglePdfSplitAddressCaptureParams(submitSinglePdfSplitAddressCaptureParams: SubmitSinglePdfSplitAddressCaptureParams, completion: @escaping (_ data: StandardResponse?, _ error: Error?) -> Void)
```

Submit a single pdf split addressCapture job

Submits a single pdf split addressCapture mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitSinglePdfSplitAddressCaptureParams = submitSinglePdfSplitAddressCaptureParams(jobTemplate: "jobTemplate_example", docSourceStandard: docSourceStandard(requestId: 123, filename: "filename_example"), pdfSplitJobsNoAddress: [pdfSplitJobItemNoAddress(startPage: 123, endPage: 123)], paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), returnAddress: returnAddress(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example"), jobOptions: jobOptions(documentClass: "documentClass_example", layout: "layout_example", productionTime: "productionTime_example", envelope: "envelope_example", color: "color_example", paperType: "paperType_example", printOption: "printOption_example", mailClass: "mailClass_example"), tags: ["tags_example"]) // SubmitSinglePdfSplitAddressCaptureParams | 

// Submit a single pdf split addressCapture job
JobsAPI.submitSinglePdfSplitAddressCaptureParams(submitSinglePdfSplitAddressCaptureParams: submitSinglePdfSplitAddressCaptureParams) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitSinglePdfSplitAddressCaptureParams** | [**SubmitSinglePdfSplitAddressCaptureParams**](SubmitSinglePdfSplitAddressCaptureParams.md) |  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitSinglePdfSplitParams**
```swift
    open class func submitSinglePdfSplitParams(submitSinglePdfSplitParams: SubmitSinglePdfSplitParams, completion: @escaping (_ data: StandardResponse?, _ error: Error?) -> Void)
```

Submit a single pdf split job

Submits a single pdf split mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitSinglePdfSplitParams = submitSinglePdfSplitParams(jobTemplate: "jobTemplate_example", docSourceStandard: docSourceStandard(requestId: 123, filename: "filename_example"), pdfSplitJobsWithAddress: [pdfSplitJobItemWithAddress(startPage: 123, endPage: 123, recipientAddressSource: recipientAddressSource(mappingId: 123, singleAddress: address(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example", foo1: "foo1_example", foo2: "foo2_example"), addressName: "addressName_example", addressList: [nil], addressListName: "addressListName_example", addressListId: 123))], paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), returnAddress: returnAddress(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example"), jobOptions: jobOptions(documentClass: "documentClass_example", layout: "layout_example", productionTime: "productionTime_example", envelope: "envelope_example", color: "color_example", paperType: "paperType_example", printOption: "printOption_example", mailClass: "mailClass_example"), tags: ["tags_example"]) // SubmitSinglePdfSplitParams | 

// Submit a single pdf split job
JobsAPI.submitSinglePdfSplitParams(submitSinglePdfSplitParams: submitSinglePdfSplitParams) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitSinglePdfSplitParams** | [**SubmitSinglePdfSplitParams**](SubmitSinglePdfSplitParams.md) |  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

