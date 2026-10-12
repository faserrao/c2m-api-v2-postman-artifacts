# UrlSource

Fetch the document from an external URL at submission time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | URL from which the API will fetch the document at submission time. | 

## Example

```python
from c2m_api.models.url_source import UrlSource

# TODO update the JSON string below
json = "{}"
# create an instance of UrlSource from a JSON string
url_source_instance = UrlSource.from_json(json)
# print the JSON string representation of the object
print(UrlSource.to_json())

# convert the object into a dict
url_source_dict = url_source_instance.to_dict()
# create an instance of UrlSource from a dict
url_source_from_dict = UrlSource.from_dict(url_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


