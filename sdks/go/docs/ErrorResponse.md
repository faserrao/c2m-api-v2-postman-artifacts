# ErrorResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorType** | **string** |  | 
**ErrorMessage** | **string** |  | 
**ErrorCode** | **string** |  | 
**ErrorDetails** | Pointer to **string** |  | [optional] 
**ErrorTrackingId** | Pointer to **string** |  | [optional] 

## Methods

### NewErrorResponse

`func NewErrorResponse(errorType string, errorMessage string, errorCode string, ) *ErrorResponse`

NewErrorResponse instantiates a new ErrorResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewErrorResponseWithDefaults

`func NewErrorResponseWithDefaults() *ErrorResponse`

NewErrorResponseWithDefaults instantiates a new ErrorResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetErrorType

`func (o *ErrorResponse) GetErrorType() string`

GetErrorType returns the ErrorType field if non-nil, zero value otherwise.

### GetErrorTypeOk

`func (o *ErrorResponse) GetErrorTypeOk() (*string, bool)`

GetErrorTypeOk returns a tuple with the ErrorType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorType

`func (o *ErrorResponse) SetErrorType(v string)`

SetErrorType sets ErrorType field to given value.


### GetErrorMessage

`func (o *ErrorResponse) GetErrorMessage() string`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *ErrorResponse) GetErrorMessageOk() (*string, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *ErrorResponse) SetErrorMessage(v string)`

SetErrorMessage sets ErrorMessage field to given value.


### GetErrorCode

`func (o *ErrorResponse) GetErrorCode() string`

GetErrorCode returns the ErrorCode field if non-nil, zero value otherwise.

### GetErrorCodeOk

`func (o *ErrorResponse) GetErrorCodeOk() (*string, bool)`

GetErrorCodeOk returns a tuple with the ErrorCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorCode

`func (o *ErrorResponse) SetErrorCode(v string)`

SetErrorCode sets ErrorCode field to given value.


### GetErrorDetails

`func (o *ErrorResponse) GetErrorDetails() string`

GetErrorDetails returns the ErrorDetails field if non-nil, zero value otherwise.

### GetErrorDetailsOk

`func (o *ErrorResponse) GetErrorDetailsOk() (*string, bool)`

GetErrorDetailsOk returns a tuple with the ErrorDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDetails

`func (o *ErrorResponse) SetErrorDetails(v string)`

SetErrorDetails sets ErrorDetails field to given value.

### HasErrorDetails

`func (o *ErrorResponse) HasErrorDetails() bool`

HasErrorDetails returns a boolean if a field has been set.

### GetErrorTrackingId

`func (o *ErrorResponse) GetErrorTrackingId() string`

GetErrorTrackingId returns the ErrorTrackingId field if non-nil, zero value otherwise.

### GetErrorTrackingIdOk

`func (o *ErrorResponse) GetErrorTrackingIdOk() (*string, bool)`

GetErrorTrackingIdOk returns a tuple with the ErrorTrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorTrackingId

`func (o *ErrorResponse) SetErrorTrackingId(v string)`

SetErrorTrackingId sets ErrorTrackingId field to given value.

### HasErrorTrackingId

`func (o *ErrorResponse) HasErrorTrackingId() bool`

HasErrorTrackingId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


