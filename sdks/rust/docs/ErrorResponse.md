# ErrorResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_type** | **String** | High-level error category string (ValidationError, AuthenticationError, etc.). | 
**error_message** | **String** | Human-readable error description. | 
**error_code** | **String** | Machine-readable error code string (e.g. MISSING_REQUIRED_FIELD). | 
**error_details** | Option<[**std::collections::HashMap<String, serde_json::Value>**](serde_json::Value.md)> | Optional JSON object with additional error context (free-form key/value pairs). | [optional]
**error_tracking_id** | Option<**String**> | Optional support tracking identifier in the format TRK-YYYYMMDD-XXXXXX. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


