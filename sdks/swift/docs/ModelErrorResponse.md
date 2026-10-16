# ModelErrorResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errorType** | **String** | High-level error category string (ValidationError, AuthenticationError, etc.). | 
**errorMessage** | **String** | Human-readable error description. | 
**errorCode** | **String** | Machine-readable error code string (e.g. MISSING_REQUIRED_FIELD). | 
**errorDetails** | **[String: AnyCodable]** | Optional JSON object with additional error context (free-form key/value pairs). | [optional] 
**errorTrackingId** | **String** | Optional support tracking identifier in the format TRK-YYYYMMDD-XXXXXX. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


