# OpenapiClient::JobsApi

All URIs are relative to *https://api.click2mail.com/v2*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**submit_multi_doc_merge_params**](JobsApi.md#submit_multi_doc_merge_params) | **POST** /mail-merge | Submitmultidocmergeparams |
| [**submit_multi_doc_params**](JobsApi.md#submit_multi_doc_params) | **POST** /static/multi | Submitmultidocparams |
| [**submit_multi_zip_address_capture_params**](JobsApi.md#submit_multi_zip_address_capture_params) | **POST** /batch/zip/address-capture | Submitmultizipaddresscaptureparams |
| [**submit_multi_zip_params**](JobsApi.md#submit_multi_zip_params) | **POST** /batch/zip | Submitmultizipparams |
| [**submit_single_doc_params**](JobsApi.md#submit_single_doc_params) | **POST** /static | Submitsingledocparams |
| [**submit_single_pdf_address_capture_params**](JobsApi.md#submit_single_pdf_address_capture_params) | **POST** /static/address-capture | Submitsinglepdfaddresscaptureparams |
| [**submit_single_pdf_split_address_capture_params**](JobsApi.md#submit_single_pdf_split_address_capture_params) | **POST** /batch/split/address-capture | Submitsinglepdfsplitaddresscaptureparams |
| [**submit_single_pdf_split_params**](JobsApi.md#submit_single_pdf_split_params) | **POST** /batch/split | Submitsinglepdfsplitparams |


## submit_multi_doc_merge_params

> <StandardResponse> submit_multi_doc_merge_params(submit_multi_doc_merge_params)

Submitmultidocmergeparams

API endpoint for submitMultiDocMergeParams

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::JobsApi.new
submit_multi_doc_merge_params = OpenapiClient::SubmitMultiDocMergeParams.new({merge_document_source: [nil], recipient_address_source: nil}) # SubmitMultiDocMergeParams | 

begin
  # Submitmultidocmergeparams
  result = api_instance.submit_multi_doc_merge_params(submit_multi_doc_merge_params)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling JobsApi->submit_multi_doc_merge_params: #{e}"
end
```

#### Using the submit_multi_doc_merge_params_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<StandardResponse>, Integer, Hash)> submit_multi_doc_merge_params_with_http_info(submit_multi_doc_merge_params)

```ruby
begin
  # Submitmultidocmergeparams
  data, status_code, headers = api_instance.submit_multi_doc_merge_params_with_http_info(submit_multi_doc_merge_params)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <StandardResponse>
rescue OpenapiClient::ApiError => e
  puts "Error when calling JobsApi->submit_multi_doc_merge_params_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **submit_multi_doc_merge_params** | [**SubmitMultiDocMergeParams**](SubmitMultiDocMergeParams.md) |  |  |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submit_multi_doc_params

> <StandardResponse> submit_multi_doc_params(submit_multi_doc_params)

Submitmultidocparams

API endpoint for submitMultiDocParams

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::JobsApi.new
submit_multi_doc_params = OpenapiClient::SubmitMultiDocParams.new({multi_doc_jobs: [OpenapiClient::MultiDocJobItem.new({doc_source_all: nil, recipient_address_source: nil})]}) # SubmitMultiDocParams | 

begin
  # Submitmultidocparams
  result = api_instance.submit_multi_doc_params(submit_multi_doc_params)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling JobsApi->submit_multi_doc_params: #{e}"
end
```

#### Using the submit_multi_doc_params_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<StandardResponse>, Integer, Hash)> submit_multi_doc_params_with_http_info(submit_multi_doc_params)

```ruby
begin
  # Submitmultidocparams
  data, status_code, headers = api_instance.submit_multi_doc_params_with_http_info(submit_multi_doc_params)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <StandardResponse>
rescue OpenapiClient::ApiError => e
  puts "Error when calling JobsApi->submit_multi_doc_params_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **submit_multi_doc_params** | [**SubmitMultiDocParams**](SubmitMultiDocParams.md) |  |  |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submit_multi_zip_address_capture_params

> <StandardResponse> submit_multi_zip_address_capture_params(submit_multi_zip_address_capture_params)

Submitmultizipaddresscaptureparams

API endpoint for submitMultiZipAddressCaptureParams

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::JobsApi.new
submit_multi_zip_address_capture_params = OpenapiClient::SubmitMultiZipAddressCaptureParams.new({zip_document_source: OpenapiClient::ZipDocumentIdSource.new({zip_document_id: 37, filename: 'filename_example'})}) # SubmitMultiZipAddressCaptureParams | 

begin
  # Submitmultizipaddresscaptureparams
  result = api_instance.submit_multi_zip_address_capture_params(submit_multi_zip_address_capture_params)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling JobsApi->submit_multi_zip_address_capture_params: #{e}"
end
```

#### Using the submit_multi_zip_address_capture_params_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<StandardResponse>, Integer, Hash)> submit_multi_zip_address_capture_params_with_http_info(submit_multi_zip_address_capture_params)

```ruby
begin
  # Submitmultizipaddresscaptureparams
  data, status_code, headers = api_instance.submit_multi_zip_address_capture_params_with_http_info(submit_multi_zip_address_capture_params)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <StandardResponse>
rescue OpenapiClient::ApiError => e
  puts "Error when calling JobsApi->submit_multi_zip_address_capture_params_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **submit_multi_zip_address_capture_params** | [**SubmitMultiZipAddressCaptureParams**](SubmitMultiZipAddressCaptureParams.md) |  |  |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submit_multi_zip_params

> <StandardResponse> submit_multi_zip_params(submit_multi_zip_params)

Submitmultizipparams

API endpoint for submitMultiZipParams

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::JobsApi.new
submit_multi_zip_params = OpenapiClient::SubmitMultiZipParams.new({doc_source_zip_file_ref: nil, multi_zip_jobs: [OpenapiClient::MultiZipJobItem.new({filename: 'filename_example', recipient_address_source: nil})]}) # SubmitMultiZipParams | 

begin
  # Submitmultizipparams
  result = api_instance.submit_multi_zip_params(submit_multi_zip_params)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling JobsApi->submit_multi_zip_params: #{e}"
end
```

#### Using the submit_multi_zip_params_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<StandardResponse>, Integer, Hash)> submit_multi_zip_params_with_http_info(submit_multi_zip_params)

```ruby
begin
  # Submitmultizipparams
  data, status_code, headers = api_instance.submit_multi_zip_params_with_http_info(submit_multi_zip_params)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <StandardResponse>
rescue OpenapiClient::ApiError => e
  puts "Error when calling JobsApi->submit_multi_zip_params_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **submit_multi_zip_params** | [**SubmitMultiZipParams**](SubmitMultiZipParams.md) |  |  |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submit_single_doc_params

> <StandardResponse> submit_single_doc_params(submit_single_doc_params)

Submitsingledocparams

API endpoint for submitSingleDocParams

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::JobsApi.new
submit_single_doc_params = OpenapiClient::SubmitSingleDocParams.new({doc_source_all: nil, recipient_address_source: nil}) # SubmitSingleDocParams | 

begin
  # Submitsingledocparams
  result = api_instance.submit_single_doc_params(submit_single_doc_params)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling JobsApi->submit_single_doc_params: #{e}"
end
```

#### Using the submit_single_doc_params_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<StandardResponse>, Integer, Hash)> submit_single_doc_params_with_http_info(submit_single_doc_params)

```ruby
begin
  # Submitsingledocparams
  data, status_code, headers = api_instance.submit_single_doc_params_with_http_info(submit_single_doc_params)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <StandardResponse>
rescue OpenapiClient::ApiError => e
  puts "Error when calling JobsApi->submit_single_doc_params_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **submit_single_doc_params** | [**SubmitSingleDocParams**](SubmitSingleDocParams.md) |  |  |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submit_single_pdf_address_capture_params

> <StandardResponse> submit_single_pdf_address_capture_params(submit_single_pdf_address_capture_params)

Submitsinglepdfaddresscaptureparams

API endpoint for submitSinglePdfAddressCaptureParams

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::JobsApi.new
submit_single_pdf_address_capture_params = OpenapiClient::SubmitSinglePdfAddressCaptureParams.new({doc_source_standard: nil}) # SubmitSinglePdfAddressCaptureParams | 

begin
  # Submitsinglepdfaddresscaptureparams
  result = api_instance.submit_single_pdf_address_capture_params(submit_single_pdf_address_capture_params)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling JobsApi->submit_single_pdf_address_capture_params: #{e}"
end
```

#### Using the submit_single_pdf_address_capture_params_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<StandardResponse>, Integer, Hash)> submit_single_pdf_address_capture_params_with_http_info(submit_single_pdf_address_capture_params)

```ruby
begin
  # Submitsinglepdfaddresscaptureparams
  data, status_code, headers = api_instance.submit_single_pdf_address_capture_params_with_http_info(submit_single_pdf_address_capture_params)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <StandardResponse>
rescue OpenapiClient::ApiError => e
  puts "Error when calling JobsApi->submit_single_pdf_address_capture_params_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **submit_single_pdf_address_capture_params** | [**SubmitSinglePdfAddressCaptureParams**](SubmitSinglePdfAddressCaptureParams.md) |  |  |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submit_single_pdf_split_address_capture_params

> <StandardResponse> submit_single_pdf_split_address_capture_params(submit_single_pdf_split_address_capture_params)

Submitsinglepdfsplitaddresscaptureparams

API endpoint for submitSinglePdfSplitAddressCaptureParams

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::JobsApi.new
submit_single_pdf_split_address_capture_params = OpenapiClient::SubmitSinglePdfSplitAddressCaptureParams.new({doc_source_standard: nil, pdf_split_jobs_no_address: [OpenapiClient::PdfSplitJobItemNoAddress.new({start_page: 37, end_page: 37})]}) # SubmitSinglePdfSplitAddressCaptureParams | 

begin
  # Submitsinglepdfsplitaddresscaptureparams
  result = api_instance.submit_single_pdf_split_address_capture_params(submit_single_pdf_split_address_capture_params)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling JobsApi->submit_single_pdf_split_address_capture_params: #{e}"
end
```

#### Using the submit_single_pdf_split_address_capture_params_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<StandardResponse>, Integer, Hash)> submit_single_pdf_split_address_capture_params_with_http_info(submit_single_pdf_split_address_capture_params)

```ruby
begin
  # Submitsinglepdfsplitaddresscaptureparams
  data, status_code, headers = api_instance.submit_single_pdf_split_address_capture_params_with_http_info(submit_single_pdf_split_address_capture_params)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <StandardResponse>
rescue OpenapiClient::ApiError => e
  puts "Error when calling JobsApi->submit_single_pdf_split_address_capture_params_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **submit_single_pdf_split_address_capture_params** | [**SubmitSinglePdfSplitAddressCaptureParams**](SubmitSinglePdfSplitAddressCaptureParams.md) |  |  |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submit_single_pdf_split_params

> <StandardResponse> submit_single_pdf_split_params(submit_single_pdf_split_params)

Submitsinglepdfsplitparams

API endpoint for submitSinglePdfSplitParams

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::JobsApi.new
submit_single_pdf_split_params = OpenapiClient::SubmitSinglePdfSplitParams.new({doc_source_standard: nil, pdf_split_jobs_with_address: [OpenapiClient::PdfSplitJobItemWithAddress.new({start_page: 37, end_page: 37, recipient_address_source: nil})]}) # SubmitSinglePdfSplitParams | 

begin
  # Submitsinglepdfsplitparams
  result = api_instance.submit_single_pdf_split_params(submit_single_pdf_split_params)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling JobsApi->submit_single_pdf_split_params: #{e}"
end
```

#### Using the submit_single_pdf_split_params_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<StandardResponse>, Integer, Hash)> submit_single_pdf_split_params_with_http_info(submit_single_pdf_split_params)

```ruby
begin
  # Submitsinglepdfsplitparams
  data, status_code, headers = api_instance.submit_single_pdf_split_params_with_http_info(submit_single_pdf_split_params)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <StandardResponse>
rescue OpenapiClient::ApiError => e
  puts "Error when calling JobsApi->submit_single_pdf_split_params_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **submit_single_pdf_split_params** | [**SubmitSinglePdfSplitParams**](SubmitSinglePdfSplitParams.md) |  |  |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

