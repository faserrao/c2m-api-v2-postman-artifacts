# ReturnAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**company** | **str** |  | [optional] 
**address1** | **str** |  | 
**city** | **str** |  | 
**state** | **str** |  | 
**zip** | **str** |  | 
**country** | **str** |  | 
**address2** | **str** |  | [optional] 
**address3** | **str** |  | [optional] 

## Example

```python
from c2m_api.models.return_address import ReturnAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnAddress from a JSON string
return_address_instance = ReturnAddress.from_json(json)
# print the JSON string representation of the object
print(ReturnAddress.to_json())

# convert the object into a dict
return_address_dict = return_address_instance.to_dict()
# create an instance of ReturnAddress from a dict
return_address_from_dict = ReturnAddress.from_dict(return_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


