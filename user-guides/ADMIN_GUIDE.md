# C2M API v2 - Administrator Guide

**Version**: 1.0
**Last Updated**: 2025-10-19
**Audience**: System Administrators, IT Managers, DevOps Engineers at customer organizations

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [User Management](#2-user-management)
3. [API Credential Management](#3-api-credential-management)
4. [Environment Configuration](#4-environment-configuration)
5. [Security Configuration](#5-security-configuration)
6. [Monitoring & Logging](#6-monitoring--logging)
7. [Troubleshooting](#7-troubleshooting)
8. [Integration Checklist](#8-integration-checklist)
9. [Support & Escalation](#9-support--escalation)

---

## 1. Introduction

### 1.1 Administrator Responsibilities

As a C2M API v2 administrator, you are responsible for:

- **User Access Management** - Creating, managing, and deactivating user accounts
- **API Credentials** - Securing and rotating API keys and tokens
- **Environment Configuration** - Setting up development, staging, and production environments
- **Security Compliance** - Ensuring secure integration practices
- **Monitoring** - Tracking API usage, errors, and performance
- **Troubleshooting** - Resolving integration issues and errors

### 1.2 System Components

The C2M API v2 system includes:

1. **Authentication Service** - AWS Cognito-based user authentication
2. **API Gateway** - REST API endpoints for mail job processing
3. **Click2Endpoint Applications** - Two web interfaces:
   - **Technical Edition** - For developers and power users
   - **Business Edition** - For business users with NLP/AI assistance
4. **Documentation** - OpenAPI specs, Postman collections, user guides

### 1.3 Required Access

To perform administrative tasks, you will need:

- AWS Console access (for user management)
- API credentials (client ID and secret)
- Postman workspace access (for API testing)
- CloudWatch access (for monitoring - optional)

---

## 2. User Management

### 2.1 User Types

The system supports different user types:

1. **End Users** - Business users who submit mail jobs via Click2Endpoint applications
2. **Developers** - Integration developers who use the API directly
3. **Administrators** - System admins with access to user management

### 2.2 Creating New Users

#### Click2Endpoint Users (AWS Cognito)

Users for Click2Endpoint applications are managed via AWS Cognito:

**Prerequisites:**
- AWS Console access
- Cognito User Pool ID: `us-east-1_TOb5udmMc`

**Steps:**

1. **Via AWS Console:**
   ```
   1. Navigate to AWS Cognito console
   2. Select User Pool: us-east-1_TOb5udmMc
   3. Click "Create user"
   4. Enter username (email format recommended)
   5. Set temporary password
   6. Send invitation email
   ```

2. **Via CLI (recommended):**
   ```bash
   # Create user
   aws cognito-idp admin-create-user \
     --user-pool-id us-east-1_TOb5udmMc \
     --username user@company.com \
     --user-attributes Name=email,Value=user@company.com \
     --temporary-password "TempPass123!" \
     --message-action SUPPRESS

   # Set permanent password
   aws cognito-idp admin-set-user-password \
     --user-pool-id us-east-1_TOb5udmMc \
     --username user@company.com \
     --password "SecurePass123!" \
     --permanent
   ```

**First Login:**
- Users must access: https://d2dodhc21bvs3s.cloudfront.net (Technical Edition)
- Or: https://dXXXXXXXXXXXXXX.cloudfront.net (Business Edition)
- Login with provided credentials
- Change password on first login (if temporary password used)

### 2.3 Managing Existing Users

#### List All Users
```bash
aws cognito-idp list-users \
  --user-pool-id us-east-1_TOb5udmMc
```

#### Reset User Password
```bash
aws cognito-idp admin-set-user-password \
  --user-pool-id us-east-1_TOb5udmMc \
  --username user@company.com \
  --password "NewSecurePass123!" \
  --permanent
```

#### Disable User Account
```bash
aws cognito-idp admin-disable-user \
  --user-pool-id us-east-1_TOb5udmMc \
  --username user@company.com
```

#### Enable User Account
```bash
aws cognito-idp admin-enable-user \
  --user-pool-id us-east-1_TOb5udmMc \
  --username user@company.com
```

#### Delete User Account
```bash
aws cognito-idp admin-delete-user \
  --user-pool-id us-east-1_TOb5udmMc \
  --username user@company.com
```

### 2.4 User Groups (Optional)

For role-based access control, create Cognito groups:

```bash
# Create admin group
aws cognito-idp create-group \
  --user-pool-id us-east-1_TOb5udmMc \
  --group-name Administrators \
  --description "System administrators"

# Add user to group
aws cognito-idp admin-add-user-to-group \
  --user-pool-id us-east-1_TOb5udmMc \
  --username admin@company.com \
  --group-name Administrators
```

---

## 3. API Credential Management

### 3.1 API Authentication Overview

C2M API v2 uses a **two-token JWT system**:

1. **Long-term Token** (30-90 days) - Issued once, stored securely
2. **Short-term Token** (15 minutes) - Used for API requests, refreshed automatically

### 3.2 Obtaining API Credentials

**Contact Click2Mail support** to obtain:
- **Client ID** - Public identifier for your organization
- **Client Secret** - Private key (treat like a password)
- **Authentication Endpoint** - `https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/`

### 3.3 Storing Credentials Securely

**DO NOT:**
- ❌ Commit credentials to version control (Git)
- ❌ Store in plain text files
- ❌ Hardcode in application source code
- ❌ Share via email or chat

**DO:**
- ✅ Use environment variables
- ✅ Use secrets management (AWS Secrets Manager, HashiCorp Vault, Azure Key Vault)
- ✅ Encrypt credentials at rest
- ✅ Implement credential rotation

**Example - AWS Secrets Manager:**
```bash
# Store credentials
aws secretsmanager create-secret \
  --name c2m-api-credentials \
  --description "C2M API v2 client credentials" \
  --secret-string '{"client_id":"your-client-id","client_secret":"your-client-secret"}'

# Retrieve credentials
aws secretsmanager get-secret-value \
  --secret-id c2m-api-credentials \
  --query SecretString \
  --output text
```

### 3.4 Credential Rotation

**Recommended rotation schedule:**
- Production: Every 90 days
- Development/Staging: Every 180 days
- Immediately: If credentials are compromised

**Rotation process:**
1. Request new credentials from Click2Mail support
2. Update credentials in secrets manager
3. Deploy updated configuration to applications
4. Verify API calls succeed with new credentials
5. Notify Click2Mail to revoke old credentials
6. Monitor for any failed authentication errors

### 3.5 Testing API Credentials

Use Postman or cURL to verify credentials:

```bash
# Request long-term token
curl -X POST https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/tokens/long \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "client_credentials",
    "client_id": "your-client-id",
    "client_secret": "your-client-secret"
  }'

# Expected response:
# {
#   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
#   "expires_in": 7776000
# }
```

---

## 4. Environment Configuration

### 4.1 Environment Types

Set up separate environments for:

1. **Development** - For testing integrations
2. **Staging** - For UAT and pre-production testing
3. **Production** - For live mail job processing

### 4.2 Required Environment Variables

#### For API Integration:

```bash
# Authentication
C2M_AUTH_URL=https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/
C2M_CLIENT_ID=your-client-id
C2M_CLIENT_SECRET=your-client-secret

# API Base URL
C2M_API_BASE_URL=https://your-api-gateway-url.amazonaws.com/

# Mock Server (for testing)
C2M_MOCK_URL=https://90b4d7da-75d4-4e03-9daf-46c0e1a82c62.mock.pstmn.io

# Timeouts (milliseconds)
C2M_REQUEST_TIMEOUT=30000
C2M_CONNECTION_TIMEOUT=10000

# Retry Configuration
C2M_MAX_RETRIES=3
C2M_RETRY_DELAY=1000
```

#### For Click2Endpoint Applications:

```bash
# Cognito Configuration
VITE_COGNITO_USER_POOL_ID=us-east-1_TOb5udmMc
VITE_COGNITO_CLIENT_ID=70eo1uhd44j81uqgg0m8tltkbd

# Default Mock Server
VITE_DEFAULT_MOCK_URL=https://90b4d7da-75d4-4e03-9daf-46c0e1a82c62.mock.pstmn.io

# Lambda Execution
VITE_EXECUTION_API_URL=https://your-lambda-url.lambda-url.us-east-1.on.aws/

# Postman API (optional)
VITE_POSTMAN_API_KEY_PERSONAL=your-postman-key
```

### 4.3 Network Configuration

#### Firewall / Proxy Settings

**Outbound HTTPS (443) access required to:**

- **Authentication**: `j0dos52r5e.execute-api.us-east-1.amazonaws.com`
- **API Gateway**: `*.execute-api.us-east-1.amazonaws.com`
- **Mock Server**: `*.mock.pstmn.io`
- **CloudFront**: `*.cloudfront.net`
- **AWS Cognito**: `cognito-idp.us-east-1.amazonaws.com`

**IP Whitelisting:**
- AWS API Gateway uses dynamic IPs
- Contact Click2Mail support for VPC endpoint configuration if static IPs required

### 4.4 TLS/SSL Configuration

- **Minimum TLS Version**: 1.2
- **Recommended**: TLS 1.3
- **Certificate Validation**: Always verify SSL certificates
- **Self-signed Certificates**: Not supported in production

---

## 5. Security Configuration

### 5.1 Authentication Best Practices

1. **Use HTTPS Only** - Never send credentials over HTTP
2. **Implement Token Refresh** - Don't reuse expired tokens
3. **Validate Tokens** - Verify JWT signatures and expiration
4. **Log Authentication Events** - Track successful and failed attempts
5. **Implement Rate Limiting** - Prevent brute force attacks

### 5.2 Authorization

**Principle of Least Privilege:**
- Grant users minimum permissions needed
- Use Cognito groups for role-based access
- Regularly audit user permissions

### 5.3 Data Security

**In Transit:**
- All API communication over HTTPS/TLS
- Token-based authentication (JWT)
- Certificate pinning (recommended for mobile apps)

**At Rest:**
- Encrypt sensitive data in application database
- Use AWS KMS for encryption key management
- Enable encryption for S3 buckets (if storing documents)

### 5.4 Security Headers

When integrating the API, implement security headers:

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'
```

### 5.5 Vulnerability Reporting

If you discover a security vulnerability:

1. **DO NOT** disclose publicly
2. Email: security@click2mail.com (or appropriate contact)
3. Include:
   - Description of vulnerability
   - Steps to reproduce
   - Potential impact
   - Your contact information

---

## 6. Monitoring & Logging

### 6.1 Application Logging

**What to Log:**
- API request/response (excluding credentials)
- Authentication attempts (success/failure)
- Errors and exceptions
- Performance metrics (response times)

**What NOT to Log:**
- Client secrets
- JWT tokens
- Personally identifiable information (PII)
- Credit card numbers

### 6.2 Recommended Log Format (JSON)

```json
{
  "timestamp": "2025-10-19T14:23:45.123Z",
  "level": "INFO",
  "service": "c2m-api-client",
  "action": "submit_job",
  "endpoint": "/jobs/single-doc-job-template",
  "status_code": 200,
  "response_time_ms": 1234,
  "user_id": "user@company.com",
  "job_id": "job-abc123",
  "error": null
}
```

### 6.3 Monitoring Metrics

**Track these metrics:**

1. **Request Volume** - Requests per minute/hour/day
2. **Error Rate** - Percentage of failed requests
3. **Response Time** - Average, P50, P95, P99 latencies
4. **Authentication Failures** - Failed login attempts
5. **Token Expiration** - Track token refresh rate

### 6.4 Alerting Thresholds

**Recommended alerts:**

| Metric | Threshold | Action |
|--------|-----------|--------|
| Error Rate | > 5% | Investigate immediately |
| Response Time (P95) | > 5 seconds | Check API health |
| Authentication Failures | > 10 in 5 min | Possible attack |
| Token Refresh Failures | > 3 consecutive | Check credentials |
| Request Volume Drop | < 50% of baseline | System issue |

### 6.5 AWS CloudWatch (Click2Mail Internal)

Click2Mail monitors the following (available to customers on request):

- Lambda execution metrics
- API Gateway latency
- Cognito sign-in metrics
- CloudFront cache hit rates

---

## 7. Troubleshooting

### 7.1 Common Issues

#### Issue: "Unauthorized" (401) Error

**Symptoms:**
```json
{
  "message": "Unauthorized",
  "statusCode": 401
}
```

**Possible Causes:**
1. Invalid client credentials
2. Expired token
3. Incorrect authentication endpoint

**Resolution:**
```bash
# Verify credentials
curl -X POST https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/tokens/long \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "client_credentials",
    "client_id": "your-client-id",
    "client_secret": "your-client-secret"
  }'

# If successful, token is valid
# If failed, request new credentials from Click2Mail support
```

#### Issue: "Forbidden" (403) Error

**Symptoms:**
```json
{
  "message": "Forbidden",
  "statusCode": 403
}
```

**Possible Causes:**
1. Valid credentials, but insufficient permissions
2. Account suspended
3. IP blocked

**Resolution:**
1. Contact Click2Mail support to verify account status
2. Check if your IP range is whitelisted (if applicable)

#### Issue: User Cannot Login to Click2Endpoint

**Symptoms:**
- User enters credentials
- Error: "User does not exist" or "Incorrect username or password"

**Resolution:**
```bash
# 1. Verify user exists
aws cognito-idp admin-get-user \
  --user-pool-id us-east-1_TOb5udmMc \
  --username user@company.com

# 2. Check user status (should be "CONFIRMED")
# If status is "FORCE_CHANGE_PASSWORD":
aws cognito-idp admin-set-user-password \
  --user-pool-id us-east-1_TOb5udmMc \
  --username user@company.com \
  --password "NewSecurePass123!" \
  --permanent

# 3. Verify user is enabled
aws cognito-idp admin-enable-user \
  --user-pool-id us-east-1_TOb5udmMc \
  --username user@company.com
```

#### Issue: Slow API Response Times

**Symptoms:**
- API requests taking > 5 seconds
- Timeouts

**Resolution:**
1. Check network latency: `ping j0dos52r5e.execute-api.us-east-1.amazonaws.com`
2. Verify no firewall/proxy issues
3. Check API status page (if available)
4. Contact Click2Mail support if issue persists

#### Issue: "Request Entity Too Large" (413)

**Symptoms:**
```json
{
  "message": "Request Entity Too Large",
  "statusCode": 413
}
```

**Possible Causes:**
- Document file size exceeds limit
- Request payload too large

**Resolution:**
1. Check document size limits (typically 10MB per document)
2. Compress PDF documents
3. Split large jobs into smaller batches

### 7.2 Diagnostic Commands

```bash
# Test authentication endpoint
curl -v https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/tokens/long

# Test API connectivity
curl -v https://your-api-gateway-url.amazonaws.com/health

# Check DNS resolution
nslookup j0dos52r5e.execute-api.us-east-1.amazonaws.com

# Test TLS connection
openssl s_client -connect j0dos52r5e.execute-api.us-east-1.amazonaws.com:443

# Verify certificate
openssl s_client -showcerts -connect j0dos52r5e.execute-api.us-east-1.amazonaws.com:443
```

### 7.3 Log Analysis

**Search for authentication errors:**
```bash
grep "401\|Unauthorized" application.log | tail -20
```

**Search for specific user activity:**
```bash
grep "user@company.com" application.log | grep "ERROR"
```

**Count errors by type:**
```bash
grep "ERROR" application.log | awk '{print $5}' | sort | uniq -c | sort -rn
```

---

## 8. Integration Checklist

Use this checklist when setting up a new integration:

### 8.1 Pre-Integration

- [ ] Obtain API credentials (client ID and secret)
- [ ] Set up development environment
- [ ] Configure environment variables
- [ ] Review API documentation and OpenAPI spec
- [ ] Install Postman and import C2M API v2 collection
- [ ] Test authentication with mock server

### 8.2 Development

- [ ] Implement authentication flow (long-term + short-term tokens)
- [ ] Implement token refresh logic
- [ ] Implement error handling and retries
- [ ] Add logging (requests, responses, errors)
- [ ] Test all API endpoints with mock server
- [ ] Implement rate limiting (if needed)
- [ ] Add unit tests for API client
- [ ] Add integration tests

### 8.3 Security

- [ ] Store credentials in secrets manager (not hardcoded)
- [ ] Implement HTTPS-only communication
- [ ] Validate SSL certificates
- [ ] Sanitize user inputs
- [ ] Implement request signing (if required)
- [ ] Review security best practices document
- [ ] Conduct security scan/audit

### 8.4 Staging/UAT

- [ ] Deploy to staging environment
- [ ] Configure staging credentials
- [ ] Test end-to-end workflows
- [ ] Conduct user acceptance testing
- [ ] Load testing (if high volume expected)
- [ ] Verify error handling and logging
- [ ] Get stakeholder sign-off

### 8.5 Production Launch

- [ ] Configure production credentials
- [ ] Deploy to production environment
- [ ] Verify production connectivity
- [ ] Set up monitoring and alerting
- [ ] Configure log aggregation
- [ ] Document runbook procedures
- [ ] Train support team
- [ ] Notify Click2Mail of go-live date
- [ ] Monitor for 24-48 hours post-launch

### 8.6 Post-Launch

- [ ] Review logs for errors
- [ ] Verify monitoring metrics
- [ ] Collect user feedback
- [ ] Document lessons learned
- [ ] Schedule credential rotation
- [ ] Plan capacity scaling (if needed)

---

## 9. Support & Escalation

### 9.1 Support Channels

**Click2Mail Support:**
- Email: support@click2mail.com (or appropriate contact)
- Phone: 1-XXX-XXX-XXXX
- Support Portal: https://support.click2mail.com
- Business Hours: Monday-Friday, 9 AM - 5 PM EST

### 9.2 Support Tiers

**Tier 1 - General Support:**
- User account issues
- Password resets
- Basic configuration questions
- Documentation requests

**Tier 2 - Technical Support:**
- API integration issues
- Authentication problems
- Error troubleshooting
- Performance issues

**Tier 3 - Engineering Escalation:**
- System outages
- Critical bugs
- Security incidents
- Feature requests

### 9.3 Incident Severity Levels

| Severity | Description | Response Time | Example |
|----------|-------------|---------------|---------|
| P1 - Critical | System down, production impact | 1 hour | API unavailable |
| P2 - High | Major functionality impaired | 4 hours | Authentication failing |
| P3 - Medium | Minor functionality issue | 1 business day | Slow response times |
| P4 - Low | Cosmetic or enhancement | 3 business days | Documentation typo |

### 9.4 Creating Support Tickets

**Include the following information:**

1. **Contact Information:**
   - Your name and email
   - Company name
   - Phone number

2. **Issue Details:**
   - Severity level (P1/P2/P3/P4)
   - Environment (dev/staging/production)
   - When did issue start?
   - Is issue intermittent or constant?

3. **Technical Details:**
   - API endpoint(s) affected
   - Error messages (full text)
   - Request ID or correlation ID (if available)
   - Sample request/response (sanitize credentials)

4. **Troubleshooting Performed:**
   - Steps you've already tried
   - Results of diagnostic commands
   - Relevant log snippets

5. **Business Impact:**
   - Number of users affected
   - Revenue/business impact
   - Workarounds in place

### 9.5 Service Level Agreements (SLA)

**API Availability:**
- Target: 99.9% uptime
- Scheduled Maintenance: Announced 7 days in advance
- Maintenance Window: Saturdays 2-6 AM EST

**Support Response Times:**
- P1: 1 hour
- P2: 4 hours
- P3: 1 business day
- P4: 3 business days

**Rate Limits:**
- Default: 1000 requests/minute per client ID
- Burst: 2000 requests/minute
- Contact support for higher limits

---

## Appendix A: Quick Reference

### Common Commands

```bash
# Create user
aws cognito-idp admin-create-user --user-pool-id us-east-1_TOb5udmMc --username user@company.com

# Reset password
aws cognito-idp admin-set-user-password --user-pool-id us-east-1_TOb5udmMc --username user@company.com --password "NewPass123!" --permanent

# Get auth token
curl -X POST https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/tokens/long -H "Content-Type: application/json" -d '{"grant_type":"client_credentials","client_id":"your-id","client_secret":"your-secret"}'

# List users
aws cognito-idp list-users --user-pool-id us-east-1_TOb5udmMc
```

### Important URLs

- **Click2Endpoint (Technical)**: https://d2dodhc21bvs3s.cloudfront.net
- **Authentication API**: https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/
- **Mock Server**: https://90b4d7da-75d4-4e03-9daf-46c0e1a82c62.mock.pstmn.io
- **API Documentation**: https://faserrao.github.io/c2m-api-repo/

### Important Resource IDs

- **Cognito User Pool**: us-east-1_TOb5udmMc
- **Cognito Client ID**: 70eo1uhd44j81uqgg0m8tltkbd
- **CloudFront Distribution (Technical)**: E2B7JKIUZQAW3N
- **CloudFront Distribution (Business)**: E15OSNMOR6YGWI

---

## Appendix B: Glossary

| Term | Definition |
|------|------------|
| **JWT** | JSON Web Token - Authentication token format |
| **Cognito** | AWS managed authentication service |
| **Client ID** | Public identifier for API client |
| **Client Secret** | Private key for API authentication |
| **Long-term Token** | JWT valid for 30-90 days |
| **Short-term Token** | JWT valid for 15 minutes |
| **Mock Server** | Simulated API for testing without affecting production |
| **OpenAPI** | API specification format (formerly Swagger) |
| **Postman** | API testing and development tool |
| **CloudFront** | AWS CDN service |
| **Lambda** | AWS serverless compute service |

---

**Document Version**: 1.0
**Last Reviewed**: 2025-10-19
**Next Review**: 2026-01-19
**Owner**: Click2Mail API Team
**Feedback**: documentation@click2mail.com
