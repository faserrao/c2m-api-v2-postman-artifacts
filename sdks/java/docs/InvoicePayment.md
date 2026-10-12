

# InvoicePayment

Invoice payment — billed to an existing account invoice.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**paymentType** | [**PaymentTypeEnum**](#PaymentTypeEnum) | Payment method type; must match the details object sent (creditCard → creditCardDetails, invoice → invoiceDetails, ach → achDetails, userCredit → creditAmount). |  |
|**invoiceDetails** | [**InvoiceDetails**](InvoiceDetails.md) |  |  |



## Enum: PaymentTypeEnum

| Name | Value |
|---- | -----|
| INVOICE | &quot;invoice&quot; |



