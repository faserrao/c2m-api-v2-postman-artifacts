# InvoicePayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PaymentType** | **string** |  | 
**InvoiceDetails** | [**InvoiceDetails**](InvoiceDetails.md) |  | 

## Methods

### NewInvoicePayment

`func NewInvoicePayment(paymentType string, invoiceDetails InvoiceDetails, ) *InvoicePayment`

NewInvoicePayment instantiates a new InvoicePayment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvoicePaymentWithDefaults

`func NewInvoicePaymentWithDefaults() *InvoicePayment`

NewInvoicePaymentWithDefaults instantiates a new InvoicePayment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPaymentType

`func (o *InvoicePayment) GetPaymentType() string`

GetPaymentType returns the PaymentType field if non-nil, zero value otherwise.

### GetPaymentTypeOk

`func (o *InvoicePayment) GetPaymentTypeOk() (*string, bool)`

GetPaymentTypeOk returns a tuple with the PaymentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentType

`func (o *InvoicePayment) SetPaymentType(v string)`

SetPaymentType sets PaymentType field to given value.


### GetInvoiceDetails

`func (o *InvoicePayment) GetInvoiceDetails() InvoiceDetails`

GetInvoiceDetails returns the InvoiceDetails field if non-nil, zero value otherwise.

### GetInvoiceDetailsOk

`func (o *InvoicePayment) GetInvoiceDetailsOk() (*InvoiceDetails, bool)`

GetInvoiceDetailsOk returns a tuple with the InvoiceDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceDetails

`func (o *InvoicePayment) SetInvoiceDetails(v InvoiceDetails)`

SetInvoiceDetails sets InvoiceDetails field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


