# PdfSplitJobItemWithAddress

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_template** | Option<**String**> | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional]
**start_page** | **i32** | First page of this job's page range, 1-indexed (inclusive). | 
**end_page** | **i32** | Last page of this job's page range (inclusive). Must be >= startPage. | 
**recipient_address_source** | [**models::RecipientAddressSource**](recipientAddressSource.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


