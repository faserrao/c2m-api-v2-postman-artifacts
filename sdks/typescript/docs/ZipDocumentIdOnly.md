# ZipDocumentIdOnly

Reference to a stored ZIP archive without a file selection — used at the batch job top level where individual job items select their own filenames.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**zipDocumentId** | **number** | Integer ID of a previously stored ZIP archive. | [default to undefined]

## Example

```typescript
import { ZipDocumentIdOnly } from './api';

const instance: ZipDocumentIdOnly = {
    zipDocumentId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
