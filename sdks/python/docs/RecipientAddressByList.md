# RecipientAddressByList

Inline list of recipient addresses with an optional merge-field mapping ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mapping_id** | **int** | Integer ID of a merge-field mapping profile that associates address columns to template variables. If omitted, the account default mapping is used. | [optional] 
**address_list** | [**List[Address]**](Address.md) | List of recipient mailing addresses — used for batch sends and mail merge. | 
**address_list_name** | **str** | Optional name for this address list record. | [optional] 

## Example

```python
from c2m_api.models.recipient_address_by_list import RecipientAddressByList

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientAddressByList from a JSON string
recipient_address_by_list_instance = RecipientAddressByList.from_json(json)
# print the JSON string representation of the object
print(RecipientAddressByList.to_json())

# convert the object into a dict
recipient_address_by_list_dict = recipient_address_by_list_instance.to_dict()
# create an instance of RecipientAddressByList from a dict
recipient_address_by_list_from_dict = RecipientAddressByList.from_dict(recipient_address_by_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


