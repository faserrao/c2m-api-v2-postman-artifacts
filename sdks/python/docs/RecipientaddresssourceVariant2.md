# RecipientaddresssourceVariant2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mapping_id** | **int** |  | [optional] 
**address_list** | [**List[Address]**](Address.md) |  | 
**address_list_name** | **str** |  | [optional] 

## Example

```python
from c2m_api.models.recipientaddresssource_variant2 import RecipientaddresssourceVariant2

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientaddresssourceVariant2 from a JSON string
recipientaddresssource_variant2_instance = RecipientaddresssourceVariant2.from_json(json)
# print the JSON string representation of the object
print(RecipientaddresssourceVariant2.to_json())

# convert the object into a dict
recipientaddresssource_variant2_dict = recipientaddresssource_variant2_instance.to_dict()
# create an instance of RecipientaddresssourceVariant2 from a dict
recipientaddresssource_variant2_from_dict = RecipientaddresssourceVariant2.from_dict(recipientaddresssource_variant2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


