
# UserCreditPayment

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **paymentType** | [**inline**](#PaymentType) | Payment method type; must match the details object sent (creditCard → creditCardDetails, invoice → invoiceDetails, ach → achDetails, userCredit → creditAmount). |  |
| **creditAmount** | [**CreditAmount**](CreditAmount.md) |  |  |


<a id="PaymentType"></a>
## Enum: paymentType
| Name | Value |
| ---- | ----- |
| paymentType | userCredit |



