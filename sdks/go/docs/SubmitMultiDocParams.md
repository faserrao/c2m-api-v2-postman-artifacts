# SubmitMultiDocParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobTemplate** | Pointer to **string** |  | [optional] 
**MultiDocJobs** | [**[]MultiDocJobItem**](MultiDocJobItem.md) |  | 
**PaymentDetails** | Pointer to [**PaymentDetails**](PaymentDetails.md) |  | [optional] 
**Tags** | Pointer to **[]string** |  | [optional] 

## Methods

### NewSubmitMultiDocParams

`func NewSubmitMultiDocParams(multiDocJobs []MultiDocJobItem, ) *SubmitMultiDocParams`

NewSubmitMultiDocParams instantiates a new SubmitMultiDocParams object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubmitMultiDocParamsWithDefaults

`func NewSubmitMultiDocParamsWithDefaults() *SubmitMultiDocParams`

NewSubmitMultiDocParamsWithDefaults instantiates a new SubmitMultiDocParams object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobTemplate

`func (o *SubmitMultiDocParams) GetJobTemplate() string`

GetJobTemplate returns the JobTemplate field if non-nil, zero value otherwise.

### GetJobTemplateOk

`func (o *SubmitMultiDocParams) GetJobTemplateOk() (*string, bool)`

GetJobTemplateOk returns a tuple with the JobTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobTemplate

`func (o *SubmitMultiDocParams) SetJobTemplate(v string)`

SetJobTemplate sets JobTemplate field to given value.

### HasJobTemplate

`func (o *SubmitMultiDocParams) HasJobTemplate() bool`

HasJobTemplate returns a boolean if a field has been set.

### GetMultiDocJobs

`func (o *SubmitMultiDocParams) GetMultiDocJobs() []MultiDocJobItem`

GetMultiDocJobs returns the MultiDocJobs field if non-nil, zero value otherwise.

### GetMultiDocJobsOk

`func (o *SubmitMultiDocParams) GetMultiDocJobsOk() (*[]MultiDocJobItem, bool)`

GetMultiDocJobsOk returns a tuple with the MultiDocJobs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiDocJobs

`func (o *SubmitMultiDocParams) SetMultiDocJobs(v []MultiDocJobItem)`

SetMultiDocJobs sets MultiDocJobs field to given value.


### GetPaymentDetails

`func (o *SubmitMultiDocParams) GetPaymentDetails() PaymentDetails`

GetPaymentDetails returns the PaymentDetails field if non-nil, zero value otherwise.

### GetPaymentDetailsOk

`func (o *SubmitMultiDocParams) GetPaymentDetailsOk() (*PaymentDetails, bool)`

GetPaymentDetailsOk returns a tuple with the PaymentDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentDetails

`func (o *SubmitMultiDocParams) SetPaymentDetails(v PaymentDetails)`

SetPaymentDetails sets PaymentDetails field to given value.

### HasPaymentDetails

`func (o *SubmitMultiDocParams) HasPaymentDetails() bool`

HasPaymentDetails returns a boolean if a field has been set.

### GetTags

`func (o *SubmitMultiDocParams) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *SubmitMultiDocParams) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *SubmitMultiDocParams) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *SubmitMultiDocParams) HasTags() bool`

HasTags returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


