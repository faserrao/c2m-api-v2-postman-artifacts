# RecipientaddresssourceVariant1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mapping_id** | **int** |  | [optional] 
**single_address** | [**Address**](Address.md) |  | 
**address_name** | **str** |  | [optional] 

## Example

```python
from c2m_api.models.recipientaddresssource_variant1 import RecipientaddresssourceVariant1

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientaddresssourceVariant1 from a JSON string
recipientaddresssource_variant1_instance = RecipientaddresssourceVariant1.from_json(json)
# print the JSON string representation of the object
print(RecipientaddresssourceVariant1.to_json())

# convert the object into a dict
recipientaddresssource_variant1_dict = recipientaddresssource_variant1_instance.to_dict()
# create an instance of RecipientaddresssourceVariant1 from a dict
recipientaddresssource_variant1_from_dict = RecipientaddresssourceVariant1.from_dict(recipientaddresssource_variant1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


