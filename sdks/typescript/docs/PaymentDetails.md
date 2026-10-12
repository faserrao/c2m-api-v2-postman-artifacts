# PaymentDetails

Payment method — one of: creditCard, invoice, ACH bank transfer, or account credit. The paymentType field names the method; the matching details object carries its data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentType** | **string** | Payment method type; must match the details object sent (creditCard → creditCardDetails, invoice → invoiceDetails, ach → achDetails, userCredit → creditAmount). | [default to undefined]
**creditCardDetails** | [**CreditCardDetails**](CreditCardDetails.md) |  | [default to undefined]
**invoiceDetails** | [**InvoiceDetails**](InvoiceDetails.md) |  | [default to undefined]
**achDetails** | [**AchDetails**](AchDetails.md) |  | [default to undefined]
**creditAmount** | [**CreditAmount**](CreditAmount.md) |  | [default to undefined]

## Example

```typescript
import { PaymentDetails } from './api';

const instance: PaymentDetails = {
    paymentType,
    creditCardDetails,
    invoiceDetails,
    achDetails,
    creditAmount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
