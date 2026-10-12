# InvoicePayment

Invoice payment — billed to an existing account invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentType** | **string** | Payment method type; must match the details object sent (creditCard → creditCardDetails, invoice → invoiceDetails, ach → achDetails, userCredit → creditAmount). | [default to undefined]
**invoiceDetails** | [**InvoiceDetails**](InvoiceDetails.md) |  | [default to undefined]

## Example

```typescript
import { InvoicePayment } from './api';

const instance: InvoicePayment = {
    paymentType,
    invoiceDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
