

# CreditCardPayment

Credit card payment variant.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**paymentType** | [**PaymentTypeEnum**](#PaymentTypeEnum) | Payment method type; must match the details object sent (creditCard → creditCardDetails, invoice → invoiceDetails, ach → achDetails, userCredit → creditAmount). |  |
|**creditCardDetails** | [**CreditCardDetails**](CreditCardDetails.md) |  |  |



## Enum: PaymentTypeEnum

| Name | Value |
|---- | -----|
| CREDIT_CARD | &quot;creditCard&quot; |



