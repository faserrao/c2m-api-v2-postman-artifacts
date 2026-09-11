# JobsAPI

All URIs are relative to *https://api.click2mail.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitMultiDocMergeParams**](JobsAPI.md#submitmultidocmergeparams) | **POST** /mail-merge | Submit mail merge
[**submitMultiZipAddressCaptureParams**](JobsAPI.md#submitmultizipaddresscaptureparams) | **POST** /batch/zip/address-capture | Submit ZIP batch — address capture
[**submitMultiZipParams**](JobsAPI.md#submitmultizipparams) | **POST** /batch/zip | Submit ZIP batch
[**submitSingleDocParams**](JobsAPI.md#submitsingledocparams) | **POST** /static | Submit single document
[**submitSinglePdfAddressCaptureParams**](JobsAPI.md#submitsinglepdfaddresscaptureparams) | **POST** /static/address-capture | Submit single document — address capture
[**submitSinglePdfSplitAddressCaptureParams**](JobsAPI.md#submitsinglepdfsplitaddresscaptureparams) | **POST** /batch/split/address-capture | Submit PDF split — address capture
[**submitSinglePdfSplitParams**](JobsAPI.md#submitsinglepdfsplitparams) | **POST** /batch/split | Submit PDF split


# **submitMultiDocMergeParams**
```swift
    open class func submitMultiDocMergeParams(submitMultiDocMergeParams: SubmitMultiDocMergeParams, completion: @escaping (_ data: StandardResponse?, _ error: Error?) -> Void)
```

Submit mail merge

Merges multiple documents into a single mailing sent to one recipient. Useful for creating document packets or multi-page letters.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitMultiDocMergeParams = submitMultiDocMergeParams(jobTemplate: "jobTemplate_example", mergeDocumentSource: [mergeDocumentRef(requestId: 123, filename: "filename_example")], recipientAddressSource: recipientAddressSource(mappingId: 123, singleAddress: address(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example", foo1: "foo1_example", foo2: "foo2_example"), addressName: "addressName_example", addressList: [nil], addressListName: "addressListName_example"), paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), returnAddress: returnAddress(firstName: "firstName_example", lastName: "lastName_example", company: "company_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example"), jobOptions: jobOptions(documentClass: "documentClass_example", layout: "layout_example", productionTime: "productionTime_example", envelope: "envelope_example", color: "color_example", paperType: "paperType_example", printOption: "printOption_example", mailClass: "mailClass_example"), tags: ["tags_example"]) // SubmitMultiDocMergeParams | 

// Submit mail merge
JobsAPI.submitMultiDocMergeParams(submitMultiDocMergeParams: submitMultiDocMergeParams) { (response, error) in
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
 **submitMultiDocMergeParams** | [**SubmitMultiDocMergeParams**](SubmitMultiDocMergeParams.md) |  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitMultiZipAddressCaptureParams**
```swift
    open class func submitMultiZipAddressCaptureParams(submitMultiZipAddressCaptureParams: SubmitMultiZipAddressCaptureParams, completion: @escaping (_ data: StandardResponse?, _ error: Error?) -> Void)
```

Submit ZIP batch — address capture

Submits a ZIP-based mailing batch where recipient addresses are captured externally. No inline recipient addresses are required.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitMultiZipAddressCaptureParams = submitMultiZipAddressCaptureParams(jobTemplate: "jobTemplate_example", zipDocumentSource: zipDocumentSource(zipDocumentId: 123, filename: "filename_example", requestId: 123, zipFilename: "zipFilename_example"), paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), returnAddress: returnAddress(firstName: "firstName_example", lastName: "lastName_example", company: "company_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example"), jobOptions: jobOptions(documentClass: "documentClass_example", layout: "layout_example", productionTime: "productionTime_example", envelope: "envelope_example", color: "color_example", paperType: "paperType_example", printOption: "printOption_example", mailClass: "mailClass_example"), tags: ["tags_example"]) // SubmitMultiZipAddressCaptureParams | 

// Submit ZIP batch — address capture
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

Submit ZIP batch

Submits multiple mailing jobs sourced from files inside a single ZIP archive. Each job item specifies which file within the ZIP and the recipient address.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitMultiZipParams = submitMultiZipParams(docSourceZipFileRef: docSourceZipFileRef(), multiZipJobs: [multiZipJobItem(jobTemplate: "jobTemplate_example", filename: "filename_example", recipientAddressSource: recipientAddressSource(mappingId: 123, singleAddress: address(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example", foo1: "foo1_example", foo2: "foo2_example"), addressName: "addressName_example", addressList: [nil], addressListName: "addressListName_example"))], paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), tags: ["tags_example"]) // SubmitMultiZipParams | 

// Submit ZIP batch
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

# **submitSingleDocParams**
```swift
    open class func submitSingleDocParams(submitSingleDocParams: SubmitSingleDocParams, completion: @escaping (_ data: StandardResponse?, _ error: Error?) -> Void)
```

Submit single document

Submits a mailing job for a single document to one or more recipients. The request body must include a document source, recipient address information, and payment details.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitSingleDocParams = submitSingleDocParams(jobTemplate: "jobTemplate_example", docSourceAll: docSourceAll(requestId: 123, filename: "filename_example", zipDocumentId: 123, zipFilename: "zipFilename_example"), recipientAddressSource: recipientAddressSource(mappingId: 123, singleAddress: address(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example", foo1: "foo1_example", foo2: "foo2_example"), addressName: "addressName_example", addressList: [nil], addressListName: "addressListName_example"), paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), returnAddress: returnAddress(firstName: "firstName_example", lastName: "lastName_example", company: "company_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example"), jobOptions: jobOptions(documentClass: "documentClass_example", layout: "layout_example", productionTime: "productionTime_example", envelope: "envelope_example", color: "color_example", paperType: "paperType_example", printOption: "printOption_example", mailClass: "mailClass_example"), tags: ["tags_example"]) // SubmitSingleDocParams | 

// Submit single document
JobsAPI.submitSingleDocParams(submitSingleDocParams: submitSingleDocParams) { (response, error) in
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
 **submitSingleDocParams** | [**SubmitSingleDocParams**](SubmitSingleDocParams.md) |  | 

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

Submit single document — address capture

Submits a mailing job for a single PDF where recipient addresses are captured from the document via OCR. No inline recipient address is required.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitSinglePdfAddressCaptureParams = submitSinglePdfAddressCaptureParams(jobTemplate: "jobTemplate_example", docSourceStandard: docSourceStandard(requestId: 123, filename: "filename_example"), paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), returnAddress: returnAddress(firstName: "firstName_example", lastName: "lastName_example", company: "company_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example"), jobOptions: jobOptions(documentClass: "documentClass_example", layout: "layout_example", productionTime: "productionTime_example", envelope: "envelope_example", color: "color_example", paperType: "paperType_example", printOption: "printOption_example", mailClass: "mailClass_example"), tags: ["tags_example"]) // SubmitSinglePdfAddressCaptureParams | 

// Submit single document — address capture
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

Submit PDF split — address capture

Splits a single PDF into page ranges where recipient addresses are captured from the PDF. No inline recipient addresses are required.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitSinglePdfSplitAddressCaptureParams = submitSinglePdfSplitAddressCaptureParams(jobTemplate: "jobTemplate_example", docSourceStandard: docSourceStandard(requestId: 123, filename: "filename_example"), pdfSplitJobsNoAddress: [pdfSplitJobItemNoAddress(startPage: 123, endPage: 123)], paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), returnAddress: returnAddress(firstName: "firstName_example", lastName: "lastName_example", company: "company_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example"), jobOptions: jobOptions(documentClass: "documentClass_example", layout: "layout_example", productionTime: "productionTime_example", envelope: "envelope_example", color: "color_example", paperType: "paperType_example", printOption: "printOption_example", mailClass: "mailClass_example"), tags: ["tags_example"]) // SubmitSinglePdfSplitAddressCaptureParams | 

// Submit PDF split — address capture
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

Submit PDF split

Splits a single PDF into page ranges and mails each range to a different recipient. Each job item specifies page range and recipient address.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitSinglePdfSplitParams = submitSinglePdfSplitParams(jobTemplate: "jobTemplate_example", docSourceStandard: docSourceStandard(requestId: 123, filename: "filename_example"), pdfSplitJobsWithAddress: [pdfSplitJobItemWithAddress(jobTemplate: "jobTemplate_example", startPage: 123, endPage: 123, recipientAddressSource: recipientAddressSource(mappingId: 123, singleAddress: address(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example", foo1: "foo1_example", foo2: "foo2_example"), addressName: "addressName_example", addressList: [nil], addressListName: "addressListName_example"))], paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), returnAddress: returnAddress(firstName: "firstName_example", lastName: "lastName_example", company: "company_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example"), jobOptions: jobOptions(documentClass: "documentClass_example", layout: "layout_example", productionTime: "productionTime_example", envelope: "envelope_example", color: "color_example", paperType: "paperType_example", printOption: "printOption_example", mailClass: "mailClass_example"), tags: ["tags_example"]) // SubmitSinglePdfSplitParams | 

// Submit PDF split
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

