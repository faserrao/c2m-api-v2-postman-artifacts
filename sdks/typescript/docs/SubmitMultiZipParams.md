# SubmitMultiZipParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**docSourceZipFileRef** | [**DocSourceZipFileRef**](DocSourceZipFileRef.md) |  | [default to undefined]
**multiZipJobs** | [**Array&lt;MultiZipJobItem&gt;**](MultiZipJobItem.md) | List of per-file job items extracted from a ZIP archive (POST /batch/zip). | [default to undefined]
**paymentDetails** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Array of user-defined string tags. | [optional] [default to undefined]

## Example

```typescript
import { SubmitMultiZipParams } from './api';

const instance: SubmitMultiZipParams = {
    docSourceZipFileRef,
    multiZipJobs,
    paymentDetails,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
