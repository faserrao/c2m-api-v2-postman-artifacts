# SubmitSinglePdfSplitAddressCaptureParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_template** | Option<**String**> | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional]
**doc_source_standard** | [**models::DocSourceStandard**](docSourceStandard.md) |  | 
**pdf_split_jobs_no_address** | [**Vec<models::PdfSplitJobItemNoAddress>**](pdfSplitJobItemNoAddress.md) | List of page-range job items without inline addresses — addresses are captured externally (POST /batch/split/address-capture). | 
**payment_details** | Option<[**models::PaymentDetails**](paymentDetails.md)> |  | [optional]
**return_address** | Option<[**models::ReturnAddress**](returnAddress.md)> |  | [optional]
**job_options** | Option<[**models::JobOptions**](jobOptions.md)> |  | [optional]
**tags** | Option<**Vec<String>**> | Array of user-defined string tags. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


