

# CreditCardDetails

Credit card payment fields: card type, card number, expiration date, and CVV.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**cardType** | [**CardTypeEnum**](#CardTypeEnum) | Card brand enum: visa, mastercard, discover, or americanExpress. |  |
|**cardNumber** | **String** | Credit card number (PAN) as a string. |  |
|**expirationDate** | [**ExpirationDate**](ExpirationDate.md) |  |  |
|**cvv** | **String** | Card security code (CVV/CVC): 3 digits, or 4 for American Express. A string, so a leading zero is kept. |  |



## Enum: CardTypeEnum

| Name | Value |
|---- | -----|
| VISA | &quot;visa&quot; |
| MASTERCARD | &quot;mastercard&quot; |
| DISCOVER | &quot;discover&quot; |
| AMERICAN_EXPRESS | &quot;americanExpress&quot; |



