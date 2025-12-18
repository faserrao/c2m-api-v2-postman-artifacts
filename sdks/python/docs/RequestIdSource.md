# RequestIdSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **int** |  | 
**filename** | **str** |  | [optional] 

## Example

```python
from c2m_api.models.request_id_source import RequestIdSource

# TODO update the JSON string below
json = "{}"
# create an instance of RequestIdSource from a JSON string
request_id_source_instance = RequestIdSource.from_json(json)
# print the JSON string representation of the object
print(RequestIdSource.to_json())

# convert the object into a dict
request_id_source_dict = request_id_source_instance.to_dict()
# create an instance of RequestIdSource from a dict
request_id_source_from_dict = RequestIdSource.from_dict(request_id_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


