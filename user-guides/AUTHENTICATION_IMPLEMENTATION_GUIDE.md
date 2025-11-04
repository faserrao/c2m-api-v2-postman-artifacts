# C2M API v2 - Authentication Implementation Guide

**Version**: 1.0
**Last Updated**: 2025-10-19
**Audience**: Developers integrating C2M API authentication
**Purpose**: Step-by-step guide to implementing C2M API v2 authentication

---

## Table of Contents

1. [Overview](#1-overview)
2. [Authentication Architecture](#2-authentication-architecture)
3. [Getting Client Credentials](#3-getting-client-credentials)
4. [Implementation Steps](#4-implementation-steps)
5. [Token Management](#5-token-management)
6. [Code Examples](#6-code-examples)
7. [Testing Authentication](#7-testing-authentication)
8. [Troubleshooting](#8-troubleshooting)
9. [Security Best Practices](#9-security-best-practices)

---

## 1. Overview

### Two-Tier JWT System

The C2M API v2 uses a sophisticated two-token authentication system:

1. **Long-Term Token** (30-90 days)
   - Used for obtaining short-term tokens
   - Stored securely by client application
   - Can be revoked if compromised

2. **Short-Term Token** (15 minutes)
   - Used for actual API requests
   - Automatically refreshed using long-term token
   - Minimizes security risk

### Why Two Tokens?

- **Security**: Short-lived tokens reduce exposure if intercepted
- **Convenience**: Long-lived tokens eliminate frequent re-authentication
- **Revocation**: Can invalidate long-term token without affecting current sessions
- **Auditability**: Track token usage and client activity

---

## 2. Authentication Architecture

### Flow Diagram

```
Client Application
    |
    | 1. Request Long-Term Token
    | POST /auth/tokens/long
    | (client_id + client_secret)
    |
    v
AWS API Gateway → Lambda: issueLongToken → Cognito + DynamoDB
    |
    | 2. Receive Long-Term Token (30-90 days)
    |
    v
Client Stores Token Securely
    |
    | 3. Request Short-Term Token
    | POST /auth/tokens/short
    | (Authorization: Bearer <long-term-token>)
    |
    v
AWS API Gateway → Lambda: issueShortToken → JWT Signing
    |
    | 4. Receive Short-Term Token (15 min)
    |
    v
Client Makes API Requests
    |
    | 5. Use Short-Term Token for API Calls
    | POST /jobs/single-doc-job-template
    | (Authorization: Bearer <short-term-token>)
    |
    v
C2M API Endpoints → JWT Authorizer → Process Request
```

### Components

- **API Gateway**: https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/
- **Cognito User Pool**: Manages long-term tokens
- **DynamoDB**: Stores token metadata and revocation status
- **Lambda Functions**: Handle token issuance and validation
- **Secrets Manager**: Stores client credentials securely

---

## 3. Getting Client Credentials

### Request Credentials

Contact Click2Mail support to obtain:

1. **Client ID** (e.g., `your-company-123`)
2. **Client Secret** (e.g., `super-secret-password-abc...`)
3. **API Base URL**: `https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/`

### Scopes

Your client credentials will be configured with specific scopes:

- `jobs:submit` - Submit mailing jobs
- `jobs:read` - Read job status
- `templates:read` - Read saved templates
- `templates:write` - Create/update templates
- `tokens:revoke` - Revoke tokens

---

## 4. Implementation Steps

### Step 1: Obtain Long-Term Token

**Endpoint**: `POST /auth/tokens/long`

**Request**:
```http
POST /dev/auth/tokens/long HTTP/1.1
Host: j0dos52r5e.execute-api.us-east-1.amazonaws.com
Content-Type: application/json

{
  "grant_type": "client_credentials",
  "client_id": "your-company-123",
  "client_secret": "super-secret-password-abc...",
  "scopes": ["jobs:submit", "jobs:read", "templates:read"],
  "ttl_seconds": 2592000
}
```

**Response**:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 2592000,
  "refresh_token": null,
  "scope": "jobs:submit jobs:read templates:read"
}
```

**Store Securely**: Save `access_token` in encrypted storage (NOT localStorage or sessionStorage in browsers)

### Step 2: Exchange for Short-Term Token

**Endpoint**: `POST /auth/tokens/short`

**Request**:
```http
POST /dev/auth/tokens/short HTTP/1.1
Host: j0dos52r5e.execute-api.us-east-1.amazonaws.com
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

{
  "long_term_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response**:
```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 900,
  "scope": "jobs:submit jobs:read templates:read"
}
```

**Cache**: Store short-term token in memory (expires in 15 minutes)

### Step 3: Make API Requests

**Endpoint**: Any C2M API endpoint

**Request**:
```http
POST /jobs/single-doc-job-template HTTP/1.1
Host: api.c2m.com
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...

{
  "documentSourceIdentifier": {
    "externalUrl": "https://yoursite.com/invoice.pdf"
  },
  "jobTemplate": {
    "templateId": "monthly-statements"
  },
  "paymentDetails": {
    "paymentMethod": "invoice",
    "invoiceDetails": {
      "invoiceNumber": "INV-001"
    }
  }
}
```

### Step 4: Handle Token Expiration

When short-term token expires (after 15 minutes):

1. Detect 401 Unauthorized response
2. Request new short-term token using long-term token
3. Retry original API request with new token

---

## 5. Token Management

### Token Refresh Strategy

**Proactive Refresh** (Recommended):
```javascript
// Refresh token 1 minute before expiration
const TOKEN_LIFETIME = 900; // 15 minutes
const REFRESH_BUFFER = 60;  // 1 minute

setInterval(() => {
  if (Date.now() >= tokenExpiryTime - (REFRESH_BUFFER * 1000)) {
    refreshShortTermToken();
  }
}, 30000); // Check every 30 seconds
```

**Reactive Refresh**:
```javascript
// Catch 401 errors and refresh
try {
  response = await apiRequest(endpoint, data);
} catch (error) {
  if (error.status === 401) {
    await refreshShortTermToken();
    response = await apiRequest(endpoint, data); // Retry
  }
}
```

### Token Revocation

If long-term token is compromised:

**Endpoint**: `POST /auth/tokens/{tokenId}/revoke`

```http
POST /dev/auth/tokens/abc123/revoke HTTP/1.1
Host: j0dos52r5e.execute-api.us-east-1.amazonaws.com
Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response**:
```json
{
  "message": "Token revoked successfully",
  "tokenId": "abc123"
}
```

---

## 6. Code Examples

### Python Implementation

```python
import requests
import time
from datetime import datetime, timedelta

class C2MAuthClient:
    def __init__(self, client_id, client_secret, base_url):
        self.client_id = client_id
        self.client_secret = client_secret
        self.base_url = base_url
        self.long_term_token = None
        self.short_term_token = None
        self.short_term_expiry = None

    def get_long_term_token(self):
        """Obtain long-term token (30-90 days)"""
        response = requests.post(
            f"{self.base_url}/auth/tokens/long",
            json={
                "grant_type": "client_credentials",
                "client_id": self.client_id,
                "client_secret": self.client_secret,
                "scopes": ["jobs:submit", "jobs:read"],
                "ttl_seconds": 2592000  # 30 days
            }
        )
        response.raise_for_status()
        data = response.json()
        self.long_term_token = data["access_token"]
        return self.long_term_token

    def get_short_term_token(self):
        """Exchange long-term token for short-term token (15 min)"""
        if not self.long_term_token:
            self.get_long_term_token()

        response = requests.post(
            f"{self.base_url}/auth/tokens/short",
            headers={"Authorization": f"Bearer {self.long_term_token}"},
            json={"long_term_token": self.long_term_token}
        )
        response.raise_for_status()
        data = response.json()
        self.short_term_token = data["access_token"]
        self.short_term_expiry = datetime.now() + timedelta(seconds=data["expires_in"])
        return self.short_term_token

    def get_valid_token(self):
        """Get valid short-term token, refreshing if needed"""
        if not self.short_term_token or datetime.now() >= self.short_term_expiry - timedelta(minutes=1):
            self.get_short_term_token()
        return self.short_term_token

    def submit_job(self, payload):
        """Submit a job with automatic token management"""
        token = self.get_valid_token()
        response = requests.post(
            "https://api.c2m.com/jobs/single-doc-job-template",
            headers={"Authorization": f"Bearer {token}"},
            json=payload
        )
        response.raise_for_status()
        return response.json()

# Usage
client = C2MAuthClient(
    client_id="your-company-123",
    client_secret="super-secret-password-abc...",
    base_url="https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev"
)

result = client.submit_job({
    "documentSourceIdentifier": {"externalUrl": "https://example.com/doc.pdf"},
    "jobTemplate": {"templateId": "monthly-statements"},
    "paymentDetails": {"paymentMethod": "invoice", "invoiceDetails": {"invoiceNumber": "INV-001"}}
})
print(result)
```

### JavaScript/Node.js Implementation

```javascript
const axios = require('axios');

class C2MAuthClient {
  constructor(clientId, clientSecret, baseUrl) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.baseUrl = baseUrl;
    this.longTermToken = null;
    this.shortTermToken = null;
    this.shortTermExpiry = null;
  }

  async getLongTermToken() {
    const response = await axios.post(`${this.baseUrl}/auth/tokens/long`, {
      grant_type: 'client_credentials',
      client_id: this.clientId,
      client_secret: this.clientSecret,
      scopes: ['jobs:submit', 'jobs:read'],
      ttl_seconds: 2592000 // 30 days
    });
    this.longTermToken = response.data.access_token;
    return this.longTermToken;
  }

  async getShortTermToken() {
    if (!this.longTermToken) {
      await this.getLongTermToken();
    }

    const response = await axios.post(
      `${this.baseUrl}/auth/tokens/short`,
      { long_term_token: this.longTermToken },
      { headers: { Authorization: `Bearer ${this.longTermToken}` } }
    );
    this.shortTermToken = response.data.access_token;
    this.shortTermExpiry = Date.now() + (response.data.expires_in * 1000);
    return this.shortTermToken;
  }

  async getValidToken() {
    if (!this.shortTermToken || Date.now() >= this.shortTermExpiry - 60000) {
      await this.getShortTermToken();
    }
    return this.shortTermToken;
  }

  async submitJob(payload) {
    const token = await this.getValidToken();
    const response = await axios.post(
      'https://api.c2m.com/jobs/single-doc-job-template',
      payload,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  }
}

// Usage
const client = new C2MAuthClient(
  'your-company-123',
  'super-secret-password-abc...',
  'https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev'
);

client.submitJob({
  documentSourceIdentifier: { externalUrl: 'https://example.com/doc.pdf' },
  jobTemplate: { templateId: 'monthly-statements' },
  paymentDetails: { paymentMethod: 'invoice', invoiceDetails: { invoiceNumber: 'INV-001' } }
})
.then(result => console.log(result))
.catch(error => console.error(error));
```

---

## 7. Testing Authentication

### Test Connection

```bash
# Test long-term token endpoint
curl -X POST https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/tokens/long \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "client_credentials",
    "client_id": "test-client-123",
    "client_secret": "test-secret-456",
    "scopes": ["jobs:submit"],
    "ttl_seconds": 2592000
  }'

# Expected: 200 OK with access_token
```

### Test Short-Term Token

```bash
# Save long-term token
LONG_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

# Test short-term token endpoint
curl -X POST https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/tokens/short \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $LONG_TOKEN" \
  -d "{\"long_term_token\": \"$LONG_TOKEN\"}"

# Expected: 200 OK with access_token (different from long-term token)
```

### Test API Request

```bash
# Save short-term token
SHORT_TOKEN="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."

# Test API request
curl -X POST https://api.c2m.com/jobs/single-doc-job-template \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $SHORT_TOKEN" \
  -d '{
    "documentSourceIdentifier": {"externalUrl": "https://example.com/test.pdf"},
    "jobTemplate": {"templateId": "test-template"},
    "paymentDetails": {"paymentMethod": "invoice", "invoiceDetails": {"invoiceNumber": "TEST-001"}}
  }'

# Expected: 200 OK with job details
```

---

## 8. Troubleshooting

### Error: "Invalid client credentials"

**Cause**: Incorrect client_id or client_secret

**Solution**:
1. Verify credentials with Click2Mail support
2. Check for typos (credentials are case-sensitive)
3. Ensure no extra whitespace

### Error: "Token expired"

**Cause**: Short-term token expired (> 15 minutes old)

**Solution**:
```javascript
// Implement automatic refresh
if (error.status === 401) {
  await getShortTermToken();
  // Retry request
}
```

### Error: "Insufficient scopes"

**Cause**: Token doesn't have required permissions

**Solution**:
1. Contact Click2Mail to update scopes
2. Request new long-term token with updated scopes

### Error: "Rate limit exceeded"

**Cause**: Too many token requests

**Solution**:
1. Cache long-term token (reuse for 30-90 days)
2. Cache short-term token (reuse for up to 15 minutes)
3. Implement exponential backoff

---

## 9. Security Best Practices

### DO:

- ✅ Store client credentials in environment variables or secure vaults
- ✅ Use HTTPS for all requests
- ✅ Implement automatic token refresh
- ✅ Revoke tokens when no longer needed
- ✅ Monitor token usage and audit logs
- ✅ Implement rate limiting on your side

### DON'T:

- ❌ Hardcode credentials in source code
- ❌ Store long-term tokens in browser localStorage
- ❌ Share client credentials between applications
- ❌ Log full tokens (log only token IDs)
- ❌ Ignore token expiration
- ❌ Retry failed requests immediately

### Credential Storage

**Production**:
- Use AWS Secrets Manager, HashiCorp Vault, or similar
- Encrypt at rest
- Rotate credentials every 90 days

**Development**:
- Use environment variables
- Keep .env files out of version control
- Use separate dev/prod credentials

---

## Additional Resources

- **Security Best Practices**: See `SECURITY_BEST_PRACTICES.md` for comprehensive security guidance
- **Getting Started**: See `GETTING_STARTED_USER_MANUAL.md` for setup instructions
- **API Documentation**: https://faserrao.github.io/c2m-api-repo/
- **Support**: support@click2mail.com

---

## Version History

- **1.0** (2025-10-19): Initial comprehensive authentication implementation guide
  - Based on archived C2M_AUTH_FLOW_COMPLETE_GUIDE.md (523 lines)
  - Updated for external developer audience
  - Added code examples in Python and JavaScript
