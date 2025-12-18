# OpenapiClient::SubmitMultiDocParams

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **job_template** | **String** |  | [optional] |
| **multi_doc_jobs** | [**Array&lt;MultiDocJobItem&gt;**](MultiDocJobItem.md) |  |  |
| **payment_details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] |
| **tags** | **Array&lt;String&gt;** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SubmitMultiDocParams.new(
  job_template: null,
  multi_doc_jobs: null,
  payment_details: null,
  tags: null
)
```

