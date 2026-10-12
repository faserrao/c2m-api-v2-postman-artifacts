# OpenapiClient::AchDetails

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **routing_number** | **String** | ABA bank routing number. |  |
| **account_number** | **String** | Bank account number. |  |
| **check_digit** | **Integer** | ACH check digit. |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::AchDetails.new(
  routing_number: null,
  account_number: null,
  check_digit: null
)
```

