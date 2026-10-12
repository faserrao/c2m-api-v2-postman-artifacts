# PdfSplitJobItemNoAddress

A single page-range job entry: page range only (no address — used for address-capture endpoint).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobTemplate** | **string** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] [default to undefined]
**startPage** | **number** | First page of this job\&#39;s page range, 1-indexed (inclusive). | [default to undefined]
**endPage** | **number** | Last page of this job\&#39;s page range (inclusive). Must be &gt;&#x3D; startPage. | [default to undefined]

## Example

```typescript
import { PdfSplitJobItemNoAddress } from './api';

const instance: PdfSplitJobItemNoAddress = {
    jobTemplate,
    startPage,
    endPage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
