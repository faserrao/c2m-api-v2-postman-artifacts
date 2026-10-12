# C2M.Api.Model.ZipRequestIdSource
Source a specific file within an uploaded ZIP archive — requires the upload request ID, the zip filename within that request, and the target filename in the zip.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **int** | Integer ID of a prior file upload request. Also returned in success responses. | 
**ZipFilename** | **string** | Filename of the ZIP file within an upload request (distinguishes the zip from other files uploaded in the same request). | 
**Filename** | **string** | Filename of a specific file within an upload request or ZIP archive. | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

