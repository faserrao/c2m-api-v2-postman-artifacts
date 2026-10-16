
# ErrorResponse

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **errorType** | [**inline**](#ErrorType) | High-level error category string (ValidationError, AuthenticationError, etc.). |  |
| **errorMessage** | **kotlin.String** | Human-readable error description. |  |
| **errorCode** | [**inline**](#ErrorCode) | Machine-readable error code string (e.g. MISSING_REQUIRED_FIELD). |  |
| **errorDetails** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md) | Optional JSON object with additional error context (free-form key/value pairs). |  [optional] |
| **errorTrackingId** | **kotlin.String** | Optional support tracking identifier in the format TRK-YYYYMMDD-XXXXXX. |  [optional] |


<a id="ErrorType"></a>
## Enum: errorType
| Name | Value |
| ---- | ----- |
| errorType | ValidationError, AuthenticationError, AuthorizationError, ResourceNotFoundError, RateLimitError, ServerError |


<a id="ErrorCode"></a>
## Enum: errorCode
| Name | Value |
| ---- | ----- |
| errorCode | MISSING_REQUIRED_FIELD, INVALID_ONEOF, INVALID_JSON, MISSING_AUTH_HEADER, INVALID_TOKEN, EXPIRED_TOKEN, INSUFFICIENT_PERMISSIONS, ACCOUNT_SUSPENDED, JOB_NOT_FOUND, RESOURCE_NOT_FOUND, INVALID_ENUM_VALUE, MUTUAL_EXCLUSION_VIOLATION, INVALID_FORMAT, SERVER_ERROR, DATABASE_ERROR, EXTERNAL_SERVICE_ERROR, RATE_LIMIT_EXCEEDED |



