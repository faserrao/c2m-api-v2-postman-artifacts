

# RecipientAddressByList

Inline list of recipient addresses with an optional merge-field mapping ID.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**mappingId** | **Integer** | Integer ID of a merge-field mapping profile that associates address columns to template variables. If omitted, the account default mapping is used. |  [optional] |
|**addressList** | [**List&lt;Address&gt;**](Address.md) | List of recipient mailing addresses — used for batch sends and mail merge. |  |
|**addressListName** | **String** | Optional name for this address list record. |  [optional] |



