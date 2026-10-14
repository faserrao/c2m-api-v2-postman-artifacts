

# SubmitMultiZipParams


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**jobTemplate** | **String** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |  [optional] |
|**docSourceZipFileRef** | [**DocSourceZipFileRef**](DocSourceZipFileRef.md) |  |  |
|**multiZipJobs** | [**List&lt;MultiZipJobItem&gt;**](MultiZipJobItem.md) | List of per-file job items extracted from a ZIP archive (POST /batch/zip). |  |
|**paymentDetails** | [**PaymentDetails**](PaymentDetails.md) |  |  [optional] |
|**returnAddress** | [**ReturnAddress**](ReturnAddress.md) |  |  [optional] |
|**jobOptions** | [**JobOptions**](JobOptions.md) |  |  [optional] |
|**tags** | **List&lt;String&gt;** | Array of user-defined string tags. |  [optional] |



