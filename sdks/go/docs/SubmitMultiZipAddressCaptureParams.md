# SubmitMultiZipAddressCaptureParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobTemplate** | Pointer to **string** |  | [optional] 
**ZipDocumentSource** | [**ZipDocumentSource**](ZipDocumentSource.md) |  | 
**PaymentDetails** | Pointer to [**PaymentDetails**](PaymentDetails.md) |  | [optional] 
**ReturnAddress** | Pointer to [**ReturnAddress**](ReturnAddress.md) |  | [optional] 
**JobOptions** | Pointer to [**JobOptions**](JobOptions.md) |  | [optional] 
**Tags** | Pointer to **[]string** |  | [optional] 

## Methods

### NewSubmitMultiZipAddressCaptureParams

`func NewSubmitMultiZipAddressCaptureParams(zipDocumentSource ZipDocumentSource, ) *SubmitMultiZipAddressCaptureParams`

NewSubmitMultiZipAddressCaptureParams instantiates a new SubmitMultiZipAddressCaptureParams object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubmitMultiZipAddressCaptureParamsWithDefaults

`func NewSubmitMultiZipAddressCaptureParamsWithDefaults() *SubmitMultiZipAddressCaptureParams`

NewSubmitMultiZipAddressCaptureParamsWithDefaults instantiates a new SubmitMultiZipAddressCaptureParams object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobTemplate

`func (o *SubmitMultiZipAddressCaptureParams) GetJobTemplate() string`

GetJobTemplate returns the JobTemplate field if non-nil, zero value otherwise.

### GetJobTemplateOk

`func (o *SubmitMultiZipAddressCaptureParams) GetJobTemplateOk() (*string, bool)`

GetJobTemplateOk returns a tuple with the JobTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobTemplate

`func (o *SubmitMultiZipAddressCaptureParams) SetJobTemplate(v string)`

SetJobTemplate sets JobTemplate field to given value.

### HasJobTemplate

`func (o *SubmitMultiZipAddressCaptureParams) HasJobTemplate() bool`

HasJobTemplate returns a boolean if a field has been set.

### GetZipDocumentSource

`func (o *SubmitMultiZipAddressCaptureParams) GetZipDocumentSource() ZipDocumentSource`

GetZipDocumentSource returns the ZipDocumentSource field if non-nil, zero value otherwise.

### GetZipDocumentSourceOk

`func (o *SubmitMultiZipAddressCaptureParams) GetZipDocumentSourceOk() (*ZipDocumentSource, bool)`

GetZipDocumentSourceOk returns a tuple with the ZipDocumentSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZipDocumentSource

`func (o *SubmitMultiZipAddressCaptureParams) SetZipDocumentSource(v ZipDocumentSource)`

SetZipDocumentSource sets ZipDocumentSource field to given value.


### GetPaymentDetails

`func (o *SubmitMultiZipAddressCaptureParams) GetPaymentDetails() PaymentDetails`

GetPaymentDetails returns the PaymentDetails field if non-nil, zero value otherwise.

### GetPaymentDetailsOk

`func (o *SubmitMultiZipAddressCaptureParams) GetPaymentDetailsOk() (*PaymentDetails, bool)`

GetPaymentDetailsOk returns a tuple with the PaymentDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentDetails

`func (o *SubmitMultiZipAddressCaptureParams) SetPaymentDetails(v PaymentDetails)`

SetPaymentDetails sets PaymentDetails field to given value.

### HasPaymentDetails

`func (o *SubmitMultiZipAddressCaptureParams) HasPaymentDetails() bool`

HasPaymentDetails returns a boolean if a field has been set.

### GetReturnAddress

`func (o *SubmitMultiZipAddressCaptureParams) GetReturnAddress() ReturnAddress`

GetReturnAddress returns the ReturnAddress field if non-nil, zero value otherwise.

### GetReturnAddressOk

`func (o *SubmitMultiZipAddressCaptureParams) GetReturnAddressOk() (*ReturnAddress, bool)`

GetReturnAddressOk returns a tuple with the ReturnAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnAddress

`func (o *SubmitMultiZipAddressCaptureParams) SetReturnAddress(v ReturnAddress)`

SetReturnAddress sets ReturnAddress field to given value.

### HasReturnAddress

`func (o *SubmitMultiZipAddressCaptureParams) HasReturnAddress() bool`

HasReturnAddress returns a boolean if a field has been set.

### GetJobOptions

`func (o *SubmitMultiZipAddressCaptureParams) GetJobOptions() JobOptions`

GetJobOptions returns the JobOptions field if non-nil, zero value otherwise.

### GetJobOptionsOk

`func (o *SubmitMultiZipAddressCaptureParams) GetJobOptionsOk() (*JobOptions, bool)`

GetJobOptionsOk returns a tuple with the JobOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobOptions

`func (o *SubmitMultiZipAddressCaptureParams) SetJobOptions(v JobOptions)`

SetJobOptions sets JobOptions field to given value.

### HasJobOptions

`func (o *SubmitMultiZipAddressCaptureParams) HasJobOptions() bool`

HasJobOptions returns a boolean if a field has been set.

### GetTags

`func (o *SubmitMultiZipAddressCaptureParams) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *SubmitMultiZipAddressCaptureParams) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *SubmitMultiZipAddressCaptureParams) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *SubmitMultiZipAddressCaptureParams) HasTags() bool`

HasTags returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


