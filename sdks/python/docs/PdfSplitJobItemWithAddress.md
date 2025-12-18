# PdfSplitJobItemWithAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_page** | **int** |  | 
**end_page** | **int** |  | 
**recipient_address_source** | [**RecipientAddressSource**](RecipientAddressSource.md) |  | 

## Example

```python
from c2m_api.models.pdf_split_job_item_with_address import PdfSplitJobItemWithAddress

# TODO update the JSON string below
json = "{}"
# create an instance of PdfSplitJobItemWithAddress from a JSON string
pdf_split_job_item_with_address_instance = PdfSplitJobItemWithAddress.from_json(json)
# print the JSON string representation of the object
print(PdfSplitJobItemWithAddress.to_json())

# convert the object into a dict
pdf_split_job_item_with_address_dict = pdf_split_job_item_with_address_instance.to_dict()
# create an instance of PdfSplitJobItemWithAddress from a dict
pdf_split_job_item_with_address_from_dict = PdfSplitJobItemWithAddress.from_dict(pdf_split_job_item_with_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


