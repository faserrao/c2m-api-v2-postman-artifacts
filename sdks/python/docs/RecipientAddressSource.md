# RecipientAddressSource

Recipient address specification — one of: inline address list of one or more recipients (with optional mapping), stored list ID, or stored address ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipient_address_by_list** | [**RecipientAddressByList**](RecipientAddressByList.md) |  | 
**recipient_address_by_address_id** | [**RecipientAddressByAddressId**](RecipientAddressByAddressId.md) |  | 
**recipient_address_by_list_id** | [**RecipientAddressByListId**](RecipientAddressByListId.md) |  | 

## Example

```python
from c2m_api.models.recipient_address_source import RecipientAddressSource

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientAddressSource from a JSON string
recipient_address_source_instance = RecipientAddressSource.from_json(json)
# print the JSON string representation of the object
print(RecipientAddressSource.to_json())

# convert the object into a dict
recipient_address_source_dict = recipient_address_source_instance.to_dict()
# create an instance of RecipientAddressSource from a dict
recipient_address_source_from_dict = RecipientAddressSource.from_dict(recipient_address_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


