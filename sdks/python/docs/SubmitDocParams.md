# SubmitDocParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_template** | **str** |  | [optional] 
**doc_source_all** | [**DocSourceAll**](DocSourceAll.md) |  | 
**recipient_address_source** | [**RecipientAddressSource**](RecipientAddressSource.md) |  | 
**payment_details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] 
**return_address** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] 
**job_options** | [**JobOptions**](JobOptions.md) |  | [optional] 
**tags** | **List[str]** |  | [optional] 

## Example

```python
from c2m_api.models.submit_doc_params import SubmitDocParams

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitDocParams from a JSON string
submit_doc_params_instance = SubmitDocParams.from_json(json)
# print the JSON string representation of the object
print(SubmitDocParams.to_json())

# convert the object into a dict
submit_doc_params_dict = submit_doc_params_instance.to_dict()
# create an instance of SubmitDocParams from a dict
submit_doc_params_from_dict = SubmitDocParams.from_dict(submit_doc_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


