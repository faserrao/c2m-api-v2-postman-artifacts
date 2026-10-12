# C2MApiV2.JobOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentClass** | **String** | Document class determining the mailpiece format. | 
**layout** | **String** | Page layout controlling where the recipient address is printed. | 
**productionTime** | **String** | Production time preference (next_day, two_day, etc.). | 
**envelope** | **String** | Envelope type used for the mailing. | 
**color** | **String** | Color mode for printing (full_color or black_and_white). | 
**paperType** | **String** | Paper stock for printing. | 
**printOption** | **String** | Duplex setting (double_sided or single_sided). | 
**mailClass** | **String** | USPS mail class (first_class, standard, or non_profit). | 



## Enum: DocumentClassEnum


* `letter` (value: `"letter"`)

* `postcard` (value: `"postcard"`)

* `brochure` (value: `"brochure"`)

* `flat` (value: `"flat"`)





## Enum: LayoutEnum


* `address_on_first_page` (value: `"address_on_first_page"`)

* `address_on_back_page` (value: `"address_on_back_page"`)





## Enum: ProductionTimeEnum


* `next_day` (value: `"next_day"`)

* `two_day` (value: `"two_day"`)

* `three_day` (value: `"three_day"`)

* `standard` (value: `"standard"`)

* `same_day` (value: `"same_day"`)





## Enum: EnvelopeEnum


* `standard` (value: `"standard"`)

* `none` (value: `"none"`)

* `flat` (value: `"flat"`)

* `double_window` (value: `"double_window"`)





## Enum: ColorEnum


* `full_color` (value: `"full_color"`)

* `black_and_white` (value: `"black_and_white"`)





## Enum: PaperTypeEnum


* `white` (value: `"white"`)

* `white_24` (value: `"white_24"`)

* `ivory` (value: `"ivory"`)

* `glossy` (value: `"glossy"`)





## Enum: PrintOptionEnum


* `double_sided` (value: `"double_sided"`)

* `single_sided` (value: `"single_sided"`)





## Enum: MailClassEnum


* `first_class` (value: `"first_class"`)

* `standard` (value: `"standard"`)

* `non_profit` (value: `"non_profit"`)




