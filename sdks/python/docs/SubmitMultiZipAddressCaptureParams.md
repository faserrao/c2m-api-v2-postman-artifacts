# SubmitMultiZipAddressCaptureParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_template** | **str** |  | [optional] 
**zip_document_source** | [**ZipDocumentSource**](ZipDocumentSource.md) |  | 
**payment_details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] 
**return_address** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] 
**job_options** | [**JobOptions**](JobOptions.md) |  | [optional] 
**tags** | **List[str]** |  | [optional] 

## Example

```python
from c2m_api.models.submit_multi_zip_address_capture_params import SubmitMultiZipAddressCaptureParams

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitMultiZipAddressCaptureParams from a JSON string
submit_multi_zip_address_capture_params_instance = SubmitMultiZipAddressCaptureParams.from_json(json)
# print the JSON string representation of the object
print(SubmitMultiZipAddressCaptureParams.to_json())

# convert the object into a dict
submit_multi_zip_address_capture_params_dict = submit_multi_zip_address_capture_params_instance.to_dict()
# create an instance of SubmitMultiZipAddressCaptureParams from a dict
submit_multi_zip_address_capture_params_from_dict = SubmitMultiZipAddressCaptureParams.from_dict(submit_multi_zip_address_capture_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


