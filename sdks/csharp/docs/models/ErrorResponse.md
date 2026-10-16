# C2M.Api.Model.ErrorResponse
Error response structure returned for all API error conditions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorType** | **string** | High-level error category string (ValidationError, AuthenticationError, etc.). | 
**ErrorMessage** | **string** | Human-readable error description. | 
**ErrorCode** | **string** | Machine-readable error code string (e.g. MISSING_REQUIRED_FIELD). | 
**ErrorDetails** | **Dictionary&lt;string, Object&gt;** | Optional JSON object with additional error context (free-form key/value pairs). | [optional] 
**ErrorTrackingId** | **string** | Optional support tracking identifier in the format TRK-YYYYMMDD-XXXXXX. | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

