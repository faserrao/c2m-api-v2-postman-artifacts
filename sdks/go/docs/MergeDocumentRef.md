# MergeDocumentRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **int32** |  | 
**Filename** | Pointer to **string** |  | [optional] 

## Methods

### NewMergeDocumentRef

`func NewMergeDocumentRef(requestId int32, ) *MergeDocumentRef`

NewMergeDocumentRef instantiates a new MergeDocumentRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMergeDocumentRefWithDefaults

`func NewMergeDocumentRefWithDefaults() *MergeDocumentRef`

NewMergeDocumentRefWithDefaults instantiates a new MergeDocumentRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestId

`func (o *MergeDocumentRef) GetRequestId() int32`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *MergeDocumentRef) GetRequestIdOk() (*int32, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *MergeDocumentRef) SetRequestId(v int32)`

SetRequestId sets RequestId field to given value.


### GetFilename

`func (o *MergeDocumentRef) GetFilename() string`

GetFilename returns the Filename field if non-nil, zero value otherwise.

### GetFilenameOk

`func (o *MergeDocumentRef) GetFilenameOk() (*string, bool)`

GetFilenameOk returns a tuple with the Filename field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilename

`func (o *MergeDocumentRef) SetFilename(v string)`

SetFilename sets Filename field to given value.

### HasFilename

`func (o *MergeDocumentRef) HasFilename() bool`

HasFilename returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


