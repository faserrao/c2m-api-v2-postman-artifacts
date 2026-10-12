# MultiZipJobItem

A single ZIP file job entry: optional job template, filename within the ZIP, and recipient address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_template** | **str** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] 
**filename** | **str** | Filename of a specific file within an upload request or ZIP archive. | 
**recipient_address_source** | [**RecipientAddressSource**](RecipientAddressSource.md) |  | 

## Example

```python
from c2m_api.models.multi_zip_job_item import MultiZipJobItem

# TODO update the JSON string below
json = "{}"
# create an instance of MultiZipJobItem from a JSON string
multi_zip_job_item_instance = MultiZipJobItem.from_json(json)
# print the JSON string representation of the object
print(MultiZipJobItem.to_json())

# convert the object into a dict
multi_zip_job_item_dict = multi_zip_job_item_instance.to_dict()
# create an instance of MultiZipJobItem from a dict
multi_zip_job_item_from_dict = MultiZipJobItem.from_dict(multi_zip_job_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


