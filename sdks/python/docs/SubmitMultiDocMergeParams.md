# SubmitMultiDocMergeParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_template** | **str** |  | [optional] 
**merge_document_source** | [**List[MergeDocumentRef]**](MergeDocumentRef.md) |  | 
**recipient_address_source** | [**RecipientAddressSource**](RecipientAddressSource.md) |  | 
**payment_details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] 
**return_address** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] 
**job_options** | [**JobOptions**](JobOptions.md) |  | [optional] 
**tags** | **List[str]** |  | [optional] 

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


