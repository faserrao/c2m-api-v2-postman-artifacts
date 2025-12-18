# SubmitMultiDocMergeParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobTemplate** | Pointer to **string** |  | [optional] 
**MergeDocumentSource** | [**[]MergeDocumentRef**](MergeDocumentRef.md) |  | 
**RecipientAddressSource** | [**RecipientAddressSource**](RecipientAddressSource.md) |  | 
**PaymentDetails** | Pointer to [**PaymentDetails**](PaymentDetails.md) |  | [optional] 
**ReturnAddress** | Pointer to [**ReturnAddress**](ReturnAddress.md) |  | [optional] 
**JobOptions** | Pointer to [**JobOptions**](JobOptions.md) |  | [optional] 
**Tags** | Pointer to **[]string** |  | [optional] 

## Methods

### NewSubmitMultiDocMergeParams

`func NewSubmitMultiDocMergeParams(mergeDocumentSource []MergeDocumentRef, recipientAddressSource RecipientAddressSource, ) *SubmitMultiDocMergeParams`

NewSubmitMultiDocMergeParams instantiates a new SubmitMultiDocMergeParams object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubmitMultiDocMergeParamsWithDefaults

`func NewSubmitMultiDocMergeParamsWithDefaults() *SubmitMultiDocMergeParams`

NewSubmitMultiDocMergeParamsWithDefaults instantiates a new SubmitMultiDocMergeParams object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobTemplate

`func (o *SubmitMultiDocMergeParams) GetJobTemplate() string`

GetJobTemplate returns the JobTemplate field if non-nil, zero value otherwise.

### GetJobTemplateOk

`func (o *SubmitMultiDocMergeParams) GetJobTemplateOk() (*string, bool)`

GetJobTemplateOk returns a tuple with the JobTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobTemplate

`func (o *SubmitMultiDocMergeParams) SetJobTemplate(v string)`

SetJobTemplate sets JobTemplate field to given value.

### HasJobTemplate

`func (o *SubmitMultiDocMergeParams) HasJobTemplate() bool`

HasJobTemplate returns a boolean if a field has been set.

### GetMergeDocumentSource

`func (o *SubmitMultiDocMergeParams) GetMergeDocumentSource() []MergeDocumentRef`

GetMergeDocumentSource returns the MergeDocumentSource field if non-nil, zero value otherwise.

### GetMergeDocumentSourceOk

`func (o *SubmitMultiDocMergeParams) GetMergeDocumentSourceOk() (*[]MergeDocumentRef, bool)`

GetMergeDocumentSourceOk returns a tuple with the MergeDocumentSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMergeDocumentSource

`func (o *SubmitMultiDocMergeParams) SetMergeDocumentSource(v []MergeDocumentRef)`

SetMergeDocumentSource sets MergeDocumentSource field to given value.


### GetRecipientAddressSource

`func (o *SubmitMultiDocMergeParams) GetRecipientAddressSource() RecipientAddressSource`

GetRecipientAddressSource returns the RecipientAddressSource field if non-nil, zero value otherwise.

### GetRecipientAddressSourceOk

`func (o *SubmitMultiDocMergeParams) GetRecipientAddressSourceOk() (*RecipientAddressSource, bool)`

GetRecipientAddressSourceOk returns a tuple with the RecipientAddressSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipientAddressSource

`func (o *SubmitMultiDocMergeParams) SetRecipientAddressSource(v RecipientAddressSource)`

SetRecipientAddressSource sets RecipientAddressSource field to given value.


### GetPaymentDetails

`func (o *SubmitMultiDocMergeParams) GetPaymentDetails() PaymentDetails`

GetPaymentDetails returns the PaymentDetails field if non-nil, zero value otherwise.

### GetPaymentDetailsOk

`func (o *SubmitMultiDocMergeParams) GetPaymentDetailsOk() (*PaymentDetails, bool)`

GetPaymentDetailsOk returns a tuple with the PaymentDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentDetails

`func (o *SubmitMultiDocMergeParams) SetPaymentDetails(v PaymentDetails)`

SetPaymentDetails sets PaymentDetails field to given value.

### HasPaymentDetails

`func (o *SubmitMultiDocMergeParams) HasPaymentDetails() bool`

HasPaymentDetails returns a boolean if a field has been set.

### GetReturnAddress

`func (o *SubmitMultiDocMergeParams) GetReturnAddress() ReturnAddress`

GetReturnAddress returns the ReturnAddress field if non-nil, zero value otherwise.

### GetReturnAddressOk

`func (o *SubmitMultiDocMergeParams) GetReturnAddressOk() (*ReturnAddress, bool)`

GetReturnAddressOk returns a tuple with the ReturnAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnAddress

`func (o *SubmitMultiDocMergeParams) SetReturnAddress(v ReturnAddress)`

SetReturnAddress sets ReturnAddress field to given value.

### HasReturnAddress

`func (o *SubmitMultiDocMergeParams) HasReturnAddress() bool`

HasReturnAddress returns a boolean if a field has been set.

### GetJobOptions

`func (o *SubmitMultiDocMergeParams) GetJobOptions() JobOptions`

GetJobOptions returns the JobOptions field if non-nil, zero value otherwise.

### GetJobOptionsOk

`func (o *SubmitMultiDocMergeParams) GetJobOptionsOk() (*JobOptions, bool)`

GetJobOptionsOk returns a tuple with the JobOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobOptions

`func (o *SubmitMultiDocMergeParams) SetJobOptions(v JobOptions)`

SetJobOptions sets JobOptions field to given value.

### HasJobOptions

`func (o *SubmitMultiDocMergeParams) HasJobOptions() bool`

HasJobOptions returns a boolean if a field has been set.

### GetTags

`func (o *SubmitMultiDocMergeParams) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *SubmitMultiDocMergeParams) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *SubmitMultiDocMergeParams) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *SubmitMultiDocMergeParams) HasTags() bool`

HasTags returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


