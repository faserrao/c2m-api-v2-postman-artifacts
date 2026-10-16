# RecipientAddressSource

Recipient address specification — one of: inline address list of one or more recipients (with optional mapping), stored list ID, or stored address ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipientAddressByList** | [**RecipientAddressByList**](RecipientAddressByList.md) |  | [default to undefined]
**recipientAddressByAddressId** | [**RecipientAddressByAddressId**](RecipientAddressByAddressId.md) |  | [default to undefined]
**recipientAddressByListId** | [**RecipientAddressByListId**](RecipientAddressByListId.md) |  | [default to undefined]

## Example

```typescript
import { RecipientAddressSource } from './api';

const instance: RecipientAddressSource = {
    recipientAddressByList,
    recipientAddressByAddressId,
    recipientAddressByListId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
