# ReturnAddress

Optional sender return address printed on the mailpiece.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** | Recipient&#39;s first name. | 
**last_name** | **str** | Recipient&#39;s last name. | 
**company** | **str** | Recipient&#39;s company or organisation name (optional). | [optional] 
**address1** | **str** | Primary street address line. | 
**city** | **str** | City name. | 
**state** | **str** | Two-letter state or province abbreviation. | 
**zip** | **str** | ZIP or postal code. | 
**country** | **str** | Country code (e.g. USA). | 
**address2** | **str** | Secondary address line (suite, apartment, floor, etc.). | [optional] 
**address3** | **str** | Tertiary address line. | [optional] 

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


