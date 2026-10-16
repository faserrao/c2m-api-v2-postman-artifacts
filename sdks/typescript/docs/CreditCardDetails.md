# CreditCardDetails

Credit card payment fields: card type, card number, expiration date, and CVV.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardType** | **string** | Card brand enum: visa, mastercard, discover, or americanExpress. | [default to undefined]
**cardNumber** | **string** | Credit card number (PAN) as a string. | [default to undefined]
**expirationDate** | [**ExpirationDate**](ExpirationDate.md) |  | [default to undefined]
**cvv** | **string** | Card security code (CVV/CVC): 3 digits, or 4 for American Express. A string, so a leading zero is kept. | [default to undefined]

## Example

```typescript
import { CreditCardDetails } from './api';

const instance: CreditCardDetails = {
    cardType,
    cardNumber,
    expirationDate,
    cvv,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
