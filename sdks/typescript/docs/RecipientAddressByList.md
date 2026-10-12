# RecipientAddressByList

Inline list of recipient addresses with an optional merge-field mapping ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mappingId** | **number** | Integer ID of a merge-field mapping profile that associates address columns to template variables. If omitted, the account default mapping is used. | [optional] [default to undefined]
**addressList** | [**Array&lt;Address&gt;**](Address.md) | List of recipient mailing addresses — used for batch sends and mail merge. | [default to undefined]
**addressListName** | **string** | Optional name for this address list record. | [optional] [default to undefined]

## Example

```typescript
import { RecipientAddressByList } from './api';

const instance: RecipientAddressByList = {
    mappingId,
    addressList,
    addressListName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
