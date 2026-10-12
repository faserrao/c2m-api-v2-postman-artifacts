# ZipRequestIdOnly

Reference to an uploaded ZIP archive by request ID only — used at the batch top level; individual job items carry the filename selection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **number** | Integer ID of a prior file upload request. Also returned in success responses. | [default to undefined]

## Example

```typescript
import { ZipRequestIdOnly } from './api';

const instance: ZipRequestIdOnly = {
    requestId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
