# RecipientAddressSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MappingId** | Pointer to **int32** |  | [optional] 
**SingleAddress** | [**Address**](Address.md) |  | 
**AddressName** | Pointer to **string** |  | [optional] 
**AddressList** | [**[]Address**](Address.md) |  | 
**AddressListName** | Pointer to **string** |  | [optional] 

## Methods

### NewRecipientAddressSource

`func NewRecipientAddressSource(singleAddress Address, addressList []Address, ) *RecipientAddressSource`

NewRecipientAddressSource instantiates a new RecipientAddressSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecipientAddressSourceWithDefaults

`func NewRecipientAddressSourceWithDefaults() *RecipientAddressSource`

NewRecipientAddressSourceWithDefaults instantiates a new RecipientAddressSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMappingId

`func (o *RecipientAddressSource) GetMappingId() int32`

GetMappingId returns the MappingId field if non-nil, zero value otherwise.

### GetMappingIdOk

`func (o *RecipientAddressSource) GetMappingIdOk() (*int32, bool)`

GetMappingIdOk returns a tuple with the MappingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMappingId

`func (o *RecipientAddressSource) SetMappingId(v int32)`

SetMappingId sets MappingId field to given value.

### HasMappingId

`func (o *RecipientAddressSource) HasMappingId() bool`

HasMappingId returns a boolean if a field has been set.

### GetSingleAddress

`func (o *RecipientAddressSource) GetSingleAddress() Address`

GetSingleAddress returns the SingleAddress field if non-nil, zero value otherwise.

### GetSingleAddressOk

`func (o *RecipientAddressSource) GetSingleAddressOk() (*Address, bool)`

GetSingleAddressOk returns a tuple with the SingleAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSingleAddress

`func (o *RecipientAddressSource) SetSingleAddress(v Address)`

SetSingleAddress sets SingleAddress field to given value.


### GetAddressName

`func (o *RecipientAddressSource) GetAddressName() string`

GetAddressName returns the AddressName field if non-nil, zero value otherwise.

### GetAddressNameOk

`func (o *RecipientAddressSource) GetAddressNameOk() (*string, bool)`

GetAddressNameOk returns a tuple with the AddressName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressName

`func (o *RecipientAddressSource) SetAddressName(v string)`

SetAddressName sets AddressName field to given value.

### HasAddressName

`func (o *RecipientAddressSource) HasAddressName() bool`

HasAddressName returns a boolean if a field has been set.

### GetAddressList

`func (o *RecipientAddressSource) GetAddressList() []Address`

GetAddressList returns the AddressList field if non-nil, zero value otherwise.

### GetAddressListOk

`func (o *RecipientAddressSource) GetAddressListOk() (*[]Address, bool)`

GetAddressListOk returns a tuple with the AddressList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressList

`func (o *RecipientAddressSource) SetAddressList(v []Address)`

SetAddressList sets AddressList field to given value.


### GetAddressListName

`func (o *RecipientAddressSource) GetAddressListName() string`

GetAddressListName returns the AddressListName field if non-nil, zero value otherwise.

### GetAddressListNameOk

`func (o *RecipientAddressSource) GetAddressListNameOk() (*string, bool)`

GetAddressListNameOk returns a tuple with the AddressListName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressListName

`func (o *RecipientAddressSource) SetAddressListName(v string)`

SetAddressListName sets AddressListName field to given value.

### HasAddressListName

`func (o *RecipientAddressSource) HasAddressListName() bool`

HasAddressListName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


