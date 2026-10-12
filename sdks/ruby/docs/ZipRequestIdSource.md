# OpenapiClient::ZipRequestIdSource

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **request_id** | **Integer** | Integer ID of a prior file upload request. Also returned in success responses. |  |
| **zip_filename** | **String** | Filename of the ZIP file within an upload request (distinguishes the zip from other files uploaded in the same request). |  |
| **filename** | **String** | Filename of a specific file within an upload request or ZIP archive. |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ZipRequestIdSource.new(
  request_id: null,
  zip_filename: null,
  filename: null
)
```

