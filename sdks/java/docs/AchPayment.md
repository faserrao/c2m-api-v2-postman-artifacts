

# AchPayment

ACH bank transfer payment variant.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**paymentType** | [**PaymentTypeEnum**](#PaymentTypeEnum) | Payment method type; must match the details object sent (creditCard → creditCardDetails, invoice → invoiceDetails, ach → achDetails, userCredit → creditAmount). |  |
|**achDetails** | [**AchDetails**](AchDetails.md) |  |  |



## Enum: PaymentTypeEnum

| Name | Value |
|---- | -----|
| ACH | &quot;ach&quot; |



