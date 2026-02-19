# \JobsAPI

All URIs are relative to *https://api.click2mail.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SubmitMultiDocMergeParams**](JobsAPI.md#SubmitMultiDocMergeParams) | **Post** /jobs/submit/multi/doc/merge | Submit a multi doc merge job
[**SubmitMultiDocParams**](JobsAPI.md#SubmitMultiDocParams) | **Post** /jobs/submit/multi/doc | Submit a multi doc job
[**SubmitMultiZipAddressCaptureParams**](JobsAPI.md#SubmitMultiZipAddressCaptureParams) | **Post** /jobs/submit/multi/zip/addressCapture | Submit a multi zip addressCapture job
[**SubmitMultiZipParams**](JobsAPI.md#SubmitMultiZipParams) | **Post** /jobs/submit/multi/zip | Submit a multi zip job
[**SubmitSingleDocParams**](JobsAPI.md#SubmitSingleDocParams) | **Post** /jobs/submit/single/doc | Submit a single doc job
[**SubmitSinglePdfAddressCaptureParams**](JobsAPI.md#SubmitSinglePdfAddressCaptureParams) | **Post** /jobs/submit/single/pdf/addressCapture | Submit a single pdf addressCapture job
[**SubmitSinglePdfSplitAddressCaptureParams**](JobsAPI.md#SubmitSinglePdfSplitAddressCaptureParams) | **Post** /jobs/submit/single/pdf/split/addressCapture | Submit a single pdf split addressCapture job
[**SubmitSinglePdfSplitParams**](JobsAPI.md#SubmitSinglePdfSplitParams) | **Post** /jobs/submit/single/pdf/split | Submit a single pdf split job



## SubmitMultiDocMergeParams

> StandardResponse SubmitMultiDocMergeParams(ctx).SubmitMultiDocMergeParams(submitMultiDocMergeParams).Execute()

Submit a multi doc merge job



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	submitMultiDocMergeParams := *openapiclient.NewSubmitMultiDocMergeParams([]openapiclient.MergeDocumentRef{openapiclient.mergeDocumentRef{MergeByRequestId: openapiclient.NewMergeByRequestId(int32(123))}}, openapiclient.recipientAddressSource{RecipientAddressByList: openapiclient.NewRecipientAddressByList([]openapiclient.Address{*openapiclient.NewAddress("FirstName_example", "LastName_example", "Address1_example", "City_example", "State_example", "Zip_example", "Country_example")})}) // SubmitMultiDocMergeParams | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.JobsAPI.SubmitMultiDocMergeParams(context.Background()).SubmitMultiDocMergeParams(submitMultiDocMergeParams).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `JobsAPI.SubmitMultiDocMergeParams``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitMultiDocMergeParams`: StandardResponse
	fmt.Fprintf(os.Stdout, "Response from `JobsAPI.SubmitMultiDocMergeParams`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitMultiDocMergeParamsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitMultiDocMergeParams** | [**SubmitMultiDocMergeParams**](SubmitMultiDocMergeParams.md) |  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubmitMultiDocParams

> StandardResponse SubmitMultiDocParams(ctx).SubmitMultiDocParams(submitMultiDocParams).Execute()

Submit a multi doc job



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	submitMultiDocParams := *openapiclient.NewSubmitMultiDocParams([]openapiclient.MultiDocJobItem{*openapiclient.NewMultiDocJobItem(openapiclient.docSourceAll{DocSourceStandard: openapiclient.docSourceStandard{RequestIdSource: openapiclient.NewRequestIdSource(int32(123))}}, openapiclient.recipientAddressSource{RecipientAddressByList: openapiclient.NewRecipientAddressByList([]openapiclient.Address{*openapiclient.NewAddress("FirstName_example", "LastName_example", "Address1_example", "City_example", "State_example", "Zip_example", "Country_example")})})}) // SubmitMultiDocParams | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.JobsAPI.SubmitMultiDocParams(context.Background()).SubmitMultiDocParams(submitMultiDocParams).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `JobsAPI.SubmitMultiDocParams``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitMultiDocParams`: StandardResponse
	fmt.Fprintf(os.Stdout, "Response from `JobsAPI.SubmitMultiDocParams`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitMultiDocParamsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitMultiDocParams** | [**SubmitMultiDocParams**](SubmitMultiDocParams.md) |  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubmitMultiZipAddressCaptureParams

> StandardResponse SubmitMultiZipAddressCaptureParams(ctx).SubmitMultiZipAddressCaptureParams(submitMultiZipAddressCaptureParams).Execute()

Submit a multi zip addressCapture job



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	submitMultiZipAddressCaptureParams := *openapiclient.NewSubmitMultiZipAddressCaptureParams(openapiclient.zipDocumentSource{ZipDocumentIdSource: openapiclient.NewZipDocumentIdSource(int32(123), "Filename_example")}) // SubmitMultiZipAddressCaptureParams | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.JobsAPI.SubmitMultiZipAddressCaptureParams(context.Background()).SubmitMultiZipAddressCaptureParams(submitMultiZipAddressCaptureParams).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `JobsAPI.SubmitMultiZipAddressCaptureParams``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitMultiZipAddressCaptureParams`: StandardResponse
	fmt.Fprintf(os.Stdout, "Response from `JobsAPI.SubmitMultiZipAddressCaptureParams`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitMultiZipAddressCaptureParamsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitMultiZipAddressCaptureParams** | [**SubmitMultiZipAddressCaptureParams**](SubmitMultiZipAddressCaptureParams.md) |  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubmitMultiZipParams

> StandardResponse SubmitMultiZipParams(ctx).SubmitMultiZipParams(submitMultiZipParams).Execute()

Submit a multi zip job



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	submitMultiZipParams := *openapiclient.NewSubmitMultiZipParams([]openapiclient.MultiZipJobItem{*openapiclient.NewMultiZipJobItem(openapiclient.docSourceZipFile{ZipDocumentIdSource: openapiclient.NewZipDocumentIdSource(int32(123), "Filename_example")}, openapiclient.recipientAddressSource{RecipientAddressByList: openapiclient.NewRecipientAddressByList([]openapiclient.Address{*openapiclient.NewAddress("FirstName_example", "LastName_example", "Address1_example", "City_example", "State_example", "Zip_example", "Country_example")})})}) // SubmitMultiZipParams | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.JobsAPI.SubmitMultiZipParams(context.Background()).SubmitMultiZipParams(submitMultiZipParams).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `JobsAPI.SubmitMultiZipParams``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitMultiZipParams`: StandardResponse
	fmt.Fprintf(os.Stdout, "Response from `JobsAPI.SubmitMultiZipParams`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitMultiZipParamsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitMultiZipParams** | [**SubmitMultiZipParams**](SubmitMultiZipParams.md) |  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubmitSingleDocParams

> StandardResponse SubmitSingleDocParams(ctx).SubmitSingleDocParams(submitSingleDocParams).Execute()

Submit a single doc job



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	submitSingleDocParams := *openapiclient.NewSubmitSingleDocParams(openapiclient.docSourceAll{DocSourceStandard: openapiclient.docSourceStandard{RequestIdSource: openapiclient.NewRequestIdSource(int32(123))}}, openapiclient.recipientAddressSource{RecipientAddressByList: openapiclient.NewRecipientAddressByList([]openapiclient.Address{*openapiclient.NewAddress("FirstName_example", "LastName_example", "Address1_example", "City_example", "State_example", "Zip_example", "Country_example")})}) // SubmitSingleDocParams | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.JobsAPI.SubmitSingleDocParams(context.Background()).SubmitSingleDocParams(submitSingleDocParams).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `JobsAPI.SubmitSingleDocParams``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitSingleDocParams`: StandardResponse
	fmt.Fprintf(os.Stdout, "Response from `JobsAPI.SubmitSingleDocParams`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitSingleDocParamsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitSingleDocParams** | [**SubmitSingleDocParams**](SubmitSingleDocParams.md) |  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubmitSinglePdfAddressCaptureParams

> StandardResponse SubmitSinglePdfAddressCaptureParams(ctx).SubmitSinglePdfAddressCaptureParams(submitSinglePdfAddressCaptureParams).Execute()

Submit a single pdf addressCapture job



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	submitSinglePdfAddressCaptureParams := *openapiclient.NewSubmitSinglePdfAddressCaptureParams(openapiclient.docSourceStandard{RequestIdSource: openapiclient.NewRequestIdSource(int32(123))}) // SubmitSinglePdfAddressCaptureParams | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.JobsAPI.SubmitSinglePdfAddressCaptureParams(context.Background()).SubmitSinglePdfAddressCaptureParams(submitSinglePdfAddressCaptureParams).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `JobsAPI.SubmitSinglePdfAddressCaptureParams``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitSinglePdfAddressCaptureParams`: StandardResponse
	fmt.Fprintf(os.Stdout, "Response from `JobsAPI.SubmitSinglePdfAddressCaptureParams`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitSinglePdfAddressCaptureParamsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitSinglePdfAddressCaptureParams** | [**SubmitSinglePdfAddressCaptureParams**](SubmitSinglePdfAddressCaptureParams.md) |  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubmitSinglePdfSplitAddressCaptureParams

> StandardResponse SubmitSinglePdfSplitAddressCaptureParams(ctx).SubmitSinglePdfSplitAddressCaptureParams(submitSinglePdfSplitAddressCaptureParams).Execute()

Submit a single pdf split addressCapture job



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	submitSinglePdfSplitAddressCaptureParams := *openapiclient.NewSubmitSinglePdfSplitAddressCaptureParams(openapiclient.docSourceStandard{RequestIdSource: openapiclient.NewRequestIdSource(int32(123))}, []openapiclient.PdfSplitJobItemNoAddress{*openapiclient.NewPdfSplitJobItemNoAddress(int32(123), int32(123))}) // SubmitSinglePdfSplitAddressCaptureParams | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.JobsAPI.SubmitSinglePdfSplitAddressCaptureParams(context.Background()).SubmitSinglePdfSplitAddressCaptureParams(submitSinglePdfSplitAddressCaptureParams).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `JobsAPI.SubmitSinglePdfSplitAddressCaptureParams``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitSinglePdfSplitAddressCaptureParams`: StandardResponse
	fmt.Fprintf(os.Stdout, "Response from `JobsAPI.SubmitSinglePdfSplitAddressCaptureParams`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitSinglePdfSplitAddressCaptureParamsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitSinglePdfSplitAddressCaptureParams** | [**SubmitSinglePdfSplitAddressCaptureParams**](SubmitSinglePdfSplitAddressCaptureParams.md) |  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubmitSinglePdfSplitParams

> StandardResponse SubmitSinglePdfSplitParams(ctx).SubmitSinglePdfSplitParams(submitSinglePdfSplitParams).Execute()

Submit a single pdf split job



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	submitSinglePdfSplitParams := *openapiclient.NewSubmitSinglePdfSplitParams(openapiclient.docSourceStandard{RequestIdSource: openapiclient.NewRequestIdSource(int32(123))}, []openapiclient.PdfSplitJobItemWithAddress{*openapiclient.NewPdfSplitJobItemWithAddress(int32(123), int32(123), openapiclient.recipientAddressSource{RecipientAddressByList: openapiclient.NewRecipientAddressByList([]openapiclient.Address{*openapiclient.NewAddress("FirstName_example", "LastName_example", "Address1_example", "City_example", "State_example", "Zip_example", "Country_example")})})}) // SubmitSinglePdfSplitParams | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.JobsAPI.SubmitSinglePdfSplitParams(context.Background()).SubmitSinglePdfSplitParams(submitSinglePdfSplitParams).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `JobsAPI.SubmitSinglePdfSplitParams``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitSinglePdfSplitParams`: StandardResponse
	fmt.Fprintf(os.Stdout, "Response from `JobsAPI.SubmitSinglePdfSplitParams`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitSinglePdfSplitParamsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitSinglePdfSplitParams** | [**SubmitSinglePdfSplitParams**](SubmitSinglePdfSplitParams.md) |  | 

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

