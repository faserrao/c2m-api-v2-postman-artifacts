# OpenapiClient::JobOptions

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **document_class** | **String** | Document class determining the mailpiece format. |  |
| **layout** | **String** | Page layout controlling where the recipient address is printed. |  |
| **production_time** | **String** | Production time preference (next_day, two_day, etc.). |  |
| **envelope** | **String** | Envelope type used for the mailing. none means the mailpiece mails itself: postcard, brochure or flat only. |  |
| **color** | **String** | Color mode for printing (full_color or black_and_white). |  |
| **paper_type** | **String** | Paper stock for printing. |  |
| **print_option** | **String** | Duplex setting (double_sided or single_sided). |  |
| **mail_class** | **String** | USPS mail class (first_class, standard, or non_profit). |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::JobOptions.new(
  document_class: null,
  layout: null,
  production_time: null,
  envelope: null,
  color: null,
  paper_type: null,
  print_option: null,
  mail_class: null
)
```

