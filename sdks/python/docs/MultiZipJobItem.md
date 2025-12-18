# MultiZipJobItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_template** | **str** |  | [optional] 
**doc_source_zip_file** | [**DocSourceZipFile**](DocSourceZipFile.md) |  | 
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


