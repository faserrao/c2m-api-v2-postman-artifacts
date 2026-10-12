# ZipRequestIdSource

Source a specific file within an uploaded ZIP archive — requires the upload request ID, the zip filename within that request, and the target filename in the zip.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **number** | Integer ID of a prior file upload request. Also returned in success responses. | [default to undefined]
**zipFilename** | **string** | Filename of the ZIP file within an upload request (distinguishes the zip from other files uploaded in the same request). | [default to undefined]
**filename** | **string** | Filename of a specific file within an upload request or ZIP archive. | [default to undefined]

## Example

```typescript
import { ZipRequestIdSource } from './api';

const instance: ZipRequestIdSource = {
    requestId,
    zipFilename,
    filename,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
