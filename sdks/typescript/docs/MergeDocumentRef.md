# MergeDocumentRef

A single document to include in the merge — either a stored document ID or an upload request ID (with optional filename).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mergeByDocumentId** | [**MergeByDocumentId**](MergeByDocumentId.md) |  | [default to undefined]
**mergeByRequestId** | [**MergeByRequestId**](MergeByRequestId.md) |  | [default to undefined]

## Example

```typescript
import { MergeDocumentRef } from './api';

const instance: MergeDocumentRef = {
    mergeByDocumentId,
    mergeByRequestId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
