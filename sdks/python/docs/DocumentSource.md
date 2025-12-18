# DocumentSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **int** |  | 
**filename** | **str** |  | 
**zip_document_id** | **int** |  | 
**zip_filename** | **str** |  | 

## Example

```python
from c2m_api.models.document_source import DocumentSource

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentSource from a JSON string
document_source_instance = DocumentSource.from_json(json)
# print the JSON string representation of the object
print(DocumentSource.to_json())

# convert the object into a dict
document_source_dict = document_source_instance.to_dict()
# create an instance of DocumentSource from a dict
document_source_from_dict = DocumentSource.from_dict(document_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


