# ZipDocumentSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**zip_document_id** | **int** |  | 
**filename** | **str** |  | 
**request_id** | **int** |  | 
**zip_filename** | **str** |  | 

## Example

```python
from c2m_api.models.zip_document_source import ZipDocumentSource

# TODO update the JSON string below
json = "{}"
# create an instance of ZipDocumentSource from a JSON string
zip_document_source_instance = ZipDocumentSource.from_json(json)
# print the JSON string representation of the object
print(ZipDocumentSource.to_json())

# convert the object into a dict
zip_document_source_dict = zip_document_source_instance.to_dict()
# create an instance of ZipDocumentSource from a dict
zip_document_source_from_dict = ZipDocumentSource.from_dict(zip_document_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


