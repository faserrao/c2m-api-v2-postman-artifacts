# SubmitMultiDocMergeParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_template** | **str** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] 
**merge_document_source** | [**List[MergeDocumentRef]**](MergeDocumentRef.md) | Ordered array of document references to merge into one output document. Minimum two entries required. | 
**recipient_address_source** | [**RecipientAddressSource**](RecipientAddressSource.md) |  | 
**payment_details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] 
**return_address** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] 
**job_options** | [**JobOptions**](JobOptions.md) |  | [optional] 
**tags** | **List[str]** | Array of user-defined string tags. | [optional] 

## Example

```python
from c2m_api.models.submit_multi_doc_merge_params import SubmitMultiDocMergeParams

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitMultiDocMergeParams from a JSON string
submit_multi_doc_merge_params_instance = SubmitMultiDocMergeParams.from_json(json)
# print the JSON string representation of the object
print(SubmitMultiDocMergeParams.to_json())

# convert the object into a dict
submit_multi_doc_merge_params_dict = submit_multi_doc_merge_params_instance.to_dict()
# create an instance of SubmitMultiDocMergeParams from a dict
submit_multi_doc_merge_params_from_dict = SubmitMultiDocMergeParams.from_dict(submit_multi_doc_merge_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


