# AchDetails

ACH payment fields: routing number, bank account number, and check digit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routingNumber** | **string** | ABA bank routing number. | [default to undefined]
**accountNumber** | **string** | Bank account number. | [default to undefined]
**checkDigit** | **number** | ACH check digit. | [default to undefined]

## Example

```typescript
import { AchDetails } from './api';

const instance: AchDetails = {
    routingNumber,
    accountNumber,
    checkDigit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
