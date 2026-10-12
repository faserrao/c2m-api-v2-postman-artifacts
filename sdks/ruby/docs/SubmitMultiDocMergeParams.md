# OpenapiClient::SubmitMultiDocMergeParams

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **job_template** | **String** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] |
| **merge_document_source** | [**Array&lt;MergeDocumentRef&gt;**](MergeDocumentRef.md) | Ordered array of document references to merge into one output document. Minimum two entries required. |  |
| **recipient_address_source** | [**RecipientAddressSource**](RecipientAddressSource.md) |  |  |
| **payment_details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] |
| **return_address** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] |
| **job_options** | [**JobOptions**](JobOptions.md) |  | [optional] |
| **tags** | **Array&lt;String&gt;** | Array of user-defined string tags. | [optional] |

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

