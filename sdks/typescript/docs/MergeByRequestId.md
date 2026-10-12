# MergeByRequestId

Merge an uploaded document identified by its upload request ID, with an optional filename when the request contains multiple files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **number** | Integer ID of a prior file upload request. Also returned in success responses. | [default to undefined]
**filename** | **string** | Filename of a specific file within an upload request or ZIP archive. | [optional] [default to undefined]

## Example

```typescript
import { MergeByRequestId } from './api';

const instance: MergeByRequestId = {
    requestId,
    filename,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
