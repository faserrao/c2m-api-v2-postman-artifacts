# OpenapiClient::SubmitMultiZipParams

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **job_template** | **String** |  | [optional] |
| **multi_zip_jobs** | [**Array&lt;MultiZipJobItem&gt;**](MultiZipJobItem.md) |  |  |
| **payment_details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] |
| **tags** | **Array&lt;String&gt;** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SubmitMultiZipParams.new(
  job_template: null,
  multi_zip_jobs: null,
  payment_details: null,
  tags: null
)
```

