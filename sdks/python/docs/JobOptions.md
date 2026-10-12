# JobOptions

Explicit print and mail configuration options. Mutually exclusive with jobTemplate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_class** | **str** | Document class determining the mailpiece format. | 
**layout** | **str** | Page layout controlling where the recipient address is printed. | 
**production_time** | **str** | Production time preference (next_day, two_day, etc.). | 
**envelope** | **str** | Envelope type used for the mailing. | 
**color** | **str** | Color mode for printing (full_color or black_and_white). | 
**paper_type** | **str** | Paper stock for printing. | 
**print_option** | **str** | Duplex setting (double_sided or single_sided). | 
**mail_class** | **str** | USPS mail class (first_class, standard, or non_profit). | 

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


