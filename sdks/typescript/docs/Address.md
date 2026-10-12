# Address

Mailing address with required core fields (name, address1, city, state, zip, country) and optional extended fields (company, address2, address3, foo1, foo2).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **string** | Recipient\&#39;s first name. | [default to undefined]
**lastName** | **string** | Recipient\&#39;s last name. | [default to undefined]
**address1** | **string** | Primary street address line. | [default to undefined]
**city** | **string** | City name. | [default to undefined]
**state** | **string** | Two-letter state or province abbreviation. | [default to undefined]
**zip** | **string** | ZIP or postal code. | [default to undefined]
**country** | **string** | Country code (e.g. USA). | [default to undefined]
**address2** | **string** | Secondary address line (suite, apartment, floor, etc.). | [optional] [default to undefined]
**address3** | **string** | Tertiary address line. | [optional] [default to undefined]
**foo1** | **string** | User-defined merge variable 1 — forwarded to the address list merge mapping for personalisation. | [optional] [default to undefined]
**foo2** | **string** | User-defined merge variable 2 — forwarded to the address list merge mapping for personalisation. | [optional] [default to undefined]

## Example

```typescript
import { Address } from './api';

const instance: Address = {
    firstName,
    lastName,
    address1,
    city,
    state,
    zip,
    country,
    address2,
    address3,
    foo1,
    foo2,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
