# UserCreditPayment

Payment deducted from the account\'s prepaid credit balance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentType** | **string** | Payment method type; must match the details object sent (creditCard → creditCardDetails, invoice → invoiceDetails, ach → achDetails, userCredit → creditAmount). | [default to undefined]
**creditAmount** | [**CreditAmount**](CreditAmount.md) |  | [default to undefined]

## Example

```typescript
import { UserCreditPayment } from './api';

const instance: UserCreditPayment = {
    paymentType,
    creditAmount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
