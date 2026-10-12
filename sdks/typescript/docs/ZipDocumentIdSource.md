# ZipDocumentIdSource

Source a specific file within a stored ZIP archive — requires the archive ID and the filename of the target file within the archive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**zipDocumentId** | **number** | Integer ID of a previously stored ZIP archive. | [default to undefined]
**filename** | **string** | Filename of a specific file within an upload request or ZIP archive. | [default to undefined]

## Example

```typescript
import { ZipDocumentIdSource } from './api';

const instance: ZipDocumentIdSource = {
    zipDocumentId,
    filename,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
