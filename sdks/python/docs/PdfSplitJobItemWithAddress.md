# PdfSplitJobItemWithAddress

A single page-range job entry: page range (startPage, endPage) plus a recipient address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_template** | **str** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] 
**start_page** | **int** | First page of this job&#39;s page range, 1-indexed (inclusive). | 
**end_page** | **int** | Last page of this job&#39;s page range (inclusive). Must be &gt;&#x3D; startPage. | 
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


