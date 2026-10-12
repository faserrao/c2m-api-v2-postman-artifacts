# C2M.Api.Model.PdfSplitJobItemNoAddress
A single page-range job entry: page range only (no address — used for address-capture endpoint).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartPage** | **int** | First page of this job&#39;s page range, 1-indexed (inclusive). | 
**EndPage** | **int** | Last page of this job&#39;s page range (inclusive). Must be &gt;&#x3D; startPage. | 
**JobTemplate** | **string** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

