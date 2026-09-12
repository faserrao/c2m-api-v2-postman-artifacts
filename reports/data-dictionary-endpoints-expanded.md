# C2M API v2 — Endpoint Field Reference (Expanded to Primitives)

*Generated from `c2mapiv2-dd.ebnf`. Edit `data_dictionary/c2mapiv2-dd.ebnf` to change the source of truth.*

> Each endpoint is expanded to its leaf-level primitive fields.
> **Field Path** uses dot notation; `[variant]` shows which `oneOf` branch a field
> belongs to, and `[]` marks array fields.
>
> **Required** — must always be present.
> **Required\*** — required when the enclosing `[variant]` is selected.
> **Optional** — may be omitted.

---

## `POST /static/address-capture`

*Rule: `submitSinglePdfAddressCaptureParams`* — Request body for POST /static/address-capture — recipient addresses are captured from the document by OCR rather than provided inline.

| Field Path | Type | Required | Description |
| --- | --- | --- | --- |
| `jobTemplate` | string | Optional | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |
| `docSourceStandard[documentIdSource].documentId` | integer | Required* | Integer ID of a previously stored or uploaded document. |
| `docSourceStandard[requestIdSource].requestId` | integer | Required* | Integer ID of a prior file upload request. Also returned in success responses. |
| `docSourceStandard[requestIdSource].filename` | string | Optional | Filename of a specific file within an upload request or ZIP archive. |
| `docSourceStandard[urlSource].url` | string | Required* | URL from which the API will fetch the document at submission time. |
| `paymentDetails[creditCardPayment].creditCard.cardType` | enum: visa | mastercard | discover | americanExpress | Optional | Card brand. Accepted values: visa, mastercard, discover, americanExpress. |
| `paymentDetails[creditCardPayment].creditCard.cardNumber` | string | Optional | Credit card number (PAN) as a string. |
| `paymentDetails[creditCardPayment].creditCard.expirationDate.month` | integer | Optional | Expiration month as an integer (1–12). |
| `paymentDetails[creditCardPayment].creditCard.expirationDate.year` | integer | Optional | Expiration year as a four-digit integer (e.g. 2027). |
| `paymentDetails[creditCardPayment].creditCard.cvv` | integer | Optional | Card security code (CVV/CVC) as an integer. |
| `paymentDetails[invoicePayment].invoice.invoiceNumber` | string | Optional | Invoice reference number. |
| `paymentDetails[invoicePayment].invoice.amountDue` | number | Optional | Amount due on the invoice. |
| `paymentDetails[achPayment].ach.routingNumber` | string | Optional | ABA bank routing number. |
| `paymentDetails[achPayment].ach.accountNumber` | string | Optional | Bank account number. |
| `paymentDetails[achPayment].ach.checkDigit` | integer | Optional | ACH check digit. |
| `paymentDetails[userCreditPayment].userCredit.amount` | number | Optional | Monetary amount (numeric value). |
| `paymentDetails[userCreditPayment].userCredit.currency` | enum: USD | EUR | GBP | CAD | AUD | Optional | ISO 4217 currency code. Accepted values: USD, EUR, GBP, CAD, AUD. |
| `returnAddress.firstName` | string | Optional | Recipient's first name. |
| `returnAddress.lastName` | string | Optional | Recipient's last name. |
| `returnAddress.company` | string | Optional | Recipient's company or organisation name (optional). |
| `returnAddress.address1` | string | Optional | Primary street address line. |
| `returnAddress.city` | string | Optional | City name. |
| `returnAddress.state` | string | Optional | Two-letter state or province abbreviation. |
| `returnAddress.zip` | string | Optional | ZIP or postal code. |
| `returnAddress.country` | string | Optional | Country code (e.g. USA). |
| `returnAddress.address2` | string | Optional | Secondary address line (suite, apartment, floor, etc.). |
| `returnAddress.address3` | string | Optional | Tertiary address line. |
| `jobOptions.documentClass` | string | Optional | Document class (e.g. letter, flat). |
| `jobOptions.layout` | string | Optional | Page layout (e.g. address_on_top, address_on_bottom). |
| `jobOptions.productionTime` | string | Optional | Production time preference (e.g. next_day, standard). |
| `jobOptions.envelope` | string | Optional | Envelope type (e.g. standard, window). |
| `jobOptions.color` | string | Optional | Color mode (e.g. full_color, black_and_white). |
| `jobOptions.paperType` | string | Optional | Paper stock (e.g. white, recycled). |
| `jobOptions.printOption` | string | Optional | Duplex setting (e.g. single_sided, double_sided). |
| `jobOptions.mailClass` | string | Optional | USPS mail class (e.g. first_class, standard). |
| `tags[]` | string | Optional | Optional list of user-defined string tags for reporting and filtering. |

---

## `POST /batch/split`

*Rule: `submitSinglePdfSplitParams`* — Request body for POST /batch/split — split a single PDF into page ranges and mail each range to a different recipient.

| Field Path | Type | Required | Description |
| --- | --- | --- | --- |
| `jobTemplate` | string | Optional | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |
| `docSourceStandard[documentIdSource].documentId` | integer | Required* | Integer ID of a previously stored or uploaded document. |
| `docSourceStandard[requestIdSource].requestId` | integer | Required* | Integer ID of a prior file upload request. Also returned in success responses. |
| `docSourceStandard[requestIdSource].filename` | string | Optional | Filename of a specific file within an upload request or ZIP archive. |
| `docSourceStandard[urlSource].url` | string | Required* | URL from which the API will fetch the document at submission time. |
| `pdfSplitJobsWithAddress[].jobTemplate` | string | Optional | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |
| `pdfSplitJobsWithAddress[].startPage` | integer | Required | First page of this job's page range, 1-indexed (inclusive). |
| `pdfSplitJobsWithAddress[].endPage` | integer | Required | Last page of this job's page range (inclusive). Must be ≥ startPage. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[singleAddress].firstName` | string | Required* | Recipient's first name. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[singleAddress].lastName` | string | Required* | Recipient's last name. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[singleAddress].address1` | string | Required* | Primary street address line. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[singleAddress].city` | string | Required* | City name. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[singleAddress].state` | string | Required* | Two-letter state or province abbreviation. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[singleAddress].zip` | string | Required* | ZIP or postal code. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[singleAddress].country` | string | Required* | Country code (e.g. USA). |
| `pdfSplitJobsWithAddress[].recipientAddressSource[singleAddress].address2` | string | Optional | Secondary address line (suite, apartment, floor, etc.). |
| `pdfSplitJobsWithAddress[].recipientAddressSource[singleAddress].address3` | string | Optional | Tertiary address line. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[singleAddress].foo1` | string | Optional | User-defined merge variable 1 — forwarded to the address list merge mapping for personalisation. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[singleAddress].foo2` | string | Optional | User-defined merge variable 2 — forwarded to the address list merge mapping for personalisation. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[recipientAddressByList].mappingId` | integer | Optional | Integer ID of a merge-field mapping profile that associates address columns to template variables. If omitted, the account default mapping is used. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[recipientAddressByList].addressList[].firstName` | string | Required* | Recipient's first name. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[recipientAddressByList].addressList[].lastName` | string | Required* | Recipient's last name. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[recipientAddressByList].addressList[].address1` | string | Required* | Primary street address line. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[recipientAddressByList].addressList[].city` | string | Required* | City name. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[recipientAddressByList].addressList[].state` | string | Required* | Two-letter state or province abbreviation. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[recipientAddressByList].addressList[].zip` | string | Required* | ZIP or postal code. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[recipientAddressByList].addressList[].country` | string | Required* | Country code (e.g. USA). |
| `pdfSplitJobsWithAddress[].recipientAddressSource[recipientAddressByList].addressList[].address2` | string | Optional | Secondary address line (suite, apartment, floor, etc.). |
| `pdfSplitJobsWithAddress[].recipientAddressSource[recipientAddressByList].addressList[].address3` | string | Optional | Tertiary address line. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[recipientAddressByList].addressList[].foo1` | string | Optional | User-defined merge variable 1 — forwarded to the address list merge mapping for personalisation. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[recipientAddressByList].addressList[].foo2` | string | Optional | User-defined merge variable 2 — forwarded to the address list merge mapping for personalisation. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[recipientAddressByList].addressListName` | string | Optional | Optional name for this address list record. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[recipientAddressByAddressId].addressId` | integer | Required* | Integer ID of a previously stored individual recipient address. |
| `pdfSplitJobsWithAddress[].recipientAddressSource[recipientAddressByListId].addressListId` | integer | Required* | Integer ID of a previously stored recipient address list. |
| `paymentDetails[creditCardPayment].creditCard.cardType` | enum: visa | mastercard | discover | americanExpress | Optional | Card brand. Accepted values: visa, mastercard, discover, americanExpress. |
| `paymentDetails[creditCardPayment].creditCard.cardNumber` | string | Optional | Credit card number (PAN) as a string. |
| `paymentDetails[creditCardPayment].creditCard.expirationDate.month` | integer | Optional | Expiration month as an integer (1–12). |
| `paymentDetails[creditCardPayment].creditCard.expirationDate.year` | integer | Optional | Expiration year as a four-digit integer (e.g. 2027). |
| `paymentDetails[creditCardPayment].creditCard.cvv` | integer | Optional | Card security code (CVV/CVC) as an integer. |
| `paymentDetails[invoicePayment].invoice.invoiceNumber` | string | Optional | Invoice reference number. |
| `paymentDetails[invoicePayment].invoice.amountDue` | number | Optional | Amount due on the invoice. |
| `paymentDetails[achPayment].ach.routingNumber` | string | Optional | ABA bank routing number. |
| `paymentDetails[achPayment].ach.accountNumber` | string | Optional | Bank account number. |
| `paymentDetails[achPayment].ach.checkDigit` | integer | Optional | ACH check digit. |
| `paymentDetails[userCreditPayment].userCredit.amount` | number | Optional | Monetary amount (numeric value). |
| `paymentDetails[userCreditPayment].userCredit.currency` | enum: USD | EUR | GBP | CAD | AUD | Optional | ISO 4217 currency code. Accepted values: USD, EUR, GBP, CAD, AUD. |
| `returnAddress.firstName` | string | Optional | Recipient's first name. |
| `returnAddress.lastName` | string | Optional | Recipient's last name. |
| `returnAddress.company` | string | Optional | Recipient's company or organisation name (optional). |
| `returnAddress.address1` | string | Optional | Primary street address line. |
| `returnAddress.city` | string | Optional | City name. |
| `returnAddress.state` | string | Optional | Two-letter state or province abbreviation. |
| `returnAddress.zip` | string | Optional | ZIP or postal code. |
| `returnAddress.country` | string | Optional | Country code (e.g. USA). |
| `returnAddress.address2` | string | Optional | Secondary address line (suite, apartment, floor, etc.). |
| `returnAddress.address3` | string | Optional | Tertiary address line. |
| `jobOptions.documentClass` | string | Optional | Document class (e.g. letter, flat). |
| `jobOptions.layout` | string | Optional | Page layout (e.g. address_on_top, address_on_bottom). |
| `jobOptions.productionTime` | string | Optional | Production time preference (e.g. next_day, standard). |
| `jobOptions.envelope` | string | Optional | Envelope type (e.g. standard, window). |
| `jobOptions.color` | string | Optional | Color mode (e.g. full_color, black_and_white). |
| `jobOptions.paperType` | string | Optional | Paper stock (e.g. white, recycled). |
| `jobOptions.printOption` | string | Optional | Duplex setting (e.g. single_sided, double_sided). |
| `jobOptions.mailClass` | string | Optional | USPS mail class (e.g. first_class, standard). |
| `tags[]` | string | Optional | Optional list of user-defined string tags for reporting and filtering. |

---

## `POST /batch/split/address-capture`

*Rule: `submitSinglePdfSplitAddressCaptureParams`* — Request body for POST /batch/split/address-capture — page-range PDF split with recipient addresses captured externally (no inline addresses required).

| Field Path | Type | Required | Description |
| --- | --- | --- | --- |
| `jobTemplate` | string | Optional | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |
| `docSourceStandard[documentIdSource].documentId` | integer | Required* | Integer ID of a previously stored or uploaded document. |
| `docSourceStandard[requestIdSource].requestId` | integer | Required* | Integer ID of a prior file upload request. Also returned in success responses. |
| `docSourceStandard[requestIdSource].filename` | string | Optional | Filename of a specific file within an upload request or ZIP archive. |
| `docSourceStandard[urlSource].url` | string | Required* | URL from which the API will fetch the document at submission time. |
| `pdfSplitJobsNoAddress[].startPage` | integer | Required | First page of this job's page range, 1-indexed (inclusive). |
| `pdfSplitJobsNoAddress[].endPage` | integer | Required | Last page of this job's page range (inclusive). Must be ≥ startPage. |
| `paymentDetails[creditCardPayment].creditCard.cardType` | enum: visa | mastercard | discover | americanExpress | Optional | Card brand. Accepted values: visa, mastercard, discover, americanExpress. |
| `paymentDetails[creditCardPayment].creditCard.cardNumber` | string | Optional | Credit card number (PAN) as a string. |
| `paymentDetails[creditCardPayment].creditCard.expirationDate.month` | integer | Optional | Expiration month as an integer (1–12). |
| `paymentDetails[creditCardPayment].creditCard.expirationDate.year` | integer | Optional | Expiration year as a four-digit integer (e.g. 2027). |
| `paymentDetails[creditCardPayment].creditCard.cvv` | integer | Optional | Card security code (CVV/CVC) as an integer. |
| `paymentDetails[invoicePayment].invoice.invoiceNumber` | string | Optional | Invoice reference number. |
| `paymentDetails[invoicePayment].invoice.amountDue` | number | Optional | Amount due on the invoice. |
| `paymentDetails[achPayment].ach.routingNumber` | string | Optional | ABA bank routing number. |
| `paymentDetails[achPayment].ach.accountNumber` | string | Optional | Bank account number. |
| `paymentDetails[achPayment].ach.checkDigit` | integer | Optional | ACH check digit. |
| `paymentDetails[userCreditPayment].userCredit.amount` | number | Optional | Monetary amount (numeric value). |
| `paymentDetails[userCreditPayment].userCredit.currency` | enum: USD | EUR | GBP | CAD | AUD | Optional | ISO 4217 currency code. Accepted values: USD, EUR, GBP, CAD, AUD. |
| `returnAddress.firstName` | string | Optional | Recipient's first name. |
| `returnAddress.lastName` | string | Optional | Recipient's last name. |
| `returnAddress.company` | string | Optional | Recipient's company or organisation name (optional). |
| `returnAddress.address1` | string | Optional | Primary street address line. |
| `returnAddress.city` | string | Optional | City name. |
| `returnAddress.state` | string | Optional | Two-letter state or province abbreviation. |
| `returnAddress.zip` | string | Optional | ZIP or postal code. |
| `returnAddress.country` | string | Optional | Country code (e.g. USA). |
| `returnAddress.address2` | string | Optional | Secondary address line (suite, apartment, floor, etc.). |
| `returnAddress.address3` | string | Optional | Tertiary address line. |
| `jobOptions.documentClass` | string | Optional | Document class (e.g. letter, flat). |
| `jobOptions.layout` | string | Optional | Page layout (e.g. address_on_top, address_on_bottom). |
| `jobOptions.productionTime` | string | Optional | Production time preference (e.g. next_day, standard). |
| `jobOptions.envelope` | string | Optional | Envelope type (e.g. standard, window). |
| `jobOptions.color` | string | Optional | Color mode (e.g. full_color, black_and_white). |
| `jobOptions.paperType` | string | Optional | Paper stock (e.g. white, recycled). |
| `jobOptions.printOption` | string | Optional | Duplex setting (e.g. single_sided, double_sided). |
| `jobOptions.mailClass` | string | Optional | USPS mail class (e.g. first_class, standard). |
| `tags[]` | string | Optional | Optional list of user-defined string tags for reporting and filtering. |

---

## `POST /mail-merge`

*Rule: `submitMultiDocMergeParams`* — Request body for POST /mail-merge — merge multiple documents into one mailing sent to a single recipient.

| Field Path | Type | Required | Description |
| --- | --- | --- | --- |
| `jobTemplate` | string | Optional | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |
| `mergeDocumentSource[][mergeByDocumentId].documentId` | integer | Required* | Integer ID of a previously stored or uploaded document. |
| `mergeDocumentSource[][mergeByRequestId].requestId` | integer | Required* | Integer ID of a prior file upload request. Also returned in success responses. |
| `mergeDocumentSource[][mergeByRequestId].filename` | string | Optional | Filename of a specific file within an upload request or ZIP archive. |
| `recipientAddressSource[singleAddress].firstName` | string | Required* | Recipient's first name. |
| `recipientAddressSource[singleAddress].lastName` | string | Required* | Recipient's last name. |
| `recipientAddressSource[singleAddress].address1` | string | Required* | Primary street address line. |
| `recipientAddressSource[singleAddress].city` | string | Required* | City name. |
| `recipientAddressSource[singleAddress].state` | string | Required* | Two-letter state or province abbreviation. |
| `recipientAddressSource[singleAddress].zip` | string | Required* | ZIP or postal code. |
| `recipientAddressSource[singleAddress].country` | string | Required* | Country code (e.g. USA). |
| `recipientAddressSource[singleAddress].address2` | string | Optional | Secondary address line (suite, apartment, floor, etc.). |
| `recipientAddressSource[singleAddress].address3` | string | Optional | Tertiary address line. |
| `recipientAddressSource[singleAddress].foo1` | string | Optional | User-defined merge variable 1 — forwarded to the address list merge mapping for personalisation. |
| `recipientAddressSource[singleAddress].foo2` | string | Optional | User-defined merge variable 2 — forwarded to the address list merge mapping for personalisation. |
| `recipientAddressSource[recipientAddressByList].mappingId` | integer | Optional | Integer ID of a merge-field mapping profile that associates address columns to template variables. If omitted, the account default mapping is used. |
| `recipientAddressSource[recipientAddressByList].addressList[].firstName` | string | Required* | Recipient's first name. |
| `recipientAddressSource[recipientAddressByList].addressList[].lastName` | string | Required* | Recipient's last name. |
| `recipientAddressSource[recipientAddressByList].addressList[].address1` | string | Required* | Primary street address line. |
| `recipientAddressSource[recipientAddressByList].addressList[].city` | string | Required* | City name. |
| `recipientAddressSource[recipientAddressByList].addressList[].state` | string | Required* | Two-letter state or province abbreviation. |
| `recipientAddressSource[recipientAddressByList].addressList[].zip` | string | Required* | ZIP or postal code. |
| `recipientAddressSource[recipientAddressByList].addressList[].country` | string | Required* | Country code (e.g. USA). |
| `recipientAddressSource[recipientAddressByList].addressList[].address2` | string | Optional | Secondary address line (suite, apartment, floor, etc.). |
| `recipientAddressSource[recipientAddressByList].addressList[].address3` | string | Optional | Tertiary address line. |
| `recipientAddressSource[recipientAddressByList].addressList[].foo1` | string | Optional | User-defined merge variable 1 — forwarded to the address list merge mapping for personalisation. |
| `recipientAddressSource[recipientAddressByList].addressList[].foo2` | string | Optional | User-defined merge variable 2 — forwarded to the address list merge mapping for personalisation. |
| `recipientAddressSource[recipientAddressByList].addressListName` | string | Optional | Optional name for this address list record. |
| `recipientAddressSource[recipientAddressByAddressId].addressId` | integer | Required* | Integer ID of a previously stored individual recipient address. |
| `recipientAddressSource[recipientAddressByListId].addressListId` | integer | Required* | Integer ID of a previously stored recipient address list. |
| `paymentDetails[creditCardPayment].creditCard.cardType` | enum: visa | mastercard | discover | americanExpress | Optional | Card brand. Accepted values: visa, mastercard, discover, americanExpress. |
| `paymentDetails[creditCardPayment].creditCard.cardNumber` | string | Optional | Credit card number (PAN) as a string. |
| `paymentDetails[creditCardPayment].creditCard.expirationDate.month` | integer | Optional | Expiration month as an integer (1–12). |
| `paymentDetails[creditCardPayment].creditCard.expirationDate.year` | integer | Optional | Expiration year as a four-digit integer (e.g. 2027). |
| `paymentDetails[creditCardPayment].creditCard.cvv` | integer | Optional | Card security code (CVV/CVC) as an integer. |
| `paymentDetails[invoicePayment].invoice.invoiceNumber` | string | Optional | Invoice reference number. |
| `paymentDetails[invoicePayment].invoice.amountDue` | number | Optional | Amount due on the invoice. |
| `paymentDetails[achPayment].ach.routingNumber` | string | Optional | ABA bank routing number. |
| `paymentDetails[achPayment].ach.accountNumber` | string | Optional | Bank account number. |
| `paymentDetails[achPayment].ach.checkDigit` | integer | Optional | ACH check digit. |
| `paymentDetails[userCreditPayment].userCredit.amount` | number | Optional | Monetary amount (numeric value). |
| `paymentDetails[userCreditPayment].userCredit.currency` | enum: USD | EUR | GBP | CAD | AUD | Optional | ISO 4217 currency code. Accepted values: USD, EUR, GBP, CAD, AUD. |
| `returnAddress.firstName` | string | Optional | Recipient's first name. |
| `returnAddress.lastName` | string | Optional | Recipient's last name. |
| `returnAddress.company` | string | Optional | Recipient's company or organisation name (optional). |
| `returnAddress.address1` | string | Optional | Primary street address line. |
| `returnAddress.city` | string | Optional | City name. |
| `returnAddress.state` | string | Optional | Two-letter state or province abbreviation. |
| `returnAddress.zip` | string | Optional | ZIP or postal code. |
| `returnAddress.country` | string | Optional | Country code (e.g. USA). |
| `returnAddress.address2` | string | Optional | Secondary address line (suite, apartment, floor, etc.). |
| `returnAddress.address3` | string | Optional | Tertiary address line. |
| `jobOptions.documentClass` | string | Optional | Document class (e.g. letter, flat). |
| `jobOptions.layout` | string | Optional | Page layout (e.g. address_on_top, address_on_bottom). |
| `jobOptions.productionTime` | string | Optional | Production time preference (e.g. next_day, standard). |
| `jobOptions.envelope` | string | Optional | Envelope type (e.g. standard, window). |
| `jobOptions.color` | string | Optional | Color mode (e.g. full_color, black_and_white). |
| `jobOptions.paperType` | string | Optional | Paper stock (e.g. white, recycled). |
| `jobOptions.printOption` | string | Optional | Duplex setting (e.g. single_sided, double_sided). |
| `jobOptions.mailClass` | string | Optional | USPS mail class (e.g. first_class, standard). |
| `tags[]` | string | Optional | Optional list of user-defined string tags for reporting and filtering. |

---

## `POST /batch/zip`

*Rule: `submitMultiZipParams`* — Request body for POST /batch/zip — mail individual files from a ZIP archive, each file to its own recipient.

| Field Path | Type | Required | Description |
| --- | --- | --- | --- |
| `docSourceZipFileRef[zipDocumentIdOnly].zipDocumentId` | integer | Required* | Integer ID of a previously stored ZIP archive. |
| `docSourceZipFileRef[zipRequestIdOnly].requestId` | integer | Required* | Integer ID of a prior file upload request. Also returned in success responses. |
| `multiZipJobs[].jobTemplate` | string | Optional | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |
| `multiZipJobs[].filename` | string | Required | Filename of a specific file within an upload request or ZIP archive. |
| `multiZipJobs[].recipientAddressSource[singleAddress].firstName` | string | Required* | Recipient's first name. |
| `multiZipJobs[].recipientAddressSource[singleAddress].lastName` | string | Required* | Recipient's last name. |
| `multiZipJobs[].recipientAddressSource[singleAddress].address1` | string | Required* | Primary street address line. |
| `multiZipJobs[].recipientAddressSource[singleAddress].city` | string | Required* | City name. |
| `multiZipJobs[].recipientAddressSource[singleAddress].state` | string | Required* | Two-letter state or province abbreviation. |
| `multiZipJobs[].recipientAddressSource[singleAddress].zip` | string | Required* | ZIP or postal code. |
| `multiZipJobs[].recipientAddressSource[singleAddress].country` | string | Required* | Country code (e.g. USA). |
| `multiZipJobs[].recipientAddressSource[singleAddress].address2` | string | Optional | Secondary address line (suite, apartment, floor, etc.). |
| `multiZipJobs[].recipientAddressSource[singleAddress].address3` | string | Optional | Tertiary address line. |
| `multiZipJobs[].recipientAddressSource[singleAddress].foo1` | string | Optional | User-defined merge variable 1 — forwarded to the address list merge mapping for personalisation. |
| `multiZipJobs[].recipientAddressSource[singleAddress].foo2` | string | Optional | User-defined merge variable 2 — forwarded to the address list merge mapping for personalisation. |
| `multiZipJobs[].recipientAddressSource[recipientAddressByList].mappingId` | integer | Optional | Integer ID of a merge-field mapping profile that associates address columns to template variables. If omitted, the account default mapping is used. |
| `multiZipJobs[].recipientAddressSource[recipientAddressByList].addressList[].firstName` | string | Required* | Recipient's first name. |
| `multiZipJobs[].recipientAddressSource[recipientAddressByList].addressList[].lastName` | string | Required* | Recipient's last name. |
| `multiZipJobs[].recipientAddressSource[recipientAddressByList].addressList[].address1` | string | Required* | Primary street address line. |
| `multiZipJobs[].recipientAddressSource[recipientAddressByList].addressList[].city` | string | Required* | City name. |
| `multiZipJobs[].recipientAddressSource[recipientAddressByList].addressList[].state` | string | Required* | Two-letter state or province abbreviation. |
| `multiZipJobs[].recipientAddressSource[recipientAddressByList].addressList[].zip` | string | Required* | ZIP or postal code. |
| `multiZipJobs[].recipientAddressSource[recipientAddressByList].addressList[].country` | string | Required* | Country code (e.g. USA). |
| `multiZipJobs[].recipientAddressSource[recipientAddressByList].addressList[].address2` | string | Optional | Secondary address line (suite, apartment, floor, etc.). |
| `multiZipJobs[].recipientAddressSource[recipientAddressByList].addressList[].address3` | string | Optional | Tertiary address line. |
| `multiZipJobs[].recipientAddressSource[recipientAddressByList].addressList[].foo1` | string | Optional | User-defined merge variable 1 — forwarded to the address list merge mapping for personalisation. |
| `multiZipJobs[].recipientAddressSource[recipientAddressByList].addressList[].foo2` | string | Optional | User-defined merge variable 2 — forwarded to the address list merge mapping for personalisation. |
| `multiZipJobs[].recipientAddressSource[recipientAddressByList].addressListName` | string | Optional | Optional name for this address list record. |
| `multiZipJobs[].recipientAddressSource[recipientAddressByAddressId].addressId` | integer | Required* | Integer ID of a previously stored individual recipient address. |
| `multiZipJobs[].recipientAddressSource[recipientAddressByListId].addressListId` | integer | Required* | Integer ID of a previously stored recipient address list. |
| `paymentDetails[creditCardPayment].creditCard.cardType` | enum: visa | mastercard | discover | americanExpress | Optional | Card brand. Accepted values: visa, mastercard, discover, americanExpress. |
| `paymentDetails[creditCardPayment].creditCard.cardNumber` | string | Optional | Credit card number (PAN) as a string. |
| `paymentDetails[creditCardPayment].creditCard.expirationDate.month` | integer | Optional | Expiration month as an integer (1–12). |
| `paymentDetails[creditCardPayment].creditCard.expirationDate.year` | integer | Optional | Expiration year as a four-digit integer (e.g. 2027). |
| `paymentDetails[creditCardPayment].creditCard.cvv` | integer | Optional | Card security code (CVV/CVC) as an integer. |
| `paymentDetails[invoicePayment].invoice.invoiceNumber` | string | Optional | Invoice reference number. |
| `paymentDetails[invoicePayment].invoice.amountDue` | number | Optional | Amount due on the invoice. |
| `paymentDetails[achPayment].ach.routingNumber` | string | Optional | ABA bank routing number. |
| `paymentDetails[achPayment].ach.accountNumber` | string | Optional | Bank account number. |
| `paymentDetails[achPayment].ach.checkDigit` | integer | Optional | ACH check digit. |
| `paymentDetails[userCreditPayment].userCredit.amount` | number | Optional | Monetary amount (numeric value). |
| `paymentDetails[userCreditPayment].userCredit.currency` | enum: USD | EUR | GBP | CAD | AUD | Optional | ISO 4217 currency code. Accepted values: USD, EUR, GBP, CAD, AUD. |
| `tags[]` | string | Optional | Optional list of user-defined string tags for reporting and filtering. |

---

## `POST /batch/zip/address-capture`

*Rule: `submitMultiZipAddressCaptureParams`* — Request body for POST /batch/zip/address-capture — ZIP-based mailing batch with recipient addresses captured externally.

| Field Path | Type | Required | Description |
| --- | --- | --- | --- |
| `jobTemplate` | string | Optional | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |
| `zipDocumentSource[zipDocumentIdSource].zipDocumentId` | integer | Required* | Integer ID of a previously stored ZIP archive. |
| `zipDocumentSource[zipDocumentIdSource].filename` | string | Required* | Filename of a specific file within an upload request or ZIP archive. |
| `zipDocumentSource[zipRequestIdSource].requestId` | integer | Required* | Integer ID of a prior file upload request. Also returned in success responses. |
| `zipDocumentSource[zipRequestIdSource].zipFilename` | string | Required* | Filename of the ZIP file within an upload request (distinguishes the zip from other files uploaded in the same request). |
| `zipDocumentSource[zipRequestIdSource].filename` | string | Required* | Filename of a specific file within an upload request or ZIP archive. |
| `paymentDetails[creditCardPayment].creditCard.cardType` | enum: visa | mastercard | discover | americanExpress | Optional | Card brand. Accepted values: visa, mastercard, discover, americanExpress. |
| `paymentDetails[creditCardPayment].creditCard.cardNumber` | string | Optional | Credit card number (PAN) as a string. |
| `paymentDetails[creditCardPayment].creditCard.expirationDate.month` | integer | Optional | Expiration month as an integer (1–12). |
| `paymentDetails[creditCardPayment].creditCard.expirationDate.year` | integer | Optional | Expiration year as a four-digit integer (e.g. 2027). |
| `paymentDetails[creditCardPayment].creditCard.cvv` | integer | Optional | Card security code (CVV/CVC) as an integer. |
| `paymentDetails[invoicePayment].invoice.invoiceNumber` | string | Optional | Invoice reference number. |
| `paymentDetails[invoicePayment].invoice.amountDue` | number | Optional | Amount due on the invoice. |
| `paymentDetails[achPayment].ach.routingNumber` | string | Optional | ABA bank routing number. |
| `paymentDetails[achPayment].ach.accountNumber` | string | Optional | Bank account number. |
| `paymentDetails[achPayment].ach.checkDigit` | integer | Optional | ACH check digit. |
| `paymentDetails[userCreditPayment].userCredit.amount` | number | Optional | Monetary amount (numeric value). |
| `paymentDetails[userCreditPayment].userCredit.currency` | enum: USD | EUR | GBP | CAD | AUD | Optional | ISO 4217 currency code. Accepted values: USD, EUR, GBP, CAD, AUD. |
| `returnAddress.firstName` | string | Optional | Recipient's first name. |
| `returnAddress.lastName` | string | Optional | Recipient's last name. |
| `returnAddress.company` | string | Optional | Recipient's company or organisation name (optional). |
| `returnAddress.address1` | string | Optional | Primary street address line. |
| `returnAddress.city` | string | Optional | City name. |
| `returnAddress.state` | string | Optional | Two-letter state or province abbreviation. |
| `returnAddress.zip` | string | Optional | ZIP or postal code. |
| `returnAddress.country` | string | Optional | Country code (e.g. USA). |
| `returnAddress.address2` | string | Optional | Secondary address line (suite, apartment, floor, etc.). |
| `returnAddress.address3` | string | Optional | Tertiary address line. |
| `jobOptions.documentClass` | string | Optional | Document class (e.g. letter, flat). |
| `jobOptions.layout` | string | Optional | Page layout (e.g. address_on_top, address_on_bottom). |
| `jobOptions.productionTime` | string | Optional | Production time preference (e.g. next_day, standard). |
| `jobOptions.envelope` | string | Optional | Envelope type (e.g. standard, window). |
| `jobOptions.color` | string | Optional | Color mode (e.g. full_color, black_and_white). |
| `jobOptions.paperType` | string | Optional | Paper stock (e.g. white, recycled). |
| `jobOptions.printOption` | string | Optional | Duplex setting (e.g. single_sided, double_sided). |
| `jobOptions.mailClass` | string | Optional | USPS mail class (e.g. first_class, standard). |
| `tags[]` | string | Optional | Optional list of user-defined string tags for reporting and filtering. |
