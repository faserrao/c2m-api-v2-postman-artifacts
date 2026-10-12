# ReturnAddress

Optional sender return address printed on the mailpiece.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **string** | Recipient\&#39;s first name. | [default to undefined]
**lastName** | **string** | Recipient\&#39;s last name. | [default to undefined]
**company** | **string** | Recipient\&#39;s company or organisation name (optional). | [optional] [default to undefined]
**address1** | **string** | Primary street address line. | [default to undefined]
**city** | **string** | City name. | [default to undefined]
**state** | **string** | Two-letter state or province abbreviation. | [default to undefined]
**zip** | **string** | ZIP or postal code. | [default to undefined]
**country** | **string** | Country code (e.g. USA). | [default to undefined]
**address2** | **string** | Secondary address line (suite, apartment, floor, etc.). | [optional] [default to undefined]
**address3** | **string** | Tertiary address line. | [optional] [default to undefined]

## Example

```typescript
import { ReturnAddress } from './api';

const instance: ReturnAddress = {
    firstName,
    lastName,
    company,
    address1,
    city,
    state,
    zip,
    country,
    address2,
    address3,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
