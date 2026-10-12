# ZipRequestIdSource

Source a specific file within an uploaded ZIP archive — requires the upload request ID, the zip filename within that request, and the target filename in the zip.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **int** | Integer ID of a prior file upload request. Also returned in success responses. | 
**zip_filename** | **str** | Filename of the ZIP file within an upload request (distinguishes the zip from other files uploaded in the same request). | 
**filename** | **str** | Filename of a specific file within an upload request or ZIP archive. | 

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


