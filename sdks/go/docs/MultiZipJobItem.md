# MultiZipJobItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobTemplate** | Pointer to **string** |  | [optional] 
**DocSourceZipFile** | [**DocSourceZipFile**](DocSourceZipFile.md) |  | 
**RecipientAddressSource** | [**RecipientAddressSource**](RecipientAddressSource.md) |  | 

## Methods

### NewMultiZipJobItem

`func NewMultiZipJobItem(docSourceZipFile DocSourceZipFile, recipientAddressSource RecipientAddressSource, ) *MultiZipJobItem`

NewMultiZipJobItem instantiates a new MultiZipJobItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiZipJobItemWithDefaults

`func NewMultiZipJobItemWithDefaults() *MultiZipJobItem`

NewMultiZipJobItemWithDefaults instantiates a new MultiZipJobItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobTemplate

`func (o *MultiZipJobItem) GetJobTemplate() string`

GetJobTemplate returns the JobTemplate field if non-nil, zero value otherwise.

### GetJobTemplateOk

`func (o *MultiZipJobItem) GetJobTemplateOk() (*string, bool)`

GetJobTemplateOk returns a tuple with the JobTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobTemplate

`func (o *MultiZipJobItem) SetJobTemplate(v string)`

SetJobTemplate sets JobTemplate field to given value.

### HasJobTemplate

`func (o *MultiZipJobItem) HasJobTemplate() bool`

HasJobTemplate returns a boolean if a field has been set.

### GetDocSourceZipFile

`func (o *MultiZipJobItem) GetDocSourceZipFile() DocSourceZipFile`

GetDocSourceZipFile returns the DocSourceZipFile field if non-nil, zero value otherwise.

### GetDocSourceZipFileOk

`func (o *MultiZipJobItem) GetDocSourceZipFileOk() (*DocSourceZipFile, bool)`

GetDocSourceZipFileOk returns a tuple with the DocSourceZipFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocSourceZipFile

`func (o *MultiZipJobItem) SetDocSourceZipFile(v DocSourceZipFile)`

SetDocSourceZipFile sets DocSourceZipFile field to given value.


### GetRecipientAddressSource

`func (o *MultiZipJobItem) GetRecipientAddressSource() RecipientAddressSource`

GetRecipientAddressSource returns the RecipientAddressSource field if non-nil, zero value otherwise.

### GetRecipientAddressSourceOk

`func (o *MultiZipJobItem) GetRecipientAddressSourceOk() (*RecipientAddressSource, bool)`

GetRecipientAddressSourceOk returns a tuple with the RecipientAddressSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipientAddressSource

`func (o *MultiZipJobItem) SetRecipientAddressSource(v RecipientAddressSource)`

SetRecipientAddressSource sets RecipientAddressSource field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


