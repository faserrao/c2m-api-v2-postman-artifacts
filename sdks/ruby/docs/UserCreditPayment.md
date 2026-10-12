# OpenapiClient::UserCreditPayment

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payment_type** | **String** | Payment method type; must match the details object sent (creditCard → creditCardDetails, invoice → invoiceDetails, ach → achDetails, userCredit → creditAmount). |  |
| **credit_amount** | [**CreditAmount**](CreditAmount.md) |  |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::UserCreditPayment.new(
  payment_type: null,
  credit_amount: null
)
```

