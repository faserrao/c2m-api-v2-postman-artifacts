# CreditAmount

Account credit payment fields: monetary amount and ISO currency code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Monetary amount as a numeric value. | 
**currency** | **str** | ISO 4217 currency code (USD, EUR, GBP, CAD, or AUD). | 

## Example

```python
from c2m_api.models.credit_amount import CreditAmount

# TODO update the JSON string below
json = "{}"
# create an instance of CreditAmount from a JSON string
credit_amount_instance = CreditAmount.from_json(json)
# print the JSON string representation of the object
print(CreditAmount.to_json())

# convert the object into a dict
credit_amount_dict = credit_amount_instance.to_dict()
# create an instance of CreditAmount from a dict
credit_amount_from_dict = CreditAmount.from_dict(credit_amount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


