# MergeDocumentRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **int** |  | 
**filename** | **str** |  | [optional] 

## Example

```python
from c2m_api.models.merge_document_ref import MergeDocumentRef

# TODO update the JSON string below
json = "{}"
# create an instance of MergeDocumentRef from a JSON string
merge_document_ref_instance = MergeDocumentRef.from_json(json)
# print the JSON string representation of the object
print(MergeDocumentRef.to_json())

# convert the object into a dict
merge_document_ref_dict = merge_document_ref_instance.to_dict()
# create an instance of MergeDocumentRef from a dict
merge_document_ref_from_dict = MergeDocumentRef.from_dict(merge_document_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


