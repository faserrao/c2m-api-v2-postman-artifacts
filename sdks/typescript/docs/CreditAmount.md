# CreditAmount

Account credit payment fields: monetary amount and ISO currency code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Monetary amount as a numeric value. | [default to undefined]
**currency** | **string** | ISO 4217 currency code (USD, EUR, GBP, CAD, or AUD). | [default to undefined]

## Example

```typescript
import { CreditAmount } from './api';

const instance: CreditAmount = {
    amount,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
