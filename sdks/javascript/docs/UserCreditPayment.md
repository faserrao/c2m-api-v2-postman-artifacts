# C2MApiV2.UserCreditPayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentType** | **String** | Payment method type; must match the details object sent (creditCard → creditCardDetails, invoice → invoiceDetails, ach → achDetails, userCredit → creditAmount). | 
**creditAmount** | [**CreditAmount**](CreditAmount.md) |  | 



## Enum: PaymentTypeEnum


* `userCredit` (value: `"userCredit"`)




