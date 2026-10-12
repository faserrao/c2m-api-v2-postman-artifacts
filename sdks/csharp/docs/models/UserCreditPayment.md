# C2M.Api.Model.UserCreditPayment
Payment deducted from the account's prepaid credit balance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PaymentType** | **string** | Payment method type; must match the details object sent (creditCard → creditCardDetails, invoice → invoiceDetails, ach → achDetails, userCredit → creditAmount). | 
**CreditAmount** | [**CreditAmount**](CreditAmount.md) |  | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

