# OpenapiClient::RecipientAddressByList

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **mapping_id** | **Integer** | Integer ID of a merge-field mapping profile that associates address columns to template variables. If omitted, the account default mapping is used. | [optional] |
| **address_list** | [**Array&lt;Address&gt;**](Address.md) | List of recipient mailing addresses — used for batch sends and mail merge. |  |
| **address_list_name** | **String** | Optional name for this address list record. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::RecipientAddressByList.new(
  mapping_id: null,
  address_list: null,
  address_list_name: null
)
```

