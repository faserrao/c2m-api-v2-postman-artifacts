# JobsAPI

All URIs are relative to *https://api.click2mail.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitMultiDocMergeParams**](JobsAPI.md#submitmultidocmergeparams) | **POST** /mail-merge | Submitmultidocmergeparams
[**submitMultiDocParams**](JobsAPI.md#submitmultidocparams) | **POST** /static/multi | Submitmultidocparams
[**submitMultiZipAddressCaptureParams**](JobsAPI.md#submitmultizipaddresscaptureparams) | **POST** /batch/zip/address-capture | Submitmultizipaddresscaptureparams
[**submitMultiZipParams**](JobsAPI.md#submitmultizipparams) | **POST** /batch/zip | Submitmultizipparams
[**submitSingleDocParams**](JobsAPI.md#submitsingledocparams) | **POST** /static | Submitsingledocparams
[**submitSinglePdfAddressCaptureParams**](JobsAPI.md#submitsinglepdfaddresscaptureparams) | **POST** /static/address-capture | Submitsinglepdfaddresscaptureparams
[**submitSinglePdfSplitAddressCaptureParams**](JobsAPI.md#submitsinglepdfsplitaddresscaptureparams) | **POST** /batch/split/address-capture | Submitsinglepdfsplitaddresscaptureparams
[**submitSinglePdfSplitParams**](JobsAPI.md#submitsinglepdfsplitparams) | **POST** /batch/split | Submitsinglepdfsplitparams


# **submitMultiDocMergeParams**
```swift
    open class func submitMultiDocMergeParams(submitMultiDocMergeParams: SubmitMultiDocMergeParams, completion: @escaping (_ data: StandardResponse?, _ error: Error?) -> Void)
```

Submitmultidocmergeparams

API endpoint for submitMultiDocMergeParams

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitMultiDocMergeParams = submitMultiDocMergeParams(jobTemplate: "jobTemplate_example", mergeDocumentSource: [mergeDocumentRef(requestId: 123, filename: "filename_example")], recipientAddressSource: recipientAddressSource(mappingId: 123, singleAddress: address(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example", foo1: "foo1_example", foo2: "foo2_example"), addressName: "addressName_example", addressList: [nil], addressListName: "addressListName_example"), paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), returnAddress: returnAddress(firstName: "firstName_example", lastName: "lastName_example", company: "company_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example"), jobOptions: jobOptions(documentClass: "documentClass_example", layout: "layout_example", productionTime: "productionTime_example", envelope: "envelope_example", color: "color_example", paperType: "paperType_example", printOption: "printOption_example", mailClass: "mailClass_example"), tags: ["tags_example"]) // SubmitMultiDocMergeParams | 

// Submitmultidocmergeparams
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

# **submitMultiDocParams**
```swift
    open class func submitMultiDocParams(submitMultiDocParams: SubmitMultiDocParams, completion: @escaping (_ data: StandardResponse?, _ error: Error?) -> Void)
```

Submitmultidocparams

API endpoint for submitMultiDocParams

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitMultiDocParams = submitMultiDocParams(multiDocJobs: [multiDocJobItem(jobTemplate: "jobTemplate_example", docSourceAll: docSourceAll(requestId: 123, filename: "filename_example", zipDocumentId: 123, zipFilename: "zipFilename_example"), recipientAddressSource: recipientAddressSource(mappingId: 123, singleAddress: address(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example", foo1: "foo1_example", foo2: "foo2_example"), addressName: "addressName_example", addressList: [nil], addressListName: "addressListName_example"))], paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), tags: ["tags_example"]) // SubmitMultiDocParams | 

// Submitmultidocparams
JobsAPI.submitMultiDocParams(submitMultiDocParams: submitMultiDocParams) { (response, error) in
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
 **submitMultiDocParams** | [**SubmitMultiDocParams**](SubmitMultiDocParams.md) |  | 

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

Submitmultizipaddresscaptureparams

API endpoint for submitMultiZipAddressCaptureParams

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitMultiZipAddressCaptureParams = submitMultiZipAddressCaptureParams(jobTemplate: "jobTemplate_example", zipDocumentSource: zipDocumentSource(zipDocumentId: 123, filename: "filename_example", requestId: 123, zipFilename: "zipFilename_example"), paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), returnAddress: returnAddress(firstName: "firstName_example", lastName: "lastName_example", company: "company_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example"), jobOptions: jobOptions(documentClass: "documentClass_example", layout: "layout_example", productionTime: "productionTime_example", envelope: "envelope_example", color: "color_example", paperType: "paperType_example", printOption: "printOption_example", mailClass: "mailClass_example"), tags: ["tags_example"]) // SubmitMultiZipAddressCaptureParams | 

// Submitmultizipaddresscaptureparams
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

Submitmultizipparams

API endpoint for submitMultiZipParams

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitMultiZipParams = submitMultiZipParams(docSourceZipFileRef: docSourceZipFileRef(), multiZipJobs: [multiZipJobItem(jobTemplate: "jobTemplate_example", filename: "filename_example", recipientAddressSource: recipientAddressSource(mappingId: 123, singleAddress: address(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example", foo1: "foo1_example", foo2: "foo2_example"), addressName: "addressName_example", addressList: [nil], addressListName: "addressListName_example"))], paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), tags: ["tags_example"]) // SubmitMultiZipParams | 

// Submitmultizipparams
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

Submitsingledocparams

API endpoint for submitSingleDocParams

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitSingleDocParams = submitSingleDocParams(jobTemplate: "jobTemplate_example", docSourceAll: docSourceAll(requestId: 123, filename: "filename_example", zipDocumentId: 123, zipFilename: "zipFilename_example"), recipientAddressSource: recipientAddressSource(mappingId: 123, singleAddress: address(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example", foo1: "foo1_example", foo2: "foo2_example"), addressName: "addressName_example", addressList: [nil], addressListName: "addressListName_example"), paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), returnAddress: returnAddress(firstName: "firstName_example", lastName: "lastName_example", company: "company_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example"), jobOptions: jobOptions(documentClass: "documentClass_example", layout: "layout_example", productionTime: "productionTime_example", envelope: "envelope_example", color: "color_example", paperType: "paperType_example", printOption: "printOption_example", mailClass: "mailClass_example"), tags: ["tags_example"]) // SubmitSingleDocParams | 

// Submitsingledocparams
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

Submitsinglepdfaddresscaptureparams

API endpoint for submitSinglePdfAddressCaptureParams

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitSinglePdfAddressCaptureParams = submitSinglePdfAddressCaptureParams(jobTemplate: "jobTemplate_example", docSourceStandard: docSourceStandard(requestId: 123, filename: "filename_example"), paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), returnAddress: returnAddress(firstName: "firstName_example", lastName: "lastName_example", company: "company_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example"), jobOptions: jobOptions(documentClass: "documentClass_example", layout: "layout_example", productionTime: "productionTime_example", envelope: "envelope_example", color: "color_example", paperType: "paperType_example", printOption: "printOption_example", mailClass: "mailClass_example"), tags: ["tags_example"]) // SubmitSinglePdfAddressCaptureParams | 

// Submitsinglepdfaddresscaptureparams
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

Submitsinglepdfsplitaddresscaptureparams

API endpoint for submitSinglePdfSplitAddressCaptureParams

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitSinglePdfSplitAddressCaptureParams = submitSinglePdfSplitAddressCaptureParams(jobTemplate: "jobTemplate_example", docSourceStandard: docSourceStandard(requestId: 123, filename: "filename_example"), pdfSplitJobsNoAddress: [pdfSplitJobItemNoAddress(startPage: 123, endPage: 123)], paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), returnAddress: returnAddress(firstName: "firstName_example", lastName: "lastName_example", company: "company_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example"), jobOptions: jobOptions(documentClass: "documentClass_example", layout: "layout_example", productionTime: "productionTime_example", envelope: "envelope_example", color: "color_example", paperType: "paperType_example", printOption: "printOption_example", mailClass: "mailClass_example"), tags: ["tags_example"]) // SubmitSinglePdfSplitAddressCaptureParams | 

// Submitsinglepdfsplitaddresscaptureparams
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

Submitsinglepdfsplitparams

API endpoint for submitSinglePdfSplitParams

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitSinglePdfSplitParams = submitSinglePdfSplitParams(jobTemplate: "jobTemplate_example", docSourceStandard: docSourceStandard(requestId: 123, filename: "filename_example"), pdfSplitJobsWithAddress: [pdfSplitJobItemWithAddress(jobTemplate: "jobTemplate_example", startPage: 123, endPage: 123, recipientAddressSource: recipientAddressSource(mappingId: 123, singleAddress: address(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example", foo1: "foo1_example", foo2: "foo2_example"), addressName: "addressName_example", addressList: [nil], addressListName: "addressListName_example"))], paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), returnAddress: returnAddress(firstName: "firstName_example", lastName: "lastName_example", company: "company_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example"), jobOptions: jobOptions(documentClass: "documentClass_example", layout: "layout_example", productionTime: "productionTime_example", envelope: "envelope_example", color: "color_example", paperType: "paperType_example", printOption: "printOption_example", mailClass: "mailClass_example"), tags: ["tags_example"]) // SubmitSinglePdfSplitParams | 

// Submitsinglepdfsplitparams
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

