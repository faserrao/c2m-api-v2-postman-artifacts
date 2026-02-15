# OpenapiClient::ErrorResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **error_type** | **String** |  |  |
| **error_message** | **String** |  |  |
| **error_code** | **String** |  |  |
| **error_details** | **String** |  | [optional] |
| **error_tracking_id** | **String** |  | [optional] |

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

