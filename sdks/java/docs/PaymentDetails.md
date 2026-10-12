

# PaymentDetails

Payment method — one of: creditCard, invoice, ACH bank transfer, or account credit. The paymentType field names the method; the matching details object carries its data.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**paymentType** | [**PaymentTypeEnum**](#PaymentTypeEnum) | Payment method type; must match the details object sent (creditCard → creditCardDetails, invoice → invoiceDetails, ach → achDetails, userCredit → creditAmount). |  |
|**creditCardDetails** | [**CreditCardDetails**](CreditCardDetails.md) |  |  |
|**invoiceDetails** | [**InvoiceDetails**](InvoiceDetails.md) |  |  |
|**achDetails** | [**AchDetails**](AchDetails.md) |  |  |
|**creditAmount** | [**CreditAmount**](CreditAmount.md) |  |  |



## Enum: PaymentTypeEnum

| Name | Value |
|---- | -----|
| USER_CREDIT | &quot;userCredit&quot; |



