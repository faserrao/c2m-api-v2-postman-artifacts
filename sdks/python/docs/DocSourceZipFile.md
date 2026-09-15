# DocSourceZipFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**zip_document_id_source** | [**ZipDocumentIdSource**](ZipDocumentIdSource.md) |  | 
**zip_request_id_source** | [**ZipRequestIdSource**](ZipRequestIdSource.md) |  | 

## Example

```python
from c2m_api.models.doc_source_zip_file import DocSourceZipFile

# TODO update the JSON string below
json = "{}"
# create an instance of DocSourceZipFile from a JSON string
doc_source_zip_file_instance = DocSourceZipFile.from_json(json)
# print the JSON string representation of the object
print(DocSourceZipFile.to_json())

# convert the object into a dict
doc_source_zip_file_dict = doc_source_zip_file_instance.to_dict()
# create an instance of DocSourceZipFile from a dict
doc_source_zip_file_from_dict = DocSourceZipFile.from_dict(doc_source_zip_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


