# OpenapiClient::MultiZipJobItem

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **job_template** | **String** |  | [optional] |
| **doc_source_zip_file** | [**DocSourceZipFile**](DocSourceZipFile.md) |  |  |
| **recipient_address_source** | [**RecipientAddressSource**](RecipientAddressSource.md) |  |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::MultiZipJobItem.new(
  job_template: null,
  doc_source_zip_file: null,
  recipient_address_source: null
)
```

