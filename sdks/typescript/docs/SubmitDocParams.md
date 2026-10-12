# SubmitDocParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobTemplate** | **string** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] [default to undefined]
**docSourceAll** | [**DocSourceAll**](DocSourceAll.md) |  | [default to undefined]
**recipientAddressSource** | [**RecipientAddressSource**](RecipientAddressSource.md) |  | [default to undefined]
**paymentDetails** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] [default to undefined]
**returnAddress** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] [default to undefined]
**jobOptions** | [**JobOptions**](JobOptions.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Array of user-defined string tags. | [optional] [default to undefined]

## Example

```typescript
import { SubmitDocParams } from './api';

const instance: SubmitDocParams = {
    jobTemplate,
    docSourceAll,
    recipientAddressSource,
    paymentDetails,
    returnAddress,
    jobOptions,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
