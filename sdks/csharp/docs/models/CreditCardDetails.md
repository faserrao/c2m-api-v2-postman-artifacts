# C2M.Api.Model.CreditCardDetails
Credit card payment fields: card type, card number, expiration date, and CVV.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CardType** | **string** | Card brand enum: visa, mastercard, discover, or americanExpress. | 
**CardNumber** | **string** | Credit card number (PAN) as a string. | 
**ExpirationDate** | [**ExpirationDate**](ExpirationDate.md) |  | 
**Cvv** | **string** | Card security code (CVV/CVC): 3 digits, or 4 for American Express. A string, so a leading zero is kept. | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

