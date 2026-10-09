# UserCreditPayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PaymentType** | **string** |  | 
**CreditAmount** | [**CreditAmount**](CreditAmount.md) |  | 

## Methods

### NewUserCreditPayment

`func NewUserCreditPayment(paymentType string, creditAmount CreditAmount, ) *UserCreditPayment`

NewUserCreditPayment instantiates a new UserCreditPayment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserCreditPaymentWithDefaults

`func NewUserCreditPaymentWithDefaults() *UserCreditPayment`

NewUserCreditPaymentWithDefaults instantiates a new UserCreditPayment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPaymentType

`func (o *UserCreditPayment) GetPaymentType() string`

GetPaymentType returns the PaymentType field if non-nil, zero value otherwise.

### GetPaymentTypeOk

`func (o *UserCreditPayment) GetPaymentTypeOk() (*string, bool)`

GetPaymentTypeOk returns a tuple with the PaymentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentType

`func (o *UserCreditPayment) SetPaymentType(v string)`

SetPaymentType sets PaymentType field to given value.


### GetCreditAmount

`func (o *UserCreditPayment) GetCreditAmount() CreditAmount`

GetCreditAmount returns the CreditAmount field if non-nil, zero value otherwise.

### GetCreditAmountOk

`func (o *UserCreditPayment) GetCreditAmountOk() (*CreditAmount, bool)`

GetCreditAmountOk returns a tuple with the CreditAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditAmount

`func (o *UserCreditPayment) SetCreditAmount(v CreditAmount)`

SetCreditAmount sets CreditAmount field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


