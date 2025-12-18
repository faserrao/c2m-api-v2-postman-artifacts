# OpenapiClient::SubmitSinglePdfSplitParams

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **job_template** | **String** |  | [optional] |
| **doc_source_standard** | [**DocSourceStandard**](DocSourceStandard.md) |  |  |
| **pdf_split_jobs_with_address** | [**Array&lt;PdfSplitJobItemWithAddress&gt;**](PdfSplitJobItemWithAddress.md) |  |  |
| **payment_details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] |
| **return_address** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] |
| **job_options** | [**JobOptions**](JobOptions.md) |  | [optional] |
| **tags** | **Array&lt;String&gt;** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SubmitSinglePdfSplitParams.new(
  job_template: null,
  doc_source_standard: null,
  pdf_split_jobs_with_address: null,
  payment_details: null,
  return_address: null,
  job_options: null,
  tags: null
)
```

