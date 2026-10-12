# ExpirationDate

Card expiration date containing month and year.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**month** | **int** | Expiration month as an integer (1-12). | 
**year** | **int** | Expiration year as a four-digit integer (e.g. 2029). | 

## Example

```python
from c2m_api.models.expiration_date import ExpirationDate

# TODO update the JSON string below
json = "{}"
# create an instance of ExpirationDate from a JSON string
expiration_date_instance = ExpirationDate.from_json(json)
# print the JSON string representation of the object
print(ExpirationDate.to_json())

# convert the object into a dict
expiration_date_dict = expiration_date_instance.to_dict()
# create an instance of ExpirationDate from a dict
expiration_date_from_dict = ExpirationDate.from_dict(expiration_date_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


