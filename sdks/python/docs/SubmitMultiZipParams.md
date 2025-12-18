# SubmitMultiZipParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_template** | **str** |  | [optional] 
**multi_zip_jobs** | [**List[MultiZipJobItem]**](MultiZipJobItem.md) |  | 
**payment_details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] 
**tags** | **List[str]** |  | [optional] 

## Example

```python
from c2m_api.models.submit_multi_zip_params import SubmitMultiZipParams

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitMultiZipParams from a JSON string
submit_multi_zip_params_instance = SubmitMultiZipParams.from_json(json)
# print the JSON string representation of the object
print(SubmitMultiZipParams.to_json())

# convert the object into a dict
submit_multi_zip_params_dict = submit_multi_zip_params_instance.to_dict()
# create an instance of SubmitMultiZipParams from a dict
submit_multi_zip_params_from_dict = SubmitMultiZipParams.from_dict(submit_multi_zip_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


