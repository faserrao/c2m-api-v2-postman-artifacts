# OpenapiClient::SubmitMultiZipParams

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **doc_source_zip_file_ref** | [**DocSourceZipFileRef**](DocSourceZipFileRef.md) |  |  |
| **multi_zip_jobs** | [**Array&lt;MultiZipJobItem&gt;**](MultiZipJobItem.md) | List of per-file job items extracted from a ZIP archive (POST /batch/zip). |  |
| **payment_details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] |
| **tags** | **Array&lt;String&gt;** | Array of user-defined string tags. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SubmitMultiZipParams.new(
  doc_source_zip_file_ref: null,
  multi_zip_jobs: null,
  payment_details: null,
  tags: null
)
```

