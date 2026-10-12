# SubmitMultiDocMergeParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_template** | Option<**String**> | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional]
**merge_document_source** | [**Vec<models::MergeDocumentRef>**](mergeDocumentRef.md) | Ordered array of document references to merge into one output document. Minimum two entries required. | 
**recipient_address_source** | [**models::RecipientAddressSource**](recipientAddressSource.md) |  | 
**payment_details** | Option<[**models::PaymentDetails**](paymentDetails.md)> |  | [optional]
**return_address** | Option<[**models::ReturnAddress**](returnAddress.md)> |  | [optional]
**job_options** | Option<[**models::JobOptions**](jobOptions.md)> |  | [optional]
**tags** | Option<**Vec<String>**> | Array of user-defined string tags. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


