# C2M.Api.Model.Address
Mailing address with required core fields (name, address1, city, state, zip, country) and optional extended fields (company, address2, address3, foo1, foo2).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FirstName** | **string** | Recipient&#39;s first name. | 
**LastName** | **string** | Recipient&#39;s last name. | 
**Address1** | **string** | Primary street address line. | 
**City** | **string** | City name. | 
**State** | **string** | Two-letter state or province abbreviation. | 
**Zip** | **string** | ZIP or postal code. | 
**Country** | **string** | Country code (e.g. USA). | 
**Address2** | **string** | Secondary address line (suite, apartment, floor, etc.). | [optional] 
**Address3** | **string** | Tertiary address line. | [optional] 
**Foo1** | **string** | User-defined merge variable 1 — forwarded to the address list merge mapping for personalisation. | [optional] 
**Foo2** | **string** | User-defined merge variable 2 — forwarded to the address list merge mapping for personalisation. | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

