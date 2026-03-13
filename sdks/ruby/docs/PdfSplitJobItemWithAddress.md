# OpenapiClient::PdfSplitJobItemWithAddress

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **job_template** | **String** |  | [optional] |
| **start_page** | **Integer** |  |  |
| **end_page** | **Integer** |  |  |
| **recipient_address_source** | [**RecipientAddressSource**](RecipientAddressSource.md) |  |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PdfSplitJobItemWithAddress.new(
  job_template: null,
  start_page: null,
  end_page: null,
  recipient_address_source: null
)
```

