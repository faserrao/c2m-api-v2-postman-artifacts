# OpenapiClient::Address

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **first_name** | **String** | Recipient&#39;s first name. |  |
| **last_name** | **String** | Recipient&#39;s last name. |  |
| **address1** | **String** | Primary street address line. |  |
| **city** | **String** | City name. |  |
| **state** | **String** | Two-letter state or province abbreviation. |  |
| **zip** | **String** | ZIP or postal code. |  |
| **country** | **String** | Country code (e.g. USA). |  |
| **address2** | **String** | Secondary address line (suite, apartment, floor, etc.). | [optional] |
| **address3** | **String** | Tertiary address line. | [optional] |
| **foo1** | **String** | User-defined merge variable 1 — forwarded to the address list merge mapping for personalisation. | [optional] |
| **foo2** | **String** | User-defined merge variable 2 — forwarded to the address list merge mapping for personalisation. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Address.new(
  first_name: null,
  last_name: null,
  address1: null,
  city: null,
  state: null,
  zip: null,
  country: null,
  address2: null,
  address3: null,
  foo1: null,
  foo2: null
)
```

