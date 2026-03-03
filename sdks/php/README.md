# OpenAPIClient-php

API for submitting mailing jobs with various document routing options


## Installation & Usage

### Requirements

PHP 8.1 and later.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/GIT_USER_ID/GIT_REPO_ID.git"
    }
  ],
  "require": {
    "GIT_USER_ID/GIT_REPO_ID": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/OpenAPIClient-php/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



// Configure OAuth2 access token for authorization: ShortTokenAuth
$config = C2MApi\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure API key authorization: ClientKey
$config = C2MApi\Configuration::getDefaultConfiguration()->setApiKey('X-Client-Id', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = C2MApi\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-Client-Id', 'Bearer');


$apiInstance = new C2MApi\Api\AuthApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$long_token_request = {"grant_type":"client_credentials","client_id":"c2m_abc123","client_secret":"supersecret123","scopes":["jobs:submit","templates:read"],"ttl_seconds":7776000}; // \C2MApi\Model\LongTokenRequest

try {
    $result = $apiInstance->issueLongTermToken($long_token_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AuthApi->issueLongTermToken: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://api.click2mail.com/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthApi* | [**issueLongTermToken**](docs/Api/AuthApi.md#issuelongtermtoken) | **POST** /auth/tokens/long | Issue or rotate a long-term token
*AuthApi* | [**issueShortTermToken**](docs/Api/AuthApi.md#issueshorttermtoken) | **POST** /auth/tokens/short | Issue a short-term access token
*AuthApi* | [**revokeToken**](docs/Api/AuthApi.md#revoketoken) | **POST** /auth/tokens/{tokenId}/revoke | Revoke a token
*JobsApi* | [**submitMultiDocMergeParams**](docs/Api/JobsApi.md#submitmultidocmergeparams) | **POST** /jobs/submit/multi/doc/merge | Submit a multi doc merge job
*JobsApi* | [**submitMultiDocParams**](docs/Api/JobsApi.md#submitmultidocparams) | **POST** /jobs/submit/multi/doc | Submit a multi doc job
*JobsApi* | [**submitMultiZipAddressCaptureParams**](docs/Api/JobsApi.md#submitmultizipaddresscaptureparams) | **POST** /jobs/submit/multi/zip/addressCapture | Submit a multi zip addressCapture job
*JobsApi* | [**submitMultiZipParams**](docs/Api/JobsApi.md#submitmultizipparams) | **POST** /jobs/submit/multi/zip | Submit a multi zip job
*JobsApi* | [**submitSingleDocParams**](docs/Api/JobsApi.md#submitsingledocparams) | **POST** /jobs/submit/single/doc | Submit a single doc job
*JobsApi* | [**submitSinglePdfAddressCaptureParams**](docs/Api/JobsApi.md#submitsinglepdfaddresscaptureparams) | **POST** /jobs/submit/single/pdf/addressCapture | Submit a single pdf addressCapture job
*JobsApi* | [**submitSinglePdfSplitAddressCaptureParams**](docs/Api/JobsApi.md#submitsinglepdfsplitaddresscaptureparams) | **POST** /jobs/submit/single/pdf/split/addressCapture | Submit a single pdf split addressCapture job
*JobsApi* | [**submitSinglePdfSplitParams**](docs/Api/JobsApi.md#submitsinglepdfsplitparams) | **POST** /jobs/submit/single/pdf/split | Submit a single pdf split job

## Models

- [AchDetails](docs/Model/AchDetails.md)
- [AchPayment](docs/Model/AchPayment.md)
- [Address](docs/Model/Address.md)
- [AuthError](docs/Model/AuthError.md)
- [CardType](docs/Model/CardType.md)
- [CreditAmount](docs/Model/CreditAmount.md)
- [CreditCardDetails](docs/Model/CreditCardDetails.md)
- [CreditCardPayment](docs/Model/CreditCardPayment.md)
- [Currency](docs/Model/Currency.md)
- [DocSourceAll](docs/Model/DocSourceAll.md)
- [DocSourceStandard](docs/Model/DocSourceStandard.md)
- [DocSourceZipFile](docs/Model/DocSourceZipFile.md)
- [ErrorCode](docs/Model/ErrorCode.md)
- [ErrorResponse](docs/Model/ErrorResponse.md)
- [ErrorType](docs/Model/ErrorType.md)
- [ExpirationDate](docs/Model/ExpirationDate.md)
- [InvoiceDetails](docs/Model/InvoiceDetails.md)
- [InvoicePayment](docs/Model/InvoicePayment.md)
- [JobOptions](docs/Model/JobOptions.md)
- [LongTokenRequest](docs/Model/LongTokenRequest.md)
- [LongTokenResponse](docs/Model/LongTokenResponse.md)
- [MergeByRequestId](docs/Model/MergeByRequestId.md)
- [MergeDocumentRef](docs/Model/MergeDocumentRef.md)
- [MultiDocJobItem](docs/Model/MultiDocJobItem.md)
- [MultiZipJobItem](docs/Model/MultiZipJobItem.md)
- [PaymentDetails](docs/Model/PaymentDetails.md)
- [PdfSplitJobItemNoAddress](docs/Model/PdfSplitJobItemNoAddress.md)
- [PdfSplitJobItemWithAddress](docs/Model/PdfSplitJobItemWithAddress.md)
- [Priority](docs/Model/Priority.md)
- [RecipientAddressByList](docs/Model/RecipientAddressByList.md)
- [RecipientAddressBySingle](docs/Model/RecipientAddressBySingle.md)
- [RecipientAddressSource](docs/Model/RecipientAddressSource.md)
- [RequestIdSource](docs/Model/RequestIdSource.md)
- [ReturnAddress](docs/Model/ReturnAddress.md)
- [ShortTokenRequest](docs/Model/ShortTokenRequest.md)
- [ShortTokenResponse](docs/Model/ShortTokenResponse.md)
- [StandardResponse](docs/Model/StandardResponse.md)
- [SubmitMultiDocMergeParams](docs/Model/SubmitMultiDocMergeParams.md)
- [SubmitMultiDocParams](docs/Model/SubmitMultiDocParams.md)
- [SubmitMultiZipAddressCaptureParams](docs/Model/SubmitMultiZipAddressCaptureParams.md)
- [SubmitMultiZipParams](docs/Model/SubmitMultiZipParams.md)
- [SubmitSingleDocParams](docs/Model/SubmitSingleDocParams.md)
- [SubmitSinglePdfAddressCaptureParams](docs/Model/SubmitSinglePdfAddressCaptureParams.md)
- [SubmitSinglePdfSplitAddressCaptureParams](docs/Model/SubmitSinglePdfSplitAddressCaptureParams.md)
- [SubmitSinglePdfSplitParams](docs/Model/SubmitSinglePdfSplitParams.md)
- [UserCreditPayment](docs/Model/UserCreditPayment.md)
- [ZipDocumentIdSource](docs/Model/ZipDocumentIdSource.md)
- [ZipDocumentSource](docs/Model/ZipDocumentSource.md)
- [ZipRequestIdSource](docs/Model/ZipRequestIdSource.md)

## Authorization

Authentication schemes defined for the API:
### bearerAuth

- **Type**: Bearer authentication (JWT)

### LongTokenAuth

- **Type**: `OAuth`
- **Flow**: `application`
- **Authorization URL**: ``
- **Scopes**: 
    - **tokens:write**: Create new long-term tokens
    - **tokens:revoke**: Revoke existing tokens

### ShortTokenAuth

- **Type**: `OAuth`
- **Flow**: `application`
- **Authorization URL**: ``
- **Scopes**: 
    - **tokens:write**: Create new long-term tokens
    - **tokens:revoke**: Revoke existing tokens

### ClientKey

- **Type**: API key
- **API key parameter name**: X-Client-Id
- **Location**: HTTP header


## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author



## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `2.0.0`
    - Generator version: `7.15.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
