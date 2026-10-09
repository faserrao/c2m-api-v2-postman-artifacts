# OpenapiClient::PaymentDetails

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'openapi_client'

OpenapiClient::PaymentDetails.openapi_one_of
# =>
# [
#   :'AchPayment',
#   :'CreditCardPayment',
#   :'InvoicePayment',
#   :'UserCreditPayment'
# ]
```

### `openapi_discriminator_name`

Returns the discriminator's property name.

#### Example

```ruby
require 'openapi_client'

OpenapiClient::PaymentDetails.openapi_discriminator_name
# => :'payment_type'
```

### `openapi_discriminator_name`

Returns the discriminator's mapping.

#### Example

```ruby
require 'openapi_client'

OpenapiClient::PaymentDetails.openapi_discriminator_mapping
# =>
# {
#   :'ach' => :'AchPayment',
#   :'creditCard' => :'CreditCardPayment',
#   :'invoice' => :'InvoicePayment',
#   :'userCredit' => :'UserCreditPayment'
# }
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'openapi_client'

OpenapiClient::PaymentDetails.build(data)
# => #<AchPayment:0x00007fdd4aab02a0>

OpenapiClient::PaymentDetails.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `AchPayment`
- `CreditCardPayment`
- `InvoicePayment`
- `UserCreditPayment`
- `nil` (if no type matches)

