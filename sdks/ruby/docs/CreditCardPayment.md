# OpenapiClient::CreditCardPayment

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payment_type** | **String** | Payment method type; must match the details object sent (creditCard → creditCardDetails, invoice → invoiceDetails, ach → achDetails, userCredit → creditAmount). |  |
| **credit_card_details** | [**CreditCardDetails**](CreditCardDetails.md) |  |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::CreditCardPayment.new(
  payment_type: null,
  credit_card_details: null
)
```

