
# SubmitSinglePdfSplitAddressCaptureParams

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **docSourceStandard** | [**DocSourceStandard**](DocSourceStandard.md) |  |  |
| **pdfSplitJobsNoAddress** | [**kotlin.collections.List&lt;PdfSplitJobItemNoAddress&gt;**](PdfSplitJobItemNoAddress.md) | List of page-range job items without inline addresses — addresses are captured externally (POST /batch/split/address-capture). |  |
| **jobTemplate** | **kotlin.String** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |  [optional] |
| **paymentDetails** | [**PaymentDetails**](PaymentDetails.md) |  |  [optional] |
| **returnAddress** | [**ReturnAddress**](ReturnAddress.md) |  |  [optional] |
| **jobOptions** | [**JobOptions**](JobOptions.md) |  |  [optional] |
| **tags** | **kotlin.collections.List&lt;kotlin.String&gt;** | Array of user-defined string tags. |  [optional] |



