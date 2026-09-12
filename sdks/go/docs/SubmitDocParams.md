# SubmitDocParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobTemplate** | Pointer to **string** |  | [optional] 
**DocSourceAll** | [**DocSourceAll**](DocSourceAll.md) |  | 
**RecipientAddressSource** | [**RecipientAddressSource**](RecipientAddressSource.md) |  | 
**PaymentDetails** | Pointer to [**PaymentDetails**](PaymentDetails.md) |  | [optional] 
**ReturnAddress** | Pointer to [**ReturnAddress**](ReturnAddress.md) |  | [optional] 
**JobOptions** | Pointer to [**JobOptions**](JobOptions.md) |  | [optional] 
**Tags** | Pointer to **[]string** |  | [optional] 

## Methods

### NewSubmitDocParams

`func NewSubmitDocParams(docSourceAll DocSourceAll, recipientAddressSource RecipientAddressSource, ) *SubmitDocParams`

NewSubmitDocParams instantiates a new SubmitDocParams object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubmitDocParamsWithDefaults

`func NewSubmitDocParamsWithDefaults() *SubmitDocParams`

NewSubmitDocParamsWithDefaults instantiates a new SubmitDocParams object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobTemplate

`func (o *SubmitDocParams) GetJobTemplate() string`

GetJobTemplate returns the JobTemplate field if non-nil, zero value otherwise.

### GetJobTemplateOk

`func (o *SubmitDocParams) GetJobTemplateOk() (*string, bool)`

GetJobTemplateOk returns a tuple with the JobTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobTemplate

`func (o *SubmitDocParams) SetJobTemplate(v string)`

SetJobTemplate sets JobTemplate field to given value.

### HasJobTemplate

`func (o *SubmitDocParams) HasJobTemplate() bool`

HasJobTemplate returns a boolean if a field has been set.

### GetDocSourceAll

`func (o *SubmitDocParams) GetDocSourceAll() DocSourceAll`

GetDocSourceAll returns the DocSourceAll field if non-nil, zero value otherwise.

### GetDocSourceAllOk

`func (o *SubmitDocParams) GetDocSourceAllOk() (*DocSourceAll, bool)`

GetDocSourceAllOk returns a tuple with the DocSourceAll field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocSourceAll

`func (o *SubmitDocParams) SetDocSourceAll(v DocSourceAll)`

SetDocSourceAll sets DocSourceAll field to given value.


### GetRecipientAddressSource

`func (o *SubmitDocParams) GetRecipientAddressSource() RecipientAddressSource`

GetRecipientAddressSource returns the RecipientAddressSource field if non-nil, zero value otherwise.

### GetRecipientAddressSourceOk

`func (o *SubmitDocParams) GetRecipientAddressSourceOk() (*RecipientAddressSource, bool)`

GetRecipientAddressSourceOk returns a tuple with the RecipientAddressSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipientAddressSource

`func (o *SubmitDocParams) SetRecipientAddressSource(v RecipientAddressSource)`

SetRecipientAddressSource sets RecipientAddressSource field to given value.


### GetPaymentDetails

`func (o *SubmitDocParams) GetPaymentDetails() PaymentDetails`

GetPaymentDetails returns the PaymentDetails field if non-nil, zero value otherwise.

### GetPaymentDetailsOk

`func (o *SubmitDocParams) GetPaymentDetailsOk() (*PaymentDetails, bool)`

GetPaymentDetailsOk returns a tuple with the PaymentDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentDetails

`func (o *SubmitDocParams) SetPaymentDetails(v PaymentDetails)`

SetPaymentDetails sets PaymentDetails field to given value.

### HasPaymentDetails

`func (o *SubmitDocParams) HasPaymentDetails() bool`

HasPaymentDetails returns a boolean if a field has been set.

### GetReturnAddress

`func (o *SubmitDocParams) GetReturnAddress() ReturnAddress`

GetReturnAddress returns the ReturnAddress field if non-nil, zero value otherwise.

### GetReturnAddressOk

`func (o *SubmitDocParams) GetReturnAddressOk() (*ReturnAddress, bool)`

GetReturnAddressOk returns a tuple with the ReturnAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnAddress

`func (o *SubmitDocParams) SetReturnAddress(v ReturnAddress)`

SetReturnAddress sets ReturnAddress field to given value.

### HasReturnAddress

`func (o *SubmitDocParams) HasReturnAddress() bool`

HasReturnAddress returns a boolean if a field has been set.

### GetJobOptions

`func (o *SubmitDocParams) GetJobOptions() JobOptions`

GetJobOptions returns the JobOptions field if non-nil, zero value otherwise.

### GetJobOptionsOk

`func (o *SubmitDocParams) GetJobOptionsOk() (*JobOptions, bool)`

GetJobOptionsOk returns a tuple with the JobOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobOptions

`func (o *SubmitDocParams) SetJobOptions(v JobOptions)`

SetJobOptions sets JobOptions field to given value.

### HasJobOptions

`func (o *SubmitDocParams) HasJobOptions() bool`

HasJobOptions returns a boolean if a field has been set.

### GetTags

`func (o *SubmitDocParams) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *SubmitDocParams) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *SubmitDocParams) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *SubmitDocParams) HasTags() bool`

HasTags returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


