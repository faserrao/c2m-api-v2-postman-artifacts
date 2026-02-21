# SubmitSingleDocParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobTemplate** | **string** |  | [optional] [default to undefined]
**docSourceAll** | [**DocSourceAll**](DocSourceAll.md) |  | [default to undefined]
**recipientAddressSource** | [**RecipientAddressSource**](RecipientAddressSource.md) |  | [default to undefined]
**paymentDetails** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] [default to undefined]
**priority** | **string** |  | [optional] [default to undefined]
**returnAddress** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] [default to undefined]
**jobOptions** | [**JobOptions**](JobOptions.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { SubmitSingleDocParams } from './api';

const instance: SubmitSingleDocParams = {
    jobTemplate,
    docSourceAll,
    recipientAddressSource,
    paymentDetails,
    priority,
    returnAddress,
    jobOptions,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
