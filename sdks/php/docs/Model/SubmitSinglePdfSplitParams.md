# # SubmitSinglePdfSplitParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_template** | **string** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional]
**doc_source_standard** | [**\C2MApi\Model\DocSourceStandard**](DocSourceStandard.md) |  |
**pdf_split_jobs_with_address** | [**\C2MApi\Model\PdfSplitJobItemWithAddress[]**](PdfSplitJobItemWithAddress.md) | List of page-range job items, each with its own inline recipient address. |
**payment_details** | [**\C2MApi\Model\PaymentDetails**](PaymentDetails.md) |  | [optional]
**return_address** | [**\C2MApi\Model\ReturnAddress**](ReturnAddress.md) |  | [optional]
**job_options** | [**\C2MApi\Model\JobOptions**](JobOptions.md) |  | [optional]
**tags** | **string[]** | Array of user-defined string tags. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
