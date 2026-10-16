# RecipientAddressByListId

Reference to a previously stored recipient address list by its integer ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_list_id** | **int** | Integer ID of a previously stored recipient address list. | 

## Example

```python
from c2m_api.models.recipient_address_by_list_id import RecipientAddressByListId

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientAddressByListId from a JSON string
recipient_address_by_list_id_instance = RecipientAddressByListId.from_json(json)
# print the JSON string representation of the object
print(RecipientAddressByListId.to_json())

# convert the object into a dict
recipient_address_by_list_id_dict = recipient_address_by_list_id_instance.to_dict()
# create an instance of RecipientAddressByListId from a dict
recipient_address_by_list_id_from_dict = RecipientAddressByListId.from_dict(recipient_address_by_list_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


