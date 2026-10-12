# C2M.Api.Model.JobOptions
Explicit print and mail configuration options. Mutually exclusive with jobTemplate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DocumentClass** | **string** | Document class determining the mailpiece format. | 
**Layout** | **string** | Page layout controlling where the recipient address is printed. | 
**ProductionTime** | **string** | Production time preference (next_day, two_day, etc.). | 
**Envelope** | **string** | Envelope type used for the mailing. | 
**Color** | **string** | Color mode for printing (full_color or black_and_white). | 
**PaperType** | **string** | Paper stock for printing. | 
**PrintOption** | **string** | Duplex setting (double_sided or single_sided). | 
**MailClass** | **string** | USPS mail class (first_class, standard, or non_profit). | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

