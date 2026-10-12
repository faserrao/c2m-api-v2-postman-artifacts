

# ErrorResponse

Error response structure returned for all API error conditions.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**errorType** | [**ErrorTypeEnum**](#ErrorTypeEnum) | High-level error category string (ValidationError, AuthenticationError, etc.). |  |
|**errorMessage** | **String** | Human-readable error description. |  |
|**errorCode** | [**ErrorCodeEnum**](#ErrorCodeEnum) | Machine-readable error code string (e.g. MISSING_REQUIRED_FIELD). |  |
|**errorDetails** | **String** | Optional JSON object with additional error context (free-form key/value pairs). |  [optional] |
|**errorTrackingId** | **String** | Optional support tracking identifier in the format TRK-YYYYMMDD-XXXXXX. |  [optional] |



## Enum: ErrorTypeEnum

| Name | Value |
|---- | -----|
| VALIDATION_ERROR | &quot;ValidationError&quot; |
| AUTHENTICATION_ERROR | &quot;AuthenticationError&quot; |
| AUTHORIZATION_ERROR | &quot;AuthorizationError&quot; |
| RESOURCE_NOT_FOUND_ERROR | &quot;ResourceNotFoundError&quot; |
| RATE_LIMIT_ERROR | &quot;RateLimitError&quot; |
| SERVER_ERROR | &quot;ServerError&quot; |



## Enum: ErrorCodeEnum

| Name | Value |
|---- | -----|
| MISSING_REQUIRED_FIELD | &quot;MISSING_REQUIRED_FIELD&quot; |
| INVALID_ONEOF | &quot;INVALID_ONEOF&quot; |
| INVALID_JSON | &quot;INVALID_JSON&quot; |
| MISSING_AUTH_HEADER | &quot;MISSING_AUTH_HEADER&quot; |
| INVALID_TOKEN | &quot;INVALID_TOKEN&quot; |
| EXPIRED_TOKEN | &quot;EXPIRED_TOKEN&quot; |
| INSUFFICIENT_PERMISSIONS | &quot;INSUFFICIENT_PERMISSIONS&quot; |
| ACCOUNT_SUSPENDED | &quot;ACCOUNT_SUSPENDED&quot; |
| JOB_NOT_FOUND | &quot;JOB_NOT_FOUND&quot; |
| RESOURCE_NOT_FOUND | &quot;RESOURCE_NOT_FOUND&quot; |
| INVALID_ENUM_VALUE | &quot;INVALID_ENUM_VALUE&quot; |
| MUTUAL_EXCLUSION_VIOLATION | &quot;MUTUAL_EXCLUSION_VIOLATION&quot; |
| INVALID_FORMAT | &quot;INVALID_FORMAT&quot; |
| SERVER_ERROR | &quot;SERVER_ERROR&quot; |
| DATABASE_ERROR | &quot;DATABASE_ERROR&quot; |
| EXTERNAL_SERVICE_ERROR | &quot;EXTERNAL_SERVICE_ERROR&quot; |
| RATE_LIMIT_EXCEEDED | &quot;RATE_LIMIT_EXCEEDED&quot; |



