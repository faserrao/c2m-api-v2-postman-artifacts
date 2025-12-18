# MergeByRequestId


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **int** |  | 
**filename** | **str** |  | [optional] 

## Example

```python
from c2m_api.models.merge_by_request_id import MergeByRequestId

# TODO update the JSON string below
json = "{}"
# create an instance of MergeByRequestId from a JSON string
merge_by_request_id_instance = MergeByRequestId.from_json(json)
# print the JSON string representation of the object
print(MergeByRequestId.to_json())

# convert the object into a dict
merge_by_request_id_dict = merge_by_request_id_instance.to_dict()
# create an instance of MergeByRequestId from a dict
merge_by_request_id_from_dict = MergeByRequestId.from_dict(merge_by_request_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


