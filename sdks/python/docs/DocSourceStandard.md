# DocSourceStandard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **int** |  | 
**filename** | **str** |  | [optional] 

## Example

```python
from c2m_api.models.doc_source_standard import DocSourceStandard

# TODO update the JSON string below
json = "{}"
# create an instance of DocSourceStandard from a JSON string
doc_source_standard_instance = DocSourceStandard.from_json(json)
# print the JSON string representation of the object
print(DocSourceStandard.to_json())

# convert the object into a dict
doc_source_standard_dict = doc_source_standard_instance.to_dict()
# create an instance of DocSourceStandard from a dict
doc_source_standard_from_dict = DocSourceStandard.from_dict(doc_source_standard_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


