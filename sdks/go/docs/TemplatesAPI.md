# \TemplatesAPI

All URIs are relative to *https://api.example.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SubmitMultiDocMergeParams**](TemplatesAPI.md#SubmitMultiDocMergeParams) | **Post** /jobs/submit/multi/doc/merge | Submit a multi doc merge job
[**SubmitMultiDocParams**](TemplatesAPI.md#SubmitMultiDocParams) | **Post** /jobs/submit/multi/doc | Submit a multi doc job
[**SubmitSingleDocParams**](TemplatesAPI.md#SubmitSingleDocParams) | **Post** /jobs/submit/single/doc | Submit a single doc job



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
	submitMultiDocMergeParams := *openapiclient.NewSubmitMultiDocMergeParams([]openapiclient.MergeDocumentRef{openapiclient.mergeDocumentRef{MergeByRequestId: openapiclient.NewMergeByRequestId(int32(123))}}, openapiclient.recipientAddressSource{RecipientAddressSourceOneOf: openapiclient.NewRecipientAddressSourceOneOf(int32(123))}) // SubmitMultiDocMergeParams | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TemplatesAPI.SubmitMultiDocMergeParams(context.Background()).SubmitMultiDocMergeParams(submitMultiDocMergeParams).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TemplatesAPI.SubmitMultiDocMergeParams``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitMultiDocMergeParams`: StandardResponse
	fmt.Fprintf(os.Stdout, "Response from `TemplatesAPI.SubmitMultiDocMergeParams`: %v\n", resp)
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
	submitMultiDocParams := *openapiclient.NewSubmitMultiDocParams([]openapiclient.MultiDocJobItem{*openapiclient.NewMultiDocJobItem(openapiclient.docSourceAll{DocSourceStandard: openapiclient.docSourceStandard{RequestIdSource: openapiclient.NewRequestIdSource(int32(123))}}, openapiclient.recipientAddressSource{RecipientAddressSourceOneOf: openapiclient.NewRecipientAddressSourceOneOf(int32(123))})}) // SubmitMultiDocParams | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TemplatesAPI.SubmitMultiDocParams(context.Background()).SubmitMultiDocParams(submitMultiDocParams).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TemplatesAPI.SubmitMultiDocParams``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitMultiDocParams`: StandardResponse
	fmt.Fprintf(os.Stdout, "Response from `TemplatesAPI.SubmitMultiDocParams`: %v\n", resp)
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
	submitSingleDocParams := *openapiclient.NewSubmitSingleDocParams(openapiclient.docSourceAll{DocSourceStandard: openapiclient.docSourceStandard{RequestIdSource: openapiclient.NewRequestIdSource(int32(123))}}, openapiclient.recipientAddressSource{RecipientAddressSourceOneOf: openapiclient.NewRecipientAddressSourceOneOf(int32(123))}) // SubmitSingleDocParams | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TemplatesAPI.SubmitSingleDocParams(context.Background()).SubmitSingleDocParams(submitSingleDocParams).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TemplatesAPI.SubmitSingleDocParams``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitSingleDocParams`: StandardResponse
	fmt.Fprintf(os.Stdout, "Response from `TemplatesAPI.SubmitSingleDocParams`: %v\n", resp)
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

