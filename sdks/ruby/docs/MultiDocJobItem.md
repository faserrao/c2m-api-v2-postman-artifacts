# OpenapiClient::MultiDocJobItem

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **job_template** | **String** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] |
| **doc_source_all** | [**DocSourceAll**](DocSourceAll.md) |  |  |
| **recipient_address_source** | [**RecipientAddressSource**](RecipientAddressSource.md) |  |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::MultiDocJobItem.new(
  job_template: null,
  doc_source_all: null,
  recipient_address_source: null
)
```

