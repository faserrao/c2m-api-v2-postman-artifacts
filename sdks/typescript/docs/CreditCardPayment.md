# CreditCardPayment

Credit card payment variant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentType** | **string** | Payment method type; must match the details object sent (creditCard → creditCardDetails, invoice → invoiceDetails, ach → achDetails, userCredit → creditAmount). | [default to undefined]
**creditCardDetails** | [**CreditCardDetails**](CreditCardDetails.md) |  | [default to undefined]

## Example

```typescript
import { CreditCardPayment } from './api';

const instance: CreditCardPayment = {
    paymentType,
    creditCardDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
