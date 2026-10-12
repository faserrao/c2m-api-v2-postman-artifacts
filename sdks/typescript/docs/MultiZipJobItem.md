# MultiZipJobItem

A single ZIP file job entry: optional job template, filename within the ZIP, and recipient address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobTemplate** | **string** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] [default to undefined]
**filename** | **string** | Filename of a specific file within an upload request or ZIP archive. | [default to undefined]
**recipientAddressSource** | [**RecipientAddressSource**](RecipientAddressSource.md) |  | [default to undefined]

## Example

```typescript
import { MultiZipJobItem } from './api';

const instance: MultiZipJobItem = {
    jobTemplate,
    filename,
    recipientAddressSource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
