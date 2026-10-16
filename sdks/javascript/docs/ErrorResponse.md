# C2MApiV2.ErrorResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errorType** | **String** | High-level error category string (ValidationError, AuthenticationError, etc.). | 
**errorMessage** | **String** | Human-readable error description. | 
**errorCode** | **String** | Machine-readable error code string (e.g. MISSING_REQUIRED_FIELD). | 
**errorDetails** | **{String: Object}** | Optional JSON object with additional error context (free-form key/value pairs). | [optional] 
**errorTrackingId** | **String** | Optional support tracking identifier in the format TRK-YYYYMMDD-XXXXXX. | [optional] 



## Enum: ErrorTypeEnum


* `ValidationError` (value: `"ValidationError"`)

* `AuthenticationError` (value: `"AuthenticationError"`)

* `AuthorizationError` (value: `"AuthorizationError"`)

* `ResourceNotFoundError` (value: `"ResourceNotFoundError"`)

* `RateLimitError` (value: `"RateLimitError"`)

* `ServerError` (value: `"ServerError"`)





## Enum: ErrorCodeEnum


* `MISSING_REQUIRED_FIELD` (value: `"MISSING_REQUIRED_FIELD"`)

* `INVALID_ONEOF` (value: `"INVALID_ONEOF"`)

* `INVALID_JSON` (value: `"INVALID_JSON"`)

* `MISSING_AUTH_HEADER` (value: `"MISSING_AUTH_HEADER"`)

* `INVALID_TOKEN` (value: `"INVALID_TOKEN"`)

* `EXPIRED_TOKEN` (value: `"EXPIRED_TOKEN"`)

* `INSUFFICIENT_PERMISSIONS` (value: `"INSUFFICIENT_PERMISSIONS"`)

* `ACCOUNT_SUSPENDED` (value: `"ACCOUNT_SUSPENDED"`)

* `JOB_NOT_FOUND` (value: `"JOB_NOT_FOUND"`)

* `RESOURCE_NOT_FOUND` (value: `"RESOURCE_NOT_FOUND"`)

* `INVALID_ENUM_VALUE` (value: `"INVALID_ENUM_VALUE"`)

* `MUTUAL_EXCLUSION_VIOLATION` (value: `"MUTUAL_EXCLUSION_VIOLATION"`)

* `INVALID_FORMAT` (value: `"INVALID_FORMAT"`)

* `SERVER_ERROR` (value: `"SERVER_ERROR"`)

* `DATABASE_ERROR` (value: `"DATABASE_ERROR"`)

* `EXTERNAL_SERVICE_ERROR` (value: `"EXTERNAL_SERVICE_ERROR"`)

* `RATE_LIMIT_EXCEEDED` (value: `"RATE_LIMIT_EXCEEDED"`)




