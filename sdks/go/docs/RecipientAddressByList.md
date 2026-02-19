# RecipientAddressByList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MappingId** | Pointer to **int32** |  | [optional] 
**AddressList** | [**[]Address**](Address.md) |  | 
**AddressListName** | Pointer to **string** |  | [optional] 

## Methods

### NewRecipientAddressByList

`func NewRecipientAddressByList(addressList []Address, ) *RecipientAddressByList`

NewRecipientAddressByList instantiates a new RecipientAddressByList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecipientAddressByListWithDefaults

`func NewRecipientAddressByListWithDefaults() *RecipientAddressByList`

NewRecipientAddressByListWithDefaults instantiates a new RecipientAddressByList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMappingId

`func (o *RecipientAddressByList) GetMappingId() int32`

GetMappingId returns the MappingId field if non-nil, zero value otherwise.

### GetMappingIdOk

`func (o *RecipientAddressByList) GetMappingIdOk() (*int32, bool)`

GetMappingIdOk returns a tuple with the MappingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMappingId

`func (o *RecipientAddressByList) SetMappingId(v int32)`

SetMappingId sets MappingId field to given value.

### HasMappingId

`func (o *RecipientAddressByList) HasMappingId() bool`

HasMappingId returns a boolean if a field has been set.

### GetAddressList

`func (o *RecipientAddressByList) GetAddressList() []Address`

GetAddressList returns the AddressList field if non-nil, zero value otherwise.

### GetAddressListOk

`func (o *RecipientAddressByList) GetAddressListOk() (*[]Address, bool)`

GetAddressListOk returns a tuple with the AddressList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressList

`func (o *RecipientAddressByList) SetAddressList(v []Address)`

SetAddressList sets AddressList field to given value.


### GetAddressListName

`func (o *RecipientAddressByList) GetAddressListName() string`

GetAddressListName returns the AddressListName field if non-nil, zero value otherwise.

### GetAddressListNameOk

`func (o *RecipientAddressByList) GetAddressListNameOk() (*string, bool)`

GetAddressListNameOk returns a tuple with the AddressListName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressListName

`func (o *RecipientAddressByList) SetAddressListName(v string)`

SetAddressListName sets AddressListName field to given value.

### HasAddressListName

`func (o *RecipientAddressByList) HasAddressListName() bool`

HasAddressListName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


