# OpenapiClient::SubmitSinglePdfSplitAddressCaptureParams

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **job_template** | **String** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] |
| **doc_source_standard** | [**DocSourceStandard**](DocSourceStandard.md) |  |  |
| **pdf_split_jobs_no_address** | [**Array&lt;PdfSplitJobItemNoAddress&gt;**](PdfSplitJobItemNoAddress.md) | List of page-range job items without inline addresses — addresses are captured externally (POST /batch/split/address-capture). |  |
| **payment_details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] |
| **return_address** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] |
| **job_options** | [**JobOptions**](JobOptions.md) |  | [optional] |
| **tags** | **Array&lt;String&gt;** | Array of user-defined string tags. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SubmitSinglePdfSplitAddressCaptureParams.new(
  job_template: null,
  doc_source_standard: null,
  pdf_split_jobs_no_address: null,
  payment_details: null,
  return_address: null,
  job_options: null,
  tags: null
)
```

