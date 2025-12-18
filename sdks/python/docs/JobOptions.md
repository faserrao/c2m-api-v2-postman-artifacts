# JobOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_class** | **str** |  | 
**layout** | **str** |  | 
**production_time** | **str** |  | 
**envelope** | **str** |  | 
**color** | **str** |  | 
**paper_type** | **str** |  | 
**print_option** | **str** |  | 
**mail_class** | **str** |  | 

## Example

```python
from c2m_api.models.job_options import JobOptions

# TODO update the JSON string below
json = "{}"
# create an instance of JobOptions from a JSON string
job_options_instance = JobOptions.from_json(json)
# print the JSON string representation of the object
print(JobOptions.to_json())

# convert the object into a dict
job_options_dict = job_options_instance.to_dict()
# create an instance of JobOptions from a dict
job_options_from_dict = JobOptions.from_dict(job_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


