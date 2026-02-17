# C2MApi\MostCommonApi

All URIs are relative to https://api.example.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**submitMultiDocMergeParams()**](MostCommonApi.md#submitMultiDocMergeParams) | **POST** /jobs/submit/multi/doc/merge | Submit a multi doc merge job |
| [**submitMultiDocParams()**](MostCommonApi.md#submitMultiDocParams) | **POST** /jobs/submit/multi/doc | Submit a multi doc job |
| [**submitSingleDocParams()**](MostCommonApi.md#submitSingleDocParams) | **POST** /jobs/submit/single/doc | Submit a single doc job |


## `submitMultiDocMergeParams()`

```php
submitMultiDocMergeParams($submit_multi_doc_merge_params): \C2MApi\Model\StandardResponse
```

Submit a multi doc merge job

Submits a multi doc merge mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = C2MApi\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new C2MApi\Api\MostCommonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$submit_multi_doc_merge_params = new \C2MApi\Model\SubmitMultiDocMergeParams(); // \C2MApi\Model\SubmitMultiDocMergeParams

try {
    $result = $apiInstance->submitMultiDocMergeParams($submit_multi_doc_merge_params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MostCommonApi->submitMultiDocMergeParams: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submit_multi_doc_merge_params** | [**\C2MApi\Model\SubmitMultiDocMergeParams**](../Model/SubmitMultiDocMergeParams.md)|  | |

### Return type

[**\C2MApi\Model\StandardResponse**](../Model/StandardResponse.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `submitMultiDocParams()`

```php
submitMultiDocParams($submit_multi_doc_params): \C2MApi\Model\StandardResponse
```

Submit a multi doc job

Submits a mailing job with multiple documents to be sent to recipients. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = C2MApi\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new C2MApi\Api\MostCommonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$submit_multi_doc_params = new \C2MApi\Model\SubmitMultiDocParams(); // \C2MApi\Model\SubmitMultiDocParams

try {
    $result = $apiInstance->submitMultiDocParams($submit_multi_doc_params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MostCommonApi->submitMultiDocParams: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submit_multi_doc_params** | [**\C2MApi\Model\SubmitMultiDocParams**](../Model/SubmitMultiDocParams.md)|  | |

### Return type

[**\C2MApi\Model\StandardResponse**](../Model/StandardResponse.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `submitSingleDocParams()`

```php
submitSingleDocParams($submit_single_doc_params): \C2MApi\Model\StandardResponse
```

Submit a single doc job

Submits a mailing job with a single document to be sent to one or more recipients. The request body contains job parameters including document source, recipient address information, and payment details.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = C2MApi\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new C2MApi\Api\MostCommonApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$submit_single_doc_params = new \C2MApi\Model\SubmitSingleDocParams(); // \C2MApi\Model\SubmitSingleDocParams

try {
    $result = $apiInstance->submitSingleDocParams($submit_single_doc_params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MostCommonApi->submitSingleDocParams: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submit_single_doc_params** | [**\C2MApi\Model\SubmitSingleDocParams**](../Model/SubmitSingleDocParams.md)|  | |

### Return type

[**\C2MApi\Model\StandardResponse**](../Model/StandardResponse.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
