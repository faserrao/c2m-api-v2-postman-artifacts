# C2M API v2 - Complete Getting Started Guide

**Version**: 1.0
**Last Updated**: 2025-10-14
**Audience**: New users, developers, product managers, QA testers

---

## Table of Contents

1. [System Overview](#1-system-overview)
2. [Getting Started with Postman](#2-getting-started-with-postman)
3. [Using Click2Endpoint-AWS](#3-using-click2endpoint-aws)
4. [Using Click2Endpoint-NLP (AI-Powered)](#4-using-click2endpoint-nlp-ai-powered)
5. [Troubleshooting](#5-troubleshooting)
6. [Additional Resources](#6-additional-resources)

<div style="page-break-after: always;"></div>

---

# PART 1

# SYSTEM OVERVIEW

---

## 1. System Overview

### 1.1 What is C2M API v2?

The **C2M API v2** is a comprehensive Click2Mail API system that enables programmatic access to direct mail services. The system allows developers to:

- Submit single or multiple documents for mailing
- Manage document templates and mailing lists
- Process address capture from PDFs
- Split and merge PDF documents
- Track job status and handle payments

### 1.2 System Purpose

The C2M API v2 serves three primary purposes:

1. **API Definition & Testing** - Provides complete OpenAPI specification with automated testing via Postman
2. **Endpoint Discovery** - Helps users find the right API endpoint for their specific use case
3. **Code Generation** - Generates production-ready code in Python, JavaScript, and cURL

### 1.3 Functional Architecture

The system consists of several interconnected components:

```

                         C2M API v2 System                            


          
   EBNF Data Dict       OpenAPI Spec          Postman Collection  
  (Source of Truth)          (API Definition)           (Tests & Examples)  
          
                                                                   
                                                                   
                                 
                               GitHub Pages Docs          Mock Server        
                               (Redocly)                  (Postman Cloud)    
                                 
                                                                    
                                                                    
                                                         
                                                           Real World Use      
                                                           Cases Collection    
                                                         


                          User-Facing Applications                             

                                                                               
                 
    Click2Endpoint-AWS                  Click2Endpoint-NLP               
    (Production)                        (Development/AI)                 
                 
   - Cognito Authentication            - OpenAI Integration              
   - Wizard-based Discovery            - Natural Language Input          
   - Code Generation                   - AI Suggestions                  
   - Live Code Execution               - Feedback Loop                   
   - CloudFront Deployment             - Development Only                
                 
                                                                               

```

### 1.4 Key Components

#### 1.4.1 Core API Infrastructure

**EBNF Data Dictionary** (`data_dictionary/c2mapiv2-dd.ebnf`)
- Single source of truth for all API definitions
- Defines endpoints, parameters, validation rules
- Used to generate OpenAPI specification

**OpenAPI Specification** (`openapi/c2mapiv2-openapi-spec-final.yaml`)
- Auto-generated from EBNF data dictionary
- Industry-standard API definition format
- Powers documentation, mock servers, and code generation

**Postman Collections**
- **Test Collection**: Automated tests for all endpoints
- **Real World Use Cases Collection**: 8 business scenarios with example requests

**Mock Server** (`https://[mock-id].mock.pstmn.io`)
- Cloud-hosted test server
- Returns realistic example responses
- No authentication required
- Ideal for development and testing

#### 1.4.2 User Applications

**Click2Endpoint-AWS** (Production)
- URL: `https://d2dodhc21bvs3s.cloudfront.net`
- Per-user Cognito authentication
- Q&A wizard for endpoint discovery
- Code generation (Python, JavaScript, cURL)
- Live code execution via AWS Lambda
- CloudFront + S3 hosting

**Click2Endpoint-NLP** (Development)
- Archived version with OpenAI integration
- Natural language scenario input
- AI-powered endpoint suggestions
- Audit logging and feedback system
- For research and development only

### 1.5 API Endpoints Overview

The C2M API v2 provides 9 primary job submission endpoints:

| Endpoint | Purpose | Document Type | Address Source |
|----------|---------|---------------|----------------|
| `/jobs/single-doc-job-template` | Single document with saved template | Single PDF/DOCX | Saved recipient list |
| `/jobs/single-doc-with-template` | Single document, configure recipients | Single PDF/DOCX | API request |
| `/jobs/multi-doc-merge-job-template` | Merge multiple documents | Multiple PDFs | Saved recipient list |
| `/jobs/multi-doc-with-template` | Multiple documents, one recipient | Multiple files | API request |
| `/jobs/multi-docs-job-template` | Multiple documents, multiple recipients | Multiple files | Saved recipient list |
| `/jobs/multi-pdf-address-capture` | Extract addresses from PDFs | Multiple PDFs | Extracted from PDFs |
| `/jobs/single-pdf-address-capture` | Extract addresses from single PDF | Single PDF | Extracted from PDF |
| `/jobs/single-pdf-split` | Split PDF and mail separately | Single multi-page PDF | Each page = recipient |
| `/jobs/single-pdf-split-address-capture` | Split PDF and extract addresses | Single multi-page PDF | Extracted from pages |

### 1.6 Authentication

**Production API** (Not yet deployed)
- OAuth 2.0 Client Credentials flow
- Long-term token (30-90 days) + Short-term token (15 min)
- Token endpoint: `https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/`

**Mock Server** (Current Development)
- No authentication required
- Ideal for testing and development
- Returns example data

**Click2Endpoint-AWS**
- Per-user Cognito authentication
- Username: `frank`, `developer`, or `tester`
- Separate from C2M API authentication

<div style="page-break-after: always;"></div>

---

# PART 2

# GETTING STARTED WITH POSTMAN

---

## 2. Getting Started with Postman

### 2.1 Overview

Postman is the primary tool for exploring, testing, and understanding the C2M API v2. All API definitions, tests, and examples are maintained in Postman collections.

### 2.2 Accessing the Postman Workspace

#### Step 1: Get Postman Account Access

1. Contact your project administrator for workspace access
2. You'll receive an invitation to:
   - **Personal Workspace (Serrao)** - Development and testing
   - **Team Workspace (C2M)** - Team collaboration

#### Step 2: Open Postman

**Web Version**:
- Navigate to: `https://app.getpostman.com`
- Log in with your credentials
- Select the appropriate workspace from the dropdown

**Desktop App** (Recommended):
- Download from: `https://www.postman.com/downloads/`
- Install and sign in
- Better performance for large collections

#### Step 3: Navigate to C2M API v2 Workspace

```
Postman  Workspaces (top-left dropdown)  "Personal (Serrao)" or "Team (C2M)"
```

### 2.3 Understanding the Workspace Structure

Once in the workspace, you'll see:

**Collections** (Left sidebar)
- **c2mapiv2-test-collection** - Automated tests for all endpoints
- **c2mapiv2-real-world-use-cases** - 8 business scenario examples
- **c2mapiv2-linked-collection** - Linked to API definition (advanced)

**APIs** (Left sidebar, "APIs" tab)
- **C2M API v2** - OpenAPI specification viewer

**Environments** (Top-right dropdown)
- **C2M Mock Environment** - Points to mock server

**Mock Servers** (Left sidebar, "Mock Servers" tab)
- **C2M API v2 Mock** - Cloud-hosted test server

### 2.4 Checking Out the OpenAPI Spec

#### Method 1: Via APIs Tab

1. **Click "APIs" in left sidebar**
2. **Select "C2M API v2"**
3. **Click "Definition" tab**
4. You'll see the complete OpenAPI YAML specification

**What to look for:**
- **info section**: API version, description, contact info
- **servers**: Mock server URL and production URL (when deployed)
- **paths**: All available endpoints
- **components/schemas**: Data models and structures

#### Method 2: Via GitHub Pages Documentation

1. Navigate to: `https://faserrao.github.io/c2m-api-repo/`
2. This is auto-generated from the OpenAPI spec using Redocly
3. More user-friendly than raw YAML

**Features:**
- Interactive documentation
- Search functionality
- Example requests and responses
- Download OpenAPI spec button

### 2.5 Understanding Environments

Environments in Postman allow you to switch between different API servers (mock, staging, production).

#### Selecting the Mock Environment

1. **Click the environment dropdown** (top-right, shows "No Environment" by default)
2. **Select "C2M Mock Environment"**
3. The environment is now active (shows environment name in top-right)

#### What's in the Mock Environment?

Click the **eye icon** next to the environment dropdown to view variables:

```
baseUrl: https://[mock-id].mock.pstmn.io
mockServer: true
```

**Important**: The `{{baseUrl}}` variable is used in all collection requests, allowing you to switch environments easily.

### 2.6 Exploring the Real World Use Cases Collection

The **Real World Use Cases Collection** contains 8 business scenarios that demonstrate common API usage patterns.

#### Step 1: Open the Collection

1. **Click "Collections" in left sidebar**
2. **Find and click "c2mapiv2-real-world-use-cases"**
3. The collection expands to show 8 use cases

#### Step 2: Review Collection Description

1. **Click on the collection name** (top of the expanded tree)
2. **Read the "Documentation" tab** (right panel)

**You'll see:**
- Overview of the collection
- How to navigate and use it
- Complete descriptions of all 8 use cases

#### Step 3: Understanding the Use Cases

The collection includes 8 real-world scenarios:

| # | Use Case | Business Need | Endpoint |
|---|----------|---------------|----------|
| 1 | **Legal Firm - Certified Mail** | Law firm sends certified mail to clients | `/jobs/single-doc-job-template` |
| 2 | **Real Estate Agent - Property Marketing** | Realtor sends property flyers to prospects | `/jobs/single-doc-job-template` |
| 3 | **Monthly Newsletter** | Organization sends monthly newsletter to subscribers | `/jobs/single-doc-job-template` |
| 4 | **Medical Agency - Patient Reminders** | Clinic merges multiple patient documents | `/jobs/multi-doc-merge-job-template` |
| 5 | **Company with Embedded Addresses #1** | Business mails documents with addresses in PDFs | `/jobs/multi-pdf-address-capture` |
| 6 | **Company with Embedded Addresses #2** | Similar to #5, different document structure | `/jobs/multi-pdf-address-capture` |
| 7 | **Reseller Scenario #1** | Service provider batches customer mailings | `/jobs/multi-docs-job-template` |
| 8 | **Reseller Scenario #2** | Different batching strategy | `/jobs/single-pdf-split` |

#### Step 4: Navigating to a Specific Request

Let's explore **Use Case 1: Legal Firm - Certified Mail**

1. **Expand "c2mapiv2-real-world-use-cases"** in Collections sidebar
2. **Click on "1 - Legal Firm - Certified Mail"** folder
3. **Click "Submit Job"** request (inside the folder)

**You'll see three tabs:**
- **Params**: URL parameters (none for this request)
- **Authorization**: Authentication settings (none for mock server)
- **Headers**: HTTP headers (Content-Type: application/json)
- **Body**: JSON request payload (THIS IS KEY)

### 2.7 Understanding the Request Body

The **Body** tab shows the JSON payload sent to the API. This is the most important part of the request.

#### Viewing the Body

1. **Click the "Body" tab** (below the request URL)
2. **Ensure "raw" is selected** (radio buttons)
3. **Ensure "JSON" is selected** (dropdown on right)

#### Example: Legal Firm Request Body

```json
{
  "jobTemplate": {
    "templateId": "legal_certified_mail"
  },
  "documentSourceIdentifier": {
    "documentName": "legal_notice.pdf",
    "cloudStorageProvider": "aws_s3",
    "cloudObjectReference": "s3://legal-docs/notices/legal_notice.pdf"
  },
  "paymentDetails": {
    "paymentMethod": "invoice",
    "invoiceDetails": {
      "invoiceNumber": "INV-2024-001",
      "poNumber": "PO-LEGAL-123"
    }
  }
}
```

#### Breaking Down the Request

**1. `jobTemplate` (Required)**
```json
"jobTemplate": {
  "templateId": "legal_certified_mail"
}
```
- **Purpose**: Reference a saved template with recipient list
- **Key**: `templateId` must match a template saved in your C2M account
- **Alternative**: Some endpoints use `recipientAddressSource` for explicit addresses

**2. `documentSourceIdentifier` (Required)**
```json
"documentSourceIdentifier": {
  "documentName": "legal_notice.pdf",
  "cloudStorageProvider": "aws_s3",
  "cloudObjectReference": "s3://legal-docs/notices/legal_notice.pdf"
}
```
- **Purpose**: Tell API where to find the document to mail
- **Options**: `cloudStorageProvider`, `localFileId`, or `documentUrl`
- **This example**: Document stored in AWS S3

**3. `paymentDetails` (Required)**
```json
"paymentDetails": {
  "paymentMethod": "invoice",
  "invoiceDetails": {
    "invoiceNumber": "INV-2024-001",
    "poNumber": "PO-LEGAL-123"
  }
}
```
- **Purpose**: Specify how to pay for the mailing
- **Options**: `invoice`, `creditCard`, or `ach`
- **This example**: Bill to invoice with reference numbers

### 2.8 Running a Request Through the Mock Server

Now let's actually **send the request** to the mock server and see the response.

#### Step 1: Ensure Mock Environment is Selected

1. **Check top-right corner** - Should show "C2M Mock Environment"
2. If not, click dropdown and select it

#### Step 2: Review the Request URL

Look at the request URL bar (top of request):
```
POST {{baseUrl}}/jobs/single-doc-job-template
```

- **{{baseUrl}}**: Variable from environment (mock server URL)
- **Method**: POST (shown in red box on left)
- **Path**: `/jobs/single-doc-job-template`

#### Step 3: Send the Request

1. **Click the blue "Send" button** (top-right of request area)
2. Wait 1-2 seconds
3. **Response appears below** in the response panel

#### Step 4: Reviewing the Response

The response panel has multiple tabs:

**Body Tab** (Most Important)
```json
{
  "status": "success",
  "message": "Job submitted successfully",
  "jobId": "job-12345678-abcd-1234-abcd-1234567890ab",
  "jobUrl": "https://api.click2mail.com/jobs/job-12345678-abcd-1234-abcd-1234567890ab",
  "estimatedProcessingTime": "2-4 hours",
  "metadata": {
    "submittedAt": "2025-10-14T10:30:00Z",
    "documentCount": 1,
    "recipientCount": 1,
    "estimatedCost": "$1.25"
  }
}
```

**What you'll see:**
- **status**: `"success"` (mock server always returns success)
- **jobId**: Unique identifier for tracking this job
- **jobUrl**: URL to check job status (future endpoint)
- **estimatedProcessingTime**: How long until mailing
- **metadata**: Job details including cost

**Status Tab**
- HTTP Status Code: `200 OK` (success)
- Response time: ~100-500ms
- Response size: ~500 bytes

**Headers Tab**
- Content-Type: application/json
- x-mock-response-id: [unique ID]
- Other HTTP headers

**Cookies Tab**
- (Usually empty for mock server)

#### Step 5: Understanding Mock vs. Real Responses

**IMPORTANT**: The mock server returns **example data**, not real job submissions.

**Mock Server Behavior:**
- Always returns `200 OK` status
- Always returns `"status": "success"`
- Job IDs are random examples (not real)
- No actual mailing jobs are created
- Perfect for testing request format

**Real Production Server** (when deployed):
- Will validate all parameters
- Will return real job IDs
- Will create actual mailing jobs
- Will charge your account
- May return errors (400, 401, 403, 500)

### 2.9 Trying Different Use Cases

Repeat the process for other use cases to see different request patterns:

#### Use Case 4: Medical Agency (Document Merging)

1. Navigate to **"4 - Medical Agency - Patient Reminders"**
2. Click **"Submit Job"** request
3. View the **Body** tab

**Key Difference - Multiple Documents:**
```json
{
  "jobTemplate": {
    "templateId": "medical_patient_reminders"
  },
  "documentSourceIdentifiers": [
    {
      "documentName": "patient_001_reminder.pdf",
      "cloudStorageProvider": "aws_s3",
      "cloudObjectReference": "s3://medical-docs/patient_001_reminder.pdf"
    },
    {
      "documentName": "patient_001_lab_results.pdf",
      "cloudStorageProvider": "aws_s3",
      "cloudObjectReference": "s3://medical-docs/patient_001_lab_results.pdf"
    }
  ],
  "documentOptions": {
    "mergeDocuments": true,
    "mergeOrder": "sequential"
  },
  "paymentDetails": {
    "paymentMethod": "creditCard",
    "creditCardDetails": {
      "last4Digits": "4532",
      "cardholderName": "Medical Clinic Admin"
    }
  }
}
```

**Note**: `documentSourceIdentifiers` (plural) vs `documentSourceIdentifier` (singular)

#### Use Case 5: Embedded Addresses

1. Navigate to **"5 - Company with Embedded Addresses #1"**
2. Click **"Submit Job"** request
3. View the **Body** tab

**Key Difference - Address Capture:**
```json
{
  "documentSourceIdentifiers": [
    {
      "documentName": "invoices_batch_001.pdf",
      "cloudStorageProvider": "aws_s3",
      "cloudObjectReference": "s3://company-docs/invoices/batch_001.pdf"
    }
  ],
  "recipientAddressSource": {
    "extractionMethod": "pdf_text_extraction",
    "addressLocation": "embedded_in_document"
  },
  "paymentDetails": {
    "paymentMethod": "ach",
    "achDetails": {
      "accountNumberLast4": "6789",
      "bankName": "First National Bank"
    }
  }
}
```

**Note**: No `jobTemplate` - addresses extracted from PDFs instead

### 2.10 Testing with Different Parameters

You can modify requests to test different scenarios:

#### Example: Change Payment Method

1. Open any request
2. Click **Body** tab
3. **Modify** the `paymentDetails` section:

**Original (Invoice):**
```json
"paymentDetails": {
  "paymentMethod": "invoice",
  "invoiceDetails": {
    "invoiceNumber": "INV-2024-001",
    "poNumber": "PO-LEGAL-123"
  }
}
```

**Change to Credit Card:**
```json
"paymentDetails": {
  "paymentMethod": "creditCard",
  "creditCardDetails": {
    "last4Digits": "1234",
    "cardholderName": "Your Name"
  }
}
```

4. **Click "Send"** to test
5. Mock server will still return success (it doesn't validate)

**IMPORTANT**: Production server **will validate** all fields. Mock server does not.

### 2.11 Viewing Test Results

The **c2mapiv2-test-collection** includes automated tests for all endpoints.

#### Running Tests

1. **Click "Collections"** in left sidebar
2. **Hover over "c2mapiv2-test-collection"**
3. **Click the "..." (three dots)** that appears
4. **Select "Run collection"**

**Collection Runner Opens:**
1. All requests shown with checkboxes
2. Select environment: **"C2M Mock Environment"**
3. Click **"Run c2mapiv2-test-collection"** button

**Test Results:**
- Green checkmarks: Tests passed
- Red X's: Tests failed
- See response times, status codes
- Click any request to see details

### 2.12 Exporting Collection for Offline Use

You can export collections to share or use offline:

1. **Right-click** on collection name
2. **Select "Export"**
3. **Choose "Collection v2.1" format**
4. **Save JSON file**

Use cases:
- Share with team members
- Version control with git
- Import into different workspace
- Backup

<div style="page-break-after: always;"></div>

---

# PART 3

# USING CLICK2ENDPOINT-AWS

---

## 3. Using Click2Endpoint-AWS

### 3.1 Overview

**Click2Endpoint-AWS** is a production-ready web application that helps you discover the right C2M API endpoint for your use case through an interactive wizard.

**Key Features:**
- Secure per-user authentication (AWS Cognito)
- Q&A wizard for endpoint discovery
- Code generation (Python, JavaScript, cURL)
- Live code execution (AWS Lambda)
- CloudFront deployment
- Mobile-friendly dark theme UI

**URL**: `https://d2dodhc21bvs3s.cloudfront.net`

### 3.2 Accessing Click2Endpoint-AWS

#### Step 1: Navigate to the Application

Open your web browser and go to:
```
https://d2dodhc21bvs3s.cloudfront.net
```

**What you'll see:**
- Dark-themed login screen
- C2M branding
- Username and password fields

#### Step 2: Log In

**Test User Credentials:**

| Username | Password | Purpose |
|----------|----------|---------|
| `frank` | `TempPass123!` | Primary test user |
| `developer` | `TempPass123!` | Developer testing |
| `tester` | `TempPass123!` | QA testing |

1. **Enter username** (e.g., `frank`)
2. **Enter password** (`TempPass123!`)
3. **Click "Sign In"** button

**First-time Login:**
- You may be prompted to change password
- Follow the on-screen instructions
- Remember your new password

#### Step 3: Landing Page

After successful login, you'll see the **Welcome Screen**:

```

  Settings (gear icon)                    frank  Logout     

                                                             
           Welcome to Click2Endpoint Discovery              
                                                             
  Find the perfect C2M API endpoint for your use case      
  through our interactive wizard                            
                                                             
               [Get Started with Wizard]                    
                                                             
  Or browse documentation:                                  
               [View API Documentation]                     
                                                             

```

### 3.3 Using the Endpoint Discovery Wizard

The wizard asks a series of questions to determine the right endpoint for your needs.

#### Step 1: Start the Wizard

Click **"Get Started with Wizard"** button

#### Step 2: Question 1 - Document Type

**Question**: "What type of documents are you sending?"

**Options:**
- **Single document** - One PDF or Word file to mail to one or more recipients
- **Multiple documents** - Several different files to send together
- **Merge documents** - Combine multiple files into one mailing
- **Split PDF** - Separate a multi-page PDF and mail pages individually

**Example**: For mailing a single letter to multiple people, choose **"Single document"**

Click **"Next"** button after selecting

#### Step 3: Question 2 - Template Usage

**Question**: "Do you want to use a saved template?"

**Options:**
- **Yes, use saved template** - I have a pre-configured template with recipient list in C2M
- **No, configure manually** - I'll provide all details in the API request

**What are templates?**
- Templates are pre-configured jobs saved in your C2M account
- Include recipient lists, document formatting, mailing options
- Reusable for recurring mailings
- More efficient than configuring each time

**Example**: For a monthly newsletter with the same recipients, choose **"Yes, use saved template"**

Click **"Next"** button after selecting

#### Step 4: Question 3 - Recipient Address Source

**Question**: "Where are recipient addresses located?"

**Options:**
- **In API request** - I'll send addresses directly in the API call
- **Saved list (template)** - Addresses stored in my C2M template
- **Extract from document** - Addresses are inside the PDF (address capture)

**Example**: If using a saved template from Question 2, you'll likely choose **"Saved list (template)"**

Click **"Next"** button after selecting

#### Step 5: Result - Endpoint Recommendation

The wizard displays the recommended endpoint:

```

                 Endpoint Recommendation                     

                                                             
  Based on your answers, we recommend:                      
                                                             
  POST /jobs/single-doc-job-template                        
                                                             
  Description:                                              
  Submit a single document mailing job using a saved        
  template with a pre-configured recipient list. Ideal      
  for recurring mailings like newsletters, invoices, or     
  notices.                                                   
                                                             
  [View Documentation]  [Start Over]                        
                                                             
  [Continue to Code Generator]                              
                                                             

```

**Options:**
- **View Documentation**: Opens Redocly docs for this specific endpoint
- **Start Over**: Reset wizard to try a different scenario
- **Continue to Code Generator**: Generate implementation code

### 3.4 Generating Code

After the wizard recommends an endpoint, you can generate production-ready code.

#### Step 1: Click "Continue to Code Generator"

The **Code Generator** screen appears with three language options:

```

                      Code Generator                         

  Language: [ Python ] [ JavaScript ] [ cURL ]              
                                                             
     
   # Python Code Example                                 
                                                           
   import requests                                        
   import json                                            
                                                           
   # Step 1: Get long-term token                         
   auth_url = "https://...amazonaws.com/dev/auth"        
   ...                                                    
     
                                                             
  [Copy Code]  [Download]  [Run Code]                       
                                                             

```

#### Step 2: Choose Your Language

**Python** (Default)
- Uses `requests` library
- Ideal for backend services, automation
- Includes error handling
- 40-60 lines of code

**JavaScript**
- Uses `fetch` API (Node.js)
- Ideal for Node.js apps, serverless functions
- Modern async/await syntax
- 45-65 lines of code

**cURL**
- Command-line HTTP client
- Ideal for testing, shell scripts
- Can be pasted directly into terminal
- 10-20 lines

#### Step 3: Understanding the Generated Code

All generated code follows the same pattern:

**Pattern 1: Authentication** (Lines 1-20)
```python
# Step 1: Get long-term token (30-90 days)
auth_response = requests.post(
    f"{AUTH_BASE_URL}/auth/tokens/long",
    json={
        "grant_type": "client_credentials",
        "client_id": "test-client-123",
        "client_secret": "test-secret-456"
    }
)
long_term_token = auth_response.json()["access_token"]

# Step 2: Exchange for short-term token (15 min)
token_response = requests.post(
    f"{AUTH_BASE_URL}/auth/tokens/short",
    json={"long_term_token": long_term_token}
)
access_token = token_response.json()["access_token"]
```

**Pattern 2: API Request** (Lines 21-45)
```python
# Step 3: Submit job to C2M API
api_url = "https://90b4d7da...mock.pstmn.io/jobs/single-doc-job-template"

payload = {
    "jobTemplate": {
        "templateId": "your_template_id"
    },
    "documentSourceIdentifier": {
        "documentName": "your_document.pdf",
        "cloudStorageProvider": "aws_s3",
        "cloudObjectReference": "s3://your-bucket/your_document.pdf"
    },
    "paymentDetails": {
        "paymentMethod": "invoice",
        "invoiceDetails": {
            "invoiceNumber": "INV-001",
            "poNumber": "PO-001"
        }
    }
}

response = requests.post(
    api_url,
    json=payload,
    headers={
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
)
```

**Pattern 3: Response Handling** (Lines 46-60)
```python
# Step 4: Handle response
if response.status_code == 200:
    result = response.json()
    print(f"SUCCESS!")
    print(f"Job ID: {result['jobId']}")
    print(f"Status: {result['status']}")
    print(f"Estimated Cost: {result['metadata']['estimatedCost']}")
else:
    print(f"ERROR: {response.status_code}")
    print(response.text)
```

#### Step 4: Customizing the Code

Before using the generated code, you'll need to customize:

**1. Template ID** (Line ~26)
```python
"templateId": "your_template_id"  # Change this
```
Replace with your actual C2M template ID

**2. Document Source** (Lines ~29-32)
```python
"documentName": "your_document.pdf",        # Your filename
"cloudStorageProvider": "aws_s3",           # Or "azure_blob", "google_cloud"
"cloudObjectReference": "s3://your-bucket/..." # Your actual path
```

**3. Payment Details** (Lines ~34-40)
```python
"paymentMethod": "invoice",  # Or "creditCard", "ach"
"invoiceDetails": {          # Or creditCardDetails, achDetails
    "invoiceNumber": "INV-001",  # Your invoice number
    "poNumber": "PO-001"          # Your PO number
}
```

**4. API URL** (Line ~22)
```python
api_url = "https://90b4d7da...mock.pstmn.io/..."  # Mock server
# Change to production when deployed:
# api_url = "https://api.click2mail.com/v2/jobs/..."
```

#### Step 5: Using the Code

**Option 1: Copy to Clipboard**
1. Click **"Copy Code"** button
2. Paste into your IDE or text editor
3. Customize as needed
4. Run locally

**Option 2: Download File**
1. Click **"Download"** button
2. File downloads as `c2m_api_<language>.<ext>`
3. Open in your IDE
4. Customize and run

**Option 3: Run in Browser** (AWS Lambda)
1. Click **"Run Code"** button
2. Code executes in AWS Lambda (serverless)
3. See output below in **Execution Output** panel

### 3.5 Live Code Execution

Click2Endpoint-AWS includes a unique feature: **live code execution** in the browser.

#### How It Works

```
Your Browser  AWS Lambda  Execute Code  Return Output
                    
              Python/Node.js Runtime
                    
              30-second timeout
```

#### Step 1: Click "Run Code"

After generating code, click the **"Run Code"** button

**What happens:**
1. Code is sent to AWS Lambda Function URL
2. Lambda spins up a container (Python 3.12 or Node.js 18)
3. Code executes with 30-second timeout
4. Output (stdout, stderr, response) returned to browser

#### Step 2: View Execution Output

Below the code generator, an **Execution Output** panel appears:

**Success Example:**
```

                    Execution Output                         

  Status: SUCCESS (200 OK)                                  
  Execution Time: 1.2 seconds                               
                                                             
  Output:                                                    
  
  SUCCESS!                                                  
  Job ID: job-12345678-abcd-1234-abcd-1234567890ab         
  Status: success                                            
  Estimated Cost: $1.25                                      
                                                             

```

**Error Example:**
```

                    Execution Output                         

  Status: ERROR (500 Internal Server Error)                 
  Execution Time: 0.8 seconds                               
                                                             
  Error:                                                     
  
  Traceback (most recent call last):                        
    File "<string>", line 23, in <module>                  
  TypeError: 'NoneType' object is not subscriptable        
                                                             

```

#### Step 3: Debugging Execution Issues

**Common Issues:**

**1. Timeout (30 seconds)**
- Code takes too long to execute
- Usually a network issue (API not responding)
- Try reducing timeout or adding error handling

**2. Module Not Found**
- Lambda environment has limited pre-installed packages
- Python: `requests`, `json`, `urllib` available
- JavaScript: `node-fetch` available
- Add missing imports to your code

**3. Network Errors**
- Auth server not responding
- Mock server not reachable
- Check URLs in generated code

**4. Authentication Errors**
- Test credentials expired
- Auth server down
- Check client_id and client_secret

#### Security Note

**IMPORTANT**: Code execution is **sandboxed** but you should:
- Never execute code with real API keys in browser
- Use test credentials only
- For production, run code server-side
- Lambda execution is for testing/demo purposes only

### 3.6 Configuring API Credentials (Settings)

Click2Endpoint-AWS allows you to configure C2M API credentials for code generation.

#### Step 1: Open Settings

Click the **Settings (gear icon)** in the top-right corner

**Settings Modal Opens:**
```

                    Settings                                 

                                                             
  API Configuration                                          
  
                                                             
  API Base URL:                                             
  [https://90b4d7da...mock.pstmn.io                    ]   
                                                             
  Auth Server URL:                                          
  [https://...amazonaws.com/dev/auth                    ]   
                                                             
  Client Credentials                                         
  
                                                             
  Client ID:                                                
  [test-client-123                                       ]   
                                                             
  Client Secret:                                            
  [                                     ]   
                                                             
  [ Test Connection ]                                       
                                                             
  [Cancel]  [Save Changes]                                 
                                                             

```

#### Step 2: Understanding Settings

**API Base URL**
- URL of the C2M API server
- Default: Mock server (`https://90b4d7da...mock.pstmn.io`)
- Production: `https://api.click2mail.com/v2` (when deployed)

**Auth Server URL**
- URL of the authentication service
- Default: `https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth`
- Used for JWT token exchange

**Client ID**
- Your application's identifier
- Test default: `test-client-123`
- Production: Obtain from C2M support

**Client Secret**
- Your application's secret key
- Test default: `test-secret-456`
- **IMPORTANT**: Never commit to git or share publicly
- Production: Obtain from C2M support

#### Step 3: Testing Connection

1. **Enter your credentials** (or use defaults)
2. **Click "Test Connection"** button

**Success Response:**
```
Connection successful!
Auth server reachable
Long-term token obtained
Short-term token exchanged
Ready to use
```

**Failure Response:**
```
Connection failed
Error: 401 Unauthorized
Invalid client credentials
```

#### Step 4: Saving Settings

1. **Click "Save Changes"** button
2. Settings saved to browser `sessionStorage`
3. Used in generated code
4. Cleared when browser tab closes (security feature)

### 3.7 Viewing API Documentation

From anywhere in Click2Endpoint-AWS, you can open the API documentation.

#### Method 1: From Welcome Screen

Click **"View API Documentation"** button

#### Method 2: From Result Screen

After wizard completion, click **"View Documentation"** button

#### What Opens

A new browser tab opens to:
```
https://faserrao.github.io/c2m-api-repo/
```

This is the **Redocly-generated documentation** from the OpenAPI spec.

**Features:**
- Complete API reference
- Interactive examples
- Search functionality
- Request/response schemas
- Error code documentation

**Direct Link to Specific Endpoint:**

When clicking from the result screen, the URL includes an anchor:
```
https://faserrao.github.io/c2m-api-repo/#operation/submitSingleDocWithTemplateParams
```

This jumps directly to the recommended endpoint documentation.

### 3.8 Troubleshooting Click2Endpoint-AWS

#### Issue 1: Login Fails

**Symptom**: "User does not exist" or "Incorrect username or password"

**Solutions:**
1. Double-check username (case-sensitive)
2. Ensure password is exactly `TempPass123!`
3. If changed password, use new password
4. Contact administrator to reset user

#### Issue 2: Wizard Shows No Results

**Symptom**: After answering questions, no endpoint recommended

**Solutions:**
1. Try different answer combinations
2. Check browser console for errors (F12  Console tab)
3. Refresh page and try again

#### Issue 3: Code Execution Fails

**Symptom**: "ERROR" in Execution Output

**Common Causes:**
1. **Timeout**: Code took longer than 30 seconds
   - Try using mock server (faster than production)

2. **Network Error**: Can't reach API server
   - Check API Base URL in Settings
   - Ensure mock server is online

3. **Authentication Error**: Invalid credentials
   - Test connection in Settings
   - Use default test credentials

#### Issue 4: Generated Code Has Errors

**Symptom**: Syntax errors or runtime errors when running locally

**Solutions:**
1. Ensure you have required dependencies installed:
   - Python: `pip install requests`
   - JavaScript: `npm install node-fetch`

2. Check Python version (requires 3.7+)
3. Check Node.js version (requires 14+)

#### Issue 5: Page Doesn't Load

**Symptom**: Blank screen or "ERR_CONNECTION_REFUSED"

**Solutions:**
1. Check internet connection
2. Try different browser
3. Clear browser cache (Ctrl+Shift+Delete)
4. Try incognito/private window

<div style="page-break-after: always;"></div>

---

# PART 4

# USING CLICK2ENDPOINT-NLP (AI-POWERED)

---

## 4. Using Click2Endpoint-NLP (AI-Powered)

### 4.1 Overview

**Click2Endpoint-NLP** is an archived **development version** that includes OpenAI integration for natural language endpoint discovery.

**IMPORTANT**: This is a **research/development tool**, not for production use.

**Key Features:**
- Natural language input (freeform text)
- AI-powered endpoint suggestions (OpenAI GPT-4o-mini)
- Confidence scoring (0-100%)
- User feedback collection
- Audit logging

**Status**: Archived in `/ARCHIVE/click2endpoint/click2endpoint-react/`

### 4.2 Differences from Click2Endpoint-AWS

| Feature | Click2Endpoint-AWS | Click2Endpoint-NLP |
|---------|-------------------|-------------------|
| Authentication | AWS Cognito | None (local only) |
| Input Method | Q&A Wizard | Natural language text |
| AI Integration | None | OpenAI GPT-4o-mini |
| Code Execution | AWS Lambda | Local Express server |
| Deployment | CloudFront | Local dev only |
| Production Ready | Yes | No (research) |

### 4.3 When to Use NLP Version

**Use Click2Endpoint-NLP when:**
- Exploring AI-powered discovery
- Testing natural language input
- Research and development
- Gathering user feedback data

**Use Click2Endpoint-AWS when:**
- Building production applications
- Demonstrating to customers
- Need secure authentication
- Want live code execution

### 4.4 Setting Up Click2Endpoint-NLP Locally

Since NLP version is not deployed, you must run it locally.

#### Prerequisites

- Node.js 14+ installed
- npm or yarn installed
- OpenAI API key (optional, for AI features)

#### Step 1: Navigate to Project

```bash
cd /Users/frankserrao/Dropbox/Customers/c2m/projects/c2m-api/C2M_API_v2/ARCHIVE/click2endpoint/click2endpoint-react
```

#### Step 2: Install Dependencies

```bash
npm install
```

**Expected output:**
```
added 267 packages, and audited 268 packages in 15s
```

#### Step 3: Configure Environment

Create `.env.local` file:

```bash
# Copy from example
cp .env.example .env.local

# Edit with your keys
nano .env.local  # or use your preferred editor
```

**Required variables:**
```bash
# OpenAI API Key (for AI features)
VITE_OPENAI_API_KEY=sk-proj-your-key-here

# Mock Server (default provided)
VITE_DEFAULT_MOCK_URL=https://90b4d7da...mock.pstmn.io

# Auth Server (for code generation)
VITE_AUTH_BASE_URL=https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth

# Test Credentials
VITE_DEFAULT_CLIENT_ID=test-client-123
VITE_DEFAULT_CLIENT_SECRET=test-secret-456
```

#### Step 4: Start Development Server

```bash
npm run dev
```

**Expected output:**
```
  VITE v4.5.0  ready in 523 ms

  Local:   http://localhost:5173/
  Network: use --host to expose
  press h to show help
```

#### Step 5: Open in Browser

Navigate to: `http://localhost:5173`

### 4.5 Using Natural Language Input

The NLP version replaces the Q&A wizard with a freeform text input.

#### Step 1: Welcome Screen

You'll see a **text area** instead of wizard buttons:

```

         Welcome to Click2Endpoint NLP Discovery            

                                                             
  Describe your mailing scenario in plain English:          
                                                             
   
   I need to send monthly newsletters to 500             
   subscribers. I have a saved template with all the     
   addresses. Each newsletter is a single PDF.           
                                                          
                                                          
   
                                                             
             [Get AI Recommendation]                         
                                                             
  Or use traditional wizard:                                
             [Use Q&A Wizard Instead]                       
                                                             

```

#### Step 2: Describe Your Scenario

**Example Scenarios:**

**Simple Newsletter:**
```
I need to mail a newsletter to my subscriber list.
I have a template saved in C2M with all the addresses.
```

**Legal Notices:**
```
I'm a law firm sending certified mail notices.
Each notice is a single PDF, and I use the same template
every time with addresses from our client database.
```

**Medical Reminders:**
```
We need to merge multiple documents (patient info, lab results,
appointment card) into one package per patient. We have about
50 patients per batch.
```

**Invoices with Embedded Addresses:**
```
We generate invoices as PDFs that already have the customer
addresses printed on them. We want to extract those addresses
and mail the invoices without manually entering addresses.
```

**Key Information to Include:**
- How many documents? (single vs. multiple)
- Do you have a saved template?
- Where are addresses? (template, API request, or in PDF)
- Any special processing? (merge, split, address capture)

#### Step 3: Get AI Recommendation

Click **"Get AI Recommendation"** button

**What happens:**
1. Your text is sent to OpenAI GPT-4o-mini
2. AI analyzes the scenario
3. AI determines the best endpoint
4. AI assigns confidence score (0-100%)
5. AI pre-populates wizard answers

**Loading indicator appears** (2-5 seconds)

#### Step 4: Review AI Suggestion

**High Confidence (70%) - Auto-fills wizard:**
```

              AI Recommendation                              

                                                             
  Confidence: 92%                                            
                                                             
  Recommended Endpoint:                                      
  POST /jobs/single-doc-job-template                        
                                                             
  Reasoning:                                                 
  Based on your description of a monthly newsletter with    
  a saved template and subscriber list, this endpoint is    
  ideal. It supports single documents with pre-configured   
  recipient lists.                                           
                                                             
  Pre-filled Answers:                                        
  - Document Type: Single document                          
  - Template Usage: Yes, use saved template                 
  - Address Source: Saved list (template)                   
                                                             
  [Accept & Continue]  [Edit Answers]  [Try Again]         
                                                             

```

**Low Confidence (<70%) - Shows suggestion only:**
```

              AI Suggestion (Low Confidence)                 

                                                             
  Confidence: 45%                                            
                                                             
  I'm not very confident about this scenario. You may want  
  to use the Q&A wizard for more accurate results.          
                                                             
  Possible Endpoint:                                         
  POST /jobs/multi-doc-merge-job-template                   
                                                             
  [Use Q&A Wizard]  [Try Describing Differently]           
                                                             

```

#### Step 5: Accept or Refine

**Option 1: Accept & Continue** (high confidence)
- Wizard is pre-filled with AI answers
- You can review each step
- Change answers if needed
- Proceed to code generation

**Option 2: Edit Answers** (high confidence)
- Jump to wizard with AI suggestions shown
- Modify answers as needed
- AI badges show which were AI-suggested

**Option 3: Try Again** (any confidence)
- Return to text input
- Describe scenario differently
- Get new AI recommendation

**Option 4: Use Q&A Wizard** (low confidence)
- Skip AI, use traditional wizard
- More predictable results

### 4.6 Understanding AI Suggestions

#### How AI Determines Endpoints

The AI uses the following logic:

**1. Endpoint Context** (Provided in system prompt)
```
All 9 endpoint descriptions from endpointMap
Decision tree questions with possible values
Expected JSON response format
```

**2. User Input Analysis**
- Extracts key phrases: "single document", "saved template", "subscriber list"
- Maps phrases to decision tree values
- Considers endpoint descriptions

**3. Confidence Calculation**
- Explicit matches (e.g., "single document") = high confidence
- Inferred requirements = medium confidence
- Ambiguous or missing info = low confidence

**Example Mappings:**

| User Phrase | Decision Value | Endpoint Hint |
|-------------|----------------|---------------|
| "single document", "one PDF" | `docType: "single"` | `/single-doc-*` |
| "multiple files", "several documents" | `docType: "multi"` | `/multi-doc-*` or `/multi-docs-*` |
| "merge", "combine" | `docType: "merge"` | `/multi-doc-merge-*` |
| "split PDF" | `docType: "pdfSplit"` | `/single-pdf-split*` |
| "saved template", "pre-configured" | `templateUsage: "true"` | `*-job-template` |
| "configure manually", "send addresses" | `templateUsage: "false"` | `*-with-template` |
| "addresses in PDF", "extract addresses" | `recipientStyle: "addressCapture"` | `*-address-capture` |

#### AI Badges in Wizard

After accepting an AI suggestion, the wizard shows **AI-suggested indicators** next to AI-generated answers:

```
Question: What type of documents are you sending?

  (selected) Single document (AI suggested)
   Multiple documents
   Merge documents
   Split PDF
```

This helps you understand which answers came from AI vs. manual selection.

### 4.7 Providing Feedback

The NLP version includes a feedback system to improve AI accuracy.

#### Step 1: After Using AI Suggestion

Once you complete the wizard and generate code, you'll see a feedback panel:

```

                    Feedback                                 

                                                             
  Was this AI suggestion helpful?                           
                                                             
            [Yes]    [No]                                   
                                                             

```

#### Step 2: Click Thumbs Up or Down

**Thumbs Up (Yes)**
- AI suggestion was accurate
- You accepted the recommendation
- Endpoint was correct for your use case

**Thumbs Down (No)**
- AI suggestion was wrong
- You had to change answers
- Different endpoint was needed

#### Step 3: Optional Comment

After clicking, a comment box appears:

```

                    Feedback                                 

                                                             
  Thank you for your feedback!                              
                                                             
  Any additional comments? (optional)                       
                                                             
   
   The AI correctly identified my use case, but I would  
   prefer if it explained why it chose this endpoint.    
   
                                                             
  [Submit]  [Skip]                                          
                                                             

```

#### Step 4: Submit Feedback

Click **"Submit"** button

**What happens:**
1. Feedback saved to browser `localStorage`
2. Audit log entry created with:
   - Your input text
   - AI suggestion
   - Your actual selection
   - Whether you accepted
   - Your feedback
3. Stored locally (not sent to server)

### 4.8 Viewing Audit Logs

The NLP version tracks all AI interactions for analysis.

#### Accessing Logs

Open browser developer console:
1. Press **F12** (or Cmd+Option+I on Mac)
2. Click **"Console" tab**
3. Type:
```javascript
localStorage.getItem('click2endpoint_audit_log')
```
4. Press Enter

#### Log Format

```json
[
  {
    "timestamp": "2025-10-14T10:30:00.000Z",
    "userInput": "I need to send monthly newsletters to 500 subscribers...",
    "aiSuggestion": {
      "endpoint": "/jobs/single-doc-job-template",
      "confidence": 92,
      "suggestedAnswers": {
        "docType": "single",
        "templateUsage": "true",
        "recipientStyle": "template"
      }
    },
    "userSelection": {
      "endpoint": "/jobs/single-doc-job-template",
      "answers": {
        "docType": "single",
        "templateUsage": "true",
        "recipientStyle": "template"
      }
    },
    "accepted": true,
    "feedback": {
      "helpful": true,
      "comment": "Very accurate suggestion!",
      "timestamp": "2025-10-14T10:32:15.000Z"
    }
  }
]
```

#### Exporting Logs

To export logs for analysis:

1. Open console (F12)
2. Type:
```javascript
copy(localStorage.getItem('click2endpoint_audit_log'))
```
3. Press Enter
4. Logs copied to clipboard
5. Paste into text file and save

#### Analyzing Accuracy

The NLP version includes built-in accuracy calculation.

Open console and type:
```javascript
// Import the function
import { calculateAccuracy } from './src/services/nlpService'

// Calculate
calculateAccuracy()
```

**Returns:**
```json
{
  "totalSuggestions": 25,
  "accepted": 22,
  "helpful": 20,
  "accuracy": 88.0
}
```

**Metrics:**
- **totalSuggestions**: How many times AI made a suggestion
- **accepted**: How many times user accepted without changes
- **helpful**: How many times user clicked thumbs up
- **accuracy**: Percentage of accepted suggestions

### 4.9 Comparing AI vs. Rule-Based Decision Matrix

The C2M API v2 project includes two approaches to endpoint discovery:

#### Approach 1: AI (OpenAI GPT-4o-mini)

**Location**: Click2Endpoint-NLP (`nlpService.ts`)

**Pros:**
- Handles natural language
- Understands context and intent
- Flexible input (any phrasing works)
- Can explain reasoning

**Cons:**
- Requires OpenAI API key
- Costs ~$0.0001 per request
- Requires internet connection
- Non-deterministic (varies slightly)
- Slower (2-5 seconds)

**Best for:**
- Non-technical users
- Exploratory scenarios
- Research and development

#### Approach 2: Rule-Based Decision Matrix

**Location**: `find-objecs-in-scenarios/decision_matrix.py`

**Pros:**
- 100% deterministic
- Free (no API costs)
- Instant response (<1ms)
- Works offline
- Validated against 8 scenarios (100% accuracy)

**Cons:**
- Rigid pattern matching
- Only handles known scenarios
- Requires technical attributes as input
- No natural language understanding

**Best for:**
- Production systems
- Predictable use cases
- Performance-critical applications

#### Hybrid Approach (Recommended)

Combine both approaches:

```
User Input  Try Decision Matrix First
                    
               Pattern Match?
                         
              YES         NO
                          
          Return      Try OpenAI
          Endpoint       API
                          
           Use Result  Return
                       Suggestion
                           
                    Log for Future
                    Pattern Addition
```

**Benefits:**
- Fast for known patterns (decision matrix)
- Falls back to AI for novel scenarios
- AI results improve decision matrix over time
- Best of both worlds

### 4.10 Troubleshooting NLP Version

#### Issue 1: OpenAI API Key Not Working

**Symptom**: "OpenAI API key not configured" or 401 errors

**Solutions:**
1. Ensure you have billing enabled on OpenAI account
   - Go to `https://platform.openai.com/account/billing`
   - Add payment method
   - Add at least $5 credit

2. Check API key is correct:
   - Go to `https://platform.openai.com/account/api-keys`
   - Verify key starts with `sk-proj-`
   - Copy key exactly (no spaces)

3. Set in `.env.local`:
```bash
VITE_OPENAI_API_KEY=sk-proj-your-actual-key
```

4. Restart dev server:
```bash
# Stop server (Ctrl+C)
npm run dev
```

#### Issue 2: AI Returns Low Confidence

**Symptom**: Confidence score below 70%, no auto-fill

**Reasons:**
- Input is too vague
- Missing key details (document type, address source)
- Scenario doesn't match any endpoint pattern

**Solutions:**
1. Add more specific details:
```
Bad:  "I need to mail documents"
Good: "I need to mail a single PDF newsletter to 500 subscribers
       using a saved template with their addresses"
```

2. Include technical details:
   - How many documents?
   - Do you have a template?
   - Where are addresses coming from?

3. Use the Q&A wizard instead (more predictable)

#### Issue 3: Code Execution Fails

**Symptom**: Generated code doesn't run locally

**Solutions:**

**Python:**
```bash
# Install required package
pip install requests

# Run code
python c2m_api_python.py
```

**JavaScript:**
```bash
# Install required package
npm install node-fetch

# Run code
node c2m_api_javascript.js
```

**cURL:**
```bash
# Ensure jq is installed (for JSON parsing)
brew install jq  # macOS
sudo apt-get install jq  # Linux

# Run script
bash c2m_api_curl.sh
```

#### Issue 4: Feedback Not Saving

**Symptom**: Feedback disappears after page refresh

**Reason**: localStorage is domain-specific

**Solutions:**
1. Ensure you're on `localhost:5173` consistently
2. Check browser allows localStorage (not in private mode)
3. View logs to verify:
```javascript
localStorage.getItem('click2endpoint_audit_log')
```

<div style="page-break-after: always;"></div>

---

# PART 5

# TROUBLESHOOTING

---

## 5. Troubleshooting

### 5.1 Common Issues Across All Components

#### Authentication Issues

**Postman: "Invalid API Key"**
- Verify key in Settings  API Keys
- Check key hasn't expired
- Try regenerating key

**Click2Endpoint-AWS: Login fails**
- Username is case-sensitive
- Password must match exactly
- Contact admin to reset password

**C2M API: 401 Unauthorized**
- Check client_id and client_secret
- Ensure auth server is reachable
- Try test credentials first

#### Network Issues

**Cannot reach mock server**
- Check internet connection
- Verify mock server URL
- Try in Postman first (eliminates app issues)

**Slow API responses**
- Mock server is usually fast (<1s)
- Production server may take 2-5s
- Check your network speed

#### Code Issues

**Generated code has syntax errors**
- Ensure you copied complete code
- Check for truncation
- Download file instead of copy/paste

**Code runs but returns errors**
- Validate JSON payload
- Check required fields
- Review error message carefully

### 5.2 Getting Help

#### Documentation

- **This Guide**: Complete getting started manual
- **API Reference**: `https://faserrao.github.io/c2m-api-repo/`
- **Project Memory**: `user-guides/PROJECT_MEMORY.md` (in c2m-api-repo)
- **Quick Reference**: `user-guides/QUICK_REFERENCE.md` (in c2m-api-repo)

#### Support Contacts

- **Technical Issues**: Contact your project administrator
- **API Questions**: Refer to OpenAPI spec in Postman
- **Account Issues**: C2M support team

#### Self-Service

**Postman Console**
- View raw request/response data
- View  Show Postman Console
- Helps debug issues

**Browser Developer Tools**
- Press F12 (or Cmd+Option+I on Mac)
- Console tab: See JavaScript errors
- Network tab: See API requests
- Application tab: View localStorage

**Check Logs**
- Click2Endpoint-NLP: localStorage audit logs
- AWS Lambda: CloudWatch Logs (for execution issues)

<div style="page-break-after: always;"></div>

---

# PART 6

# ADDITIONAL RESOURCES

---

## 6. Additional Resources

### 6.1 Documentation

**System-Wide Documentation:**
- **This Guide**: `GETTING_STARTED_USER_MANUAL.md` (You are here!)
- **Environment Variables**: `ENVIRONMENT_VARIABLES_QUICK_REFERENCE.md`
- **Architecture**: `CLAUDE.md` (project root)

**c2m-api-repo Documentation:**
- **Project Memory**: `user-guides/PROJECT_MEMORY.md` - Comprehensive knowledge base
- **Quick Reference**: `user-guides/QUICK_REFERENCE.md` - Cheat sheet
- **Authentication**: `user-guides/AUTHENTICATION_GUIDE.md`
- **Postman Guide**: `user-guides/POSTMAN_COMPLETE_GUIDE.md`
- **Customer Onboarding**: `user-guides/CUSTOMER_ONBOARDING_GUIDE.md`

**Click2Endpoint-AWS Documentation:**
- **README**: `click2endpoint-aws/README.md`
- **Deployment**: `click2endpoint-aws/DEPLOYMENT.md`

**API Documentation:**
- **GitHub Pages**: `https://faserrao.github.io/c2m-api-repo/`
- **OpenAPI Spec**: Available in Postman "APIs" tab

### 6.2 Learning Path

**For New Users:**
1. Read this guide (sections 1-2)
2. Explore Postman workspace
3. Run Real World Use Cases Collection
4. Try Click2Endpoint-AWS wizard
5. Generate and test code

**For Developers:**
1. All of the above
2. Read OpenAPI specification
3. Study generated code patterns
4. Set up local development environment
5. Explore decision matrix utility

**For Product Managers:**
1. Read sections 1, 3 (this guide)
2. Try Click2Endpoint-AWS
3. Review Real World Use Cases
4. Understand authentication flow

### 6.3 Video Tutorials

*Coming soon - User demo videos for Click2Endpoint-AWS*

### 6.4 Release Notes

**Current Version**: v2.0 (2025-10-14)

**Recent Updates:**
- Centralized Postman mock server configuration
- Environment variable documentation
- Click2Endpoint-AWS production deployment
- AWS Lambda code execution
- Cognito user authentication
- Real World Use Cases collection (8 scenarios)

**Upcoming Features:**
- Production API deployment (with authentication)
- Additional use case examples
- Webhook integration for job status updates
- Bulk job submission support

### 6.5 Glossary

**API (Application Programming Interface)**
- A way for software to communicate with other software
- C2M API v2 allows programmatic access to mailing services

**Authentication**
- Proving your identity to access an API
- C2M API uses OAuth 2.0 client credentials flow

**Endpoint**
- A specific URL path for an API operation
- Example: `/jobs/single-doc-job-template`

**Mock Server**
- A test server that returns example data
- No authentication required
- Ideal for development

**Postman**
- API development and testing tool
- Used for exploring and testing C2M API

**OpenAPI Specification**
- Industry-standard format for defining APIs
- Describes endpoints, parameters, responses

**Template**
- Pre-configured job settings saved in C2M account
- Includes recipient lists, document formatting

**JWT (JSON Web Token)**
- Secure token format for authentication
- C2M API uses JWT for authorization

**CloudFront**
- AWS content delivery network (CDN)
- Hosts Click2Endpoint-AWS frontend

**Cognito**
- AWS authentication service
- Powers Click2Endpoint-AWS login

**Lambda**
- AWS serverless compute service
- Executes code without managing servers
- Powers Click2Endpoint-AWS code execution

**EBNF (Extended Backus-Naur Form)**
- Notation for defining data structures
- C2M API v2 source of truth

---

## 7. Quick Start Summary

### 7.1 5-Minute Quick Start

**Goal**: Submit a test request to the mock server

1. **Open Postman**: `https://app.getpostman.com`
2. **Select Workspace**: "Personal (Serrao)" from dropdown
3. **Select Environment**: "C2M Mock Environment" (top-right)
4. **Open Collection**: "c2mapiv2-real-world-use-cases"
5. **Open Request**: "1 - Legal Firm"  "Submit Job"
6. **Click "Send"**: See mock response in 1-2 seconds
7. **Review Response**: `200 OK` with job details

**Success!** You just submitted your first C2M API request.

### 7.2 10-Minute Quick Start

**Goal**: Find the right endpoint for your use case and generate code

1. **Open Click2Endpoint-AWS**: `https://d2dodhc21bvs3s.cloudfront.net`
2. **Log In**: Username `frank`, Password `TempPass123!`
3. **Start Wizard**: Click "Get Started with Wizard"
4. **Answer Questions**:
   - Document type?  Single document
   - Use template?  Yes
   - Address source?  Saved list
5. **View Result**: Endpoint recommendation
6. **Generate Code**: Choose Python, JavaScript, or cURL
7. **Copy Code**: Click "Copy Code" button
8. **Customize**: Replace placeholder values
9. **Run Locally**: Test in your development environment

**Success!** You now have production-ready code for your use case.

### 7.3 30-Minute Deep Dive

**Goal**: Understand the complete system and test multiple scenarios

1. **Read**: Sections 1 (System Overview) and 2.1-2.5 (Postman Basics)
2. **Explore Postman**: Try all 8 Real World Use Cases
3. **Use Click2Endpoint-AWS**: Test 3 different wizard paths
4. **Generate Code**: Compare Python vs JavaScript output
5. **View Docs**: Browse GitHub Pages API documentation
6. **Test Execution**: Run code in browser with Lambda

**Success!** You're now proficient with the complete C2M API v2 system.

---

## Appendix A: Keyboard Shortcuts

### Postman
- `Ctrl/Cmd + Enter`: Send request
- `Ctrl/Cmd + B`: Toggle sidebar
- `Ctrl/Cmd + F`: Search collection
- `Ctrl/Cmd + /`: Open command palette

### Browser (Click2Endpoint)
- `F12`: Open developer tools
- `Ctrl/Cmd + R`: Refresh page
- `Ctrl/Cmd + Shift + R`: Hard refresh (clear cache)
- `Ctrl/Cmd + C`: Copy selected text

---

## Appendix B: Mock Server URLs

**Current Mock Servers:**

**Personal Workspace (Serrao):**
```
https://90b4d7da-1234-5678-9abc-def012345678.mock.pstmn.io
```

**Team Workspace (C2M):**
```
(To be configured)
```

**How to find your mock server URL:**
1. Open Postman
2. Click "Mock Servers" in left sidebar
3. Find "C2M API v2 Mock"
4. Copy URL shown

---

## Appendix C: Test Credentials

**Click2Endpoint-AWS (Cognito):**
```
Username: frank, developer, or tester
Password: TempPass123!
```

**C2M API Authentication (Test):**
```
Client ID: test-client-123
Client Secret: test-secret-456
Auth URL: https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth
```

**OpenAI (NLP version):**
```
API Key: Get from https://platform.openai.com/account/api-keys
```

---

## Appendix D: Endpoint Decision Tree

Use this flowchart to manually determine the right endpoint:

```
START: What type of mailing do you need?


 1. How many DOCUMENTS per mailing?              

         
          Single document 
                                       
          Multiple documents 
                                       
          Split PDF 
                                        

 2. Do you have a SAVED TEMPLATE?                

         
          Yes (job-template) 
                                       
          No (with-template) 
                                        

 3. Where are ADDRESSES?                         

         
          In API request 
                                       
          In template 
                                       
          Extract from PDF 
                                        
                               ENDPOINT RESULT

Examples:
- Single + Template + In template  /jobs/single-doc-job-template
- Single + No template + In request  /jobs/single-doc-with-template
- Multiple + Template + Extract  /jobs/multi-pdf-address-capture
- Split PDF + Template + Extract  /jobs/single-pdf-split-address-capture
```

---

## Document Information

**Version**: 1.0
**Last Updated**: 2025-10-14
**Author**: C2M API v2 Project Team
**Maintained By**: See `CLAUDE.md` files in each repository
**License**: Internal use only

**Feedback**: To suggest improvements to this guide, contact your project administrator.

---

**End of Getting Started User Manual**
