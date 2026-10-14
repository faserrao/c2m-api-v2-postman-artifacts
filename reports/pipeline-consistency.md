# Pipeline consistency (DD → spec → Postman)

ERROR categories: 0  ·  known-open WARN categories: 8  ·  stale allowances: 1

## ⚠️ Known open (tracked)
- **A-DOC-TYPE-CLAIM** [*] (1) — L2 / decision D6 (errorDetails object vs string)
    - errorDetails: @doc says JSON object, DD type is string
- **A-VALID-COMBINATION-NOOP** [*] (1) — X11 / decision D5 (envelope=none rule)
    - {"when_field": "envelope", "when_value": "none", "then_field": "layout", "then_values": ["address_on_first_page", "address_on_back_page"]}
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
    - POST /static: accepts ['201', '204'] undeclared, rejects [] declared
    - POST /static/address-capture: accepts ['201', '204'] undeclared, rejects [] declared
    - POST /mail-merge: accepts ['201', '204'] undeclared, rejects [] declared

## 🧹 Stale KNOWN_OPEN entries (no longer occur — remove them)
- B-EXAMPLE-ORIGINAL-REQUEST [Test] — L6 (random auth ttl_seconds can fall below 3600 — intermittent)

✅ No ERROR findings
