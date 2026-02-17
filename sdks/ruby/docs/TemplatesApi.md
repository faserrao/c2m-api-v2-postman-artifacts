# OpenapiClient::TemplatesApi

All URIs are relative to *https://api.example.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**submit_multi_doc_merge_params**](TemplatesApi.md#submit_multi_doc_merge_params) | **POST** /jobs/submit/multi/doc/merge | Submit a multi doc merge job |
| [**submit_multi_doc_params**](TemplatesApi.md#submit_multi_doc_params) | **POST** /jobs/submit/multi/doc | Submit a multi doc job |
| [**submit_single_doc_params**](TemplatesApi.md#submit_single_doc_params) | **POST** /jobs/submit/single/doc | Submit a single doc job |


## submit_multi_doc_merge_params

> <StandardResponse> submit_multi_doc_merge_params(submit_multi_doc_merge_params)

Submit a multi doc merge job

Submits a multi doc merge mailing job. The request body contains job parameters including document source, recipient address information, and payment details.

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::TemplatesApi.new
submit_multi_doc_merge_params = OpenapiClient::SubmitMultiDocMergeParams.new({merge_document_source: [nil], recipient_address_source: OpenapiClient::RecipientAddressSourceOneOf.new({address_list_id: 37})}) # SubmitMultiDocMergeParams | 

begin
  # Submit a multi doc merge job
  result = api_instance.submit_multi_doc_merge_params(submit_multi_doc_merge_params)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TemplatesApi->submit_multi_doc_merge_params: #{e}"
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
  puts "Error when calling TemplatesApi->submit_multi_doc_merge_params_with_http_info: #{e}"
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

Submits a mailing job with multiple documents to be sent to recipients. The request body contains job parameters including document source, recipient address information, and payment details.

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::TemplatesApi.new
submit_multi_doc_params = OpenapiClient::SubmitMultiDocParams.new({multi_doc_jobs: [OpenapiClient::MultiDocJobItem.new({doc_source_all: nil, recipient_address_source: OpenapiClient::RecipientAddressSourceOneOf.new({address_list_id: 37})})]}) # SubmitMultiDocParams | 

begin
  # Submit a multi doc job
  result = api_instance.submit_multi_doc_params(submit_multi_doc_params)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TemplatesApi->submit_multi_doc_params: #{e}"
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
  puts "Error when calling TemplatesApi->submit_multi_doc_params_with_http_info: #{e}"
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


## submit_single_doc_params

> <StandardResponse> submit_single_doc_params(submit_single_doc_params)

Submit a single doc job

Submits a mailing job with a single document to be sent to one or more recipients. The request body contains job parameters including document source, recipient address information, and payment details.

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::TemplatesApi.new
submit_single_doc_params = OpenapiClient::SubmitSingleDocParams.new({doc_source_all: nil, recipient_address_source: OpenapiClient::RecipientAddressSourceOneOf.new({address_list_id: 37})}) # SubmitSingleDocParams | 

begin
  # Submit a single doc job
  result = api_instance.submit_single_doc_params(submit_single_doc_params)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TemplatesApi->submit_single_doc_params: #{e}"
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
  puts "Error when calling TemplatesApi->submit_single_doc_params_with_http_info: #{e}"
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

