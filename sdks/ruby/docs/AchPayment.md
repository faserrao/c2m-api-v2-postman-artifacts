# OpenapiClient::AchPayment

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payment_type** | **String** | Payment method type; must match the details object sent (creditCard → creditCardDetails, invoice → invoiceDetails, ach → achDetails, userCredit → creditAmount). |  |
| **ach_details** | [**AchDetails**](AchDetails.md) |  |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::AchPayment.new(
  payment_type: null,
  ach_details: null
)
```

