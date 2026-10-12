

# UserCreditPayment

Payment deducted from the account's prepaid credit balance.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**paymentType** | [**PaymentTypeEnum**](#PaymentTypeEnum) | Payment method type; must match the details object sent (creditCard → creditCardDetails, invoice → invoiceDetails, ach → achDetails, userCredit → creditAmount). |  |
|**creditAmount** | [**CreditAmount**](CreditAmount.md) |  |  |



## Enum: PaymentTypeEnum

| Name | Value |
|---- | -----|
| USER_CREDIT | &quot;userCredit&quot; |



