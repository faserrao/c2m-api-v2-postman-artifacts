

# MultiZipJobItem

A single ZIP file job entry: optional job template, filename within the ZIP, and recipient address.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**jobTemplate** | **String** | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |  [optional] |
|**filename** | **String** | Filename of a specific file within an upload request or ZIP archive. |  |
|**recipientAddressSource** | [**RecipientAddressSource**](RecipientAddressSource.md) |  |  |



