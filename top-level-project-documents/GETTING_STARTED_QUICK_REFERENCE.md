# C2M API v2 - Quick Start Guide (Cliff Notes)

**Version**: 1.0
**Last Updated**: 2025-10-16
**Full Manual**: See `GETTING_STARTED_USER_MANUAL.md` for detailed instructions

---

## What is C2M API v2?

The C2M API v2 enables programmatic access to Click2Mail direct mail services. Submit documents, manage templates, process addresses, and track job status via API.

**Three Main Uses:**
1. API testing via Postman collections
2. Endpoint discovery via Click2Endpoint wizard
3. Production code generation (Python, JavaScript, cURL)

---

## System Components

### Core Infrastructure

**EBNF Data Dictionary** → **OpenAPI Spec** → **Postman Collections** → **Mock Server**

- **EBNF** (`data_dictionary/c2mapiv2-dd.ebnf`) - Single source of truth
- **OpenAPI** (`openapi/c2mapiv2-openapi-spec-final.yaml`) - Auto-generated API spec
- **Postman Collections** - Automated tests + 8 real-world use cases
- **Mock Server** - Cloud-hosted test server (no auth required)
- **Documentation** - GitHub Pages at `https://faserrao.github.io/c2m-api-repo/`

### User Applications

**Click2Endpoint-AWS** (Production)
- URL: `https://d2dodhc21bvs3s.cloudfront.net`
- Q&A wizard for endpoint discovery
- Code generation + live execution
- Cognito authentication required

**Click2Endpoint-NLP** (Archived)
- Natural language AI-powered discovery
- Development/research only
- Local setup required

---

## 9 Primary Endpoints

| Endpoint | Use Case |
|----------|----------|
| `/jobs/single-doc-job-template` | Single document with saved template |
| `/jobs/single-doc-with-template` | Single document, configure recipients |
| `/jobs/multi-doc-merge-job-template` | Merge multiple documents |
| `/jobs/multi-doc-with-template` | Multiple documents, one recipient |
| `/jobs/multi-docs-job-template` | Multiple documents, multiple recipients |
| `/jobs/multi-pdf-address-capture` | Extract addresses from multiple PDFs |
| `/jobs/single-pdf-address-capture` | Extract addresses from single PDF |
| `/jobs/single-pdf-split` | Split PDF and mail separately |
| `/jobs/single-pdf-split-address-capture` | Split PDF and extract addresses |

---

## Quick Start: Postman (5 Minutes)

### Access Postman

1. Go to `https://app.getpostman.com`
2. Select workspace: **"<C2M API Testing Workspace You Were Invited To>"**
3. Select environment: **"C2M Mock Environment"** (top-right dropdown)

### Run a Test Request

1. Open **Collections** → **"c2mapiv2-real-world-use-cases"**
2. Expand **"1 - Legal Firm - Certified Mail"**
3. Click **"Submit Job"** request
4. Click blue **"Send"** button
5. Review response (200 OK with job details)

**Success!** Mock server returns example data - no authentication needed.

### Understanding Requests

All requests have three main sections in the **Body** tab:

```json
{
  "jobTemplate": {
    "templateId": "your_template_id"
  },
  "documentSourceIdentifier": {
    "documentName": "document.pdf",
    "cloudStorageProvider": "aws_s3",
    "cloudObjectReference": "s3://bucket/document.pdf"
  },
  "paymentDetails": {
    "paymentMethod": "invoice",
    "invoiceDetails": {
      "invoiceNumber": "INV-001",
      "poNumber": "PO-001"
    }
  }
}
```

### Explore Other Use Cases

**8 Real-World Scenarios:**
1. Legal Firm - Certified Mail
2. Real Estate Agent - Property Marketing
3. Monthly Newsletter
4. Medical Agency - Patient Reminders (document merging)
5. Company with Embedded Addresses #1 (address extraction)
6. Company with Embedded Addresses #2 (address extraction)
7. Reseller Scenario #1 (batch processing)
8. Reseller Scenario #2 (PDF splitting)

---

## Quick Start: Click2Endpoint-AWS (10 Minutes)

### Login

1. Go to `https://d2dodhc21bvs3s.cloudfront.net`
2. Use credentials:
   - Username: `frank`, `developer`, or `tester`
   - Password: `TempPass123!`

### Use the Wizard

1. Click **"Get Started with Wizard"**
2. Answer 3 questions:
   - **Document Type**: Single, Multiple, Merge, or Split PDF
   - **Template Usage**: Yes (saved template) or No (manual config)
   - **Address Source**: API request, Saved list, or Extract from PDF
3. View recommended endpoint
4. Click **"Continue to Code Generator"**

### Generate Code

1. Choose language: **Python**, **JavaScript**, or **cURL**
2. Review generated code (includes authentication + API call)
3. Options:
   - **Copy Code** - Copy to clipboard
   - **Download** - Save as file
   - **Run Code** - Execute in AWS Lambda (browser-based)

### Customize Code

**Before using generated code, update:**
- `templateId` - Your C2M template ID
- `documentName` - Your filename
- `cloudStorageProvider` - aws_s3, azure_blob, or google_cloud
- `cloudObjectReference` - Your document path
- `paymentMethod` - invoice, creditCard, or ach
- `api_url` - Change from mock to production when ready

---

## Quick Start: NLP Version (Development Only)

**Status**: Archived in `/ARCHIVE/click2endpoint/click2endpoint-react/`

### Local Setup

```bash
cd /path/to/click2endpoint-react
npm install
cp .env.example .env.local
# Edit .env.local with OpenAI API key
npm run dev
# Open http://localhost:5173
```

### Use Natural Language

Instead of Q&A wizard, describe your scenario:

**Example Input:**
```
I need to send monthly newsletters to 500 subscribers.
I have a saved template with all the addresses.
```

Click **"Get AI Recommendation"**

- **High confidence (≥70%)** - Auto-fills wizard
- **Low confidence (<70%)** - Suggests using Q&A wizard

---

## Authentication

### Mock Server (Current Development)

**No authentication required**
- URL: `https://90b4d7da...mock.pstmn.io`
- Returns example data
- Ideal for testing

### Production API (When Deployed)

**OAuth 2.0 Client Credentials Flow**
- Auth URL: `https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth`
- Test credentials:
  - Client ID: `test-client-123`
  - Client Secret: `test-secret-456`

**Two-token system:**
1. Long-term token (30-90 days)
2. Short-term token (15 min, refreshable)

### Click2Endpoint-AWS

**Per-user Cognito authentication** (separate from C2M API)
- User Pool: `us-east-1_TOb5udmMc`
- Users: frank, developer, tester
- Passwords: `TempPass123!`

---

## Endpoint Decision Tree

Use this flowchart to choose the right endpoint:

```
1. How many documents?
   - Single → Go to step 2
   - Multiple → Go to step 2
   - Split PDF → /jobs/single-pdf-split* (go to step 3)

2. Do you have a saved template?
   - Yes → *-job-template endpoints
   - No → *-with-template endpoints

3. Where are addresses?
   - In API request → Standard endpoint
   - In template → *-job-template
   - Extract from PDF → *-address-capture
```

**Examples:**
- Single + Template + In template → `/jobs/single-doc-job-template`
- Multiple + No template + In request → `/jobs/multi-doc-with-template`
- Multiple + Extract from PDF → `/jobs/multi-pdf-address-capture`

---

## Common Request Patterns

### Single Document with Template

```json
{
  "jobTemplate": {"templateId": "your_template_id"},
  "documentSourceIdentifier": {
    "documentName": "document.pdf",
    "cloudStorageProvider": "aws_s3",
    "cloudObjectReference": "s3://bucket/path/document.pdf"
  },
  "paymentDetails": {
    "paymentMethod": "invoice",
    "invoiceDetails": {"invoiceNumber": "INV-001", "poNumber": "PO-001"}
  }
}
```

### Multiple Documents with Merge

```json
{
  "jobTemplate": {"templateId": "your_template_id"},
  "documentSourceIdentifiers": [
    {"documentName": "doc1.pdf", "cloudStorageProvider": "aws_s3", "cloudObjectReference": "s3://bucket/doc1.pdf"},
    {"documentName": "doc2.pdf", "cloudStorageProvider": "aws_s3", "cloudObjectReference": "s3://bucket/doc2.pdf"}
  ],
  "documentOptions": {"mergeDocuments": true, "mergeOrder": "sequential"},
  "paymentDetails": {"paymentMethod": "creditCard", "creditCardDetails": {"last4Digits": "1234", "cardholderName": "Name"}}
}
```

### Address Extraction

```json
{
  "documentSourceIdentifiers": [
    {"documentName": "invoices.pdf", "cloudStorageProvider": "aws_s3", "cloudObjectReference": "s3://bucket/invoices.pdf"}
  ],
  "recipientAddressSource": {
    "extractionMethod": "pdf_text_extraction",
    "addressLocation": "embedded_in_document"
  },
  "paymentDetails": {"paymentMethod": "ach", "achDetails": {"accountNumberLast4": "6789", "bankName": "Bank Name"}}
}
```

---

## Troubleshooting

### Postman Issues

**Cannot access workspace**
- Request access from administrator
- Check invitation email

**Mock server not responding**
- Verify environment selected: "C2M Mock Environment"
- Check internet connection
- Try request in browser: `https://[mock-id].mock.pstmn.io/`

**Request returns HTML instead of JSON**
- Ensure `{{baseUrl}}` variable is set
- Check URL in address bar (should not have `{{baseUrl}}` visible)

### Click2Endpoint-AWS Issues

**Login fails**
- Username is case-sensitive
- Password must be exact: `TempPass123!`
- Contact admin to reset if changed

**Code execution timeout**
- Lambda has 30-second limit
- Try using mock server (faster than production)
- Run code locally instead

**Generated code has errors**
- Install dependencies: `pip install requests` (Python) or `npm install node-fetch` (JavaScript)
- Check Python version (3.7+) or Node.js version (14+)

### General Issues

**401 Unauthorized**
- Check client_id and client_secret
- Test credentials: `test-client-123` / `test-secret-456`
- Ensure auth server is reachable

**Network errors**
- Check internet connection
- Verify API URL correct
- Try mock server first to isolate issues

---

## Key URLs

### Production Applications

- **Click2Endpoint-AWS**: `https://d2dodhc21bvs3s.cloudfront.net`
- **API Documentation**: `https://faserrao.github.io/c2m-api-repo/`
- **Postman Web**: `https://app.getpostman.com`

### API Endpoints

- **Mock Server**: `https://90b4d7da...mock.pstmn.io`
- **Auth Server**: `https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth`
- **Production API**: (Coming soon)

### AWS Infrastructure

- **Click2Endpoint-AWS CloudFront**: `https://d2dodhc21bvs3s.cloudfront.net`
- **Click2Endpoint-Business CloudFront**: `https://dq4o2pz0jd98i.cloudfront.net`
- **Lambda Executor (AWS)**: `https://qymolz6zgxpphiskaxjon2lg3q0nfbgk.lambda-url.us-east-1.on.aws/`
- **Lambda Executor (Business)**: `https://auhgbd6feg25bfym2quqtli3wq0gwixs.lambda-url.us-east-1.on.aws/`

---

## Test Credentials

### Click2Endpoint-AWS (Cognito)

```
Usernames: frank, developer, tester
Password: TempPass123!
User Pool: us-east-1_TOb5udmMc
Client ID: 2losm7hun7lraevr338uatb9b
```

### C2M API Authentication (Test)

```
Client ID: test-client-123
Client Secret: test-secret-456
Auth URL: https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth
```

### Postman API Keys

```
Personal Workspace: PMAK-your-personal-api-key-here
Team Workspace: PMAK-your-team-api-key-here
```

---

## Documentation Quick Links

### System-Wide

- **Getting Started** (Full): `GETTING_STARTED_USER_MANUAL.md`
- **Getting Started** (Quick): `GETTING_STARTED_QUICK_REFERENCE.md` (This doc)
- **Environment Variables**: `ENVIRONMENT_VARIABLES_QUICK_REFERENCE.md`
- **AWS Infrastructure**: `AWS_INFRASTRUCTURE_SUMMARY.md`

### c2m-api-repo

- **Project Memory**: `user-guides/PROJECT_MEMORY.md`
- **Quick Reference**: `user-guides/QUICK_REFERENCE.md`
- **Authentication**: `user-guides/AUTHENTICATION_GUIDE.md`
- **Postman Guide**: `user-guides/POSTMAN_COMPLETE_GUIDE.md`

### Click2Endpoint-AWS

- **README**: `click2endpoint-aws/README.md`
- **Deployment**: `click2endpoint-aws/DEPLOYMENT.md`

---

## Learning Path

### New Users (30 minutes)

1. Read this quick reference (10 min)
2. Try Postman mock server test (5 min)
3. Use Click2Endpoint-AWS wizard (10 min)
4. Generate and review code (5 min)

### Developers (2 hours)

1. All of the above
2. Read full Getting Started manual
3. Study OpenAPI specification in Postman
4. Test all 8 real-world use cases
5. Set up local development environment
6. Run generated code locally

### Product Managers (1 hour)

1. Read System Overview (this doc)
2. Try Click2Endpoint-AWS wizard with 3 scenarios
3. Review real-world use cases in Postman
4. Review API documentation website

---

## Support Resources

**Documentation**
- Full Getting Started Manual
- API Reference (GitHub Pages)
- Project Memory (c2m-api-repo)

**Self-Service Debugging**
- Postman Console: View → Show Postman Console
- Browser DevTools: F12 → Console tab
- Check localStorage: `localStorage.getItem('click2endpoint_audit_log')`

**Contact**
- Technical issues: Project administrator
- API questions: See OpenAPI spec
- Account issues: C2M support

---

## Glossary (Essential Terms)

**API** - Application Programming Interface; programmatic access to services
**Endpoint** - Specific URL path for an API operation (e.g., `/jobs/single-doc`)
**Mock Server** - Test server returning example data (no auth required)
**OpenAPI** - Industry-standard API definition format
**Postman** - API development and testing tool
**Template** - Pre-configured job settings saved in C2M account
**JWT** - JSON Web Token for secure authentication
**CloudFront** - AWS content delivery network (CDN)
**Cognito** - AWS authentication service
**Lambda** - AWS serverless compute for code execution
**EBNF** - Extended Backus-Naur Form; data structure notation

---

## 30-Second Summary

**C2M API v2** provides programmatic access to Click2Mail services.

**Test it**: Go to Postman → Select "C2M Mock Environment" → Open "Real World Use Cases" → Send request

**Build it**: Go to `https://d2dodhc21bvs3s.cloudfront.net` → Login (frank/TempPass123!) → Answer 3 wizard questions → Generate code

**Deploy it**: Customize generated code → Replace template ID and document paths → Run in your environment

**Stuck?** Check OpenAPI docs at `https://faserrao.github.io/c2m-api-repo/`

---

**Document Version**: 1.0
**Last Updated**: 2025-10-16
**See Also**: `GETTING_STARTED_USER_MANUAL.md` for comprehensive details
