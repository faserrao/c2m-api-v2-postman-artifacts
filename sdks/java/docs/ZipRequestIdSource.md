

# ZipRequestIdSource

Source a specific file within an uploaded ZIP archive — requires the upload request ID, the zip filename within that request, and the target filename in the zip.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**requestId** | **Integer** | Integer ID of a prior file upload request. Also returned in success responses. |  |
|**zipFilename** | **String** | Filename of the ZIP file within an upload request (distinguishes the zip from other files uploaded in the same request). |  |
|**filename** | **String** | Filename of a specific file within an upload request or ZIP archive. |  |



