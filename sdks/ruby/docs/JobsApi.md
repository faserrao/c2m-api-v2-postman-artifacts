# OpenapiClient::JobsApi

All URIs are relative to *https://api.click2mail.com/v2*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**submit_multi_doc_merge_params**](JobsApi.md#submit_multi_doc_merge_params) | **POST** /jobs/submit/multi/doc/merge | Submit a multi doc merge job |
| [**submit_multi_doc_params**](JobsApi.md#submit_multi_doc_params) | **POST** /jobs/submit/multi/doc | Submit a multi doc job |
| [**submit_multi_zip_address_capture_params**](JobsApi.md#submit_multi_zip_address_capture_params) | **POST** /jobs/submit/multi/zip/addressCapture | Submit a multi zip addressCapture job |
| [**submit_multi_zip_params**](JobsApi.md#submit_multi_zip_params) | **POST** /jobs/submit/multi/zip | Submit a multi zip job |
| [**submit_single_doc_params**](JobsApi.md#submit_single_doc_params) | **POST** /jobs/submit/single/doc | Submit a single doc job |
| [**submit_single_pdf_address_capture_params**](JobsApi.md#submit_single_pdf_address_capture_params) | **POST** /jobs/submit/single/pdf/addressCapture | Submit a single pdf addressCapture job |
| [**submit_single_pdf_split_address_capture_params**](JobsApi.md#submit_single_pdf_split_address_capture_params) | **POST** /jobs/submit/single/pdf/split/addressCapture | Submit a single pdf split addressCapture job |
| [**submit_single_pdf_split_params**](JobsApi.md#submit_single_pdf_split_params) | **POST** /jobs/submit/single/pdf/split | Submit a single pdf split job |


## submit_multi_doc_merge_params

> <StandardResponse> submit_multi_doc_merge_params(submit_multi_doc_merge_params)

Submit a multi doc merge job

Submits a mailing job (multi doc merge). The request body contains job parameters including document source, recipient address information, and payment details.

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
  # Submit a multi doc merge job
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
  # Submit a multi doc merge job
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

Submit a multi doc job

Submits a mailing job (multi doc). The request body contains job parameters including document source, recipient address information, and payment details.

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
  # Submit a multi doc job
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
  # Submit a multi doc job
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

Submit a multi zip addressCapture job

Submits a mailing job (multi zip addressCapture). The request body contains job parameters including document source, recipient address information, and payment details.

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
  # Submit a multi zip addressCapture job
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
  # Submit a multi zip addressCapture job
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

Submit a multi zip job

Submits a mailing job (multi zip). The request body contains job parameters including document source, recipient address information, and payment details.

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
submit_multi_zip_params = OpenapiClient::SubmitMultiZipParams.new({multi_zip_jobs: [OpenapiClient::MultiZipJobItem.new({doc_source_zip_file: OpenapiClient::ZipDocumentIdSource.new({zip_document_id: 37, filename: 'filename_example'}), recipient_address_source: nil})]}) # SubmitMultiZipParams | 

begin
  # Submit a multi zip job
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
  # Submit a multi zip job
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

Submit a single doc job

Submits a mailing job (single doc). The request body contains job parameters including document source, recipient address information, and payment details.

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
  # Submit a single doc job
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
  # Submit a single doc job
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

Submit a single pdf addressCapture job

Submits a mailing job (single pdf addressCapture). The request body contains job parameters including document source, recipient address information, and payment details.

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
  # Submit a single pdf addressCapture job
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
  # Submit a single pdf addressCapture job
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

Submit a single pdf split addressCapture job

Submits a mailing job (single pdf split addressCapture). The request body contains job parameters including document source, recipient address information, and payment details.

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
  # Submit a single pdf split addressCapture job
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
  # Submit a single pdf split addressCapture job
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

Submit a single pdf split job

Submits a mailing job (single pdf split). The request body contains job parameters including document source, recipient address information, and payment details.

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
  # Submit a single pdf split job
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
  # Submit a single pdf split job
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

