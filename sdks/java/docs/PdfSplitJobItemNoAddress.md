

# PdfSplitJobItemNoAddress

A single page-range job entry: page range only (no address — used for address-capture endpoint).

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**jobTemplate** | **String** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |  [optional] |
|**startPage** | **Integer** | First page of this job&#39;s page range, 1-indexed (inclusive). |  |
|**endPage** | **Integer** | Last page of this job&#39;s page range (inclusive). Must be &gt;&#x3D; startPage. |  |



