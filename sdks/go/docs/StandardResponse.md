# StandardResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **string** |  | 
**Message** | **string** |  | 
**RequestId** | **int32** |  | 

## Methods

### NewStandardResponse

`func NewStandardResponse(status string, message string, requestId int32, ) *StandardResponse`

NewStandardResponse instantiates a new StandardResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStandardResponseWithDefaults

`func NewStandardResponseWithDefaults() *StandardResponse`

NewStandardResponseWithDefaults instantiates a new StandardResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *StandardResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *StandardResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *StandardResponse) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *StandardResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *StandardResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *StandardResponse) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetRequestId

`func (o *StandardResponse) GetRequestId() int32`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *StandardResponse) GetRequestIdOk() (*int32, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *StandardResponse) SetRequestId(v int32)`

SetRequestId sets RequestId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


