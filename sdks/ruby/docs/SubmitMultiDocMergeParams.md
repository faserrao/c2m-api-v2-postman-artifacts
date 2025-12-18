# OpenapiClient::SubmitMultiDocMergeParams

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **job_template** | **String** |  | [optional] |
| **merge_document_source** | [**Array&lt;MergeDocumentRef&gt;**](MergeDocumentRef.md) |  |  |
| **recipient_address_source** | [**RecipientAddressSource**](RecipientAddressSource.md) |  |  |
| **payment_details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] |
| **return_address** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] |
| **job_options** | [**JobOptions**](JobOptions.md) |  | [optional] |
| **tags** | **Array&lt;String&gt;** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SubmitMultiDocMergeParams.new(
  job_template: null,
  merge_document_source: null,
  recipient_address_source: null,
  payment_details: null,
  return_address: null,
  job_options: null,
  tags: null
)
```

