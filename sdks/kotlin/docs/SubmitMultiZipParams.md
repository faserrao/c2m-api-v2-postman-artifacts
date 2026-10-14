
# SubmitMultiZipParams

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **docSourceZipFileRef** | [**DocSourceZipFileRef**](DocSourceZipFileRef.md) |  |  |
| **multiZipJobs** | [**kotlin.collections.List&lt;MultiZipJobItem&gt;**](MultiZipJobItem.md) | List of per-file job items extracted from a ZIP archive (POST /batch/zip). |  |
| **jobTemplate** | **kotlin.String** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |  [optional] |
| **paymentDetails** | [**PaymentDetails**](PaymentDetails.md) |  |  [optional] |
| **returnAddress** | [**ReturnAddress**](ReturnAddress.md) |  |  [optional] |
| **jobOptions** | [**JobOptions**](JobOptions.md) |  |  [optional] |
| **tags** | **kotlin.collections.List&lt;kotlin.String&gt;** | Array of user-defined string tags. |  [optional] |



