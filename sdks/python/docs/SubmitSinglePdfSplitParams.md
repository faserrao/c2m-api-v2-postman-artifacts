# SubmitSinglePdfSplitParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_template** | **str** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] 
**doc_source_standard** | [**DocSourceStandard**](DocSourceStandard.md) |  | 
**pdf_split_jobs_with_address** | [**List[PdfSplitJobItemWithAddress]**](PdfSplitJobItemWithAddress.md) | List of page-range job items, each with its own inline recipient address. | 
**payment_details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] 
**return_address** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] 
**job_options** | [**JobOptions**](JobOptions.md) |  | [optional] 
**tags** | **List[str]** | Array of user-defined string tags. | [optional] 

## Example

```python
from c2m_api.models.submit_single_pdf_split_params import SubmitSinglePdfSplitParams

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitSinglePdfSplitParams from a JSON string
submit_single_pdf_split_params_instance = SubmitSinglePdfSplitParams.from_json(json)
# print the JSON string representation of the object
print(SubmitSinglePdfSplitParams.to_json())

# convert the object into a dict
submit_single_pdf_split_params_dict = submit_single_pdf_split_params_instance.to_dict()
# create an instance of SubmitSinglePdfSplitParams from a dict
submit_single_pdf_split_params_from_dict = SubmitSinglePdfSplitParams.from_dict(submit_single_pdf_split_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


