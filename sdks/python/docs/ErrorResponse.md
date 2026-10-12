# ErrorResponse

Error response structure returned for all API error conditions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_type** | **str** | High-level error category string (ValidationError, AuthenticationError, etc.). | 
**error_message** | **str** | Human-readable error description. | 
**error_code** | **str** | Machine-readable error code string (e.g. MISSING_REQUIRED_FIELD). | 
**error_details** | **str** | Optional JSON object with additional error context (free-form key/value pairs). | [optional] 
**error_tracking_id** | **str** | Optional support tracking identifier in the format TRK-YYYYMMDD-XXXXXX. | [optional] 

## Example

```python
from c2m_api.models.error_response import ErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorResponse from a JSON string
error_response_instance = ErrorResponse.from_json(json)
# print the JSON string representation of the object
print(ErrorResponse.to_json())

# convert the object into a dict
error_response_dict = error_response_instance.to_dict()
# create an instance of ErrorResponse from a dict
error_response_from_dict = ErrorResponse.from_dict(error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


