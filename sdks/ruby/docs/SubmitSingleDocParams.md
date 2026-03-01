# OpenapiClient::SubmitSingleDocParams

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **job_template** | **String** |  | [optional] |
| **doc_source_all** | [**DocSourceAll**](DocSourceAll.md) |  |  |
| **recipient_address_source** | [**RecipientAddressSource**](RecipientAddressSource.md) |  |  |
| **payment_details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] |
| **priority_spec** | **String** |  | [optional] |
| **return_address** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] |
| **priority** | **String** |  | [optional] |
| **job_options** | [**JobOptions**](JobOptions.md) |  | [optional] |
| **tags** | **Array&lt;String&gt;** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SubmitSingleDocParams.new(
  job_template: null,
  doc_source_all: null,
  recipient_address_source: null,
  payment_details: null,
  priority_spec: null,
  return_address: null,
  priority: null,
  job_options: null,
  tags: null
)
```

