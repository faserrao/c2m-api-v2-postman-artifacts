

# SubmitMultiDocMergeParams


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**jobTemplate** | **String** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |  [optional] |
|**mergeDocumentSource** | [**List&lt;MergeDocumentRef&gt;**](MergeDocumentRef.md) | Ordered array of document references to merge into one output document. Minimum two entries required. |  |
|**recipientAddressSource** | [**RecipientAddressSource**](RecipientAddressSource.md) |  |  |
|**paymentDetails** | [**PaymentDetails**](PaymentDetails.md) |  |  [optional] |
|**returnAddress** | [**ReturnAddress**](ReturnAddress.md) |  |  [optional] |
|**jobOptions** | [**JobOptions**](JobOptions.md) |  |  [optional] |
|**tags** | **List&lt;String&gt;** | Array of user-defined string tags. |  [optional] |



