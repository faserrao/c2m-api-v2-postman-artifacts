# DocSourceAll


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id_source** | [**DocumentIdSource**](DocumentIdSource.md) |  | 
**request_id_source** | [**RequestIdSource**](RequestIdSource.md) |  | 
**url_source** | [**UrlSource**](UrlSource.md) |  | 
**zip_document_id_source** | [**ZipDocumentIdSource**](ZipDocumentIdSource.md) |  | 
**zip_request_id_source** | [**ZipRequestIdSource**](ZipRequestIdSource.md) |  | 

## Example

```python
from c2m_api.models.doc_source_all import DocSourceAll

# TODO update the JSON string below
json = "{}"
# create an instance of DocSourceAll from a JSON string
doc_source_all_instance = DocSourceAll.from_json(json)
# print the JSON string representation of the object
print(DocSourceAll.to_json())

# convert the object into a dict
doc_source_all_dict = doc_source_all_instance.to_dict()
# create an instance of DocSourceAll from a dict
doc_source_all_from_dict = DocSourceAll.from_dict(doc_source_all_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


