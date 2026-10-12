# ZipDocumentIdSource

Source a specific file within a stored ZIP archive — requires the archive ID and the filename of the target file within the archive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**zip_document_id** | **int** | Integer ID of a previously stored ZIP archive. | 
**filename** | **str** | Filename of a specific file within an upload request or ZIP archive. | 

## Example

```python
from c2m_api.models.zip_document_id_source import ZipDocumentIdSource

# TODO update the JSON string below
json = "{}"
# create an instance of ZipDocumentIdSource from a JSON string
zip_document_id_source_instance = ZipDocumentIdSource.from_json(json)
# print the JSON string representation of the object
print(ZipDocumentIdSource.to_json())

# convert the object into a dict
zip_document_id_source_dict = zip_document_id_source_instance.to_dict()
# create an instance of ZipDocumentIdSource from a dict
zip_document_id_source_from_dict = ZipDocumentIdSource.from_dict(zip_document_id_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


