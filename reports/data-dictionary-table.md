# C2M API v2 — Data Dictionary

*Generated from `c2mapiv2-dd.ebnf`. Edit `data_dictionary/c2mapiv2-dd.ebnf` to change the source of truth.*

## Endpoints

### `submitSinglePdfAddressCaptureParams`  `POST /static/address-capture`

Request body for POST /static/address-capture — recipient addresses are captured from the document by OCR rather than provided inline.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `jobTemplate` | string | Optional | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |
| `docSourceStandard` | oneOf | Required | Document source — standard (non-zip) variants only: requestId, documentId, or URL. |
| `paymentDetails` | oneOf | Optional | Payment method — one of: creditCard, invoice, ACH bank transfer, or account credit. |
| `returnAddress` | object | Optional | Optional sender return address printed on the mailpiece. |
| `jobOptions` | object | Optional | Explicit print and mail configuration options. Mutually exclusive with jobTemplate. |
| `tags` | string[] | Optional | Optional list of user-defined string tags for reporting and filtering. |

### `submitSinglePdfSplitParams`  `POST /batch/split`

Request body for POST /batch/split — split a single PDF into page ranges and mail each range to a different recipient.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `jobTemplate` | string | Optional | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |
| `docSourceStandard` | oneOf | Required | Document source — standard (non-zip) variants only: requestId, documentId, or URL. |
| `pdfSplitJobsWithAddress` | object[] | Required | List of page-range job items, each with its own inline recipient address. |
| `paymentDetails` | oneOf | Optional | Payment method — one of: creditCard, invoice, ACH bank transfer, or account credit. |
| `returnAddress` | object | Optional | Optional sender return address printed on the mailpiece. |
| `jobOptions` | object | Optional | Explicit print and mail configuration options. Mutually exclusive with jobTemplate. |
| `tags` | string[] | Optional | Optional list of user-defined string tags for reporting and filtering. |

### `submitSinglePdfSplitAddressCaptureParams`  `POST /batch/split/address-capture`

Request body for POST /batch/split/address-capture — page-range PDF split with recipient addresses captured externally (no inline addresses required).

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `jobTemplate` | string | Optional | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |
| `docSourceStandard` | oneOf | Required | Document source — standard (non-zip) variants only: requestId, documentId, or URL. |
| `pdfSplitJobsNoAddress` | object[] | Required | List of page-range job items without inline addresses — addresses are captured externally (POST /batch/split/address-capture). |
| `paymentDetails` | oneOf | Optional | Payment method — one of: creditCard, invoice, ACH bank transfer, or account credit. |
| `returnAddress` | object | Optional | Optional sender return address printed on the mailpiece. |
| `jobOptions` | object | Optional | Explicit print and mail configuration options. Mutually exclusive with jobTemplate. |
| `tags` | string[] | Optional | Optional list of user-defined string tags for reporting and filtering. |

### `submitMultiDocMergeParams`  `POST /mail-merge`

Request body for POST /mail-merge — merge multiple documents into one mailing sent to a single recipient.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `jobTemplate` | string | Optional | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |
| `mergeDocumentSource` | oneOf[] | Required | Container for the list of documents to merge (POST /mail-merge). |
| `recipientAddressSource` | oneOf | Required | Recipient address specification — one of: inline single address (with optional mapping), inline address list (with optional mapping), stored list ID, or stored address ID. |
| `paymentDetails` | oneOf | Optional | Payment method — one of: creditCard, invoice, ACH bank transfer, or account credit. |
| `returnAddress` | object | Optional | Optional sender return address printed on the mailpiece. |
| `jobOptions` | object | Optional | Explicit print and mail configuration options. Mutually exclusive with jobTemplate. |
| `tags` | string[] | Optional | Optional list of user-defined string tags for reporting and filtering. |

### `submitMultiZipParams`  `POST /batch/zip`

Request body for POST /batch/zip — mail individual files from a ZIP archive, each file to its own recipient.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `docSourceZipFileRef` | oneOf | Required | Top-level ZIP archive reference for batch endpoints — identifies the archive itself, not a file within it. No filename is required at this level. |
| `multiZipJobs` | object[] | Required | List of per-file job items extracted from a ZIP archive (POST /batch/zip). |
| `paymentDetails` | oneOf | Optional | Payment method — one of: creditCard, invoice, ACH bank transfer, or account credit. |
| `tags` | string[] | Optional | Optional list of user-defined string tags for reporting and filtering. |

### `submitMultiZipAddressCaptureParams`  `POST /batch/zip/address-capture`

Request body for POST /batch/zip/address-capture — ZIP-based mailing batch with recipient addresses captured externally.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `jobTemplate` | string | Optional | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |
| `zipDocumentSource` | oneOf | Required | ZIP document source — either a stored zip archive (zipDocumentId) or an uploaded zip archive (requestId). |
| `paymentDetails` | oneOf | Optional | Payment method — one of: creditCard, invoice, ACH bank transfer, or account credit. |
| `returnAddress` | object | Optional | Optional sender return address printed on the mailpiece. |
| `jobOptions` | object | Optional | Explicit print and mail configuration options. Mutually exclusive with jobTemplate. |
| `tags` | string[] | Optional | Optional list of user-defined string tags for reporting and filtering. |

## Data Structures

### `achDetails`

ACH payment fields: routing number, bank account number, and check digit.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `routingNumber` | string | Required | ABA bank routing number. |
| `accountNumber` | string | Required | Bank account number. |
| `checkDigit` | integer | Required | ACH check digit. |

### `achPayment`

ACH bank transfer payment.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `"ach"` | "ach" | Required | JSON property key identifying the ACH bank-transfer payment variant. |
| `achDetails` | object | Required | ACH payment fields: routing number, bank account number, and check digit. |

### `address`

Mailing address with required core fields (name, address1, city, state, zip, country) and optional extended fields (company, address2, address3, foo1, foo2).

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `firstName` | string | Required | Recipient's first name. |
| `lastName` | string | Required | Recipient's last name. |
| `address1` | string | Required | Primary street address line. |
| `city` | string | Required | City name. |
| `state` | string | Required | Two-letter state or province abbreviation. |
| `zip` | string | Required | ZIP or postal code. |
| `country` | string | Required | Country code (e.g. USA). |
| `address2` | string | Optional | Secondary address line (suite, apartment, floor, etc.). |
| `address3` | string | Optional | Tertiary address line. |
| `foo1` | string | Optional | User-defined merge variable 1 — forwarded to the address list merge mapping for personalisation. |
| `foo2` | string | Optional | User-defined merge variable 2 — forwarded to the address list merge mapping for personalisation. |

### `creditAmount`

Account credit payment fields: monetary amount and ISO currency code.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | number | Required | Monetary amount (numeric value). |
| `currency` | enum (USD | EUR | GBP | CAD | AUD) | Required | ISO 4217 currency code. Accepted values: USD, EUR, GBP, CAD, AUD. |

### `creditCardDetails`

Credit card payment fields: card type, card number, expiration date, and CVV.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `cardType` | enum (visa | mastercard | discover | americanExpress) | Required | Card brand. Accepted values: visa, mastercard, discover, americanExpress. |
| `cardNumber` | string | Required | Credit card number (PAN) as a string. |
| `expirationDate` | object | Required | Card expiration date containing month and year. |
| `cvv` | integer | Required | Card security code (CVV/CVC) as an integer. |

### `creditCardPayment`

Credit card payment.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `"creditCard"` | "creditCard" | Required | JSON property key identifying the credit-card payment variant. |
| `creditCardDetails` | object | Required | Credit card payment fields: card type, card number, expiration date, and CVV. |

### `errorResponse`

Error response structure returned for all API error conditions.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `errorType` | enum (ValidationError | AuthenticationError | AuthorizationError | ResourceNotFoundError | ServerError) | Required | High-level error category string (ValidationError, AuthenticationError, etc.). |
| `errorMessage` | string | Required | Human-readable error description. |
| `errorCode` | enum (MISSING_REQUIRED_FIELD | INVALID_ONEOF | INVALID_JSON | MISSING_AUTH_HEADER | INVALID_TOKEN | EXPIRED_TOKEN | INSUFFICIENT_PERMISSIONS | ACCOUNT_SUSPENDED | JOB_NOT_FOUND | RESOURCE_NOT_FOUND | INVALID_ENUM_VALUE | MUTUAL_EXCLUSION_VIOLATION | INVALID_FORMAT | SERVER_ERROR | DATABASE_ERROR | EXTERNAL_SERVICE_ERROR) | Required | Machine-readable error code string (e.g. MISSING_REQUIRED_FIELD). |
| `errorDetails` | string | Optional | Optional JSON object with additional error context (free-form key/value pairs). |
| `errorTrackingId` | string | Optional | Optional support tracking identifier in the format TRK-YYYYMMDD-XXXXXX. |

### `expirationDate`

Card expiration date containing month and year.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `month` | integer | Required | Expiration month as an integer (1–12). |
| `year` | integer | Required | Expiration year as a four-digit integer (e.g. 2027). |

### `invoiceDetails`

Invoice payment fields: invoice number and amount due.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `invoiceNumber` | string | Required | Invoice reference number. |
| `amountDue` | number | Required | Amount due on the invoice. |

### `invoicePayment`

Invoice payment — billed to an existing account invoice.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `"invoice"` | "invoice" | Required | JSON property key identifying the invoice payment variant. |
| `invoiceDetails` | object | Required | Invoice payment fields: invoice number and amount due. |

### `jobOptions`

Explicit print and mail configuration options. Mutually exclusive with jobTemplate.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `documentClass` | string | Required | Document class (e.g. letter, flat). |
| `layout` | string | Required | Page layout (e.g. address_on_top, address_on_bottom). |
| `productionTime` | string | Required | Production time preference (e.g. next_day, standard). |
| `envelope` | string | Required | Envelope type (e.g. standard, window). |
| `color` | string | Required | Color mode (e.g. full_color, black_and_white). |
| `paperType` | string | Required | Paper stock (e.g. white, recycled). |
| `printOption` | string | Required | Duplex setting (e.g. single_sided, double_sided). |
| `mailClass` | string | Required | USPS mail class (e.g. first_class, standard). |

### `mergeByRequestId`

Merge an uploaded document identified by its upload request ID, with an optional filename when the request contains multiple files.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `requestId` | id | Required | Integer ID of a prior file upload request. Also returned in success responses. |
| `filename` | string | Optional | Filename of a specific file within an upload request or ZIP archive. |

### `multiDocJobItem`

A single independent document job entry within a multi-doc batch.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `jobTemplate` | string | Optional | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |
| `docSourceAll` | oneOf | Required | Document source — accepts any supported variant: requestId, documentId, URL, or zip-based (zipDocumentId or zipRequestId). |
| `recipientAddressSource` | oneOf | Required | Recipient address specification — one of: inline single address (with optional mapping), inline address list (with optional mapping), stored list ID, or stored address ID. |

### `multiZipJobItem`

A single ZIP file job entry: optional job template, filename within the ZIP, and recipient address.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `jobTemplate` | string | Optional | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |
| `filename` | string | Required | Filename of a specific file within an upload request or ZIP archive. |
| `recipientAddressSource` | oneOf | Required | Recipient address specification — one of: inline single address (with optional mapping), inline address list (with optional mapping), stored list ID, or stored address ID. |

### `pdfSplitJobItemNoAddress`

A single page-range job entry: page range only (no address — used for address-capture endpoint).

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `startPage` | integer | Required | First page of this job's page range, 1-indexed (inclusive). |
| `endPage` | integer | Required | Last page of this job's page range (inclusive). Must be ≥ startPage. |

### `pdfSplitJobItemWithAddress`

A single page-range job entry: page range (startPage, endPage) plus a recipient address.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `jobTemplate` | string | Optional | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |
| `startPage` | integer | Required | First page of this job's page range, 1-indexed (inclusive). |
| `endPage` | integer | Required | Last page of this job's page range (inclusive). Must be ≥ startPage. |
| `recipientAddressSource` | oneOf | Required | Recipient address specification — one of: inline single address (with optional mapping), inline address list (with optional mapping), stored list ID, or stored address ID. |

### `recipientAddressByList`

Inline list of recipient addresses with an optional merge-field mapping ID.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `mappingId` | id | Optional | Integer ID of a merge-field mapping profile that associates address columns to template variables. If omitted, the account default mapping is used. |
| `addressList` | object[] | Required | List of recipient mailing addresses — used for batch sends and mail merge. |
| `addressListName` | string | Optional | Optional name for this address list record. |

### `requestIdSource`

Source a document from a prior file upload by request ID. If the upload request contained multiple files, filename is required to identify which one.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `requestId` | id | Required | Integer ID of a prior file upload request. Also returned in success responses. |
| `filename` | string | Optional | Filename of a specific file within an upload request or ZIP archive. |

### `returnAddress`

Optional sender return address printed on the mailpiece.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `firstName` | string | Required | Recipient's first name. |
| `lastName` | string | Required | Recipient's last name. |
| `company` | company | Optional | Recipient's company or organisation name (optional). |
| `address1` | string | Required | Primary street address line. |
| `city` | string | Required | City name. |
| `state` | string | Required | Two-letter state or province abbreviation. |
| `zip` | string | Required | ZIP or postal code. |
| `country` | string | Required | Country code (e.g. USA). |
| `address2` | string | Optional | Secondary address line (suite, apartment, floor, etc.). |
| `address3` | string | Optional | Tertiary address line. |

### `standardResponse`

Success response returned for all successful job submissions.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | string | Required | Job status string (e.g. "accepted"). |
| `message` | string | Required | Human-readable confirmation message (e.g. "Your request has been queued"). |
| `requestId` | id | Required | Integer ID of a prior file upload request. Also returned in success responses. |

### `submitDocParams`

See EBNF rule `submitDocParams`.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `jobTemplate` | string | Optional | Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions. |
| `docSourceAll` | oneOf | Required | Document source — accepts any supported variant: requestId, documentId, URL, or zip-based (zipDocumentId or zipRequestId). |
| `recipientAddressSource` | oneOf | Required | Recipient address specification — one of: inline single address (with optional mapping), inline address list (with optional mapping), stored list ID, or stored address ID. |
| `paymentDetails` | oneOf | Optional | Payment method — one of: creditCard, invoice, ACH bank transfer, or account credit. |
| `returnAddress` | object | Optional | Optional sender return address printed on the mailpiece. |
| `jobOptions` | object | Optional | Explicit print and mail configuration options. Mutually exclusive with jobTemplate. |
| `tags` | string[] | Optional | Optional list of user-defined string tags for reporting and filtering. |

### `userCreditPayment`

Payment deducted from the account's prepaid credit balance.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `"userCredit"` | "userCredit" | Required | JSON property key identifying the account-credit payment variant. |
| `creditAmount` | object | Required | Account credit payment fields: monetary amount and ISO currency code. |

### `zipDocumentIdSource`

Source a specific file within a stored ZIP archive — requires the archive ID and the filename of the target file within the archive.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `zipDocumentId` | id | Required | Integer ID of a previously stored ZIP archive. |
| `filename` | string | Required | Filename of a specific file within an upload request or ZIP archive. |

### `zipRequestIdSource`

Source a specific file within an uploaded ZIP archive — requires the upload request ID, the zip filename within that request, and the target filename in the zip.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `requestId` | id | Required | Integer ID of a prior file upload request. Also returned in success responses. |
| `zipFilename` | string | Required | Filename of the ZIP file within an upload request (distinguishes the zip from other files uploaded in the same request). |
| `filename` | string | Required | Filename of a specific file within an upload request or ZIP archive. |

## Union Type (oneOf)s

### `docSourceAll`

Document source — accepts any supported variant: requestId, documentId, URL, or zip-based (zipDocumentId or zipRequestId).

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `docSourceStandard` | oneOf | — | Document source — standard (non-zip) variants only: requestId, documentId, or URL. |
| `docSourceZipFile` | oneOf | — | Document source — zip variants: a specific file within a stored ZIP (zipDocumentId + filename) or uploaded ZIP (requestId + zipFilename + filename). |

### `docSourceStandard`

Document source — standard (non-zip) variants only: requestId, documentId, or URL.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `documentIdSource` | id | — | Source a document by its previously stored document ID. |
| `requestIdSource` | object | — | Source a document from a prior file upload by request ID. If the upload request contained multiple files, filename is required to identify which one. |
| `urlSource` | string | — | Fetch the document from an external URL at submission time. |

### `docSourceZipFile`

Document source — zip variants: a specific file within a stored ZIP (zipDocumentId + filename) or uploaded ZIP (requestId + zipFilename + filename).

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `zipDocumentIdSource` | object | — | Source a specific file within a stored ZIP archive — requires the archive ID and the filename of the target file within the archive. |
| `zipRequestIdSource` | object | — | Source a specific file within an uploaded ZIP archive — requires the upload request ID, the zip filename within that request, and the target filename in the zip. |

### `docSourceZipFileRef`

Top-level ZIP archive reference for batch endpoints — identifies the archive itself, not a file within it. No filename is required at this level.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `zipDocumentIdOnly` | id | — | Reference to a stored ZIP archive without a file selection — used at the batch job top level where individual job items select their own filenames. |
| `zipRequestIdOnly` | id | — | Reference to an uploaded ZIP archive by request ID only — used at the batch top level; individual job items carry the filename selection. |

### `mergeDocumentRef`

A single document to include in the merge — either a stored document ID or an upload request ID (with optional filename).

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `mergeByDocumentId` | id | — | Merge a stored document identified by its document ID. |
| `mergeByRequestId` | object | — | Merge an uploaded document identified by its upload request ID, with an optional filename when the request contains multiple files. |

### `paymentDetails`

Payment method — one of: creditCard, invoice, ACH bank transfer, or account credit.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `creditCardPayment` | object | — | Credit card payment. |
| `invoicePayment` | object | — | Invoice payment — billed to an existing account invoice. |
| `achPayment` | object | — | ACH bank transfer payment. |
| `userCreditPayment` | object | — | Payment deducted from the account's prepaid credit balance. |

### `recipientAddressSource`

Recipient address specification — one of: inline single address (with optional mapping), inline address list (with optional mapping), stored list ID, or stored address ID.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `singleAddress` | object | — | A single recipient mailing address (alias for address). |
| `recipientAddressByList` | object | — | Inline list of recipient addresses with an optional merge-field mapping ID. |
| `recipientAddressByAddressId` | id | — | Reference to a previously stored individual recipient address by its integer ID. |
| `recipientAddressByListId` | id | — | Reference to a previously stored recipient address list by its integer ID. |

### `zipDocumentSource`

ZIP document source — either a stored zip archive (zipDocumentId) or an uploaded zip archive (requestId).

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `zipDocumentIdSource` | object | — | Source a specific file within a stored ZIP archive — requires the archive ID and the filename of the target file within the archive. |
| `zipRequestIdSource` | object | — | Source a specific file within an uploaded ZIP archive — requires the upload request ID, the zip filename within that request, and the target filename in the zip. |

## Array Types

### `addressList`

List of recipient mailing addresses — used for batch sends and mail merge.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | object[] | — | Mailing address with required core fields (name, address1, city, state, zip, country) and optional extended fields (company, address2, address3, foo1, foo2). |

### `documentsToMerge`

Ordered array of document references to merge into one output document. Minimum two entries required.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `mergeDocumentRef` | oneOf[] | — | A single document to include in the merge — either a stored document ID or an upload request ID (with optional filename). |

### `multiDocJobs`

List of independent document-per-recipient jobs (each job has its own document source and recipient address).

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `multiDocJobItem` | object[] | — | A single independent document job entry within a multi-doc batch. |

### `multiZipJobs`

List of per-file job items extracted from a ZIP archive (POST /batch/zip).

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `multiZipJobItem` | object[] | — | A single ZIP file job entry: optional job template, filename within the ZIP, and recipient address. |

### `pdfSplitJobsNoAddress`

List of page-range job items without inline addresses — addresses are captured externally (POST /batch/split/address-capture).

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `pdfSplitJobItemNoAddress` | object[] | — | A single page-range job entry: page range only (no address — used for address-capture endpoint). |

### `pdfSplitJobsWithAddress`

List of page-range job items, each with its own inline recipient address.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `pdfSplitJobItemWithAddress` | object[] | — | A single page-range job entry: page range (startPage, endPage) plus a recipient address. |

### `tagsList`

Array of user-defined string tags.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `string` | string[] | — | A plain text string value. |

## Enumerations

### `cardType`

Card brand. Accepted values: visa, mastercard, discover, americanExpress.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `visa` | string | — |  |
| `mastercard` | string | — |  |
| `discover` | string | — |  |
| `americanExpress` | string | — |  |

### `currency`

ISO 4217 currency code. Accepted values: USD, EUR, GBP, CAD, AUD.

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `USD` | string | — |  |
| `EUR` | string | — |  |
| `GBP` | string | — |  |
| `CAD` | string | — |  |
| `AUD` | string | — |  |

### `errorCode`

Machine-readable error code string (e.g. MISSING_REQUIRED_FIELD).

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `MISSING_REQUIRED_FIELD` | string | — |  |
| `INVALID_ONEOF` | string | — |  |
| `INVALID_JSON` | string | — |  |
| `MISSING_AUTH_HEADER` | string | — |  |
| `INVALID_TOKEN` | string | — |  |
| `EXPIRED_TOKEN` | string | — |  |
| `INSUFFICIENT_PERMISSIONS` | string | — |  |
| `ACCOUNT_SUSPENDED` | string | — |  |
| `JOB_NOT_FOUND` | string | — |  |
| `RESOURCE_NOT_FOUND` | string | — |  |
| `INVALID_ENUM_VALUE` | string | — |  |
| `MUTUAL_EXCLUSION_VIOLATION` | string | — |  |
| `INVALID_FORMAT` | string | — |  |
| `SERVER_ERROR` | string | — |  |
| `DATABASE_ERROR` | string | — |  |
| `EXTERNAL_SERVICE_ERROR` | string | — |  |

### `errorType`

High-level error category string (ValidationError, AuthenticationError, etc.).

| Field / Variant | Type | Required | Description |
| --- | --- | --- | --- |
| `ValidationError` | string | — |  |
| `AuthenticationError` | string | — |  |
| `AuthorizationError` | string | — |  |
| `ResourceNotFoundError` | string | — |  |
| `ServerError` | string | — |  |

## Alias / Primitives

### `accountNumber`

Bank account number.

### `address1`

Primary street address line.

### `address2`

Secondary address line (suite, apartment, floor, etc.).

### `address3`

Tertiary address line.

### `addressId`

Integer ID of a previously stored individual recipient address.

### `addressListId`

Integer ID of a previously stored recipient address list.

### `addressListName`

Optional name for this address list record.

### `addressName`

Optional label for this recipient address record.

### `amount`

Monetary amount (numeric value).

### `amountDue`

Amount due on the invoice.

### `cardNumber`

Credit card number (PAN) as a string.

### `checkDigit`

ACH check digit.

### `city`

City name.

### `color`

Color mode (e.g. full_color, black_and_white).

### `country`

Country code (e.g. USA).

### `cvv`

Card security code (CVV/CVC) as an integer.

### `documentClass`

Document class (e.g. letter, flat).

### `documentId`

Integer ID of a previously stored or uploaded document.

### `documentIdSource`

Source a document by its previously stored document ID.

### `endPage`

Last page of this job's page range (inclusive). Must be ≥ startPage.

### `envelope`

Envelope type (e.g. standard, window).

### `errorDetails`

Optional JSON object with additional error context (free-form key/value pairs).

### `errorMessage`

Human-readable error description.

### `errorTrackingId`

Optional support tracking identifier in the format TRK-YYYYMMDD-XXXXXX.

### `filename`

Filename of a specific file within an upload request or ZIP archive.

### `firstName`

Recipient's first name.

### `foo1`

User-defined merge variable 1 — forwarded to the address list merge mapping for personalisation.

### `foo2`

User-defined merge variable 2 — forwarded to the address list merge mapping for personalisation.

### `id`

Integer identifier — alias for integer, used for all ID fields.

### `invoiceNumber`

Invoice reference number.

### `jobTemplate`

Saved job template name; pre-populates all print and mail options. Mutually exclusive with jobOptions.

### `lastName`

Recipient's last name.

### `layout`

Page layout (e.g. address_on_top, address_on_bottom).

### `mailClass`

USPS mail class (e.g. first_class, standard).

### `mappingId`

Integer ID of a merge-field mapping profile that associates address columns to template variables. If omitted, the account default mapping is used.

### `mergeByDocumentId`

Merge a stored document identified by its document ID.

### `mergeDocumentSource`

Container for the list of documents to merge (POST /mail-merge).

### `message`

Human-readable confirmation message (e.g. "Your request has been queued").

### `month`

Expiration month as an integer (1–12).

### `paperType`

Paper stock (e.g. white, recycled).

### `printOption`

Duplex setting (e.g. single_sided, double_sided).

### `productionTime`

Production time preference (e.g. next_day, standard).

### `recipientAddressByAddressId`

Reference to a previously stored individual recipient address by its integer ID.

### `recipientAddressByListId`

Reference to a previously stored recipient address list by its integer ID.

### `requestId`

Integer ID of a prior file upload request. Also returned in success responses.

### `routingNumber`

ABA bank routing number.

### `singleAddress`

A single recipient mailing address (alias for address).

### `startPage`

First page of this job's page range, 1-indexed (inclusive).

### `state`

Two-letter state or province abbreviation.

### `status`

Job status string (e.g. "accepted").

### `tags`

Optional list of user-defined string tags for reporting and filtering.

### `url`

URL from which the API will fetch the document at submission time.

### `urlSource`

Fetch the document from an external URL at submission time.

### `year`

Expiration year as a four-digit integer (e.g. 2027).

### `zip`

ZIP or postal code.

### `zipDocumentId`

Integer ID of a previously stored ZIP archive.

### `zipDocumentIdOnly`

Reference to a stored ZIP archive without a file selection — used at the batch job top level where individual job items select their own filenames.

### `zipFilename`

Filename of the ZIP file within an upload request (distinguishes the zip from other files uploaded in the same request).

### `zipRequestIdOnly`

Reference to an uploaded ZIP archive by request ID only — used at the batch top level; individual job items carry the filename selection.
