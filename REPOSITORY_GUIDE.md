# c2m-api-artifacts - Complete Repository Guide

**Repository**: c2m-api-artifacts (Generated Artifacts)
**Purpose**: Storage for all machine-generated build outputs from c2m-api-repo
**Last Updated**: 2025-10-08

---

## 📖 Cliff Notes - Quick Reference

### Essential Information

**Purpose**: GitHub-only repository that stores all machine-generated artifacts from c2m-api-repo CI/CD pipeline.

**GitHub**: https://github.com/faserrao/c2m-api-artifacts

**GitHub Pages**: https://faserrao.github.io/c2m-api-artifacts/

**⚠️ IMPORTANT**:
- **Never edit files manually** - All files auto-generated
- **No local commits** - Only modified via GitHub Actions
- **Read-only for humans** - All changes come from c2m-api-repo

### Quick Access

| Resource | URL |
|----------|-----|
| API Documentation | https://faserrao.github.io/c2m-api-artifacts/ |
| OpenAPI Spec | https://raw.githubusercontent.com/faserrao/c2m-api-artifacts/main/openapi/c2mapiv2-openapi-spec-final.yaml |
| GitHub Repo | https://github.com/faserrao/c2m-api-artifacts |
| Build Status | https://github.com/faserrao/c2m-api-repo/actions |

### Directory Structure

```
c2m-api-artifacts/
├── openapi/           # OpenAPI specifications (3 versions)
├── postman/           # Postman collections and metadata
├── docs/              # API documentation (Redoc/Swagger)
└── sdks/              # Generated client SDKs (11 languages)
```

---

## Table of Contents

1. [Repository Overview](#repository-overview)
2. [Architecture & Design](#architecture--design)
3. [Generated Artifacts](#generated-artifacts)
4. [Accessing Artifacts](#accessing-artifacts)
5. [CI/CD Pipeline](#cicd-pipeline)
6. [Using SDKs](#using-sdks)
7. [Troubleshooting](#troubleshooting)

---

## Repository Overview

### Purpose & Scope

The c2m-api-artifacts repository serves as the **storage layer** for all machine-generated build outputs from c2m-api-repo.

**Key Characteristics**:
- **GitHub-Only**: Never cloned locally for editing
- **Auto-Generated**: All content created by CI/CD pipeline
- **Public Access**: Artifacts accessible via GitHub Pages and raw URLs
- **Version Controlled**: Git history shows evolution of API

**Why a Separate Repository?**

**Problem Solved**: Prevents merge conflicts in main repository
- Generated files (OpenAPI specs, SDKs) change frequently
- Manual edits to source files cause automatic regeneration
- Keeping generated files in same repo → constant merge conflicts

**Solution**: Two-repository pattern
1. **c2m-api-repo**: Source of truth (EBNF, scripts, tests)
2. **c2m-api-artifacts**: Build outputs (OpenAPI, Postman, SDKs, docs)

**Benefits**:
- Clean source repository (no noise from generated files)
- No merge conflicts from parallel work
- Clear separation of source vs. output
- Easy to regenerate everything from scratch
- GitHub Pages hosting for documentation

### Repository History

- **Created**: 2025-09-18 (part of two-repo architecture implementation)
- **First Build**: Automated via GitHub Actions from c2m-api-repo
- **Updates**: Triggered automatically on every push to c2m-api-repo main branch
- **Frequency**: Updated with every API change (multiple times per day during active development)

### Access Patterns

| Who | Access Method | Use Case |
|-----|---------------|----------|
| **Developers** | GitHub Pages | View API documentation |
| **Clients** | Raw GitHub URLs | Download OpenAPI specs |
| **SDKs** | npm/pip/gem | Use generated client libraries |
| **CI/CD** | GitHub API | Publish artifacts |
| **Postman** | GitHub raw URLs | Import collections |

---

## Architecture & Design

### Two-Repository Pattern

```
┌─────────────────────────────────────────────────────────────┐
│                   C2M API V2 Ecosystem                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────┐                   │
│  │    c2m-api-repo (Source)            │                   │
│  │                                     │                   │
│  │  - EBNF Data Dictionary (source)    │                   │
│  │  - Python conversion scripts        │                   │
│  │  - Makefile orchestration           │                   │
│  │  - Test suites                      │                   │
│  │  - Documentation (user guides)      │                   │
│  └──────────────┬──────────────────────┘                   │
│                 │                                           │
│                 │ GitHub Actions Workflow                   │
│                 │ (on push to main)                         │
│                 ▼                                           │
│  ┌─────────────────────────────────────┐                   │
│  │   Build Pipeline (GitHub Actions)   │                   │
│  │                                     │                   │
│  │  1. Generate OpenAPI from EBNF      │                   │
│  │  2. Build Postman collections       │                   │
│  │  3. Generate 11 language SDKs       │                   │
│  │  4. Build Redoc documentation       │                   │
│  │  5. Bundle artifacts                │                   │
│  └──────────────┬──────────────────────┘                   │
│                 │                                           │
│                 │ Git push to artifacts repo                │
│                 ▼                                           │
│  ┌─────────────────────────────────────┐                   │
│  │  c2m-api-artifacts (Outputs)        │                   │
│  │                                     │                   │
│  │  - openapi/ (3 spec versions)       │                   │
│  │  - postman/ (collections)           │                   │
│  │  - docs/ (Redoc/Swagger)            │                   │
│  │  - sdks/ (11 languages)             │                   │
│  └──────────────┬──────────────────────┘                   │
│                 │                                           │
│                 │ GitHub Pages Deployment                   │
│                 ▼                                           │
│  ┌─────────────────────────────────────┐                   │
│  │  Public Access                      │                   │
│  │                                     │                   │
│  │  - Developers view docs             │                   │
│  │  - Clients download specs           │                   │
│  │  - SDKs published to registries     │                   │
│  └─────────────────────────────────────┘                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Key Design Decisions

#### 1. GitHub-Only Repository

**Why?**
- No need for local copies (all generated remotely)
- Reduces confusion (developers know not to edit)
- Simpler workflow (no local git operations)
- Automatic deployment via GitHub Actions

**How It Works**:
```
Developer → Edits c2m-api-repo source → Push
    ↓
GitHub Actions builds artifacts
    ↓
GitHub Actions pushes to c2m-api-artifacts
    ↓
GitHub Pages deploys documentation
    ↓
Users access via web/URLs
```

#### 2. Separate Concerns

**Source Repository** (c2m-api-repo):
- Human-readable source files
- Build scripts and Makefile
- Test suites
- Documentation (guides, not API docs)

**Artifacts Repository** (c2m-api-artifacts):
- Machine-generated code
- Auto-generated documentation
- Binary-like outputs (SDKs)
- No human editing

#### 3. GitHub Pages for Documentation

**Why?**
- Free hosting
- Automatic deployment
- Custom domain support (future)
- SSL included
- CDN for fast global access

**URL Structure**:
- Root: `https://faserrao.github.io/c2m-api-artifacts/`
- Redoc: `https://faserrao.github.io/c2m-api-artifacts/redoc/`
- Swagger: `https://faserrao.github.io/c2m-api-artifacts/swagger/`

#### 4. Version Control for Artifacts

**Why version generated files?**
- Track API evolution over time
- Rollback to previous versions if needed
- Audit trail of changes
- Compare specs across versions

**Git History**:
```
commit abc123: Generated from EBNF (2025-10-08)
commit def456: Generated from EBNF (2025-10-07)
commit ghi789: Generated from EBNF (2025-10-06)
```

---

## Generated Artifacts

### OpenAPI Specifications

**Directory**: `openapi/`

#### 1. Base Spec

**File**: `c2mapiv2-openapi-spec-base.yaml`

**Purpose**: Initial OpenAPI spec generated directly from EBNF data dictionary

**Characteristics**:
- Pure translation of EBNF → OpenAPI
- No authentication overlay
- No examples (added later)
- Clean, minimal spec

**Generation**:
```bash
# In c2m-api-repo:
make generate-openapi-spec-from-ebnf-dd
```

#### 2. Final Spec

**File**: `c2mapiv2-openapi-spec-final.yaml`

**Purpose**: Production-ready spec with authentication overlay applied

**Characteristics**:
- Includes security schemes (Bearer auth)
- Adds security requirements to endpoints
- Includes examples from EBNF
- Ready for client generation

**Generation**:
```bash
# In c2m-api-repo:
make openapi-spec-apply-auth-overlay
```

#### 3. Bundled Spec

**File**: `bundled.yaml`

**Purpose**: Dereferenced version with all `$ref` pointers resolved inline

**Characteristics**:
- No external references
- Self-contained single file
- Larger file size
- Compatible with tools that don't support `$ref`

**Generation**:
```bash
# In c2m-api-repo:
make openapi-spec-bundle
```

**Use Cases**:
- Tools that require inline schemas
- Import into API gateways
- Some SDK generators

### Postman Collections

**Directory**: `postman/`

#### Structure

```
postman/
├── collections/
│   ├── C2M-API-V2-Linked.postman_collection.json           # Production collection
│   ├── C2M-API-V2-TEST.postman_collection.json             # Test collection (endpoints only)
│   └── C2M-API-V2-Real-World-Use-Cases.postman_collection.json  # Example requests
│
└── metadata/
    ├── collection-ids.json                                 # Postman UUIDs
    ├── mock-urls.json                                      # Mock server URLs
    └── workspace-ids.json                                  # Workspace UUIDs
```

#### Collections

**1. Linked Collection** (`C2M-API-V2-Linked.postman_collection.json`)
- **Purpose**: Production collection with variables and authentication
- **Features**:
  - JWT pre-request script
  - Environment variables ({{baseUrl}})
  - Test assertions
  - Example responses
- **Use Case**: Integration with C2M API in Postman

**2. TEST Collection** (`C2M-API-V2-TEST.postman_collection.json`)
- **Purpose**: Minimal collection for mock server creation
- **Features**:
  - Endpoint definitions only
  - No variables or authentication
  - Example responses for mocking
- **Use Case**: Creating Postman mock servers

**3. Real World Use Cases** (`C2M-API-V2-Real-World-Use-Cases.postman_collection.json`)
- **Purpose**: Concrete examples of common scenarios
- **Features**:
  - 5 examples per endpoint (via permutation system)
  - Realistic parameter values
  - Diverse use cases
- **Use Case**: Learning API patterns, testing

#### Metadata Files

**collection-ids.json**:
```json
{
  "linked": "12345678-abcd-1234-abcd-1234567890ab",
  "test": "23456789-bcde-2345-bcde-234567890abc",
  "use-cases": "34567890-cdef-3456-cdef-34567890abcd"
}
```

**mock-urls.json**:
```json
{
  "personal": "https://cd140b74-ed23-4980-834b-a966ac3393c1.mock.pstmn.io",
  "corporate": "https://90b4d7da-bb87-414e-93e6-d5dc93c074b9.mock.pstmn.io"
}
```

### Documentation

**Directory**: `docs/`

#### Structure

```
docs/
├── index.html                    # Landing page with links
├── redoc/
│   └── index.html               # Redoc interactive docs
├── swagger/
│   └── index.html               # Swagger UI
└── assets/
    ├── logo.png
    └── styles.css
```

#### Redoc Documentation

**URL**: https://faserrao.github.io/c2m-api-artifacts/redoc/

**Features**:
- Three-column layout (menu, content, code samples)
- Search functionality
- Syntax-highlighted code samples
- Deep linking to operations
- Responsive design

**Generation**:
```bash
# In c2m-api-repo:
make docs-build
```

**Technology**: Redocly CLI

#### Swagger UI

**URL**: https://faserrao.github.io/c2m-api-artifacts/swagger/

**Features**:
- Interactive "Try it out" functionality
- Schema exploration
- Built-in OAuth support
- Model definitions

**Note**: May be less complete than Redoc (Redoc is primary documentation)

### SDKs

**Directory**: `sdks/`

#### Supported Languages (11 total)

```
sdks/
├── python/          # Python (requests library)
├── javascript/      # JavaScript/Node.js (fetch/axios)
├── typescript/      # TypeScript (with types)
├── go/              # Go
├── java/            # Java
├── csharp/          # C#/.NET
├── php/             # PHP
├── ruby/            # Ruby
├── rust/            # Rust
├── swift/           # Swift (iOS)
└── kotlin/          # Kotlin (Android)
```

#### SDK Structure (Example: Python)

```
sdks/python/
├── README.md                     # Installation and usage
├── setup.py                      # Package metadata
├── requirements.txt              # Dependencies
├── c2m_api/
│   ├── __init__.py
│   ├── api_client.py            # HTTP client
│   ├── configuration.py         # Config (base URL, auth)
│   ├── exceptions.py            # Error classes
│   ├── models/                  # Data models
│   │   ├── __init__.py
│   │   ├── single_doc_params.py
│   │   ├── job_response.py
│   │   └── ...
│   └── api/                     # API endpoints
│       ├── __init__.py
│       ├── jobs_api.py
│       ├── templates_api.py
│       └── auth_api.py
├── docs/                        # API documentation (markdown)
│   ├── JobsApi.md
│   ├── TemplatesApi.md
│   └── ...
└── tests/                       # Unit tests
    ├── test_jobs_api.py
    └── ...
```

#### SDK Generation

**Tool**: OpenAPI Generator

**Command** (in c2m-api-repo):
```bash
make sdks-generate
```

**Process**:
1. Read `openapi/c2mapiv2-openapi-spec-final.yaml`
2. Generate code for each language
3. Run language-specific post-processing
4. Copy to c2m-api-artifacts/sdks/
5. Commit and push to GitHub

#### SDK Publishing

**Manual Publishing** (future automation):
- Python: `pip install c2m-api-client`
- JavaScript: `npm install @c2m/api-client`
- Ruby: `gem install c2m_api_client`
- ...

---

## Accessing Artifacts

### Via GitHub Pages

**Documentation**:
```
https://faserrao.github.io/c2m-api-artifacts/
```

**Redoc**:
```
https://faserrao.github.io/c2m-api-artifacts/redoc/
```

**Swagger UI**:
```
https://faserrao.github.io/c2m-api-artifacts/swagger/
```

### Via Raw GitHub URLs

**OpenAPI Spec**:
```bash
# Latest final spec
curl https://raw.githubusercontent.com/faserrao/c2m-api-artifacts/main/openapi/c2mapiv2-openapi-spec-final.yaml

# Latest base spec
curl https://raw.githubusercontent.com/faserrao/c2m-api-artifacts/main/openapi/c2mapiv2-openapi-spec-base.yaml

# Latest bundled spec
curl https://raw.githubusercontent.com/faserrao/c2m-api-artifacts/main/openapi/bundled.yaml
```

**Postman Collections**:
```bash
# Linked collection
curl https://raw.githubusercontent.com/faserrao/c2m-api-artifacts/main/postman/collections/C2M-API-V2-Linked.postman_collection.json

# TEST collection
curl https://raw.githubusercontent.com/faserrao/c2m-api-artifacts/main/postman/collections/C2M-API-V2-TEST.postman_collection.json
```

### Via Git Clone (Read-Only)

```bash
# Clone for viewing (not for editing)
git clone https://github.com/faserrao/c2m-api-artifacts.git

cd c2m-api-artifacts

# View OpenAPI spec
cat openapi/c2mapiv2-openapi-spec-final.yaml

# View SDK
cd sdks/python
cat README.md
```

### Via GitHub Web Interface

1. Navigate to https://github.com/faserrao/c2m-api-artifacts
2. Browse directories (openapi/, postman/, docs/, sdks/)
3. Click files to view in browser
4. Click "Raw" to download

---

## CI/CD Pipeline

### GitHub Actions Workflow

**Location**: `.github/workflows/api-ci-cd.yml` (in c2m-api-repo)

**Trigger**: Push to `main` branch of c2m-api-repo

**Steps**:

1. **Checkout both repositories**:
   ```yaml
   - name: Checkout main repo
     uses: actions/checkout@v3
     with:
       path: c2m-api-repo

   - name: Checkout artifacts repo
     uses: actions/checkout@v3
     with:
       repository: faserrao/c2m-api-artifacts
       path: c2m-api-artifacts
       token: ${{ secrets.ARTIFACTS_REPO_TOKEN }}
   ```

2. **Build OpenAPI from EBNF**:
   ```yaml
   - name: Generate OpenAPI spec
     run: |
       cd c2m-api-repo
       make generate-openapi-spec-from-ebnf-dd
       make openapi-spec-apply-auth-overlay
       make openapi-spec-bundle
   ```

3. **Generate Postman collections**:
   ```yaml
   - name: Build Postman collections
     run: |
       cd c2m-api-repo
       make postman-collection-build
       make postman-use-cases-build
   ```

4. **Generate SDKs**:
   ```yaml
   - name: Generate SDKs
     run: |
       cd c2m-api-repo
       make sdks-generate
   ```

5. **Build documentation**:
   ```yaml
   - name: Build Redoc docs
     run: |
       cd c2m-api-repo
       make docs-build
   ```

6. **Copy artifacts**:
   ```yaml
   - name: Copy to artifacts repo
     run: |
       # OpenAPI specs
       cp c2m-api-repo/openapi/*.yaml c2m-api-artifacts/openapi/

       # Postman collections
       cp c2m-api-repo/postman/generated/*.json c2m-api-artifacts/postman/collections/
       cp c2m-api-repo/postman/metadata/*.json c2m-api-artifacts/postman/metadata/

       # Documentation
       cp -r c2m-api-repo/docs/* c2m-api-artifacts/docs/

       # SDKs
       cp -r c2m-api-repo/sdks/* c2m-api-artifacts/sdks/
   ```

7. **Commit and push**:
   ```yaml
   - name: Commit artifacts
     run: |
       cd c2m-api-artifacts
       git config user.name "GitHub Actions"
       git config user.email "actions@github.com"
       git add .
       git commit -m "Generated from c2m-api-repo commit ${{ github.sha }}"
       git push
   ```

8. **Deploy GitHub Pages**:
   ```yaml
   - name: Deploy to GitHub Pages
     uses: peaceiris/actions-gh-pages@v3
     with:
       github_token: ${{ secrets.GITHUB_TOKEN }}
       publish_dir: c2m-api-artifacts/docs
   ```

### Build Triggers

**Automatic** (every push to main):
- Developer commits to c2m-api-repo
- GitHub Actions runs
- Artifacts generated and pushed
- GitHub Pages deployed

**Manual** (workflow_dispatch):
```bash
# Trigger from GitHub UI
# Actions tab → api-ci-cd workflow → Run workflow
```

### Build Duration

- **Total**: ~5-10 minutes
- OpenAPI generation: 30 seconds
- Postman collections: 1 minute
- SDK generation: 3-5 minutes (11 languages)
- Documentation: 1 minute
- Git operations: 1-2 minutes

### Build Artifacts Caching

GitHub Actions caches:
- Node modules
- Python packages
- OpenAPI Generator JAR files

**Cache hit**: ~2-3 minutes (faster)
**Cache miss**: ~5-10 minutes (full build)

---

## Using SDKs

### Python SDK

**Installation**:
```bash
# From source (for now)
git clone https://github.com/faserrao/c2m-api-artifacts.git
cd c2m-api-artifacts/sdks/python
pip install -e .

# Future: PyPI
# pip install c2m-api-client
```

**Usage**:
```python
from c2m_api import Configuration, ApiClient, JobsApi
from c2m_api.models import SingleDocJobParams

# Configure
config = Configuration()
config.host = "https://api.c2m.com/v2"
config.access_token = "your-jwt-token"

# Create client
client = ApiClient(config)
jobs_api = JobsApi(client)

# Submit job
params = SingleDocJobParams(
    job_name="Test Job",
    document_source_identifier={"documentId": "doc123"},
    recipient_address_source={"addressListId": "list456"}
)

response = jobs_api.submit_single_doc_with_template_params(params)
print(response)
```

### JavaScript SDK

**Installation**:
```bash
# From source
git clone https://github.com/faserrao/c2m-api-artifacts.git
cd c2m-api-artifacts/sdks/javascript
npm install
npm link

# Future: npm
# npm install @c2m/api-client
```

**Usage**:
```javascript
const { ApiClient, JobsApi, SingleDocJobParams } = require('c2m-api-client');

// Configure
const apiClient = new ApiClient();
apiClient.basePath = 'https://api.c2m.com/v2';
apiClient.authentications['BearerAuth'].accessToken = 'your-jwt-token';

// Create client
const jobsApi = new JobsApi(apiClient);

// Submit job
const params = new SingleDocJobParams({
  jobName: 'Test Job',
  documentSourceIdentifier: { documentId: 'doc123' },
  recipientAddressSource: { addressListId: 'list456' }
});

jobsApi.submitSingleDocWithTemplateParams(params, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
```

### TypeScript SDK

**Installation**:
```bash
# From source
git clone https://github.com/faserrao/c2m-api-artifacts.git
cd c2m-api-artifacts/sdks/typescript
npm install
npm link

# Future: npm
# npm install @c2m/api-client-ts
```

**Usage**:
```typescript
import { Configuration, JobsApi, SingleDocJobParams } from 'c2m-api-client';

// Configure
const config = new Configuration({
  basePath: 'https://api.c2m.com/v2',
  accessToken: 'your-jwt-token'
});

// Create client
const jobsApi = new JobsApi(config);

// Submit job
const params: SingleDocJobParams = {
  jobName: 'Test Job',
  documentSourceIdentifier: { documentId: 'doc123' },
  recipientAddressSource: { addressListId: 'list456' }
};

jobsApi.submitSingleDocWithTemplateParams(params)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

### Go SDK

**Installation**:
```bash
# From source
git clone https://github.com/faserrao/c2m-api-artifacts.git
cd c2m-api-artifacts/sdks/go

# Add to go.mod
# go get github.com/faserrao/c2m-api-artifacts/sdks/go
```

**Usage**:
```go
package main

import (
    "context"
    "fmt"
    c2m "github.com/faserrao/c2m-api-artifacts/sdks/go"
)

func main() {
    cfg := c2m.NewConfiguration()
    cfg.Host = "api.c2m.com"
    cfg.Scheme = "https"
    cfg.DefaultHeader["Authorization"] = "Bearer your-jwt-token"

    client := c2m.NewAPIClient(cfg)
    jobsApi := client.JobsApi

    params := c2m.SingleDocJobParams{
        JobName: "Test Job",
        DocumentSourceIdentifier: map[string]interface{}{
            "documentId": "doc123",
        },
        RecipientAddressSource: map[string]interface{}{
            "addressListId": "list456",
        },
    }

    resp, _, err := jobsApi.SubmitSingleDocWithTemplateParams(context.Background(), params)
    if err != nil {
        panic(err)
    }
    fmt.Println(resp)
}
```

---

## Troubleshooting

### Common Issues

#### 1. Documentation Not Loading

**Symptom**: GitHub Pages shows 404

**Causes**:
- GitHub Pages not enabled
- Wrong source branch/directory
- Recent push not yet deployed

**Solution**:
```bash
# Check GitHub Pages settings
# Repo → Settings → Pages → Source: main branch, /docs folder

# Force GitHub Pages rebuild
# Make empty commit to c2m-api-artifacts/docs/
```

#### 2. OpenAPI Spec Out of Date

**Symptom**: Spec doesn't match latest EBNF

**Causes**:
- Build pipeline hasn't run yet
- Build failed

**Solution**:
```bash
# Check GitHub Actions status
# c2m-api-repo → Actions → Latest workflow run

# Manual trigger
# Actions → api-ci-cd → Run workflow → Run

# View logs for errors
```

#### 3. SDK Not Working

**Symptom**: SDK code errors or missing features

**Causes**:
- SDK generated from old spec
- OpenAPI Generator compatibility issue
- Missing required parameters

**Solution**:
```bash
# Check SDK version
cat sdks/python/setup.py | grep version

# Regenerate SDKs
# In c2m-api-repo:
make sdks-generate

# Check OpenAPI Generator version
openapi-generator-cli version
```

#### 4. Postman Collection 404

**Symptom**: Collection URL returns 404

**Causes**:
- Incorrect URL
- File not pushed to artifacts repo
- Branch mismatch

**Solution**:
```bash
# Verify file exists on GitHub
# https://github.com/faserrao/c2m-api-artifacts/blob/main/postman/collections/C2M-API-V2-Linked.postman_collection.json

# Use raw URL
# https://raw.githubusercontent.com/faserrao/c2m-api-artifacts/main/postman/collections/C2M-API-V2-Linked.postman_collection.json
```

### Debugging Tools

**GitHub Web Interface**:
- View files and commit history
- Check Actions logs
- Review pull requests (should be none - auto-generated)

**Git CLI**:
```bash
# Clone and inspect
git clone https://github.com/faserrao/c2m-api-artifacts.git
cd c2m-api-artifacts

# View recent commits
git log --oneline -10

# Check file dates
ls -lt openapi/
ls -lt postman/collections/
ls -lt sdks/
```

**GitHub Actions Logs**:
```bash
# View workflow runs
# https://github.com/faserrao/c2m-api-repo/actions

# Click on workflow run → View logs

# Look for:
# - Build failures
# - Missing files
# - Permission errors
```

### Getting Help

1. Check this guide (REPOSITORY_GUIDE.md)
2. Review c2m-api-repo build logs (GitHub Actions)
3. Check GitHub Pages deployment status
4. Verify artifacts exist on GitHub
5. Contact C2M API team

---

## Summary

### Key Takeaways

1. **Auto-Generated Only**: Never edit files manually in this repository
2. **GitHub-Only**: No local development or commits
3. **CI/CD Driven**: All updates via GitHub Actions from c2m-api-repo
4. **Public Access**: Documentation and artifacts accessible via GitHub Pages and raw URLs
5. **Version Controlled**: Git history tracks API evolution

### Repository Characteristics

- **Read-Only for Humans**: All edits via c2m-api-repo → CI/CD
- **Write-Only for CI/CD**: GitHub Actions is the only writer
- **Public Read Access**: Anyone can view/download artifacts
- **Single Source of Truth**: c2m-api-repo EBNF is the source

### What's Stored Here

1. **OpenAPI Specifications** (3 versions: base, final, bundled)
2. **Postman Collections** (3 types: linked, test, use cases)
3. **API Documentation** (Redoc, Swagger UI)
4. **Client SDKs** (11 languages)
5. **Metadata** (collection IDs, mock URLs)

### How to Use

**As a Developer**:
- View docs: https://faserrao.github.io/c2m-api-artifacts/
- Download spec: Raw GitHub URL
- Use SDK: Install from source (or future registry)

**As a CI/CD System**:
- Clone artifacts repo
- Copy generated files
- Commit and push
- GitHub Pages auto-deploys

**As an API Consumer**:
- Import Postman collection
- Generate code from OpenAPI spec
- Use pre-built SDK
- Reference documentation

---

**Document Version**: 1.0
**Last Updated**: 2025-10-08
**Maintained By**: Automated CI/CD Pipeline
**Source Repository**: https://github.com/faserrao/c2m-api-repo
**Artifacts Repository**: https://github.com/faserrao/c2m-api-artifacts
