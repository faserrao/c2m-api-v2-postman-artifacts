
# ErrorResponse

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **errorType** | [**inline**](#ErrorType) |  |  |
| **errorMessage** | **kotlin.String** |  |  |
| **errorCode** | [**inline**](#ErrorCode) |  |  |
| **errorDetails** | **kotlin.String** |  |  [optional] |
| **errorTrackingId** | **kotlin.String** |  |  [optional] |


<a id="ErrorType"></a>
## Enum: errorType
| Name | Value |
| ---- | ----- |
| errorType | ValidationError, AuthenticationError, AuthorizationError, ResourceNotFoundError, ServerError |


<a id="ErrorCode"></a>
## Enum: errorCode
| Name | Value |
| ---- | ----- |
| errorCode | MISSING_REQUIRED_FIELD, INVALID_ONEOF, INVALID_JSON, MISSING_AUTH_HEADER, INVALID_TOKEN, EXPIRED_TOKEN, INSUFFICIENT_PERMISSIONS, ACCOUNT_SUSPENDED, JOB_NOT_FOUND, RESOURCE_NOT_FOUND, INVALID_ENUM_VALUE, MUTUAL_EXCLUSION_VIOLATION, INVALID_FORMAT, SERVER_ERROR, DATABASE_ERROR, EXTERNAL_SERVICE_ERROR |



