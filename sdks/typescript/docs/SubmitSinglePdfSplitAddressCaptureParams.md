# SubmitSinglePdfSplitAddressCaptureParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobTemplate** | **string** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] [default to undefined]
**docSourceStandard** | [**DocSourceStandard**](DocSourceStandard.md) |  | [default to undefined]
**pdfSplitJobsNoAddress** | [**Array&lt;PdfSplitJobItemNoAddress&gt;**](PdfSplitJobItemNoAddress.md) | List of page-range job items without inline addresses — addresses are captured externally (POST /batch/split/address-capture). | [default to undefined]
**paymentDetails** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] [default to undefined]
**returnAddress** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] [default to undefined]
**jobOptions** | [**JobOptions**](JobOptions.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Array of user-defined string tags. | [optional] [default to undefined]

## Example

```typescript
import { SubmitSinglePdfSplitAddressCaptureParams } from './api';

const instance: SubmitSinglePdfSplitAddressCaptureParams = {
    jobTemplate,
    docSourceStandard,
    pdfSplitJobsNoAddress,
    paymentDetails,
    returnAddress,
    jobOptions,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
