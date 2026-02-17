# MostCommonAPI

All URIs are relative to *https://api.example.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitMultiDocMergeParams**](MostCommonAPI.md#submitmultidocmergeparams) | **POST** /jobs/submit/multi/doc/merge | Submit a multi doc merge job
[**submitMultiDocParams**](MostCommonAPI.md#submitmultidocparams) | **POST** /jobs/submit/multi/doc | Submit a multi doc job
[**submitSingleDocParams**](MostCommonAPI.md#submitsingledocparams) | **POST** /jobs/submit/single/doc | Submit a single doc job


# **submitMultiDocMergeParams**
```swift
    open class func submitMultiDocMergeParams(submitMultiDocMergeParams: SubmitMultiDocMergeParams, completion: @escaping (_ data: StandardResponse?, _ error: Error?) -> Void)
```

Submit a multi doc merge job

Submits a multi doc merge mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitMultiDocMergeParams = submitMultiDocMergeParams(jobTemplate: "jobTemplate_example", mergeDocumentSource: [mergeDocumentRef(requestId: 123, filename: "filename_example")], recipientAddressSource: recipientAddressSource(mappingId: 123, singleAddress: address(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example", foo1: "foo1_example", foo2: "foo2_example"), addressName: "addressName_example", addressList: [nil], addressListName: "addressListName_example", addressListId: 123), paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), returnAddress: returnAddress(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example"), jobOptions: jobOptions(documentClass: "documentClass_example", layout: "layout_example", productionTime: "productionTime_example", envelope: "envelope_example", color: "color_example", paperType: "paperType_example", printOption: "printOption_example", mailClass: "mailClass_example"), tags: ["tags_example"]) // SubmitMultiDocMergeParams | 

// Submit a multi doc merge job
MostCommonAPI.submitMultiDocMergeParams(submitMultiDocMergeParams: submitMultiDocMergeParams) { (response, error) in
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

Submit a multi doc job

Submits a mailing job with multiple documents to be sent to recipients. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitMultiDocParams = submitMultiDocParams(jobTemplate: "jobTemplate_example", multiDocJobs: [multiDocJobItem(jobTemplate: "jobTemplate_example", docSourceAll: docSourceAll(requestId: 123, filename: "filename_example", zipDocumentId: 123, zipFilename: "zipFilename_example"), recipientAddressSource: recipientAddressSource(mappingId: 123, singleAddress: address(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example", foo1: "foo1_example", foo2: "foo2_example"), addressName: "addressName_example", addressList: [nil], addressListName: "addressListName_example", addressListId: 123))], paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), tags: ["tags_example"]) // SubmitMultiDocParams | 

// Submit a multi doc job
MostCommonAPI.submitMultiDocParams(submitMultiDocParams: submitMultiDocParams) { (response, error) in
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

# **submitSingleDocParams**
```swift
    open class func submitSingleDocParams(submitSingleDocParams: SubmitSingleDocParams, completion: @escaping (_ data: StandardResponse?, _ error: Error?) -> Void)
```

Submit a single doc job

Submits a mailing job with a single document to be sent to one or more recipients. The request body contains job parameters including document source, recipient address information, and payment details.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let submitSingleDocParams = submitSingleDocParams(jobTemplate: "jobTemplate_example", docSourceAll: docSourceAll(requestId: 123, filename: "filename_example", zipDocumentId: 123, zipFilename: "zipFilename_example"), recipientAddressSource: recipientAddressSource(mappingId: 123, singleAddress: address(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example", foo1: "foo1_example", foo2: "foo2_example"), addressName: "addressName_example", addressList: [nil], addressListName: "addressListName_example", addressListId: 123), paymentDetails: paymentDetails(creditCardDetails: creditCardDetails(cardType: "cardType_example", cardNumber: "cardNumber_example", expirationDate: expirationDate(month: 123, year: 123), cvv: 123), invoiceDetails: invoiceDetails(invoiceNumber: "invoiceNumber_example", amountDue: 123), achDetails: achDetails(routingNumber: "routingNumber_example", accountNumber: "accountNumber_example", checkDigit: 123), creditAmount: creditAmount(amount: 123, currency: "currency_example")), returnAddress: returnAddress(firstName: "firstName_example", lastName: "lastName_example", address1: "address1_example", city: "city_example", state: "state_example", zip: "zip_example", country: "country_example", address2: "address2_example", address3: "address3_example"), jobOptions: jobOptions(documentClass: "documentClass_example", layout: "layout_example", productionTime: "productionTime_example", envelope: "envelope_example", color: "color_example", paperType: "paperType_example", printOption: "printOption_example", mailClass: "mailClass_example"), tags: ["tags_example"]) // SubmitSingleDocParams | 

// Submit a single doc job
MostCommonAPI.submitSingleDocParams(submitSingleDocParams: submitSingleDocParams) { (response, error) in
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

