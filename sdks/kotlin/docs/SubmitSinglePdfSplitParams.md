
# SubmitSinglePdfSplitParams

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **docSourceStandard** | [**DocSourceStandard**](DocSourceStandard.md) |  |  |
| **pdfSplitJobsWithAddress** | [**kotlin.collections.List&lt;PdfSplitJobItemWithAddress&gt;**](PdfSplitJobItemWithAddress.md) | List of page-range job items, each with its own inline recipient address. |  |
| **jobTemplate** | **kotlin.String** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |  [optional] |
| **paymentDetails** | [**PaymentDetails**](PaymentDetails.md) |  |  [optional] |
| **returnAddress** | [**ReturnAddress**](ReturnAddress.md) |  |  [optional] |
| **jobOptions** | [**JobOptions**](JobOptions.md) |  |  [optional] |
| **tags** | **kotlin.collections.List&lt;kotlin.String&gt;** | Array of user-defined string tags. |  [optional] |



