# OpenapiClient::SubmitMultiDocParams

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **multi_doc_jobs** | [**Array&lt;MultiDocJobItem&gt;**](MultiDocJobItem.md) |  |  |
| **payment_details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] |
| **tags** | **Array&lt;String&gt;** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SubmitMultiDocParams.new(
  multi_doc_jobs: null,
  payment_details: null,
  tags: null
)
```

