# Pipeline consistency (DD → spec → Postman)

ERROR categories: 0  ·  known-open WARN categories: 8  ·  stale allowances: 0

## ⚠️ Known open (tracked)
- **A-DOC-TYPE-CLAIM** [*] (1) — L2 / decision D6 (errorDetails object vs string)
    - errorDetails: @doc says JSON object, DD type is string
- **B-EXAMPLE-ORIGINAL-REQUEST** [Test] (5) — L6 (random auth ttl_seconds can fall below 3600 — intermittent)
    - POST /auth/tokens/long / 'Long-term token issued' (201): ttl_seconds: 1561 is less than the minimum of 3600
    - POST /auth/tokens/long / 'Bad request' (400): ttl_seconds: 1561 is less than the minimum of 3600
    - POST /auth/tokens/long / 'Unauthorized' (401): ttl_seconds: 1561 is less than the minimum of 3600
    - POST /auth/tokens/long / 'Forbidden' (403): ttl_seconds: 1561 is less than the minimum of 3600
    - POST /auth/tokens/long / 'Too Many Requests' (429): ttl_seconds: 1561 is less than the minimum of 3600
- **B-NO-AUTH** [Real-World] (8) — L8 (Real-World has no auth / pre-request script)
    - Legal Firm - Court Notices: spec security [{'bearerAuth': []}]
    - Real Estate Agent - Property Marketing: spec security [{'bearerAuth': []}]
    - Medical Agency - Patient Reminders: spec security [{'bearerAuth': []}]
    - Monthly Newsletters - Bulk Distribution: spec security [{'bearerAuth': []}]
    - E-commerce Company - Product Catalog: spec security [{'bearerAuth': []}]
    - Marketing Agency - Multi-Document Campaign: spec security [{'bearerAuth': []}]
    - Reseller - Multi-ZIP Batch Processing: spec security [{'bearerAuth': []}]
    - Non-Profit - Fundraising Appeal: spec security [{'bearerAuth': []}]
- **B-OPERATION-NOT-IN-COLLECTION** [GS-Linked] (3) — L10 (Getting Started has no auth endpoints)
    - POST /auth/tokens/short
    - POST /auth/tokens/long
    - POST /auth/tokens/{tokenId}/revoke
- **B-OPERATION-NOT-IN-COLLECTION** [GS-Test] (3) — L10 (Getting Started has no auth endpoints)
    - POST /auth/tokens/short
    - POST /auth/tokens/long
    - POST /auth/tokens/{tokenId}/revoke
- **B-OPERATION-NOT-IN-COLLECTION** [Real-World] (6) — L10 (Real-World covers 4 of 7 job endpoints)
    - POST /batch/split
    - POST /batch/split/address-capture
    - POST /batch/zip/address-capture
    - POST /auth/tokens/short
    - POST /auth/tokens/long
    - POST /auth/tokens/{tokenId}/revoke
- **B-PLACEHOLDER-IN-EXAMPLE** [Test] (1) — L6 (auth examples carry <dateTime>/<string>)
    - POST /auth/tokens/:tokenId/revoke: url variable tokenId=<string>
- **B-TEST-STATUS-ASSERTION** [Test] (10) — X12 / decision D7 (global allowed-codes list)
    - POST /auth/tokens/short: accepts ['200', '204', '403', '404', '422', '500'] undeclared, rejects [] declared
    - POST /auth/tokens/long: accepts ['200', '204', '404', '422', '500'] undeclared, rejects [] declared
    - POST /auth/tokens/:tokenId/revoke: accepts ['200', '201', '400', '403', '422', '429', '500'] undeclared, rejects [] declared
    - POST /batch/split: accepts ['201', '204'] undeclared, rejects [] declared
    - POST /batch/split/address-capture: accepts ['201', '204'] undeclared, rejects [] declared
    - POST /batch/zip: accepts ['201', '204'] undeclared, rejects [] declared
    - POST /batch/zip/address-capture: accepts ['201', '204'] undeclared, rejects [] declared
    - POST /mail-merge: accepts ['201', '204'] undeclared, rejects [] declared
    - POST /static: accepts ['201', '204'] undeclared, rejects [] declared
    - POST /static/address-capture: accepts ['201', '204'] undeclared, rejects [] declared

✅ No ERROR findings
