# RequestIdSource

Source a document from a prior file upload by request ID. If the upload request contained multiple files, filename is required to identify which one.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **int** | Integer ID of a prior file upload request. Also returned in success responses. | 
**filename** | **str** | Filename of a specific file within an upload request or ZIP archive. | [optional] 

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


