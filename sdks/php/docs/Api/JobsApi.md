# C2MApi\JobsApi

All URIs are relative to https://api.click2mail.com/v2, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**submitMultiDocMergeParams()**](JobsApi.md#submitMultiDocMergeParams) | **POST** /mail-merge | Submitmultidocmergeparams |
| [**submitMultiDocParams()**](JobsApi.md#submitMultiDocParams) | **POST** /static/multi | Submitmultidocparams |
| [**submitMultiZipAddressCaptureParams()**](JobsApi.md#submitMultiZipAddressCaptureParams) | **POST** /batch/zip/address-capture | Submitmultizipaddresscaptureparams |
| [**submitMultiZipParams()**](JobsApi.md#submitMultiZipParams) | **POST** /batch/zip | Submitmultizipparams |
| [**submitSingleDocParams()**](JobsApi.md#submitSingleDocParams) | **POST** /static | Submitsingledocparams |
| [**submitSinglePdfAddressCaptureParams()**](JobsApi.md#submitSinglePdfAddressCaptureParams) | **POST** /static/address-capture | Submitsinglepdfaddresscaptureparams |
| [**submitSinglePdfSplitAddressCaptureParams()**](JobsApi.md#submitSinglePdfSplitAddressCaptureParams) | **POST** /batch/split/address-capture | Submitsinglepdfsplitaddresscaptureparams |
| [**submitSinglePdfSplitParams()**](JobsApi.md#submitSinglePdfSplitParams) | **POST** /batch/split | Submitsinglepdfsplitparams |


## `submitMultiDocMergeParams()`

```php
submitMultiDocMergeParams($submit_multi_doc_merge_params): \C2MApi\Model\StandardResponse
```

Submitmultidocmergeparams

API endpoint for submitMultiDocMergeParams

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

Submitmultidocparams

API endpoint for submitMultiDocParams

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

Submitmultizipaddresscaptureparams

API endpoint for submitMultiZipAddressCaptureParams

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

Submitmultizipparams

API endpoint for submitMultiZipParams

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

Submitsingledocparams

API endpoint for submitSingleDocParams

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

Submitsinglepdfaddresscaptureparams

API endpoint for submitSinglePdfAddressCaptureParams

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

Submitsinglepdfsplitaddresscaptureparams

API endpoint for submitSinglePdfSplitAddressCaptureParams

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

Submitsinglepdfsplitparams

API endpoint for submitSinglePdfSplitParams

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
