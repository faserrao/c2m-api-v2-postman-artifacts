
# CreditCardDetails

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **cardType** | [**inline**](#CardType) | Card brand enum: visa, mastercard, discover, or americanExpress. |  |
| **cardNumber** | **kotlin.String** | Credit card number (PAN) as a string. |  |
| **expirationDate** | [**ExpirationDate**](ExpirationDate.md) |  |  |
| **cvv** | **kotlin.String** | Card security code (CVV/CVC): 3 digits, or 4 for American Express. A string, so a leading zero is kept. |  |


<a id="CardType"></a>
## Enum: cardType
| Name | Value |
| ---- | ----- |
| cardType | visa, mastercard, discover, americanExpress |



