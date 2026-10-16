# OpenapiClient::CreditCardDetails

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **card_type** | **String** | Card brand enum: visa, mastercard, discover, or americanExpress. |  |
| **card_number** | **String** | Credit card number (PAN) as a string. |  |
| **expiration_date** | [**ExpirationDate**](ExpirationDate.md) |  |  |
| **cvv** | **String** | Card security code (CVV/CVC): 3 digits, or 4 for American Express. A string, so a leading zero is kept. |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::CreditCardDetails.new(
  card_type: null,
  card_number: null,
  expiration_date: null,
  cvv: null
)
```

