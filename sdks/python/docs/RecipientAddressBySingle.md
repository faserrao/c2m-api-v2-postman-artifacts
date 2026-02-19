# RecipientAddressBySingle


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mapping_id** | **int** |  | [optional] 
**single_address** | [**Address**](Address.md) |  | 
**address_name** | **str** |  | [optional] 

## Example

```python
from c2m_api.models.recipient_address_by_single import RecipientAddressBySingle

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientAddressBySingle from a JSON string
recipient_address_by_single_instance = RecipientAddressBySingle.from_json(json)
# print the JSON string representation of the object
print(RecipientAddressBySingle.to_json())

# convert the object into a dict
recipient_address_by_single_dict = recipient_address_by_single_instance.to_dict()
# create an instance of RecipientAddressBySingle from a dict
recipient_address_by_single_from_dict = RecipientAddressBySingle.from_dict(recipient_address_by_single_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


