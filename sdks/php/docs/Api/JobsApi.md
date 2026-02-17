# C2MApi\JobsApi

All URIs are relative to https://api.example.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**submitMultiZipAddressCaptureParams()**](JobsApi.md#submitMultiZipAddressCaptureParams) | **POST** /jobs/submit/multi/zip/addressCapture | Submit a multi zip addressCapture job |
| [**submitMultiZipParams()**](JobsApi.md#submitMultiZipParams) | **POST** /jobs/submit/multi/zip | Submit a multi zip job |
| [**submitSinglePdfAddressCaptureParams()**](JobsApi.md#submitSinglePdfAddressCaptureParams) | **POST** /jobs/submit/single/pdf/addressCapture | Submit a single pdf addressCapture job |
| [**submitSinglePdfSplitAddressCaptureParams()**](JobsApi.md#submitSinglePdfSplitAddressCaptureParams) | **POST** /jobs/submit/single/pdf/split/addressCapture | Submit a single pdf split addressCapture job |
| [**submitSinglePdfSplitParams()**](JobsApi.md#submitSinglePdfSplitParams) | **POST** /jobs/submit/single/pdf/split | Submit a single pdf split job |


## `submitMultiZipAddressCaptureParams()`

```php
submitMultiZipAddressCaptureParams($submit_multi_zip_address_capture_params): \C2MApi\Model\StandardResponse
```

Submit a multi zip addressCapture job

Submits a multi zip addressCapture mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

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

Submit a multi zip job

Submits a multi zip mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

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

## `submitSinglePdfAddressCaptureParams()`

```php
submitSinglePdfAddressCaptureParams($submit_single_pdf_address_capture_params): \C2MApi\Model\StandardResponse
```

Submit a single pdf addressCapture job

Submits a single pdf addressCapture mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

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

Submit a single pdf split addressCapture job

Submits a single pdf split addressCapture mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

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

Submit a single pdf split job

Submits a single pdf split mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

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
