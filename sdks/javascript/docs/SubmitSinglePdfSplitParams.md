# C2MApiV2.SubmitSinglePdfSplitParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobTemplate** | **String** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] 
**docSourceStandard** | [**DocSourceStandard**](DocSourceStandard.md) |  | 
**pdfSplitJobsWithAddress** | [**[PdfSplitJobItemWithAddress]**](PdfSplitJobItemWithAddress.md) | List of page-range job items, each with its own inline recipient address. | 
**paymentDetails** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] 
**returnAddress** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] 
**jobOptions** | [**JobOptions**](JobOptions.md) |  | [optional] 
**tags** | **[String]** | Array of user-defined string tags. | [optional] 


