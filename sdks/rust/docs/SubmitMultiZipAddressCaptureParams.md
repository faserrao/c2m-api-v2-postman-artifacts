# SubmitMultiZipAddressCaptureParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_template** | Option<**String**> | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional]
**zip_document_source** | [**models::ZipDocumentSource**](zipDocumentSource.md) |  | 
**payment_details** | Option<[**models::PaymentDetails**](paymentDetails.md)> |  | [optional]
**return_address** | Option<[**models::ReturnAddress**](returnAddress.md)> |  | [optional]
**job_options** | Option<[**models::JobOptions**](jobOptions.md)> |  | [optional]
**tags** | Option<**Vec<String>**> | Array of user-defined string tags. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


