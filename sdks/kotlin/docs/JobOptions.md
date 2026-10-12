
# JobOptions

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **documentClass** | [**inline**](#DocumentClass) | Document class determining the mailpiece format. |  |
| **layout** | [**inline**](#Layout) | Page layout controlling where the recipient address is printed. |  |
| **productionTime** | [**inline**](#ProductionTime) | Production time preference (next_day, two_day, etc.). |  |
| **envelope** | [**inline**](#Envelope) | Envelope type used for the mailing. |  |
| **color** | [**inline**](#Color) | Color mode for printing (full_color or black_and_white). |  |
| **paperType** | [**inline**](#PaperType) | Paper stock for printing. |  |
| **printOption** | [**inline**](#PrintOption) | Duplex setting (double_sided or single_sided). |  |
| **mailClass** | [**inline**](#MailClass) | USPS mail class (first_class, standard, or non_profit). |  |


<a id="DocumentClass"></a>
## Enum: documentClass
| Name | Value |
| ---- | ----- |
| documentClass | letter, postcard, brochure, flat |


<a id="Layout"></a>
## Enum: layout
| Name | Value |
| ---- | ----- |
| layout | address_on_first_page, address_on_back_page |


<a id="ProductionTime"></a>
## Enum: productionTime
| Name | Value |
| ---- | ----- |
| productionTime | next_day, two_day, three_day, standard, same_day |


<a id="Envelope"></a>
## Enum: envelope
| Name | Value |
| ---- | ----- |
| envelope | standard, none, flat, double_window |


<a id="Color"></a>
## Enum: color
| Name | Value |
| ---- | ----- |
| color | full_color, black_and_white |


<a id="PaperType"></a>
## Enum: paperType
| Name | Value |
| ---- | ----- |
| paperType | white, white_24, ivory, glossy |


<a id="PrintOption"></a>
## Enum: printOption
| Name | Value |
| ---- | ----- |
| printOption | double_sided, single_sided |


<a id="MailClass"></a>
## Enum: mailClass
| Name | Value |
| ---- | ----- |
| mailClass | first_class, standard, non_profit |



