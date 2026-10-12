# DocSourceZipFile

Document source — zip variants: a specific file within a stored ZIP (zipDocumentId + filename) or uploaded ZIP (requestId + zipFilename + filename).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**zipDocumentIdSource** | [**ZipDocumentIdSource**](ZipDocumentIdSource.md) |  | [default to undefined]
**zipRequestIdSource** | [**ZipRequestIdSource**](ZipRequestIdSource.md) |  | [default to undefined]

## Example

```typescript
import { DocSourceZipFile } from './api';

const instance: DocSourceZipFile = {
    zipDocumentIdSource,
    zipRequestIdSource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
