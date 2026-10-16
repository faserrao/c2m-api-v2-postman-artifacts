# RecipientAddressByAddressId

Reference to a previously stored individual recipient address by its integer ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_id** | **int** | Integer ID of a previously stored individual recipient address. | 

## Example

```python
from c2m_api.models.recipient_address_by_address_id import RecipientAddressByAddressId

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientAddressByAddressId from a JSON string
recipient_address_by_address_id_instance = RecipientAddressByAddressId.from_json(json)
# print the JSON string representation of the object
print(RecipientAddressByAddressId.to_json())

# convert the object into a dict
recipient_address_by_address_id_dict = recipient_address_by_address_id_instance.to_dict()
# create an instance of RecipientAddressByAddressId from a dict
recipient_address_by_address_id_from_dict = RecipientAddressByAddressId.from_dict(recipient_address_by_address_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


