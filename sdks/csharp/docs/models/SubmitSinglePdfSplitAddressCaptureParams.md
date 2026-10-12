# C2M.Api.Model.SubmitSinglePdfSplitAddressCaptureParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DocSourceStandard** | [**DocSourceStandard**](DocSourceStandard.md) |  | 
**PdfSplitJobsNoAddress** | [**List&lt;PdfSplitJobItemNoAddress&gt;**](PdfSplitJobItemNoAddress.md) | List of page-range job items without inline addresses — addresses are captured externally (POST /batch/split/address-capture). | 
**JobTemplate** | **string** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] 
**PaymentDetails** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] 
**ReturnAddress** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] 
**JobOptions** | [**JobOptions**](JobOptions.md) |  | [optional] 
**Tags** | **List&lt;string&gt;** | Array of user-defined string tags. | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

