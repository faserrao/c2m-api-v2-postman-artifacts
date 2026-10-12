# ErrorResponse

Error response structure returned for all API error conditions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errorType** | **string** | High-level error category string (ValidationError, AuthenticationError, etc.). | [default to undefined]
**errorMessage** | **string** | Human-readable error description. | [default to undefined]
**errorCode** | **string** | Machine-readable error code string (e.g. MISSING_REQUIRED_FIELD). | [default to undefined]
**errorDetails** | **string** | Optional JSON object with additional error context (free-form key/value pairs). | [optional] [default to undefined]
**errorTrackingId** | **string** | Optional support tracking identifier in the format TRK-YYYYMMDD-XXXXXX. | [optional] [default to undefined]

## Example

```typescript
import { ErrorResponse } from './api';

const instance: ErrorResponse = {
    errorType,
    errorMessage,
    errorCode,
    errorDetails,
    errorTrackingId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
