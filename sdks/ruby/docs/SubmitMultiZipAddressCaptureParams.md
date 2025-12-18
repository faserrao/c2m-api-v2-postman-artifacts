# OpenapiClient::SubmitMultiZipAddressCaptureParams

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **job_template** | **String** |  | [optional] |
| **zip_document_source** | [**ZipDocumentSource**](ZipDocumentSource.md) |  |  |
| **payment_details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] |
| **return_address** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] |
| **job_options** | [**JobOptions**](JobOptions.md) |  | [optional] |
| **tags** | **Array&lt;String&gt;** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SubmitMultiZipAddressCaptureParams.new(
  job_template: null,
  zip_document_source: null,
  payment_details: null,
  return_address: null,
  job_options: null,
  tags: null
)
```

