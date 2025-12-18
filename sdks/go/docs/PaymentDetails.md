# PaymentDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreditCardDetails** | [**CreditCardDetails**](CreditCardDetails.md) |  | 
**InvoiceDetails** | [**InvoiceDetails**](InvoiceDetails.md) |  | 
**AchDetails** | [**AchDetails**](AchDetails.md) |  | 
**CreditAmount** | [**CreditAmount**](CreditAmount.md) |  | 

## Methods

### NewPaymentDetails

`func NewPaymentDetails(creditCardDetails CreditCardDetails, invoiceDetails InvoiceDetails, achDetails AchDetails, creditAmount CreditAmount, ) *PaymentDetails`

NewPaymentDetails instantiates a new PaymentDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentDetailsWithDefaults

`func NewPaymentDetailsWithDefaults() *PaymentDetails`

NewPaymentDetailsWithDefaults instantiates a new PaymentDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreditCardDetails

`func (o *PaymentDetails) GetCreditCardDetails() CreditCardDetails`

GetCreditCardDetails returns the CreditCardDetails field if non-nil, zero value otherwise.

### GetCreditCardDetailsOk

`func (o *PaymentDetails) GetCreditCardDetailsOk() (*CreditCardDetails, bool)`

GetCreditCardDetailsOk returns a tuple with the CreditCardDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCardDetails

`func (o *PaymentDetails) SetCreditCardDetails(v CreditCardDetails)`

SetCreditCardDetails sets CreditCardDetails field to given value.


### GetInvoiceDetails

`func (o *PaymentDetails) GetInvoiceDetails() InvoiceDetails`

GetInvoiceDetails returns the InvoiceDetails field if non-nil, zero value otherwise.

### GetInvoiceDetailsOk

`func (o *PaymentDetails) GetInvoiceDetailsOk() (*InvoiceDetails, bool)`

GetInvoiceDetailsOk returns a tuple with the InvoiceDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceDetails

`func (o *PaymentDetails) SetInvoiceDetails(v InvoiceDetails)`

SetInvoiceDetails sets InvoiceDetails field to given value.


### GetAchDetails

`func (o *PaymentDetails) GetAchDetails() AchDetails`

GetAchDetails returns the AchDetails field if non-nil, zero value otherwise.

### GetAchDetailsOk

`func (o *PaymentDetails) GetAchDetailsOk() (*AchDetails, bool)`

GetAchDetailsOk returns a tuple with the AchDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAchDetails

`func (o *PaymentDetails) SetAchDetails(v AchDetails)`

SetAchDetails sets AchDetails field to given value.


### GetCreditAmount

`func (o *PaymentDetails) GetCreditAmount() CreditAmount`

GetCreditAmount returns the CreditAmount field if non-nil, zero value otherwise.

### GetCreditAmountOk

`func (o *PaymentDetails) GetCreditAmountOk() (*CreditAmount, bool)`

GetCreditAmountOk returns a tuple with the CreditAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditAmount

`func (o *PaymentDetails) SetCreditAmount(v CreditAmount)`

SetCreditAmount sets CreditAmount field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


