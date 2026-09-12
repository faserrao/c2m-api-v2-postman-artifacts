# OpenapiClient::JobsApi

All URIs are relative to *https://api.click2mail.com/v2*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**submit_doc_params**](JobsApi.md#submit_doc_params) | **POST** /static | Submit single document |
| [**submit_multi_doc_merge_params**](JobsApi.md#submit_multi_doc_merge_params) | **POST** /mail-merge | Submit mail merge |
| [**submit_multi_zip_address_capture_params**](JobsApi.md#submit_multi_zip_address_capture_params) | **POST** /batch/zip/address-capture | Submit ZIP batch — address capture |
| [**submit_multi_zip_params**](JobsApi.md#submit_multi_zip_params) | **POST** /batch/zip | Submit ZIP batch |
| [**submit_single_pdf_address_capture_params**](JobsApi.md#submit_single_pdf_address_capture_params) | **POST** /static/address-capture | Submit single document — address capture |
| [**submit_single_pdf_split_address_capture_params**](JobsApi.md#submit_single_pdf_split_address_capture_params) | **POST** /batch/split/address-capture | Submit PDF split — address capture |
| [**submit_single_pdf_split_params**](JobsApi.md#submit_single_pdf_split_params) | **POST** /batch/split | Submit PDF split |


## submit_doc_params

> <StandardResponse> submit_doc_params(submit_doc_params)

Submit single document

Submits a mailing job for a single document to one or more recipients. The request body must include a document source, recipient address information, and payment details.

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
submit_doc_params = OpenapiClient::SubmitDocParams.new({doc_source_all: nil, recipient_address_source: OpenapiClient::Address.new({first_name: 'first_name_example', last_name: 'last_name_example', address1: 'address1_example', city: 'city_example', state: 'state_example', zip: 'zip_example', country: 'country_example'})}) # SubmitDocParams | 

begin
  # Submit single document
  result = api_instance.submit_doc_params(submit_doc_params)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling JobsApi->submit_doc_params: #{e}"
end
```

#### Using the submit_doc_params_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<StandardResponse>, Integer, Hash)> submit_doc_params_with_http_info(submit_doc_params)

```ruby
begin
  # Submit single document
  data, status_code, headers = api_instance.submit_doc_params_with_http_info(submit_doc_params)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <StandardResponse>
rescue OpenapiClient::ApiError => e
  puts "Error when calling JobsApi->submit_doc_params_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **submit_doc_params** | [**SubmitDocParams**](SubmitDocParams.md) |  |  |

### Return type

[**StandardResponse**](StandardResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submit_multi_doc_merge_params

> <StandardResponse> submit_multi_doc_merge_params(submit_multi_doc_merge_params)

Submit mail merge

Merges multiple documents into a single mailing sent to one recipient. Useful for creating document packets or multi-page letters.

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
submit_multi_doc_merge_params = OpenapiClient::SubmitMultiDocMergeParams.new({merge_document_source: [nil], recipient_address_source: OpenapiClient::Address.new({first_name: 'first_name_example', last_name: 'last_name_example', address1: 'address1_example', city: 'city_example', state: 'state_example', zip: 'zip_example', country: 'country_example'})}) # SubmitMultiDocMergeParams | 

begin
  # Submit mail merge
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
  # Submit mail merge
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


## submit_multi_zip_address_capture_params

> <StandardResponse> submit_multi_zip_address_capture_params(submit_multi_zip_address_capture_params)

Submit ZIP batch — address capture

Submits a ZIP-based mailing batch where recipient addresses are captured externally. No inline recipient addresses are required.

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
  # Submit ZIP batch — address capture
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
  # Submit ZIP batch — address capture
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

Submit ZIP batch

Submits multiple mailing jobs sourced from files inside a single ZIP archive. Each job item specifies which file within the ZIP and the recipient address.

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
submit_multi_zip_params = OpenapiClient::SubmitMultiZipParams.new({doc_source_zip_file_ref: nil, multi_zip_jobs: [OpenapiClient::MultiZipJobItem.new({filename: 'filename_example', recipient_address_source: OpenapiClient::Address.new({first_name: 'first_name_example', last_name: 'last_name_example', address1: 'address1_example', city: 'city_example', state: 'state_example', zip: 'zip_example', country: 'country_example'})})]}) # SubmitMultiZipParams | 

begin
  # Submit ZIP batch
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
  # Submit ZIP batch
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


## submit_single_pdf_address_capture_params

> <StandardResponse> submit_single_pdf_address_capture_params(submit_single_pdf_address_capture_params)

Submit single document — address capture

Submits a mailing job for a single PDF where recipient addresses are captured from the document via OCR. No inline recipient address is required.

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
  # Submit single document — address capture
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
  # Submit single document — address capture
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

Submit PDF split — address capture

Splits a single PDF into page ranges where recipient addresses are captured from the PDF. No inline recipient addresses are required.

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
  # Submit PDF split — address capture
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
  # Submit PDF split — address capture
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

Submit PDF split

Splits a single PDF into page ranges and mails each range to a different recipient. Each job item specifies page range and recipient address.

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
submit_single_pdf_split_params = OpenapiClient::SubmitSinglePdfSplitParams.new({doc_source_standard: nil, pdf_split_jobs_with_address: [OpenapiClient::PdfSplitJobItemWithAddress.new({start_page: 37, end_page: 37, recipient_address_source: OpenapiClient::Address.new({first_name: 'first_name_example', last_name: 'last_name_example', address1: 'address1_example', city: 'city_example', state: 'state_example', zip: 'zip_example', country: 'country_example'})})]}) # SubmitSinglePdfSplitParams | 

begin
  # Submit PDF split
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
  # Submit PDF split
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

