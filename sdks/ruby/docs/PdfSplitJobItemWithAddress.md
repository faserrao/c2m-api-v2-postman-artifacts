# OpenapiClient::PdfSplitJobItemWithAddress

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **job_template** | **String** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] |
| **start_page** | **Integer** | First page of this job&#39;s page range, 1-indexed (inclusive). |  |
| **end_page** | **Integer** | Last page of this job&#39;s page range (inclusive). Must be &gt;&#x3D; startPage. |  |
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

