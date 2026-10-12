# RequestIdSource

Source a document from a prior file upload by request ID. If the upload request contained multiple files, filename is required to identify which one.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **number** | Integer ID of a prior file upload request. Also returned in success responses. | [default to undefined]
**filename** | **string** | Filename of a specific file within an upload request or ZIP archive. | [optional] [default to undefined]

## Example

```typescript
import { RequestIdSource } from './api';

const instance: RequestIdSource = {
    requestId,
    filename,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
