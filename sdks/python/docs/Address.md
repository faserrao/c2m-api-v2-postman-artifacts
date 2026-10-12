# Address

Mailing address with required core fields (name, address1, city, state, zip, country) and optional extended fields (company, address2, address3, foo1, foo2).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** | Recipient&#39;s first name. | 
**last_name** | **str** | Recipient&#39;s last name. | 
**address1** | **str** | Primary street address line. | 
**city** | **str** | City name. | 
**state** | **str** | Two-letter state or province abbreviation. | 
**zip** | **str** | ZIP or postal code. | 
**country** | **str** | Country code (e.g. USA). | 
**address2** | **str** | Secondary address line (suite, apartment, floor, etc.). | [optional] 
**address3** | **str** | Tertiary address line. | [optional] 
**foo1** | **str** | User-defined merge variable 1 — forwarded to the address list merge mapping for personalisation. | [optional] 
**foo2** | **str** | User-defined merge variable 2 — forwarded to the address list merge mapping for personalisation. | [optional] 

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


