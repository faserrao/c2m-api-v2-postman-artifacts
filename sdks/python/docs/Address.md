# Address


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**address1** | **str** |  | 
**city** | **str** |  | 
**state** | **str** |  | 
**zip** | **str** |  | 
**country** | **str** |  | 
**address2** | **str** |  | [optional] 
**address3** | **str** |  | [optional] 
**foo1** | **str** |  | [optional] 
**foo2** | **str** |  | [optional] 

## Example

```python
from c2m_api.models.address import Address

# TODO update the JSON string below
json = "{}"
# create an instance of Address from a JSON string
address_instance = Address.from_json(json)
# print the JSON string representation of the object
print(Address.to_json())

# convert the object into a dict
address_dict = address_instance.to_dict()
# create an instance of Address from a dict
address_from_dict = Address.from_dict(address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


