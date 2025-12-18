# MultiDocJobItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobTemplate** | Pointer to **string** |  | [optional] 
**DocSourceAll** | [**DocSourceAll**](DocSourceAll.md) |  | 
**RecipientAddressSource** | [**RecipientAddressSource**](RecipientAddressSource.md) |  | 

## Methods

### NewMultiDocJobItem

`func NewMultiDocJobItem(docSourceAll DocSourceAll, recipientAddressSource RecipientAddressSource, ) *MultiDocJobItem`

NewMultiDocJobItem instantiates a new MultiDocJobItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiDocJobItemWithDefaults

`func NewMultiDocJobItemWithDefaults() *MultiDocJobItem`

NewMultiDocJobItemWithDefaults instantiates a new MultiDocJobItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobTemplate

`func (o *MultiDocJobItem) GetJobTemplate() string`

GetJobTemplate returns the JobTemplate field if non-nil, zero value otherwise.

### GetJobTemplateOk

`func (o *MultiDocJobItem) GetJobTemplateOk() (*string, bool)`

GetJobTemplateOk returns a tuple with the JobTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobTemplate

`func (o *MultiDocJobItem) SetJobTemplate(v string)`

SetJobTemplate sets JobTemplate field to given value.

### HasJobTemplate

`func (o *MultiDocJobItem) HasJobTemplate() bool`

HasJobTemplate returns a boolean if a field has been set.

### GetDocSourceAll

`func (o *MultiDocJobItem) GetDocSourceAll() DocSourceAll`

GetDocSourceAll returns the DocSourceAll field if non-nil, zero value otherwise.

### GetDocSourceAllOk

`func (o *MultiDocJobItem) GetDocSourceAllOk() (*DocSourceAll, bool)`

GetDocSourceAllOk returns a tuple with the DocSourceAll field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocSourceAll

`func (o *MultiDocJobItem) SetDocSourceAll(v DocSourceAll)`

SetDocSourceAll sets DocSourceAll field to given value.


### GetRecipientAddressSource

`func (o *MultiDocJobItem) GetRecipientAddressSource() RecipientAddressSource`

GetRecipientAddressSource returns the RecipientAddressSource field if non-nil, zero value otherwise.

### GetRecipientAddressSourceOk

`func (o *MultiDocJobItem) GetRecipientAddressSourceOk() (*RecipientAddressSource, bool)`

GetRecipientAddressSourceOk returns a tuple with the RecipientAddressSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipientAddressSource

`func (o *MultiDocJobItem) SetRecipientAddressSource(v RecipientAddressSource)`

SetRecipientAddressSource sets RecipientAddressSource field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


