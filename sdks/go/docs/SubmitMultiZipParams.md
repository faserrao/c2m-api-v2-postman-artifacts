# SubmitMultiZipParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobTemplate** | Pointer to **string** |  | [optional] 
**MultiZipJobs** | [**[]MultiZipJobItem**](MultiZipJobItem.md) |  | 
**PaymentDetails** | Pointer to [**PaymentDetails**](PaymentDetails.md) |  | [optional] 
**Tags** | Pointer to **[]string** |  | [optional] 

## Methods

### NewSubmitMultiZipParams

`func NewSubmitMultiZipParams(multiZipJobs []MultiZipJobItem, ) *SubmitMultiZipParams`

NewSubmitMultiZipParams instantiates a new SubmitMultiZipParams object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubmitMultiZipParamsWithDefaults

`func NewSubmitMultiZipParamsWithDefaults() *SubmitMultiZipParams`

NewSubmitMultiZipParamsWithDefaults instantiates a new SubmitMultiZipParams object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobTemplate

`func (o *SubmitMultiZipParams) GetJobTemplate() string`

GetJobTemplate returns the JobTemplate field if non-nil, zero value otherwise.

### GetJobTemplateOk

`func (o *SubmitMultiZipParams) GetJobTemplateOk() (*string, bool)`

GetJobTemplateOk returns a tuple with the JobTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobTemplate

`func (o *SubmitMultiZipParams) SetJobTemplate(v string)`

SetJobTemplate sets JobTemplate field to given value.

### HasJobTemplate

`func (o *SubmitMultiZipParams) HasJobTemplate() bool`

HasJobTemplate returns a boolean if a field has been set.

### GetMultiZipJobs

`func (o *SubmitMultiZipParams) GetMultiZipJobs() []MultiZipJobItem`

GetMultiZipJobs returns the MultiZipJobs field if non-nil, zero value otherwise.

### GetMultiZipJobsOk

`func (o *SubmitMultiZipParams) GetMultiZipJobsOk() (*[]MultiZipJobItem, bool)`

GetMultiZipJobsOk returns a tuple with the MultiZipJobs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiZipJobs

`func (o *SubmitMultiZipParams) SetMultiZipJobs(v []MultiZipJobItem)`

SetMultiZipJobs sets MultiZipJobs field to given value.


### GetPaymentDetails

`func (o *SubmitMultiZipParams) GetPaymentDetails() PaymentDetails`

GetPaymentDetails returns the PaymentDetails field if non-nil, zero value otherwise.

### GetPaymentDetailsOk

`func (o *SubmitMultiZipParams) GetPaymentDetailsOk() (*PaymentDetails, bool)`

GetPaymentDetailsOk returns a tuple with the PaymentDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentDetails

`func (o *SubmitMultiZipParams) SetPaymentDetails(v PaymentDetails)`

SetPaymentDetails sets PaymentDetails field to given value.

### HasPaymentDetails

`func (o *SubmitMultiZipParams) HasPaymentDetails() bool`

HasPaymentDetails returns a boolean if a field has been set.

### GetTags

`func (o *SubmitMultiZipParams) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *SubmitMultiZipParams) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *SubmitMultiZipParams) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *SubmitMultiZipParams) HasTags() bool`

HasTags returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


