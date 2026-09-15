# DocSourceStandard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DocumentId** | **int32** |  | 
**RequestId** | **int32** |  | 
**Filename** | Pointer to **string** |  | [optional] 
**Url** | **string** |  | 

## Methods

### NewDocSourceStandard

`func NewDocSourceStandard(documentId int32, requestId int32, url string, ) *DocSourceStandard`

NewDocSourceStandard instantiates a new DocSourceStandard object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDocSourceStandardWithDefaults

`func NewDocSourceStandardWithDefaults() *DocSourceStandard`

NewDocSourceStandardWithDefaults instantiates a new DocSourceStandard object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDocumentId

`func (o *DocSourceStandard) GetDocumentId() int32`

GetDocumentId returns the DocumentId field if non-nil, zero value otherwise.

### GetDocumentIdOk

`func (o *DocSourceStandard) GetDocumentIdOk() (*int32, bool)`

GetDocumentIdOk returns a tuple with the DocumentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentId

`func (o *DocSourceStandard) SetDocumentId(v int32)`

SetDocumentId sets DocumentId field to given value.


### GetRequestId

`func (o *DocSourceStandard) GetRequestId() int32`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *DocSourceStandard) GetRequestIdOk() (*int32, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *DocSourceStandard) SetRequestId(v int32)`

SetRequestId sets RequestId field to given value.


### GetFilename

`func (o *DocSourceStandard) GetFilename() string`

GetFilename returns the Filename field if non-nil, zero value otherwise.

### GetFilenameOk

`func (o *DocSourceStandard) GetFilenameOk() (*string, bool)`

GetFilenameOk returns a tuple with the Filename field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilename

`func (o *DocSourceStandard) SetFilename(v string)`

SetFilename sets Filename field to given value.

### HasFilename

`func (o *DocSourceStandard) HasFilename() bool`

HasFilename returns a boolean if a field has been set.

### GetUrl

`func (o *DocSourceStandard) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *DocSourceStandard) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *DocSourceStandard) SetUrl(v string)`

SetUrl sets Url field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


