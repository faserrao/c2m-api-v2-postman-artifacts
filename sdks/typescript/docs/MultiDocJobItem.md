# MultiDocJobItem

A single independent document job entry within a multi-doc batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobTemplate** | **string** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] [default to undefined]
**docSourceAll** | [**DocSourceAll**](DocSourceAll.md) |  | [default to undefined]
**recipientAddressSource** | [**RecipientAddressSource**](RecipientAddressSource.md) |  | [default to undefined]

## Example

```typescript
import { MultiDocJobItem } from './api';

const instance: MultiDocJobItem = {
    jobTemplate,
    docSourceAll,
    recipientAddressSource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
