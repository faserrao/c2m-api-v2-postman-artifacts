# C2MApiV2.CreditCardDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardType** | **String** | Card brand enum: visa, mastercard, discover, or americanExpress. | 
**cardNumber** | **String** | Credit card number (PAN) as a string. | 
**expirationDate** | [**ExpirationDate**](ExpirationDate.md) |  | 
**cvv** | **String** | Card security code (CVV/CVC): 3 digits, or 4 for American Express. A string, so a leading zero is kept. | 



## Enum: CardTypeEnum


* `visa` (value: `"visa"`)

* `mastercard` (value: `"mastercard"`)

* `discover` (value: `"discover"`)

* `americanExpress` (value: `"americanExpress"`)




