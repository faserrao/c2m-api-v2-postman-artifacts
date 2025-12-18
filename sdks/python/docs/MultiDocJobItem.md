# MultiDocJobItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_template** | **str** |  | [optional] 
**doc_source_all** | [**DocSourceAll**](DocSourceAll.md) |  | 
**recipient_address_source** | [**RecipientAddressSource**](RecipientAddressSource.md) |  | 

## Example

```python
from c2m_api.models.multi_doc_job_item import MultiDocJobItem

# TODO update the JSON string below
json = "{}"
# create an instance of MultiDocJobItem from a JSON string
multi_doc_job_item_instance = MultiDocJobItem.from_json(json)
# print the JSON string representation of the object
print(MultiDocJobItem.to_json())

# convert the object into a dict
multi_doc_job_item_dict = multi_doc_job_item_instance.to_dict()
# create an instance of MultiDocJobItem from a dict
multi_doc_job_item_from_dict = MultiDocJobItem.from_dict(multi_doc_job_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


