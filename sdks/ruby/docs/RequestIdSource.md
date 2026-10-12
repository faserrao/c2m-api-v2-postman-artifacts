# OpenapiClient::RequestIdSource

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **request_id** | **Integer** | Integer ID of a prior file upload request. Also returned in success responses. |  |
| **filename** | **String** | Filename of a specific file within an upload request or ZIP archive. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::RequestIdSource.new(
  request_id: null,
  filename: null
)
```

