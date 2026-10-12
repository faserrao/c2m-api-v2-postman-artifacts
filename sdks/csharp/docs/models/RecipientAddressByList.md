# C2M.Api.Model.RecipientAddressByList
Inline list of recipient addresses with an optional merge-field mapping ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddressList** | [**List&lt;Address&gt;**](Address.md) | List of recipient mailing addresses — used for batch sends and mail merge. | 
**MappingId** | **int** | Integer ID of a merge-field mapping profile that associates address columns to template variables. If omitted, the account default mapping is used. | [optional] 
**AddressListName** | **string** | Optional name for this address list record. | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

