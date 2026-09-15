# RecipientAddressSourceOneOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**single_address** | [**Address**](Address.md) |  | 

## Example

```python
from c2m_api.models.recipient_address_source_one_of import RecipientAddressSourceOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientAddressSourceOneOf from a JSON string
recipient_address_source_one_of_instance = RecipientAddressSourceOneOf.from_json(json)
# print the JSON string representation of the object
print(RecipientAddressSourceOneOf.to_json())

# convert the object into a dict
recipient_address_source_one_of_dict = recipient_address_source_one_of_instance.to_dict()
# create an instance of RecipientAddressSourceOneOf from a dict
recipient_address_source_one_of_from_dict = RecipientAddressSourceOneOf.from_dict(recipient_address_source_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


