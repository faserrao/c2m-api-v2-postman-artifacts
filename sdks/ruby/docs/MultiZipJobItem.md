# OpenapiClient::MultiZipJobItem

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **job_template** | **String** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] |
| **filename** | **String** | Filename of a specific file within an upload request or ZIP archive. |  |
| **recipient_address_source** | [**RecipientAddressSource**](RecipientAddressSource.md) |  |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::MultiZipJobItem.new(
  job_template: null,
  filename: null,
  recipient_address_source: null
)
```

