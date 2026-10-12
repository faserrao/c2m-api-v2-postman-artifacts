# C2M.Api.Model.SubmitMultiDocMergeParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MergeDocumentSource** | [**List&lt;MergeDocumentRef&gt;**](MergeDocumentRef.md) | Ordered array of document references to merge into one output document. Minimum two entries required. | 
**RecipientAddressSource** | [**RecipientAddressSource**](RecipientAddressSource.md) |  | 
**JobTemplate** | **string** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] 
**PaymentDetails** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] 
**ReturnAddress** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] 
**JobOptions** | [**JobOptions**](JobOptions.md) |  | [optional] 
**Tags** | **List&lt;string&gt;** | Array of user-defined string tags. | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

