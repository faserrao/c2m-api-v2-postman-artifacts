# C2MApiV2.PaymentDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentType** | **String** | Payment method type; must match the details object sent (creditCard → creditCardDetails, invoice → invoiceDetails, ach → achDetails, userCredit → creditAmount). | 
**creditCardDetails** | [**CreditCardDetails**](CreditCardDetails.md) |  | 
**invoiceDetails** | [**InvoiceDetails**](InvoiceDetails.md) |  | 
**achDetails** | [**AchDetails**](AchDetails.md) |  | 
**creditAmount** | [**CreditAmount**](CreditAmount.md) |  | 



## Enum: PaymentTypeEnum


* `userCredit` (value: `"userCredit"`)




