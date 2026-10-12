

# SubmitSinglePdfSplitAddressCaptureParams


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**jobTemplate** | **String** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |  [optional] |
|**docSourceStandard** | [**DocSourceStandard**](DocSourceStandard.md) |  |  |
|**pdfSplitJobsNoAddress** | [**List&lt;PdfSplitJobItemNoAddress&gt;**](PdfSplitJobItemNoAddress.md) | List of page-range job items without inline addresses — addresses are captured externally (POST /batch/split/address-capture). |  |
|**paymentDetails** | [**PaymentDetails**](PaymentDetails.md) |  |  [optional] |
|**returnAddress** | [**ReturnAddress**](ReturnAddress.md) |  |  [optional] |
|**jobOptions** | [**JobOptions**](JobOptions.md) |  |  [optional] |
|**tags** | **List&lt;String&gt;** | Array of user-defined string tags. |  [optional] |



