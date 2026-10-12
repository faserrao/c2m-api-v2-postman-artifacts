# OpenapiClient::StandardResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** | Job status string (e.g. \&quot;accepted\&quot;). |  |
| **message** | **String** | Human-readable confirmation message (e.g. \&quot;Your request has been queued\&quot;). |  |
| **request_id** | **Integer** | Integer ID of a prior file upload request. Also returned in success responses. |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::StandardResponse.new(
  status: null,
  message: null,
  request_id: null
)
```

