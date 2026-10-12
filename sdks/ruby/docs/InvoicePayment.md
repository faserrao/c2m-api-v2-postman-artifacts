# OpenapiClient::InvoicePayment

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payment_type** | **String** | Payment method type; must match the details object sent (creditCard → creditCardDetails, invoice → invoiceDetails, ach → achDetails, userCredit → creditAmount). |  |
| **invoice_details** | [**InvoiceDetails**](InvoiceDetails.md) |  |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::InvoicePayment.new(
  payment_type: null,
  invoice_details: null
)
```

