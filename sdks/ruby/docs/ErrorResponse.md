# OpenapiClient::ErrorResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **error_type** | **String** | High-level error category string (ValidationError, AuthenticationError, etc.). |  |
| **error_message** | **String** | Human-readable error description. |  |
| **error_code** | **String** | Machine-readable error code string (e.g. MISSING_REQUIRED_FIELD). |  |
| **error_details** | **String** | Optional JSON object with additional error context (free-form key/value pairs). | [optional] |
| **error_tracking_id** | **String** | Optional support tracking identifier in the format TRK-YYYYMMDD-XXXXXX. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ErrorResponse.new(
  error_type: null,
  error_message: null,
  error_code: null,
  error_details: null,
  error_tracking_id: null
)
```

