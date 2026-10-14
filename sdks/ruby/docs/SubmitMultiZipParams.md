# OpenapiClient::SubmitMultiZipParams

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **job_template** | **String** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] |
| **doc_source_zip_file_ref** | [**DocSourceZipFileRef**](DocSourceZipFileRef.md) |  |  |
| **multi_zip_jobs** | [**Array&lt;MultiZipJobItem&gt;**](MultiZipJobItem.md) | List of per-file job items extracted from a ZIP archive (POST /batch/zip). |  |
| **payment_details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] |
| **return_address** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] |
| **job_options** | [**JobOptions**](JobOptions.md) |  | [optional] |
| **tags** | **Array&lt;String&gt;** | Array of user-defined string tags. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SubmitMultiZipParams.new(
  job_template: null,
  doc_source_zip_file_ref: null,
  multi_zip_jobs: null,
  payment_details: null,
  return_address: null,
  job_options: null,
  tags: null
)
```

