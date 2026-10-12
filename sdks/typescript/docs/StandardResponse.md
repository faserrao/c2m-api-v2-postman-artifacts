# StandardResponse

Success response returned for all successful job submissions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Job status string (e.g. \&quot;accepted\&quot;). | [default to undefined]
**message** | **string** | Human-readable confirmation message (e.g. \&quot;Your request has been queued\&quot;). | [default to undefined]
**requestId** | **number** | Integer ID of a prior file upload request. Also returned in success responses. | [default to undefined]

## Example

```typescript
import { StandardResponse } from './api';

const instance: StandardResponse = {
    status,
    message,
    requestId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
