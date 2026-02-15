

# ErrorResponse


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**errorType** | [**ErrorTypeEnum**](#ErrorTypeEnum) |  |  |
|**errorMessage** | **String** |  |  |
|**errorCode** | [**ErrorCodeEnum**](#ErrorCodeEnum) |  |  |
|**errorDetails** | **String** |  |  [optional] |
|**errorTrackingId** | **String** |  |  [optional] |



## Enum: ErrorTypeEnum

| Name | Value |
|---- | -----|
| VALIDATION_ERROR | &quot;ValidationError&quot; |
| AUTHENTICATION_ERROR | &quot;AuthenticationError&quot; |
| AUTHORIZATION_ERROR | &quot;AuthorizationError&quot; |
| RESOURCE_NOT_FOUND_ERROR | &quot;ResourceNotFoundError&quot; |
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



