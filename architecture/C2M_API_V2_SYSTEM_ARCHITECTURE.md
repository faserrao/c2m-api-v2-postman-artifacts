# C2M API V2 - System Architecture

**Document Version**: 2.0
**Last Updated**: 2025-10-08
**Purpose**: Comprehensive architecture guide for the C2M API V2 ecosystem

---

##  Cliff Notes - Quick Reference

### System at a Glance

**4 Repositories, 1 Unified System:**
```
c2m-api-repo (source)  c2m-api-artifacts (generated)  Consumers
                                                             
c2m-api-v2-security (auth)  click2endpoint-aws (tools)
```

**Core Pipeline:**
```
EBNF Dictionary  OpenAPI Spec  Postman Collection  Mock Server  Docs
```

**Key URLs:**
- **Auth API**: `https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/`
- **Click2Endpoint**: `https://d2dodhc21bvs3s.cloudfront.net`
- **Mock Server**: `https://a0711c27-f596-4e45-91bb-2a7a7a16c957.mock.pstmn.io`
- **Artifacts**: `https://github.com/faserrao/c2m-api-artifacts`

---

### Repository Quick Guide

| Repo | Primary Purpose | Key Command | Tech Stack |
|------|----------------|-------------|------------|
| **c2m-api-repo** | API specification & testing | `make postman-instance-build-and-test` | Python, OpenAPI, Postman, Prism |
| **c2m-api-artifacts** | Generated artifacts (GitHub-only) | Auto-updated by CI/CD | N/A (storage only) |
| **c2m-api-v2-security** | JWT authentication service | `npx cdk deploy` | AWS CDK, Lambda, Cognito, DynamoDB |
| **click2endpoint-aws** | Interactive endpoint discovery | `npm run dev` (frontend) | React, TypeScript, AWS (S3/CloudFront) |
| **find-objecs-in-scenarios** | Pattern analysis utility | `python3 decision_matrix.py` | Python 3.8+ |

---

### Essential Commands

**c2m-api-repo (Main API):**
```bash
make postman-instance-build-and-test  # Full pipeline + local testing
make smart-rebuild                    # Intelligent rebuild (changed files only)
make prism-mock-test                  # Test against local mock
make postman-cleanup-all              # Clean all Postman resources
```

**c2m-api-v2-security (Authentication):**
```bash
cd cognito-auth-app
npx cdk deploy                        # Deploy auth stack
./scripts/test-endpoints.sh           # Test auth flow
```

**click2endpoint-aws (Frontend):**
```bash
cd frontend && npm run dev            # Local development (port 5173)
cd cdk && npx cdk deploy --all        # Deploy to AWS
```

**find-objecs-in-scenarios (Pattern Analysis):**
```bash
python3 analyze_scenarios.py          # Extract patterns
python3 decision_matrix.py            # Validate decision logic (8/8 tests)
```

---

### Authentication Quick Reference

**Two-Token JWT System:**
1. **Long-term token** (30-90 days): `POST /auth/tokens/long`
   - Requires: `client_id`, `client_secret`
   - Stored: DynamoDB with TTL
2. **Short-term token** (15 min): `POST /auth/tokens/short`
   - Requires: Long-term token in Authorization header
   - Used: For actual API requests

**Test Credentials (Development):**
- Client ID: `test-client-123`
- Client Secret: `super-secret-password-123`

---

### AWS Resources Summary

| Service | Resource ID | Purpose |
|---------|------------|---------|
| **Cognito User Pool** | us-east-1_4fNSSRaag | Click2Endpoint user authentication |
| **CloudFront** | E2B7JKIUZQAW3N | Click2Endpoint CDN |
| **API Gateway** | j0dos52r5e | Auth service endpoints |
| **Lambda** | click2endpoint-executor-dev | Code execution |
| **S3** | click2endpoint-dev-682033482049 | Static hosting |
| **DynamoDB** | c2m-token-store-dev | JWT token storage |

**Account ID**: 682033482049
**Region**: us-east-1

---

### Integration Patterns

**Pattern 1: EBNF  API Pipeline**
```
EBNF  Python Script  OpenAPI  Postman API  Collection  Mock Server
```

**Pattern 2: Authentication Flow**
```
Client  Long-term Token (30 days)  Short-term Token (15 min)  API Access
```

**Pattern 3: Wizard Flow**
```
Questions  Endpoint Selection  Parameter Collection  Code Generation
```

**Pattern 4: Scenario Analysis**
```
Use Cases  Object Extraction  Decision Matrix (100% accuracy)  Endpoint
```

---

### Troubleshooting Quick Fixes

| Issue | Solution |
|-------|----------|
| **Postman import fails** | `make validate-openapi && make postman-build` |
| **Auth returns 401** | Check credentials in AWS Secrets Manager |
| **Mock server 404** | Verify mock URL in .env, re-deploy from Postman |
| **CloudFront cache** | `aws cloudfront create-invalidation --distribution-id E2B7JKIUZQAW3N --paths "/*"` |
| **Click2Endpoint build fails** | `rm -rf node_modules && npm install && npm run build` |

---

### Key Files & Locations

**c2m-api-repo:**
- Source of truth: `data_dictionary/c2mapiv2-dd.ebnf`
- OpenAPI spec: `openapi/c2mapiv2-openapi-spec-final.yaml`
- Main guide: `REPOSITORY_GUIDE.md`

**c2m-api-v2-security:**
- CDK stack: `cognito-auth-app/lib/cognito-auth-stack.ts`
- Main guide: `REPOSITORY_GUIDE.md`

**click2endpoint-aws:**
- Frontend: `frontend/src/`
- CDK stacks: `cdk/lib/`
- Main guide: `REPOSITORY_GUIDE.md`

**System-wide:**
- Architecture: `C2M_API_V2_SYSTEM_ARCHITECTURE.md` (this file)
- **Credentials**: NEVER commit - see secure credential management section

---

## Executive Summary

The C2M API V2 ecosystem is a **data-driven, API-first** platform for Click2Mail's document submission and mailing services. It implements a unique architecture where a formal EBNF data dictionary serves as the single source of truth, automatically generating OpenAPI specifications, test collections, mock servers, and comprehensive documentation.

**Key Characteristics:**
- **5 specialized repositories** working in concert
- **Fully automated pipeline** from data definition to deployed API
- **Security-first design** with isolated authentication service
- **Developer experience focused** with interactive tools and mock servers
- **100% pattern validation** for endpoint selection logic

**Business Value:**
- Rapid API iteration and deployment
- Consistent API contracts across all consumers
- Comprehensive testing before implementation
- Developer self-service with interactive tools
- Reduced time-to-integration for new customers

---

## System Overview

### The Five-Repository Ecosystem

```

                     C2M API V2 ECOSYSTEM                            
                                                                     
                           
    c2m-api-repo     c2m-api-artifacts                   
     (Source)        CI/CD  (Generated)                        
                           
                                                                   
                                                                   
                                                                   
                           
   c2m-api-v2-             click2endpoint-                     
   security (Auth)         aws (Tools)                         
                           
                                                                    
                                                 
                              find-objecs-in-                     
                              scenarios                           
                                                 

```

### Repository Roles

| Repository | Role | Audience | Update Frequency |
|-----------|------|----------|------------------|
| **c2m-api-repo** | Source & Build Logic | Developers, DevOps | On requirements change |
| **c2m-api-artifacts** | Distribution Point | API Consumers, Integration Teams | Every build |
| **c2m-api-v2-security** | Authentication Service | All API Users | Infrequent (stable) |
| **click2endpoint-aws** | Developer Tools | Integration Engineers | Feature additions |
| **find-objecs-in-scenarios** | Pattern Analysis | API Architects | One-time validation |

---

## Repository Architecture

### 1. c2m-api-repo (Main Source Repository)

**GitHub**: https://github.com/faserrao/c2m-api-repo
**Location**: `~/Dropbox/Customers/c2m/projects/c2m-api/C2M_API_v2/c2m-api-repo/`

#### Purpose
The single source of truth for all API definitions, build processes, and configuration. Implements a data-driven pipeline where EBNF grammar is the starting point for everything.

#### Core Responsibilities
- Maintain EBNF data dictionary (formal API specification)
- Convert EBNF to OpenAPI specifications
- Generate Postman collections with automated tests
- Orchestrate mock server creation (Prism + Postman)
- Generate comprehensive documentation (ReDoc)
- Trigger builds via GitHub Actions

#### Architecture Pattern

```
EBNF Dictionary  Python Scripts  OpenAPI Spec  Postman Collection  Mock Server
                                                             
                                   Documentation        Testing & CI/CD
```

#### Key Components

**A. EBNF Data Dictionary**
- **File**: `data_dictionary/c2mapiv2-dd.ebnf`
- **Purpose**: Single source of truth for all API data structures
- **Format**: Extended Backus-Naur Form (EBNF)
- **Content**: Defines 9 job submission endpoints with complete schemas

**B. OpenAPI Specification**
- **Generated From**: EBNF via Python scripts
- **Format**: OpenAPI 3.0 (YAML/JSON)
- **Purpose**: Machine-readable API contract
- **Consumers**: Postman, Prism mock server, SDK generators, documentation tools

**C. Postman Collection**
- **Files**:
  - `C2M_API_v2.postman_collection.json` (main collection with tests)
  - `C2M_API_v2_Real_World_Use_Cases.postman_collection.json` (examples)
  - `jwt-pre-request.js` (authentication script)
- **Purpose**: API testing, examples, client onboarding
- **Features**: Pre-request authentication, environment variables, test assertions

**D. Mock Servers**
- **Local (Prism)**: http://localhost:4010
- **Cloud (Postman)**: `https://a0711c27-f596-4e45-91bb-2a7a7a16c957.mock.pstmn.io`
- **Purpose**: Sandbox environment for development and testing
- **Data**: Returns randomized test data based on OpenAPI examples

**E. Documentation**
- **Engine**: ReDoc (auto-generated from OpenAPI)
- **GitHub Pages**: Auto-deployed on every build
- **Guides**:
  - `REPOSITORY_GUIDE.md` (comprehensive, 1886 lines)
  - `POSTMAN_COMPLETE_GUIDE.md`
  - `AUTHENTICATION_GUIDE.md`
  - `CUSTOMER_ONBOARDING_GUIDE.md`

**F. Testing & CI/CD**
- **Test Framework**: Postman Newman CLI
- **CI**: GitHub Actions
- **Validation**: OpenAPI spec validation, contract testing
- **Coverage**: 24 test scenarios across all endpoints

#### Smart Rebuild System

**Purpose**: Intelligent rebuild that only regenerates what has changed

**How it works:**
1. Tracks file hashes to detect changes
2. Only rebuilds affected pipeline stages
3. Shows diffs of changes at each step
4. Cascades through pipeline (EBNF  OpenAPI  Postman  SDK  Docs)

**Commands:**
```bash
make smart-rebuild                # Check for changes and rebuild only what's needed
make smart-rebuild-dry-run       # Show what would be rebuilt without doing it
make smart-rebuild-status        # Show current build state and hashes
make smart-rebuild-clean         # Clear hash cache (forces full rebuild)
```

#### Directory Structure

```
c2m-api-repo/
 data_dictionary/
    c2mapiv2-dd.ebnf                    # Source of truth
 scripts/active/
    ebnf_to_openapi_class_based.py      # Core converter
    add_tests.js                        # Test generation
    fix_collection_urls_v2.py           # URL normalization
    generate_use_case_collection_v2.py  # Use case generation
 openapi/
    c2mapiv2-openapi-spec-final.yaml    # Generated spec
    overlays/                           # Human-authored customizations
 postman/
    generated/                          # Auto-generated collections
    custom/                             # User customizations
    scripts/jwt-pre-request.js          # Auth integration
 docs/                                   # Generated documentation
 tests/                                  # Test suites
 Makefile                                # Orchestration (~3000 lines)
 REPOSITORY_GUIDE.md                     # Comprehensive guide
 .github/workflows/                      # CI/CD pipelines
```

---

### 2. c2m-api-artifacts (Build Artifacts Storage)

**GitHub**: https://github.com/faserrao/c2m-api-artifacts (GitHub-only, not cloned locally)

#### Purpose
Automated storage repository for build artifacts generated by the c2m-api-repo CI/CD pipeline. Keeps the main repository clean and prevents self-modification issues during GitHub Actions workflows.

#### Key Characteristics
- **Automated Only**: Never modified by users directly
- **CI/CD Output**: Populated exclusively by GitHub Actions from c2m-api-repo
- **Separation of Concerns**: Prevents c2m-api-repo from writing to itself during builds
- **Clean Architecture**: Keeps generated files separate from source code

#### Stored Artifacts

**A. Generated OpenAPI Specifications**
- Files: `openapi.json`, `openapi.yaml`, `openapi-bundled.yaml`
- Generated from: EBNF Data Dictionary via Python scripts
- Trigger: Push to main branch or manual workflow dispatch
- Consumers: External tools, SDK generators, documentation portals

**B. Postman Collections**
- Files: Main collection + Real World Use Cases collection
- Generated from: OpenAPI spec via Postman API
- Trigger: After successful OpenAPI generation
- Consumers: Postman users, API testing automation

**C. Generated Documentation**
- Files: ReDoc HTML, API reference pages, Swagger UI
- Generated from: OpenAPI spec
- Trigger: Documentation build workflow
- Consumers: Public API documentation website (GitHub Pages)

**D. SDK Artifacts (Planned)**
- Files: Python, JavaScript, Java, Go, Ruby SDKs
- Generated from: OpenAPI spec via openapi-generator
- Trigger: Release workflow
- Consumers: Developer integration projects

#### CI/CD Workflow Integration

```yaml
# GitHub Actions workflow in c2m-api-repo
name: Build and Publish Artifacts

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout c2m-api-repo
        uses: actions/checkout@v3

      - name: Generate OpenAPI Spec
        run: make openapi-build

      - name: Checkout artifacts repo
        uses: actions/checkout@v3
        with:
          repository: faserrao/c2m-api-artifacts
          path: artifacts
          token: ${{ secrets.ARTIFACTS_REPO_TOKEN }}

      - name: Copy artifacts
        run: |
          cp openapi/*.yaml artifacts/openapi/
          cp postman/generated/*.json artifacts/postman/

      - name: Commit and push
        working-directory: artifacts
        run: |
          git config user.name "GitHub Actions"
          git add .
          git commit -m "Update artifacts from c2m-api-repo build"
          git push
```

#### Benefits

1. **Clean Repository**: c2m-api-repo contains only source files, not generated output
2. **Avoid Self-Modification**: GitHub Actions don't write to the same repo being built
3. **Artifact History**: Git history tracks all generated artifact versions
4. **Public Access**: Artifacts can be public while source repo remains private
5. **CI/CD Simplification**: Separate write permissions for artifacts

#### Directory Structure

```
c2m-api-artifacts/
 README.md                                    # Auto-generated notice
 openapi/
    c2mapiv2-openapi-spec-base.yaml          # Generated from EBNF
    c2mapiv2-openapi-spec-final.yaml         # With overlays applied
    c2mapiv2-openapi-spec-bundled.yaml       # Single-file version
    versions/
        v2.0.0/
        v2.1.0/
        latest -> v2.1.0
 postman/
    C2M_API_v2.postman_collection.json       # Main collection
    C2M_API_v2_Real_World_Use_Cases.json     # Examples
    collection-metadata.json                 # UIDs, URLs
    environments/
        dev.json
        prod.json
 docs/
    redoc/                                   # ReDoc generated
    swagger-ui/                              # Swagger UI
    changelog.md                             # Auto-generated
 sdks/ (planned)
     python/
     javascript/
     java/
```

#### Access Control
- **Read**: Public (anyone can download artifacts)
- **Write**: GitHub Actions only (via `ARTIFACTS_REPO_TOKEN` secret)
- **Branches**: Main branch only (no development branches)

---

### 3. c2m-api-v2-security (Authentication Service)

**GitHub**: https://github.com/faserrao/c2m-api-v2-security
**Location**: `~/Dropbox/Customers/c2m/projects/c2m-api/C2M_API_v2/c2m-api-v2-security/`

#### Purpose
Standalone AWS-based authentication and authorization service providing JWT token management for the C2M API ecosystem.

#### Deployed Environment
- **AWS Stack**: `C2MCognitoAuthStack-dev`
- **API Gateway**: `https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/`
- **Auth Endpoints**: `https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/`
- **Region**: us-east-1
- **Status**: Deployed and operational

#### Architecture: Two-Token JWT System

**Why Two Tokens?**
- **Long-term tokens**: Avoid repeated credential entry (UX improvement)
- **Short-term tokens**: Limit exposure window (security improvement)
- **Token rotation**: DynamoDB tracks revocation

**Long-Term Tokens (30-90 days)**
- **Purpose**: Obtain short-term tokens without re-authenticating
- **Lifetime**: Configurable (default 30 days)
- **Storage**: DynamoDB with TTL
- **Scopes**: `jobs:submit`, `templates:read`, `tokens:revoke`
- **Grant Type**: Client credentials flow

**Short-Term Tokens (15 minutes)**
- **Purpose**: Actual API access
- **Lifetime**: 15 minutes (non-configurable)
- **Format**: Standard JWT (Cognito access token)
- **Usage**: API Gateway authorizer validation
- **Exchange**: Long-term token  short-term token

#### AWS Infrastructure (CDK)

**Components:**
```typescript
cognito-auth-app/
 lib/
    cognito-auth-stack.ts        # Main CDK stack
    constructs/
        auth-api.ts               # API Gateway
        cognito-pool.ts          # User pool
        lambda-functions.ts      # Auth handlers
 lambda/
    auth/
       issue-long-token.ts      # POST /auth/tokens/long
       issue-short-token.ts     # POST /auth/tokens/short
       revoke-token.ts          # POST /auth/tokens/revoke
    authorizers/
        jwt-authorizer.ts        # API Gateway custom authorizer
```

**AWS Services Used:**
- **Amazon Cognito**: User pool and identity management
- **AWS Lambda**: Serverless token issuance logic (4 functions)
- **API Gateway**: RESTful endpoints
- **DynamoDB**: Token tracking and revocation (with TTL)
- **CloudWatch**: Logging and monitoring
- **Secrets Manager**: Test credentials storage
- **IAM**: Least-privilege execution roles

#### Authentication Flow

```

   Client     

        1. POST /auth/tokens/long
           (client_id, client_secret)
       

   API Gateway        

       
      
 Lambda: issue-long-   AWS Cognito     
 token                       User Pool       
      
                                     
                                     
                                     
      
   DynamoDB                  Returns JWT     
   (store token)             (30 days)       
      
       
        2. Returns long-term token
       

   Client     
 (stores token)

        3. POST /auth/tokens/short
           Authorization: Bearer <long_term_token>
       

 Lambda: issue-short- 
 token                

        4. Returns short-term token (15 min)
       

   Client     
 (uses for API
  requests)   

```

#### Security Features
- **Provider-agnostic**: API abstraction layer (not direct Cognito dependency)
- **Revocation support**: DynamoDB-backed token blacklist
- **Rate limiting**: AWS WAF integration (configurable)
- **Audit logging**: CloudWatch Logs with encryption
- **TLS/HTTPS**: Enforced on all endpoints
- **Secrets rotation**: AWS Secrets Manager integration

#### Integration Points

**With c2m-api-repo:**
- **Postman Pre-Request Script**: `jwt-pre-request.js` calls auth endpoints
- **Environment Variables**: `AUTH_BASE_URL`, `CLIENT_ID`, `CLIENT_SECRET`
- **Test Credentials**: Shared from `.env` files

**With click2endpoint-aws:**
- **authService.ts**: Client-side integration
- **Test Connection**: UI feature to validate credentials
- **Code Generators**: Include auth flow in generated SDK code

---

### 4. click2endpoint-aws (Interactive Endpoint Discovery)

**GitHub**: https://github.com/faserrao/click2endpoint-aws
**Location**: `~/Dropbox/Customers/c2m/projects/c2m-api/C2M_API_v2/click2endpoint-aws/`
**Live URL**: https://d2dodhc21bvs3s.cloudfront.net

#### Purpose
Interactive web application that helps developers discover the correct C2M API endpoint for their document submission needs through a guided wizard interface.

#### Technology Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (dark theme)
- **Deployment**: AWS (S3 + CloudFront)
- **Authentication**: AWS Cognito
- **Backend**: AWS Lambda (Function URL for code execution)

#### Production Architecture

```
User Browser
     
Cognito Authentication (username/password)
      JWT Token
React App (S3 + CloudFront)
      Wizard Flow (endpoint selection)
      Parameter Collection (dynamic forms)
      Code Generation (Python/JS/cURL)
      Lambda Function URL (code execution)
      C2M API Mock Server (testing)
```

**Key Architectural Decision**: Pure static site (S3 + CloudFront only)
- No API Gateway or backend Lambda for Click2Endpoint itself
- Per-user Cognito authentication (not shared credentials)
- Direct browser calls to C2M API with user's JWT token
- Lambda Function URL for code execution (CORS-enabled public endpoint)

#### Key Features

**A. Decision Tree Wizard (Level 1)**
- **Questions**: 5 questions to identify use case
- **Logic**: `src/data/questions.ts`
- **Endpoints**: Maps to 8 job submission endpoints
- **Navigation**: Next/Back buttons, progress indication

**Sample Flow:**
1. Document type? (single/multi/merge/split)
2. Use job template? (yes/no)
3. Template content? (addressList/document/neither)
4. Recipient addresses? (explicit/template/capture)
5. Personalized? (yes/no - if multi/merge)

**B. Parameter Collection (Level 2)**
- **Dynamic Forms**: Based on endpoint EBNF schema
- **Validation**: Real-time with error messages
- **Complex Structures**: oneOf, arrays, nested objects
- **Defaults**: Pre-populated values
- **Conditional**: Fields hidden based on wizard answers (business rules)

**C. Code Generation (Level 3)**
- **Languages**: Python, JavaScript, cURL
- **Complete**: Auth flow + API call + error handling
- **Customizable**: Uses collected parameters
- **Copy/Download**: Clipboard and file download

**D. Code Execution**
- **Backend**: AWS Lambda Function URL (Python 3.12 runtime)
- **Function**: `click2endpoint-executor-dev`
- **URL**: `https://qymolz6zgxpphiskaxjon2lg3q0nfbgk.lambda-url.us-east-1.on.aws/`
- **Sandboxing**: 30-second timeout, 1MB output buffer
- **Output**: Real-time display in UI

**E. Pattern Analysis Utility**
- **Location**: `find-objecs-in-scenarios/`
- **Purpose**: Validate endpoint selection logic
- **Accuracy**: 100% (8/8 scenarios correctly mapped)
- **Components**:
  - `analyze_scenarios.py`: Extract objects and relationships
  - `decision_matrix.py`: Endpoint selection logic
  - `PATTERN_REVIEW.md`: Human-readable analysis

#### Component Structure

```
frontend/src/
 components/
    QuestionCard.tsx           # Wizard questions
    ResultCard.tsx             # Endpoint recommendation
    ParameterCollector.tsx     # Dynamic forms
    CodeGenerator.tsx          # SDK code generation
    ExecutionOutput.tsx        # Execution results
    SettingsModal.tsx          # Configuration UI
    LoginPage.tsx              # Cognito authentication
 data/
    questions.ts               # Decision tree logic
    endpointMap.ts             # 8 endpoint configs
    ebnfSchemas.ts             # Parameter definitions
 services/
    amplifyAuth.ts             # AWS Cognito client
    postmanApi.ts              # Mock server discovery
 utils/
     codeGenerators.ts          # Code templates
     settings.ts                # localStorage wrapper
```

#### CDK Infrastructure

**CognitoStack:**
- User Pool: `click2endpoint-users-dev` (us-east-1_4fNSSRaag)
- App Client: `70eo1uhd44j81uqgg0m8tltkbd`
- Password Policy: 8 chars, upper/lower/digits required
- Self-signup: Disabled (admin creates users)

**HostingStack:**
- S3 Bucket: `click2endpoint-dev-682033482049` (private)
- CloudFront: E2B7JKIUZQAW3N (HTTPS, SPA routing)
- BucketDeployment: Auto-deploy from `frontend/dist/`, invalidate cache

**ExecutionStack:**
- Lambda Function: `click2endpoint-executor-dev`
- Runtime: Python 3.12
- Function URL: Public (CORS-enabled)
- Memory: 512MB, Timeout: 30 seconds

#### Business Rules Implementation

**Template Content Constraint (Mutually Exclusive):**
- If wizard answer: "Template contains address list"  Hide `addressListId` parameter
- If wizard answer: "Template contains documents"  Hide `documentSourceIdentifier` parameter
- If wizard answer: "Neither"  Show both parameters

**Implementation:** `ParameterCollector.tsx` receives `wizardAnswers` prop and filters parameters dynamically.

---

### 5. find-objecs-in-scenarios (Pattern Analysis Utility)

**Location**: `~/Dropbox/Customers/c2m/projects/c2m-api/C2M_API_v2/click2endpoint-aws/find-objecs-in-scenarios/`

#### Purpose
Python-based pattern analysis tool that extracts business objects and decision logic from real-world use case scenarios to validate API design.

#### Technology Stack
- **Language**: Python 3.8+
- **Analysis**: Regular expressions, NLP patterns
- **Output**: Markdown reports, JSON structures
- **Validation**: Decision matrix with 100% test accuracy

#### Key Components

**A. Scenario Analysis (`analyze_scenarios.py`)**
- **Input**: 8 real-world use case scenarios (text descriptions)
- **Output**: Extracted objects, relationships, technical attributes
- **Objects Discovered**: 12 object types (Document, Recipient, Template, etc.)
- **Relationships**: 6 relationship types (contains, merges, splits, etc.)

**Technical Attributes Extracted:**
1. `document_quantity` (88%): "each", "single", "all"
2. `document_structure` (38%): "own PDF", "single big PDF"
3. `address_location` (38%): "embedded", "mailing list", "separate"
4. `personalization` (62%): "custom", "static", "template", "mail merge"
5. `document_aggregation` (38%): "batch", "zip", "merge"
6. `frequency` (50%): "all day", "end of month", "monthly"

**B. Decision Matrix (`decision_matrix.py`)**
- **Input**: Scenario text + technical attributes
- **Output**: Endpoint recommendation
- **Patterns**: 4 endpoint selection patterns
- **Accuracy**: 100% validation (8/8 scenarios correct)

**Decision Patterns:**
1. **Document Merging** (12.5%): Medical Agency  `/jobs/multi-doc-merge-job-template`
2. **Embedded Addresses** (25%): Companies  `/jobs/multi/single-pdf-address-capture`
3. **Document Aggregation** (25%): Resellers  `/jobs/single-pdf-split` or `/jobs/multi-docs-job-template`
4. **Template-Driven** (37.5%): Legal/Real Estate/Newsletter  `/jobs/single-doc-job-template`

**C. Persona Mapping**
- **Click2Mail Personas**: Mapped to technical scenarios
- **Wizard Alignment**: Validated question flow against personas
- **Key Finding**: Technical attributes (not customer segments) predict endpoints

#### Architecture Pattern

```
Use Case Scenarios (Text)
         
   analyze_scenarios.py
         
   Objects + Relationships + Technical Attributes
         
   decision_matrix.py
         
   Endpoint Recommendation (100% accurate)
```

#### Integration with click2endpoint-aws

**Current:** Pattern analysis validates wizard design
**Potential:** Could enhance with:
- NLP-based object extraction for AI mode
- Automatic wizard question generation
- Real-time pattern matching

---

## Core Design Principles

### 1. Single Source of Truth (EBNF)
All API definitions originate from the EBNF data dictionary. No manual editing of OpenAPI specs or Postman collections.

**Benefits:**
- Consistency across all artifacts
- Traceability (every change tracked)
- Automation-friendly (scripts never conflict with humans)

### 2. Separation of Concerns
Each repository has a single, well-defined purpose. No cross-contamination.

**Example:** Authentication logic lives entirely in c2m-api-v2-security, not scattered across repos.

### 3. Automated Pipeline
Human intervention only at the EBNF level. Everything else is generated.

**Pipeline:** EBNF  OpenAPI  Postman  Mock Server  Docs  Artifacts Repo  Deployment

### 4. Security by Design
- Authentication service isolated in separate repo
- Credentials never in source code (AWS Secrets Manager)
- Two-token system limits exposure window
- Per-user authentication (not shared credentials)

### 5. Developer Experience First
- Interactive wizard (click2endpoint-aws) for endpoint discovery
- Mock servers for testing without implementation
- Comprehensive documentation auto-generated
- SDK code generation with auth flow included

---

## Data Flow & Pipeline

### Complete Pipeline Flow

```

                  EBNF Data Dictionary                            
              (c2m-api-repo - Source of Truth)                    

                                          
          Generates (CI/CD)                Validates
                                          
         
  OpenAPI Spec                   Scenario Analysis      
  + Postman Collection           (find-objecs)          
  + Mock Server                   Confirms patterns    
         
         
          Stores artifacts (GitHub Actions)
         

            c2m-api-artifacts (GitHub Only)                       
   Stores generated OpenAPI specs (3 versions)                  
   Stores Postman collections (main + use cases)                
   Stores documentation builds (ReDoc + Swagger)                
   Prevents c2m-api-repo self-modification                      

         
          Consumed by
         

              Authentication Service                              
          (c2m-api-v2-security - AWS Deployed)                    
   Provides JWT tokens for API access                           
   Integrated via Postman pre-request script                    

         
          Authenticates
         

           Click2Endpoint AWS Application                         
         (User-facing endpoint discovery tool)                    
   Uses EBNF-derived endpoint mappings                          
   Integrates with Cognito for user auth                        
   Generates SDK code with auth flow                            
   Tests against mock server                                    
   Validates with pattern analysis (find-objecs)                

```

### Pipeline Stages Detail

**Stage 1: EBNF Definition** (Manual)
- API architect defines endpoint schemas in EBNF
- Commits to c2m-api-repo
- Triggers GitHub Actions workflow

**Stage 2: OpenAPI Generation** (Automated)
- Python script: `ebnf_to_openapi_class_based.py`
- Generates base OpenAPI spec
- Applies overlays (human-authored customizations)
- Validates with OpenAPI validator
- Output: `c2mapiv2-openapi-spec-final.yaml`

**Stage 3: Postman Collection Build** (Automated)
- Imports OpenAPI spec via Postman API
- Adds automated tests: `add_tests.js`
- Fixes URLs to use `{{baseUrl}}`: `fix_collection_urls_v2.py`
- Generates Real World Use Cases: `generate_use_case_collection_v2.py`
- Output: 2 Postman collections (main + use cases)

**Stage 4: Mock Server Deployment** (Automated)
- Creates Prism mock server (local)
- Creates Postman mock server (cloud)
- Populates with example data from OpenAPI
- Returns mock URLs for testing

**Stage 5: Documentation Generation** (Automated)
- ReDoc generates interactive API docs
- Swagger UI generated as alternative
- Deployed to GitHub Pages
- URL: (to be configured)

**Stage 6: Artifact Storage** (Automated)
- GitHub Actions copies all generated files to c2m-api-artifacts repo
- Commits with build number and timestamp
- Triggers downstream consumers (if configured)

**Stage 7: Testing** (Automated)
- Newman runs Postman collection tests
- Tests against mock server (24 scenarios)
- Generates test reports
- Fails pipeline if tests don't pass

---

## Integration Points

### Authentication Flow Across Repositories

```
1. c2m-api-v2-security (AWS)
    Provides
   JWT Tokens (long-term + short-term)
    Consumed by

2. c2m-api-repo (Postman)
   - jwt-pre-request.js script
   - Automatically gets tokens before each request
   - Tests API endpoints with valid auth
    Also consumed by

3. click2endpoint-aws
   - amplifyAuth.ts implementation
   - Settings modal "Test Connection"
   - Generated SDK code includes auth
   - Users log in with Cognito credentials
```

### Development Workflow

```
1. Design (find-objecs-in-scenarios)
   - Analyze real-world scenarios
   - Extract business objects
   - Validate decision patterns
   

2. Specification (c2m-api-repo)
   - Define EBNF grammar
   - Run: make postman-instance-build-and-test
   - OpenAPI spec generated
   - Postman collection created
   - Mock server deployed
   - Tests pass (24/24)
   

3. Artifact Distribution (c2m-api-artifacts)
   - GitHub Actions automatically copies artifacts
   - Versioned storage
   - Public access for consumers
   

4. Security (c2m-api-v2-security)
   - Deploy auth service to AWS
   - Test with Postman collection
   - Update credentials in Secrets Manager
   

5. Client Tools (click2endpoint-aws)
   - Build endpoint discovery wizard
   - Generate SDK code
   - Integrate with Cognito auth
   - Deploy to AWS (S3 + CloudFront)
```

---

## Testing Strategy

### Unit Tests

**c2m-api-repo:**
- Python EBNF parser tests
- OpenAPI schema validation tests
- Script output validation

**c2m-api-v2-security:**
- Lambda function tests (TypeScript/Jest)
- Token generation logic tests
- DynamoDB integration tests

**click2endpoint-aws:**
- Component tests (Jest + React Testing Library)
- Code generator output validation
- Parameter collector logic tests

### Integration Tests

**Postman Newman:**
- End-to-end API tests (24 scenarios)
- Authentication flow tests
- Error handling tests
- Mock server contract tests

**AWS Auth Flow:**
- Long-term token issuance
- Short-term token exchange
- Token revocation
- Expired token handling

**Click2Endpoint:**
- Wizard flow navigation
- Parameter collection validation
- Code generation accuracy
- Lambda code execution

### Contract Tests

**OpenAPI Validation:**
- Ensure spec matches EBNF definition
- Validate examples against schemas
- Check required fields

**Postman Schema Validation:**
- Response structure matches OpenAPI
- Mock server returns valid data
- Error responses properly formatted

**Mock Server:**
- Contract between frontend and backend
- API behavior validation
- Example data consistency

### Manual Testing

**UI Testing:**
- Click2Endpoint wizard flows
- Cognito login process
- Code execution output

**Postman Collection:**
- Import and run manually
- Verify examples work
- Test authentication integration

**AWS Console:**
- Verify Cognito user pool config
- Check Lambda function logs
- Monitor DynamoDB token storage

---

## Monitoring & Observability

### c2m-api-repo

**GitHub Actions:**
- CI/CD pipeline status
- Build success/failure notifications
- Test results and coverage

**Postman Monitors:**
- Scheduled collection runs
- API availability checks
- Performance metrics

**Mock Server:**
- Uptime monitoring (Postman cloud)
- Request count tracking
- Error rate monitoring

### c2m-api-v2-security

**CloudWatch Logs:**
- Lambda execution logs (all 4 functions)
- API Gateway access logs
- Error tracking and debugging

**CloudWatch Metrics:**
- API Gateway: Requests, errors, latency
- Lambda: Invocations, duration, errors
- DynamoDB: Read/write capacity, throttling

**CloudWatch Alarms:**
- High error rate (>5%)
- Slow response time (>2s p95)
- DynamoDB throttling

**X-Ray (Optional):**
- Distributed tracing
- Service map visualization
- Performance bottleneck identification

### click2endpoint-aws

**CloudFront Metrics:**
- Request count and bytes served
- Cache hit ratio
- Error rate (4xx, 5xx)

**CloudWatch Logs:**
- Lambda code executor logs
- Execution errors and timeouts

**S3 Metrics:**
- Bucket size monitoring
- GET/PUT request counts

**Cognito Metrics:**
- User sign-in success/failure
- Token refresh rate
- MFA challenges (if enabled)

---

## Security Considerations

### c2m-api-repo

**Security Posture:**
-  No secrets in repository (mock server only, test data)
-  Public repository safe (documentation and examples only)
-  .gitignore: Environment files excluded

**Best Practices:**
- Never commit `.env` files
- Postman API keys in environment variables only
- Mock server doesn't require authentication

### c2m-api-v2-security

**Security Posture:**
-  AWS Secrets Manager for production credentials
-  Environment variables for dev credentials (gitignored)
-  IAM roles with least-privilege permissions
-  TLS enforced on all API Gateway endpoints

**Additional Hardening:**
- VPC deployment (optional for enhanced isolation)
- AWS WAF rate limiting
- CloudWatch alarm on auth failures
- Secrets rotation policy (90 days)

**Lambda Security:**
- No environment variables contain secrets
- Secrets Manager SDK used at runtime
- Execution role scoped to specific resources
- No internet access required (VPC endpoints if in VPC)

### click2endpoint-aws

**Security Posture:**
-  No server-side secrets (static site)
-  sessionStorage for tokens (cleared on tab close)
-  CSP headers (Vercel/CloudFront config)
-  Cognito per-user authentication

**Credentials Management:**
- Test credentials (client ID/secret) embedded in frontend code
  - **Acceptable**: This is a developer tool, not production API
  - **Risk**: Low - credentials only access mock server in demo mode
- Production: Users authenticate with own Cognito account
  - **Secure**: No shared credentials, per-user JWT tokens

**Lambda Code Executor Security:**
- Public Function URL (no auth) - intentional for demo
- 30-second timeout limit
- 1MB output buffer limit
- No file system persistence
- Sandboxed Python/Node.js execution

** Production Hardening (When Ready):**
- Add Lambda authorizer to code executor
- Implement rate limiting per user
- Add input sanitization for code execution
- Consider moving to private VPC

---

## Deployment Architecture

### Production Environment

```
                    
                             User / Developer         
                    
                                           
                      
                    Click2Endpoint      Postman Collection 
                    AWS (Cognito)       (API Testing)      
                    CloudFront        
                           
                                            
                          Discovers          Calls API
                          Endpoints          + Tests
                                            
        
                 C2M API v2 (Mock Server)                 
           https://a0711c27...mock.pstmn.io               
           (Development/Testing - No Auth Required)       
        
                         
                          Optional Auth
                          (for production API)
                         
        
            AWS Authentication Service                  
            (c2m-api-v2-security)                       
                                                         
          API Gateway > Lambda > Cognito           
                                                      
               > DynamoDB (tokens) <             
        
```

### Repository Hosting

| Repository | Hosting | URL/Location |
|-----------|---------|--------------|
| c2m-api-repo | GitHub | https://github.com/faserrao/c2m-api-repo |
| c2m-api-artifacts | GitHub | https://github.com/faserrao/c2m-api-artifacts |
| c2m-api-v2-security | GitHub + AWS | https://github.com/faserrao/c2m-api-v2-security |
| click2endpoint-aws | GitHub + AWS | https://github.com/faserrao/click2endpoint-aws |
| find-objecs-in-scenarios | Local | (included in click2endpoint-aws repo) |

### AWS Resources (Account 682033482049)

**Cognito User Pools:**
- click2endpoint-users-dev (us-east-1_4fNSSRaag)

**S3 Buckets:**
- click2endpoint-dev-682033482049 (static hosting)

**CloudFront Distributions:**
- E2B7JKIUZQAW3N (d2dodhc21bvs3s.cloudfront.net)

**API Gateway APIs:**
- j0dos52r5e (c2m-auth-api-dev)

**Lambda Functions:**
- click2endpoint-executor-dev (code execution)
- c2m-auth-issue-long-token-dev
- c2m-auth-issue-short-token-dev
- c2m-auth-revoke-token-dev
- c2m-auth-jwt-authorizer-dev

**DynamoDB Tables:**
- c2m-token-store-dev (token storage with TTL)

---

## Troubleshooting Guide

### Common Issues

#### 1. Postman Collection Import Fails

**Symptom:** Invalid OpenAPI spec error when importing to Postman

**Root Causes:**
- OpenAPI spec validation errors
- Incorrect EBNF syntax
- Missing required fields

**Solution:**
```bash
cd c2m-api-repo

# Validate OpenAPI spec
make openapi-spec-lint

# Regenerate collection
make postman-collection-build

# Check for errors in output
make print-openapi-vars
```

#### 2. Auth Service Returns 401

**Symptom:** "Invalid client credentials" or "Unauthorized" error

**Root Causes:**
- Wrong client ID or secret
- Credentials not in AWS Secrets Manager
- User pool misconfigured

**Solution:**
```bash
# Check credentials in AWS Secrets Manager
aws secretsmanager get-secret-value \
  --secret-id c2m-api/dev/client-secrets \
  --region us-east-1

# Verify Cognito app client
aws cognito-idp describe-user-pool-client \
  --user-pool-id <pool-id> \
  --client-id <client-id>

# Test auth endpoint directly
curl -X POST https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/tokens/long \
  -H "Content-Type: application/json" \
  -d '{"grant_type":"client_credentials","client_id":"test-client-123","client_secret":"super-secret-password-123"}'
```

#### 3. Click2Endpoint Build Fails

**Symptom:** TypeScript errors or missing dependencies during build

**Root Causes:**
- Outdated dependencies
- Corrupted node_modules
- TypeScript version mismatch

**Solution:**
```bash
cd click2endpoint-aws/frontend

# Clean install
rm -rf node_modules package-lock.json
npm install

# Verify TypeScript version
npx tsc --version

# Build
npm run build

# Check for type errors
npm run type-check
```

#### 4. Mock Server Not Responding

**Symptom:** Timeout or 404 errors when calling mock server

**Root Causes:**
- Postman cloud service down
- Incorrect mock URL in .env
- Mock server not deployed

**Solution:**
```bash
# Check Postman cloud status
curl -I https://a0711c27-f596-4e45-91bb-2a7a7a16c957.mock.pstmn.io

# Verify mock URL in environment
cd c2m-api-repo
grep MOCK .env

# Re-deploy mock server
make postman-mock-create

# Update mock URL in collections
make postman-collection-build
```

#### 5. CloudFront Shows Stale Content

**Symptom:** Frontend not updating after deployment

**Root Causes:**
- CloudFront cache not invalidated
- Browser cache
- S3 deployment incomplete

**Solution:**
```bash
# Create CloudFront invalidation
aws cloudfront create-invalidation \
  --distribution-id E2B7JKIUZQAW3N \
  --paths "/*"

# Verify S3 deployment
aws s3 ls s3://click2endpoint-dev-682033482049/

# Hard refresh browser
# Ctrl+Shift+R (Windows/Linux)
# Cmd+Shift+R (Mac)

# Or use incognito window
```

#### 6. GitHub Actions CI/CD Failing

**Symptom:** Workflow fails in GitHub Actions

**Common Issues:**

**A. Postman CLI Not Found:**
```yaml
# Solution: Add explicit installation step
- name: Install Postman CLI
  run: |
    curl -o- "https://dl-cli.pstmn.io/install/linux64.sh" | sh
```

**B. Artifacts Repo Access Denied:**
```yaml
# Solution: Verify ARTIFACTS_REPO_TOKEN secret exists
# GitHub repo Settings  Secrets  Actions  ARTIFACTS_REPO_TOKEN
```

**C. OpenAPI Diff Hangs:**
```bash
# Temporary solution: Disable diff step
# Or use alternative: spectral diff
```

---

## Future Roadmap

### Q1 2025

**High Priority:**
- [ ] Deploy production C2M API endpoints (beyond auth)
- [ ] Complete AWS backend integration (click2endpoint-aws)
- [ ] Public release of c2m-api-repo documentation
- [ ] Custom domain for API Gateway (auth.c2mapi.com)

**Medium Priority:**
- [ ] SDK Code Generation (Python, JavaScript, Java)
- [ ] Automated SDK testing
- [ ] SDK documentation and examples

### Q2 2025

**Feature Development:**
- [ ] Integrate decision matrix logic into click2endpoint wizard
- [ ] Advanced NLP mode with GPT-4 (optional enhancement)
- [ ] Monitoring dashboard (CloudWatch + Datadog)
- [ ] Customer onboarding automation

**Infrastructure:**
- [ ] Multi-region deployment (redundancy)
- [ ] CDN optimization
- [ ] Cost optimization review

### Q3 2025

**Production Hardening:**
- [ ] Rate limiting and quotas (AWS WAF)
- [ ] Webhook support for async processing
- [ ] Advanced security features (MFA, IP whitelisting)
- [ ] SLA monitoring and alerting

**Developer Tools:**
- [ ] Interactive API playground
- [ ] Postman workspace templates
- [ ] CLI tool for API testing

---

## Glossary

- **EBNF**: Extended Backus-Naur Form - formal grammar notation for defining syntax
- **OpenAPI**: API specification format (formerly Swagger) - machine-readable API contract
- **Prism**: Mock server tool that generates realistic API responses from OpenAPI specs
- **CDK**: AWS Cloud Development Kit - Infrastructure as Code framework using TypeScript
- **JWT**: JSON Web Token - standard for securely transmitting information between parties
- **Cognito**: AWS identity and access management service for user authentication
- **CloudFront**: AWS Content Delivery Network (CDN) for fast content delivery
- **Newman**: Postman command-line collection runner for automated testing
- **ReDoc**: OpenAPI documentation generator with interactive UI
- **Lambda**: AWS serverless compute service - run code without managing servers
- **DynamoDB**: AWS NoSQL database service with millisecond latency
- **API Gateway**: AWS service for creating, deploying, and managing APIs
- **S3**: AWS Simple Storage Service - object storage for static files
- **IAM**: AWS Identity and Access Management - permissions and access control
- **Secrets Manager**: AWS service for storing and rotating secrets securely
- **TTL**: Time To Live - automatic expiration for database records
- **CORS**: Cross-Origin Resource Sharing - browser security for API calls
- **CSP**: Content Security Policy - browser security headers
- **OAI**: Origin Access Identity - CloudFront security for S3 buckets
- **Vite**: Modern frontend build tool - faster than Webpack
- **TypeScript**: Typed superset of JavaScript - better developer experience
- **Tailwind CSS**: Utility-first CSS framework - rapid UI development

---

## Contact & Support

### Documentation

**Repository-Specific Guides:**
- c2m-api-repo: `REPOSITORY_GUIDE.md` (1886 lines, comprehensive)
- c2m-api-v2-security: `REPOSITORY_GUIDE.md` (1200+ lines)
- click2endpoint-aws: `REPOSITORY_GUIDE.md` (comprehensive)
- c2m-api-artifacts: `REPOSITORY_GUIDE.md` (streamlined)

**System-Wide:**
- Architecture: `C2M_API_V2_SYSTEM_ARCHITECTURE.md` (this file)

### GitHub Repositories

- **c2m-api-repo**: https://github.com/faserrao/c2m-api-repo
- **c2m-api-artifacts**: https://github.com/faserrao/c2m-api-artifacts
- **c2m-api-v2-security**: https://github.com/faserrao/c2m-api-v2-security
- **click2endpoint-aws**: https://github.com/faserrao/click2endpoint-aws

### Local Files

- **Project Root**: `~/Dropbox/Customers/c2m/projects/c2m-api/C2M_API_v2/`
- **System CLAUDE.md**: `/Users/frankserrao/CLAUDE.md`
- **Postman Issues**: `/Users/frankserrao/POSTMAN_ISSUES_AND_SOLUTIONS.md`

---

**Document Version**: 2.0 (Consolidated)
**Last Updated**: 2025-10-08
**Maintained By**: Frank Serrao / Claude Code
**Status**: Living document - update as architecture evolves
