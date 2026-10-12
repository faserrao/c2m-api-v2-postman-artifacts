

# CreditCardDetails

Credit card payment fields: card type, card number, expiration date, and CVV.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**cardType** | [**CardTypeEnum**](#CardTypeEnum) | Card brand enum: visa, mastercard, discover, or americanExpress. |  |
|**cardNumber** | **String** | Credit card number (PAN) as a string. |  |
|**expirationDate** | [**ExpirationDate**](ExpirationDate.md) |  |  |
|**cvv** | **Integer** | Card security code (CVV/CVC) as an integer. |  |



## Enum: CardTypeEnum

| Name | Value |
|---- | -----|
| VISA | &quot;visa&quot; |
| MASTERCARD | &quot;mastercard&quot; |
| DISCOVER | &quot;discover&quot; |
| AMERICAN_EXPRESS | &quot;americanExpress&quot; |



