# RecipientAddressBySingle

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MappingId** | Pointer to **int32** |  | [optional] 
**SingleAddress** | [**Address**](Address.md) |  | 
**AddressName** | Pointer to **string** |  | [optional] 

## Methods

### NewRecipientAddressBySingle

`func NewRecipientAddressBySingle(singleAddress Address, ) *RecipientAddressBySingle`

NewRecipientAddressBySingle instantiates a new RecipientAddressBySingle object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecipientAddressBySingleWithDefaults

`func NewRecipientAddressBySingleWithDefaults() *RecipientAddressBySingle`

NewRecipientAddressBySingleWithDefaults instantiates a new RecipientAddressBySingle object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMappingId

`func (o *RecipientAddressBySingle) GetMappingId() int32`

GetMappingId returns the MappingId field if non-nil, zero value otherwise.

### GetMappingIdOk

`func (o *RecipientAddressBySingle) GetMappingIdOk() (*int32, bool)`

GetMappingIdOk returns a tuple with the MappingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMappingId

`func (o *RecipientAddressBySingle) SetMappingId(v int32)`

SetMappingId sets MappingId field to given value.

### HasMappingId

`func (o *RecipientAddressBySingle) HasMappingId() bool`

HasMappingId returns a boolean if a field has been set.

### GetSingleAddress

`func (o *RecipientAddressBySingle) GetSingleAddress() Address`

GetSingleAddress returns the SingleAddress field if non-nil, zero value otherwise.

### GetSingleAddressOk

`func (o *RecipientAddressBySingle) GetSingleAddressOk() (*Address, bool)`

GetSingleAddressOk returns a tuple with the SingleAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSingleAddress

`func (o *RecipientAddressBySingle) SetSingleAddress(v Address)`

SetSingleAddress sets SingleAddress field to given value.


### GetAddressName

`func (o *RecipientAddressBySingle) GetAddressName() string`

GetAddressName returns the AddressName field if non-nil, zero value otherwise.

### GetAddressNameOk

`func (o *RecipientAddressBySingle) GetAddressNameOk() (*string, bool)`

GetAddressNameOk returns a tuple with the AddressName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressName

`func (o *RecipientAddressBySingle) SetAddressName(v string)`

SetAddressName sets AddressName field to given value.

### HasAddressName

`func (o *RecipientAddressBySingle) HasAddressName() bool`

HasAddressName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


