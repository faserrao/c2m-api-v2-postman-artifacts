# JobOptions

Explicit print and mail configuration options. Mutually exclusive with jobTemplate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentClass** | **string** | Document class determining the mailpiece format. | [default to undefined]
**layout** | **string** | Page layout controlling where the recipient address is printed. | [default to undefined]
**productionTime** | **string** | Production time preference (next_day, two_day, etc.). | [default to undefined]
**envelope** | **string** | Envelope type used for the mailing. | [default to undefined]
**color** | **string** | Color mode for printing (full_color or black_and_white). | [default to undefined]
**paperType** | **string** | Paper stock for printing. | [default to undefined]
**printOption** | **string** | Duplex setting (double_sided or single_sided). | [default to undefined]
**mailClass** | **string** | USPS mail class (first_class, standard, or non_profit). | [default to undefined]

## Example

```typescript
import { JobOptions } from './api';

const instance: JobOptions = {
    documentClass,
    layout,
    productionTime,
    envelope,
    color,
    paperType,
    printOption,
    mailClass,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
