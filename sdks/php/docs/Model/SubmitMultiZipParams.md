# # SubmitMultiZipParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_template** | **string** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional]
**doc_source_zip_file_ref** | [**\C2MApi\Model\DocSourceZipFileRef**](DocSourceZipFileRef.md) |  |
**multi_zip_jobs** | [**\C2MApi\Model\MultiZipJobItem[]**](MultiZipJobItem.md) | List of per-file job items extracted from a ZIP archive (POST /batch/zip). |
**payment_details** | [**\C2MApi\Model\PaymentDetails**](PaymentDetails.md) |  | [optional]
**return_address** | [**\C2MApi\Model\ReturnAddress**](ReturnAddress.md) |  | [optional]
**job_options** | [**\C2MApi\Model\JobOptions**](JobOptions.md) |  | [optional]
**tags** | **string[]** | Array of user-defined string tags. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
