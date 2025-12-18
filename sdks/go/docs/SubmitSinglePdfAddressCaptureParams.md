# SubmitSinglePdfAddressCaptureParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobTemplate** | Pointer to **string** |  | [optional] 
**DocSourceStandard** | [**DocSourceStandard**](DocSourceStandard.md) |  | 
**PaymentDetails** | Pointer to [**PaymentDetails**](PaymentDetails.md) |  | [optional] 
**ReturnAddress** | Pointer to [**ReturnAddress**](ReturnAddress.md) |  | [optional] 
**JobOptions** | Pointer to [**JobOptions**](JobOptions.md) |  | [optional] 
**Tags** | Pointer to **[]string** |  | [optional] 

## Methods

### NewSubmitSinglePdfAddressCaptureParams

`func NewSubmitSinglePdfAddressCaptureParams(docSourceStandard DocSourceStandard, ) *SubmitSinglePdfAddressCaptureParams`

NewSubmitSinglePdfAddressCaptureParams instantiates a new SubmitSinglePdfAddressCaptureParams object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubmitSinglePdfAddressCaptureParamsWithDefaults

`func NewSubmitSinglePdfAddressCaptureParamsWithDefaults() *SubmitSinglePdfAddressCaptureParams`

NewSubmitSinglePdfAddressCaptureParamsWithDefaults instantiates a new SubmitSinglePdfAddressCaptureParams object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobTemplate

`func (o *SubmitSinglePdfAddressCaptureParams) GetJobTemplate() string`

GetJobTemplate returns the JobTemplate field if non-nil, zero value otherwise.

### GetJobTemplateOk

`func (o *SubmitSinglePdfAddressCaptureParams) GetJobTemplateOk() (*string, bool)`

GetJobTemplateOk returns a tuple with the JobTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobTemplate

`func (o *SubmitSinglePdfAddressCaptureParams) SetJobTemplate(v string)`

SetJobTemplate sets JobTemplate field to given value.

### HasJobTemplate

`func (o *SubmitSinglePdfAddressCaptureParams) HasJobTemplate() bool`

HasJobTemplate returns a boolean if a field has been set.

### GetDocSourceStandard

`func (o *SubmitSinglePdfAddressCaptureParams) GetDocSourceStandard() DocSourceStandard`

GetDocSourceStandard returns the DocSourceStandard field if non-nil, zero value otherwise.

### GetDocSourceStandardOk

`func (o *SubmitSinglePdfAddressCaptureParams) GetDocSourceStandardOk() (*DocSourceStandard, bool)`

GetDocSourceStandardOk returns a tuple with the DocSourceStandard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocSourceStandard

`func (o *SubmitSinglePdfAddressCaptureParams) SetDocSourceStandard(v DocSourceStandard)`

SetDocSourceStandard sets DocSourceStandard field to given value.


### GetPaymentDetails

`func (o *SubmitSinglePdfAddressCaptureParams) GetPaymentDetails() PaymentDetails`

GetPaymentDetails returns the PaymentDetails field if non-nil, zero value otherwise.

### GetPaymentDetailsOk

`func (o *SubmitSinglePdfAddressCaptureParams) GetPaymentDetailsOk() (*PaymentDetails, bool)`

GetPaymentDetailsOk returns a tuple with the PaymentDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentDetails

`func (o *SubmitSinglePdfAddressCaptureParams) SetPaymentDetails(v PaymentDetails)`

SetPaymentDetails sets PaymentDetails field to given value.

### HasPaymentDetails

`func (o *SubmitSinglePdfAddressCaptureParams) HasPaymentDetails() bool`

HasPaymentDetails returns a boolean if a field has been set.

### GetReturnAddress

`func (o *SubmitSinglePdfAddressCaptureParams) GetReturnAddress() ReturnAddress`

GetReturnAddress returns the ReturnAddress field if non-nil, zero value otherwise.

### GetReturnAddressOk

`func (o *SubmitSinglePdfAddressCaptureParams) GetReturnAddressOk() (*ReturnAddress, bool)`

GetReturnAddressOk returns a tuple with the ReturnAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnAddress

`func (o *SubmitSinglePdfAddressCaptureParams) SetReturnAddress(v ReturnAddress)`

SetReturnAddress sets ReturnAddress field to given value.

### HasReturnAddress

`func (o *SubmitSinglePdfAddressCaptureParams) HasReturnAddress() bool`

HasReturnAddress returns a boolean if a field has been set.

### GetJobOptions

`func (o *SubmitSinglePdfAddressCaptureParams) GetJobOptions() JobOptions`

GetJobOptions returns the JobOptions field if non-nil, zero value otherwise.

### GetJobOptionsOk

`func (o *SubmitSinglePdfAddressCaptureParams) GetJobOptionsOk() (*JobOptions, bool)`

GetJobOptionsOk returns a tuple with the JobOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobOptions

`func (o *SubmitSinglePdfAddressCaptureParams) SetJobOptions(v JobOptions)`

SetJobOptions sets JobOptions field to given value.

### HasJobOptions

`func (o *SubmitSinglePdfAddressCaptureParams) HasJobOptions() bool`

HasJobOptions returns a boolean if a field has been set.

### GetTags

`func (o *SubmitSinglePdfAddressCaptureParams) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *SubmitSinglePdfAddressCaptureParams) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *SubmitSinglePdfAddressCaptureParams) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *SubmitSinglePdfAddressCaptureParams) HasTags() bool`

HasTags returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


