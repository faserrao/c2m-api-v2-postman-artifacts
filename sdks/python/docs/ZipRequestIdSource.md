# ZipRequestIdSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **int** |  | 
**zip_filename** | **str** |  | 
**filename** | **str** |  | 

## Example

```python
from c2m_api.models.zip_request_id_source import ZipRequestIdSource

# TODO update the JSON string below
json = "{}"
# create an instance of ZipRequestIdSource from a JSON string
zip_request_id_source_instance = ZipRequestIdSource.from_json(json)
# print the JSON string representation of the object
print(ZipRequestIdSource.to_json())

# convert the object into a dict
zip_request_id_source_dict = zip_request_id_source_instance.to_dict()
# create an instance of ZipRequestIdSource from a dict
zip_request_id_source_from_dict = ZipRequestIdSource.from_dict(zip_request_id_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


