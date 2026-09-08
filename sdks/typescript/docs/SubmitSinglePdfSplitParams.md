# SubmitSinglePdfSplitParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobTemplate** | **string** |  | [optional] [default to undefined]
**docSourceStandard** | [**DocSourceStandard**](DocSourceStandard.md) |  | [default to undefined]
**pdfSplitJobsWithAddress** | [**Array&lt;PdfSplitJobItemWithAddress&gt;**](PdfSplitJobItemWithAddress.md) |  | [default to undefined]
**paymentDetails** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] [default to undefined]
**returnAddress** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] [default to undefined]
**jobOptions** | [**JobOptions**](JobOptions.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { SubmitSinglePdfSplitParams } from './api';

const instance: SubmitSinglePdfSplitParams = {
    jobTemplate,
    docSourceStandard,
    pdfSplitJobsWithAddress,
    paymentDetails,
    returnAddress,
    jobOptions,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
