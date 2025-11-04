# Click2Endpoint Application User Guide

**Version**: 1.0
**Last Updated**: 2025-10-13
**Deployment**: AWS Production Environment

---

## Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Technical Edition Guide](#technical-edition-guide)
4. [Business Edition Guide](#business-edition-guide)
5. [Access Information](#access-information)
6. [Common Use Cases](#common-use-cases)
7. [Code Generation & Execution](#code-generation--execution)
8. [Troubleshooting](#troubleshooting)
9. [Advanced Features](#advanced-features)
10. [API Reference](#api-reference)

---

## Overview

Click2Endpoint is a dual-interface application that helps users interact with the Click2Mail API. It comes in two editions designed for different user personas:

### Technical Edition
- **Audience**: Developers, technical users, API integrators
- **Approach**: Traditional wizard with structured questions
- **Authentication**: Required (Cognito login)
- **URL**: `https://d1bchh0dn7qdq7.cloudfront.net`

### Business Edition
- **Audience**: Business users, non-technical staff, managers
- **Approach**: Natural language AI-powered interface
- **Authentication**: Open access (no login required)
- **URL**: `https://d1sbnho8r9ag6q.cloudfront.net`

Both editions generate working code (Python, JavaScript, cURL) that can be executed directly in the browser or copied for use in your applications.

---

## Quick Start

### For Business Users (Non-Technical)

1. Open your browser and go to: `https://d1sbnho8r9ag6q.cloudfront.net`
2. Type a description of what you want to do in plain English
   - Example: *"I need to send personalized letters to 500 customers"*
3. The AI will analyze your needs and recommend the best API endpoint
4. Answer any clarifying questions
5. Get your working code

**No login required. Start immediately.**

### For Technical Users (Developers)

1. Open your browser and go to: `https://d1bchh0dn7qdq7.cloudfront.net`
2. Login with your credentials:
   - Username: `frank` (admin) or `developer`
   - Password: See [Access Information](#access-information) section
3. Answer structured questions about your API needs
4. Review the selected endpoint
5. Generate and test your code

---

## Technical Edition Guide

### Step 1: Login

When you first access the Technical Edition, you'll see a login screen.

**Login Credentials** (choose based on your role):
- **Admin**: `frank` / `TempPass123!@` (full access)
- **Developer**: `developer` / `DevPass123!@` (development access)
- **Tester**: `tester` / `TestPass123!@` (testing access only)

**Login Process**:
1. Enter your username
2. Enter your password
3. Click "Sign In"
4. You'll be redirected to the main application

### Step 2: Welcome Screen

After login, you'll see the welcome screen with:
- Application header with your username
- Settings gear icon (top-right)
- "Start" button to begin the wizard
- Logout option

**Before Starting**:
- Click the **Settings** icon to configure:
  - Mock Server URL (pre-configured)
  - Client ID for API authentication
  - Client Secret for API authentication

These settings are optional for testing with the mock server.

### Step 3: Wizard Navigation

The wizard guides you through selecting the right API endpoint by asking structured questions:

#### Question Flow

**Question 1: What type of job are you creating?**
- Single document job
- Multiple documents job
- PDF split job
- Merge multiple PDFs

**Question 2-N: Additional Details**
Depending on your first answer, you'll be asked about:
- Document sources (file upload, URL, zip archive)
- Address handling (embedded, separate list, mail merge)
- Template usage
- Payment methods (credit card, ACH, invoice)
- Processing options (proof required, production mode)

**Navigation**:
- **Back**: Return to previous question (available anytime)
- **Next**: Proceed after selecting an answer
- Progress bar shows your position in the wizard

### Step 4: Endpoint Selection & Results

Once you've answered all questions, the system displays:

1. **Selected Endpoint**: The API endpoint that matches your needs
2. **Endpoint Details**:
   - HTTP method (POST, GET)
   - Full API path
   - Description of what it does
3. **Your Answers Summary**: Review what you selected
4. **Documentation Link**: Direct link to endpoint documentation

### Step 5: Code Generation

Click the **"Generate Code"** button to create implementation code.

**Code Formats Available**:
- **Python**: Uses `requests` library
- **JavaScript**: Uses `fetch` API
- **cURL**: Command-line format

**Code Features**:
- Complete authentication flow (gets JWT token first)
- All required headers included
- Request body with your parameters
- Error handling
- Response parsing

**Actions**:
- **Copy**: Copy code to clipboard
- **Download**: Save as `.py`, `.js`, or `.sh` file
- **Execute**: Run the code directly in your browser (see [Code Execution](#code-execution))

### Step 6: Code Execution (Optional)

Click the **"Execute"** button to run your generated code immediately.

**Execution Process**:
1. Code is sent to a secure Lambda function
2. Lambda executes in isolated environment
3. Results appear in the Execution Output panel
4. See API response or any errors

**Note**: Execution uses the mock server by default for safe testing.

---

## Business Edition Guide

### Step 1: Access the Application

Simply navigate to: `https://d1sbnho8r9ag6q.cloudfront.net`

**No login required** - you'll immediately see the main interface.

### Step 2: Describe Your Use Case

You'll see a large text area with the prompt:
> *"Describe your mailing needs in your own words..."*

**How to Describe Your Use Case**:

Be as detailed or as brief as you like. The AI understands natural language.

**Good Examples**:
- *"I need to mail merge 500 personalized letters using a template with customer names and addresses from my database"*
- *"Send a single PDF brochure to 100 addresses"*
- *"Merge multiple PDF files into one and mail it to a list of customers"*
- *"I have a big PDF with multiple pages, each page goes to a different recipient. The addresses are embedded in the PDF."*

**What to Include**:
- What documents you're sending (letters, brochures, invoices, etc.)
- How many (single, multiple, hundreds)
- Where addresses come from (embedded, separate list, mail merge)
- Any special requirements (templates, merging, splitting)

### Step 3: AI Analysis

After you click **"Analyze with AI"**, the system:

1. **Sends your description to OpenAI GPT-4o-mini**
2. **Analyzes** your use case against 8 endpoint patterns
3. **Determines** technical attributes:
   - Document quantity (single/multiple)
   - Document structure (individual/batch)
   - Address location (embedded/separate/merge)
   - Personalization needs (static/template/custom)
   - Document aggregation requirements

4. **Recommends** the best API endpoint with confidence score

### Step 4: Review Analysis Results

The analysis screen shows:

#### Endpoint Recommendation
- **Confidence Score**: How confident the AI is (0-100%)
- **Recommended Endpoint**: Which API endpoint to use
- **Reasoning**: Why this endpoint was selected

#### Technical Details
- **Detected Attributes**: What the AI understood about your needs
- **Persona Match**: Which user persona you align with
- **Sector**: Industry/use case category

#### Discovery Questions (if needed)
If confidence is below 70%, the AI will ask clarifying questions:
- Answer these to refine the recommendation
- Click "Re-analyze" after answering
- The system will provide a better match

### Step 5: Decision Matrix View

Click **"View Decision Matrix"** to see:
- How your scenario scored against each endpoint
- Technical attributes that drove the decision
- Pattern matches from the 100% validated decision logic

This helps you understand and verify the AI's recommendation.

### Step 6: Actions

**Try Again**: Start over with a new description

**Continue to Wizard**: (Future feature) Will pre-populate the Technical Edition wizard with your AI-selected endpoint

**Export/Share**: Save your analysis for later reference

---

## Access Information

### Application URLs

| Edition | URL | Authentication |
|---------|-----|----------------|
| **Technical Edition** | `https://d1bchh0dn7qdq7.cloudfront.net` | Required |
| **Business Edition** | `https://d1sbnho8r9ag6q.cloudfront.net` | None |

### User Accounts (Technical Edition)

| Username | Password | Role | Access Level |
|----------|----------|------|--------------|
| `frank` | `TempPass123!@` | Admin + Developer | Full system access, user management |
| `developer` | `DevPass123!@` | Developer | Read, write, execute operations |
| `tester` | `TestPass123!@` | Tester | Read and test endpoints only |
| `businessuser` | `BusinessPass123!@` | Business User | Business Edition access (if auth enabled) |
| `postman-ci` | `PostmanCI123!@` | Service Account | Programmatic CI/CD access |

### AWS Cognito Details

```
User Pool ID: us-east-1_uxjK9bquL
Region: us-east-1
Web Client ID: 5nnh2f6uar3v0lqk4i49r9m8fl
Service Client ID: 63ac56fb3iq2cpm1r1arj4nku7
```

### API Endpoints

**Unified Auth API**:
```
Base URL: https://o9rqfipbc2.execute-api.us-east-1.amazonaws.com/dev/

Authentication Endpoints:
  POST /auth/tokens/long       - Get long-term JWT token (30-90 days)
  POST /auth/tokens/short      - Get short-term JWT token (15 min)
  POST /auth/tokens/refresh    - Refresh your token

Job Management Endpoints:
  POST /jobs/single-doc        - Submit single document job
  POST /jobs/multi-doc-merge   - Submit multi-doc merge job
  POST /jobs/multi-docs        - Submit multiple documents job
  GET  /jobs/{jobId}           - Get job status
  GET  /jobs                   - List all jobs
```

**Lambda Code Executors**:
```
Technical Edition: https://r6iype6kil6hdmvezev2vq4okq0wgttz.lambda-url.us-east-1.on.aws/
Business Edition:  https://d5ydmwpy5hbiqkdql72jn6pvz40azykz.lambda-url.us-east-1.on.aws/
```

**Mock Server** (for testing without real backend):
```
URL: https://8a045931-6b32-42f0-9ce2-0e933cd711ed.mock.pstmn.io
```

### Default API Credentials

For generated code examples:
```
Client ID:     test-client-123
Client Secret: super-secret-password-123
```

---

## Common Use Cases

### Use Case 1: Single Personalized Letter

**Scenario**: Send one personalized letter to one recipient using a mail merge template.

**Technical Edition Path**:
1. Login
2. Select: "Single document job"
3. Select: "Template with mail merge"
4. Select: "Address from separate source"
5. Select: "Credit card" payment
6. Generate code

**Business Edition Path**:
Type: *"I need to send a personalized letter to one customer using my letter template"*

**Endpoint**: `POST /jobs/single-doc-job-template`

---

### Use Case 2: Bulk Mailing from PDF

**Scenario**: Send 500 copies of a PDF brochure to a mailing list.

**Technical Edition Path**:
1. Login
2. Select: "Multiple documents job"
3. Select: "Same document to multiple recipients"
4. Select: "Upload PDF file"
5. Select: "Address list from file"
6. Generate code

**Business Edition Path**:
Type: *"Send a PDF brochure to 500 people from my address list"*

**Endpoint**: `POST /jobs/multi-docs-job-template`

---

### Use Case 3: PDF Split with Embedded Addresses

**Scenario**: One large PDF with multiple pages, each page has address embedded and goes to different recipient.

**Technical Edition Path**:
1. Login
2. Select: "PDF split job"
3. Select: "Addresses embedded in PDF"
4. Select: "Extract and mail separately"
5. Generate code

**Business Edition Path**:
Type: *"I have a big PDF where each page goes to a different person and the addresses are already on the pages"*

**Endpoint**: `POST /jobs/split-pdf-with-capture`

---

### Use Case 4: Merge Multiple PDFs

**Scenario**: Merge several PDF files into one document and mail it.

**Technical Edition Path**:
1. Login
2. Select: "Merge multiple PDFs"
3. Select: "Upload PDF files"
4. Select: "Single recipient"
5. Generate code

**Business Edition Path**:
Type: *"Combine 5 different PDF files into one and mail it to one address"*

**Endpoint**: `POST /jobs/multi-doc-merge-job-template`

---

### Use Case 5: Real Estate Agent Monthly Updates

**Scenario**: Real estate agent sends monthly market updates to clients using template with custom data.

**Technical Edition Path**:
1. Login
2. Select: "Single document job" (if one at a time) or "Multiple documents" (if batch)
3. Select: "Template with mail merge"
4. Select: "Data from file/database"
5. Generate code

**Business Edition Path**:
Type: *"I'm a real estate agent and need to send monthly market update letters to my 200 clients using a template with their name and local market stats"*

**Endpoint**: `POST /jobs/multi-docs-job-template`

---

### Use Case 6: Medical Agency Patient Statements

**Scenario**: Medical office sends patient statements - multiple invoices per patient, all bundled together.

**Technical Edition Path**:
1. Login
2. Select: "Multiple documents job"
3. Select: "Batch/aggregate documents"
4. Select: "Group by recipient"
5. Generate code

**Business Edition Path**:
Type: *"Send patient statements where each patient gets multiple pages bundled together - like 3 invoices for John Smith all in one envelope"*

**Endpoint**: `POST /jobs/multi-doc-merge-job-template` or `POST /jobs/multi-docs-job-template`

---

## Code Generation & Execution

### Understanding Generated Code

All generated code follows this pattern:

#### 1. Authentication Flow
```python
# Step 1: Get long-term token
response = requests.post(auth_url + '/tokens/long', json={
    'client_id': 'your-client-id',
    'client_secret': 'your-client-secret',
    'grant_type': 'client_credentials'
})
long_token = response.json()['access_token']

# Step 2: Exchange for short-term token
response = requests.post(auth_url + '/tokens/short',
    headers={'Authorization': f'Bearer {long_token}'})
short_token = response.json()['access_token']
```

#### 2. API Request
```python
# Step 3: Make API call with short-term token
response = requests.post(api_url + '/jobs/single-doc',
    headers={
        'Authorization': f'Bearer {short_token}',
        'Content-Type': 'application/json'
    },
    json={
        # Your job parameters
    })
```

#### 3. Response Handling
```python
# Step 4: Parse response
if response.status_code == 200:
    result = response.json()
    print(f"Job ID: {result['jobId']}")
    print(f"Status: {result['status']}")
else:
    print(f"Error: {response.status_code}")
    print(response.text)
```

### Code Execution Environment

When you click **"Execute"**, your code runs in:

- **Runtime**: AWS Lambda (Python 3.12 or Node.js 18.x)
- **Memory**: 512 MB
- **Timeout**: 30 seconds
- **Network**: Can access mock server and auth API
- **Isolation**: Each execution is isolated and secure
- **Output**: Captured and displayed in real-time

### Execution Results

**Success Output**:
```
 SUCCESS!

Response Status: 200
Response Body:
{
  "jobId": "job-12345",
  "status": "queued",
  "message": "Job submitted successfully"
}
```

**Error Output**:
```
 ERROR

Status Code: 401
Error Message: Unauthorized - Invalid credentials
```

### Using Generated Code in Your Application

1. **Copy the code** using the Copy button
2. **Save it** to a file:
   - Python: `mailing_script.py`
   - JavaScript: `mailing_script.js`
   - cURL: `mailing_script.sh`
3. **Update credentials**:
   - Replace `test-client-123` with your real client ID
   - Replace test secret with your real secret
   - Change mock URL to production API URL
4. **Install dependencies** (if needed):
   - Python: `pip install requests`
   - JavaScript: Built-in `fetch` API
   - cURL: Pre-installed on most systems
5. **Run**:
   - Python: `python mailing_script.py`
   - JavaScript: `node mailing_script.js`
   - cURL: `bash mailing_script.sh`

---

## Troubleshooting

### Login Issues (Technical Edition)

**Problem**: "Invalid username or password"
- **Solution**: Verify you're using the correct credentials from the [Access Information](#access-information) section
- **Note**: Passwords are case-sensitive

**Problem**: "User does not exist"
- **Solution**: Contact your administrator to create your user account

**Problem**: Stuck on "Checking authentication..."
- **Solution**:
  1. Clear your browser cache
  2. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
  3. Try incognito/private browsing mode

### Business Edition Issues

**Problem**: "OpenAI API Key Required" warning
- **Solution**: The key should be pre-configured. If you see this:
  1. Click Settings (gear icon)
  2. The key should already be filled in
  3. If not, contact your administrator

**Problem**: AI analysis is slow
- **Solution**: OpenAI API can take 5-15 seconds to analyze
- **Normal**: Wait for the analysis to complete
- **If stuck >30 seconds**: Refresh and try a simpler description

**Problem**: Low confidence score (<70%)
- **Solution**:
  1. Answer the discovery questions
  2. Click "Re-analyze"
  3. Or try rephrasing with more details

### Code Generation Issues

**Problem**: Code doesn't appear after clicking "Generate Code"
- **Solution**:
  1. Ensure you completed all wizard questions
  2. Check that an endpoint was selected
  3. Try refreshing the page and re-running the wizard

**Problem**: "Copy" button doesn't work
- **Solution**:
  1. Manually select the code (Ctrl+A/Cmd+A)
  2. Copy manually (Ctrl+C/Cmd+C)
  3. Or use the Download button

### Code Execution Issues

**Problem**: "Execution failed" or timeout
- **Solution**:
  1. Check that mock server URL is correct
  2. Verify your code syntax is valid
  3. Try executing with simpler parameters first

**Problem**: "401 Unauthorized" in execution results
- **Solution**:
  1. Check Client ID and Secret in Settings
  2. Verify auth API URL is correct
  3. Mock server shouldn't require real auth - check you're using mock URL

**Problem**: Execution output shows HTML instead of JSON
- **Solution**: You're hitting a web page instead of API
  1. Verify the API URL doesn't have extra slashes
  2. Check endpoint path is correct
  3. Ensure using mock server URL for testing

### Browser Compatibility

**Supported Browsers**:
-  Chrome/Edge (recommended)
-  Firefox
-  Safari
-  Internet Explorer (not supported)

**If experiencing issues**:
1. Update to latest browser version
2. Enable JavaScript
3. Disable ad blockers temporarily
4. Clear cache and cookies

---

## Advanced Features

### Settings Configuration

Click the **Settings** icon (gear) to configure:

#### Mock Server URL
- **Default**: Pre-configured Postman mock server
- **Custom**: Enter your own mock server URL for testing
- **Production**: Replace with real API URL when ready

#### Client Credentials
- **Client ID**: Your API client identifier
- **Client Secret**: Your API secret key (never share this)
- **Storage**: Stored locally in browser only

#### OpenAI API Key (Business Edition)
- **Purpose**: Powers AI analysis
- **Storage**: Local browser storage only
- **Security**: Never sent to our servers, only to OpenAI API

### Parameter Customization

After code generation, you can modify parameters before execution:

1. **Edit the generated code** directly in the code panel
2. **Change values** like:
   - File paths
   - Recipient addresses
   - Document names
   - Payment amounts
3. **Execute** your modified version
4. **Download** to save your customized code

### Batch Operations

**Technical Edition**:
- Use loops in generated code to process multiple jobs
- Modify the script to read from CSV/database
- Add error handling for production use

**Business Edition**:
- Describe batch scenarios: *"send 1000 letters"*
- AI will recommend batch-appropriate endpoints
- Generated code includes pagination patterns

### OAuth2 Scopes

Different user roles have different API access:

| Scope | Description | Available To |
|-------|-------------|--------------|
| `c2m-api/read` | Read jobs, templates, documents | All users |
| `c2m-api/write` | Submit jobs, create templates | Developers, Admins |
| `c2m-api/execute` | Process jobs, update status | Developers, Admins, Services |
| `c2m-api/test` | Run tests, access test endpoints | Testers, Developers, Admins |
| `c2m-api/admin` | User management, system config | Admins only |

Your generated code automatically requests appropriate scopes based on your role.

### Integration with CI/CD

Use the `postman-ci` service account for automated testing:

```bash
# Example CI/CD pipeline step
curl -X POST https://d1bchh0dn7qdq7.cloudfront.net/api/jobs \
  -H "Authorization: Bearer $CI_TOKEN" \
  -d @job_config.json
```

**Service Account Benefits**:
- Non-interactive authentication
- Dedicated execute scope
- Suitable for Jenkins, GitHub Actions, GitLab CI, etc.

---

## API Reference

### Authentication API

#### Get Long-Term Token
```http
POST /auth/tokens/long
Content-Type: application/json

{
  "grant_type": "client_credentials",
  "client_id": "your-client-id",
  "client_secret": "your-client-secret"
}

Response 200:
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "token_type": "Bearer",
  "expires_in": 7776000
}
```

#### Get Short-Term Token
```http
POST /auth/tokens/short
Authorization: Bearer <long-term-token>

Response 200:
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "token_type": "Bearer",
  "expires_in": 900
}
```

#### Refresh Token
```http
POST /auth/tokens/refresh
Authorization: Bearer <short-term-token>

Response 200:
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "token_type": "Bearer",
  "expires_in": 900
}
```

### Job Management API

#### Submit Single Document Job
```http
POST /jobs/single-doc
Authorization: Bearer <short-term-token>
Content-Type: application/json

{
  "jobTemplate": "single-doc-job-template",
  "documentSourceIdentifier": {
    "zipId": "doc-12345"
  },
  "recipientAddressSource": {
    "addressId": "addr-67890"
  },
  "paymentDetails": {
    "creditCard": {
      "cardNumber": "4111111111111111",
      "expiryDate": "12/25",
      "cvv": "123"
    }
  }
}

Response 200:
{
  "jobId": "job-abc123",
  "status": "queued",
  "message": "Job submitted successfully",
  "estimatedCompletionTime": "2025-10-13T14:30:00Z"
}
```

#### Get Job Status
```http
GET /jobs/{jobId}
Authorization: Bearer <short-term-token>

Response 200:
{
  "jobId": "job-abc123",
  "status": "processing",
  "progress": 45,
  "createdAt": "2025-10-13T14:00:00Z",
  "updatedAt": "2025-10-13T14:15:00Z"
}
```

#### List All Jobs
```http
GET /jobs?limit=10&offset=0
Authorization: Bearer <short-term-token>

Response 200:
{
  "jobs": [
    {
      "jobId": "job-abc123",
      "status": "completed",
      "createdAt": "2025-10-13T14:00:00Z"
    },
    ...
  ],
  "total": 42,
  "limit": 10,
  "offset": 0
}
```

### Available Endpoints

| Endpoint | Method | Description | OAuth Scope Required |
|----------|--------|-------------|----------------------|
| `/jobs/single-doc` | POST | Single document with template | write |
| `/jobs/multi-doc-merge` | POST | Merge multiple PDFs | write |
| `/jobs/multi-docs` | POST | Multiple documents job | write |
| `/jobs/split-pdf` | POST | Split PDF by pages | write |
| `/jobs/split-pdf-capture` | POST | Split PDF with address extraction | write |
| `/jobs/{jobId}` | GET | Get job details | read |
| `/jobs` | GET | List all jobs | read |
| `/templates` | GET | List available templates | read |
| `/templates` | POST | Create custom template | write |

### Mock Server Testing

The mock server returns realistic test data:

```json
{
  "jobId": "mock-job-12345",
  "status": "queued",
  "message": "Mock response - job accepted",
  "tracking": {
    "trackingNumber": "USPS-MOCK-67890",
    "carrier": "USPS",
    "service": "First Class Mail"
  }
}
```

**Mock Server Features**:
- No authentication required
- Instant responses
- Realistic data structures
- Safe for testing and demos

---

## Best Practices

### Security

1. **Never hardcode credentials** in production code
   - Use environment variables
   - Use secure credential storage (AWS Secrets Manager, etc.)

2. **Rotate credentials regularly**
   - Change passwords every 90 days
   - Generate new client secrets periodically

3. **Use HTTPS only**
   - All URLs use HTTPS
   - Never send credentials over HTTP

4. **Logout when finished** (Technical Edition)
   - Click logout before closing browser
   - Especially on shared computers

### Performance

1. **Cache long-term tokens**
   - Store securely for up to 30 days
   - Only fetch short-term tokens when needed

2. **Batch operations** when possible
   - Use multi-document endpoints for bulk jobs
   - Reduces API calls and improves throughput

3. **Use async/parallel processing**
   - Don't wait for each job to complete
   - Submit multiple jobs in parallel

### Development Workflow

1. **Start with mock server**
   - Test all logic with mock first
   - Verify error handling

2. **Use Business Edition for exploration**
   - Quickly find the right endpoint
   - Understand parameters needed

3. **Refine in Technical Edition**
   - Get structured parameter collection
   - Generate production-ready code

4. **Test execution in browser**
   - Verify code works before deploying
   - Debug in safe environment

5. **Deploy to production**
   - Update URLs and credentials
   - Add monitoring and logging
   - Implement retry logic

---

## Support & Resources

### Documentation

- **API Documentation**: Auto-generated from OpenAPI spec
- **Technical Guides**: Available in repository
- **Architecture Overview**: See `CLAUDE.md` in project root

### Getting Help

**For Technical Issues**:
- Check [Troubleshooting](#troubleshooting) section first
- Review browser console for errors (F12  Console)
- Check network tab for failed requests

**For Account/Access Issues**:
- Contact your system administrator
- Verify you're using correct AWS account (381491986297)

**For Bug Reports**:
Include:
- Which edition (Technical/Business)
- Browser and version
- Steps to reproduce
- Screenshots if possible
- Error messages from console

### Useful Commands

**Check current user** (Technical Edition):
- Look at top-right corner, shows username

**Clear browser cache**:
- Chrome/Edge: Ctrl+Shift+Delete
- Firefox: Ctrl+Shift+Delete
- Safari: Cmd+Option+E

**Hard refresh**:
- Windows: Ctrl+Shift+R
- Mac: Cmd+Shift+R

**Open developer console**:
- All browsers: F12

---

## Appendix A: Keyboard Shortcuts

| Shortcut | Action | Edition |
|----------|--------|---------|
| `Ctrl+K` or `Cmd+K` | Open settings | Both |
| `Ctrl+Enter` | Submit form/Execute | Both |
| `Esc` | Close modal/Cancel | Both |
| `Tab` | Navigate between fields | Both |
| `Ctrl+C` | Copy code | Both |
| `Ctrl+V` | Paste | Both |

---

## Appendix B: Error Codes

| Code | Meaning | Solution |
|------|---------|----------|
| 200 | Success | Everything worked |
| 400 | Bad Request | Check your request parameters |
| 401 | Unauthorized | Check credentials or refresh token |
| 403 | Forbidden | Insufficient permissions for this operation |
| 404 | Not Found | Check endpoint URL is correct |
| 429 | Rate Limited | Wait and retry |
| 500 | Server Error | Contact support |

---

## Appendix C: Glossary

**API (Application Programming Interface)**: A way for software to communicate with other software

**Endpoint**: A specific API URL that performs one function

**JWT (JSON Web Token)**: A secure token used for authentication

**OAuth2**: An authentication protocol used to securely access APIs

**Mock Server**: A fake API that returns test data for development

**Lambda**: AWS serverless compute service that runs code

**Cognito**: AWS service for user authentication and management

**CloudFront**: AWS content delivery network (CDN) for fast global access

**S3**: AWS object storage service for files and static websites

**Template**: A pre-designed document that can be personalized

**Mail Merge**: Combining a template with data to create personalized documents

**Batch Processing**: Processing multiple items in one operation

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-10-13 | Initial release with both editions deployed |

---

**End of User Guide**

For additional support or questions, contact your system administrator.
