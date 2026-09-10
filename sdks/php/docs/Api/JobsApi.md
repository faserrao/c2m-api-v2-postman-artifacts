# C2MApi\JobsApi

All URIs are relative to https://api.click2mail.com/v2, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**submitMultiDocMergeParams()**](JobsApi.md#submitMultiDocMergeParams) | **POST** /mail-merge | Submit mail merge |
| [**submitMultiDocParams()**](JobsApi.md#submitMultiDocParams) | **POST** /static/multi | Submit multiple documents |
| [**submitMultiZipAddressCaptureParams()**](JobsApi.md#submitMultiZipAddressCaptureParams) | **POST** /batch/zip/address-capture | Submit ZIP batch — address capture |
| [**submitMultiZipParams()**](JobsApi.md#submitMultiZipParams) | **POST** /batch/zip | Submit ZIP batch |
| [**submitSingleDocParams()**](JobsApi.md#submitSingleDocParams) | **POST** /static | Submit single document |
| [**submitSinglePdfAddressCaptureParams()**](JobsApi.md#submitSinglePdfAddressCaptureParams) | **POST** /static/address-capture | Submit single document — address capture |
| [**submitSinglePdfSplitAddressCaptureParams()**](JobsApi.md#submitSinglePdfSplitAddressCaptureParams) | **POST** /batch/split/address-capture | Submit PDF split — address capture |
| [**submitSinglePdfSplitParams()**](JobsApi.md#submitSinglePdfSplitParams) | **POST** /batch/split | Submit PDF split |


## `submitMultiDocMergeParams()`

```php
submitMultiDocMergeParams($submit_multi_doc_merge_params): \C2MApi\Model\StandardResponse
```

Submit mail merge

Merges multiple documents into a single mailing sent to one recipient. Useful for creating document packets or multi-page letters.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = C2MApi\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new C2MApi\Api\JobsApi(
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
    echo 'Exception when calling JobsApi->submitMultiDocMergeParams: ', $e->getMessage(), PHP_EOL;
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

Submit multiple documents

Submits a batch of independent mailing jobs in a single request. Each job specifies its own document source and recipient address.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = C2MApi\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new C2MApi\Api\JobsApi(
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
    echo 'Exception when calling JobsApi->submitMultiDocParams: ', $e->getMessage(), PHP_EOL;
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

## `submitMultiZipAddressCaptureParams()`

```php
submitMultiZipAddressCaptureParams($submit_multi_zip_address_capture_params): \C2MApi\Model\StandardResponse
```

Submit ZIP batch — address capture

Submits a ZIP-based mailing batch where recipient addresses are captured externally. No inline recipient addresses are required.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = C2MApi\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new C2MApi\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$submit_multi_zip_address_capture_params = new \C2MApi\Model\SubmitMultiZipAddressCaptureParams(); // \C2MApi\Model\SubmitMultiZipAddressCaptureParams

try {
    $result = $apiInstance->submitMultiZipAddressCaptureParams($submit_multi_zip_address_capture_params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->submitMultiZipAddressCaptureParams: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submit_multi_zip_address_capture_params** | [**\C2MApi\Model\SubmitMultiZipAddressCaptureParams**](../Model/SubmitMultiZipAddressCaptureParams.md)|  | |

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

## `submitMultiZipParams()`

```php
submitMultiZipParams($submit_multi_zip_params): \C2MApi\Model\StandardResponse
```

Submit ZIP batch

Submits multiple mailing jobs sourced from files inside a single ZIP archive. Each job item specifies which file within the ZIP and the recipient address.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = C2MApi\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new C2MApi\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$submit_multi_zip_params = new \C2MApi\Model\SubmitMultiZipParams(); // \C2MApi\Model\SubmitMultiZipParams

try {
    $result = $apiInstance->submitMultiZipParams($submit_multi_zip_params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->submitMultiZipParams: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submit_multi_zip_params** | [**\C2MApi\Model\SubmitMultiZipParams**](../Model/SubmitMultiZipParams.md)|  | |

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

Submit single document

Submits a mailing job for a single document to one or more recipients. The request body must include a document source, recipient address information, and payment details.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = C2MApi\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new C2MApi\Api\JobsApi(
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
    echo 'Exception when calling JobsApi->submitSingleDocParams: ', $e->getMessage(), PHP_EOL;
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

## `submitSinglePdfAddressCaptureParams()`

```php
submitSinglePdfAddressCaptureParams($submit_single_pdf_address_capture_params): \C2MApi\Model\StandardResponse
```

Submit single document — address capture

Submits a mailing job for a single PDF where recipient addresses are captured from the document via OCR. No inline recipient address is required.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = C2MApi\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new C2MApi\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$submit_single_pdf_address_capture_params = new \C2MApi\Model\SubmitSinglePdfAddressCaptureParams(); // \C2MApi\Model\SubmitSinglePdfAddressCaptureParams

try {
    $result = $apiInstance->submitSinglePdfAddressCaptureParams($submit_single_pdf_address_capture_params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->submitSinglePdfAddressCaptureParams: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submit_single_pdf_address_capture_params** | [**\C2MApi\Model\SubmitSinglePdfAddressCaptureParams**](../Model/SubmitSinglePdfAddressCaptureParams.md)|  | |

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

## `submitSinglePdfSplitAddressCaptureParams()`

```php
submitSinglePdfSplitAddressCaptureParams($submit_single_pdf_split_address_capture_params): \C2MApi\Model\StandardResponse
```

Submit PDF split — address capture

Splits a single PDF into page ranges where recipient addresses are captured from the PDF. No inline recipient addresses are required.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = C2MApi\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new C2MApi\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$submit_single_pdf_split_address_capture_params = new \C2MApi\Model\SubmitSinglePdfSplitAddressCaptureParams(); // \C2MApi\Model\SubmitSinglePdfSplitAddressCaptureParams

try {
    $result = $apiInstance->submitSinglePdfSplitAddressCaptureParams($submit_single_pdf_split_address_capture_params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->submitSinglePdfSplitAddressCaptureParams: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submit_single_pdf_split_address_capture_params** | [**\C2MApi\Model\SubmitSinglePdfSplitAddressCaptureParams**](../Model/SubmitSinglePdfSplitAddressCaptureParams.md)|  | |

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

## `submitSinglePdfSplitParams()`

```php
submitSinglePdfSplitParams($submit_single_pdf_split_params): \C2MApi\Model\StandardResponse
```

Submit PDF split

Splits a single PDF into page ranges and mails each range to a different recipient. Each job item specifies page range and recipient address.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = C2MApi\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new C2MApi\Api\JobsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$submit_single_pdf_split_params = new \C2MApi\Model\SubmitSinglePdfSplitParams(); // \C2MApi\Model\SubmitSinglePdfSplitParams

try {
    $result = $apiInstance->submitSinglePdfSplitParams($submit_single_pdf_split_params);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling JobsApi->submitSinglePdfSplitParams: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **submit_single_pdf_split_params** | [**\C2MApi\Model\SubmitSinglePdfSplitParams**](../Model/SubmitSinglePdfSplitParams.md)|  | |

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
