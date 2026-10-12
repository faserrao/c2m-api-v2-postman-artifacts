# # ErrorResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_type** | **string** | High-level error category string (ValidationError, AuthenticationError, etc.). |
**error_message** | **string** | Human-readable error description. |
**error_code** | **string** | Machine-readable error code string (e.g. MISSING_REQUIRED_FIELD). |
**error_details** | **string** | Optional JSON object with additional error context (free-form key/value pairs). | [optional]
**error_tracking_id** | **string** | Optional support tracking identifier in the format TRK-YYYYMMDD-XXXXXX. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
