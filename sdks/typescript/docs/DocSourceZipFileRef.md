# DocSourceZipFileRef

Top-level ZIP archive reference for batch endpoints — identifies the archive itself, not a file within it. No filename is required at this level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**zipDocumentIdOnly** | [**ZipDocumentIdOnly**](ZipDocumentIdOnly.md) |  | [default to undefined]
**zipRequestIdOnly** | [**ZipRequestIdOnly**](ZipRequestIdOnly.md) |  | [default to undefined]

## Example

```typescript
import { DocSourceZipFileRef } from './api';

const instance: DocSourceZipFileRef = {
    zipDocumentIdOnly,
    zipRequestIdOnly,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
