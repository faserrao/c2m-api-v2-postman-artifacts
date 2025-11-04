# C2M API v2 - Security Best Practices

**Version**: 1.0
**Last Updated**: 2025-10-19
**Audience**: System Administrators, Security Teams, Developers

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Authentication Security](#2-authentication-security)
3. [Credential Management](#3-credential-management)
4. [Network Security](#4-network-security)
5. [Data Protection](#5-data-protection)
6. [Application Security](#6-application-security)
7. [Monitoring & Incident Response](#7-monitoring--incident-response)
8. [Compliance & Audit](#8-compliance--audit)
9. [Security Checklist](#9-security-checklist)

---

## 1. Introduction

### 1.1 Purpose

This document outlines security best practices for integrating with and using the C2M API v2 system. Following these guidelines will help protect your organization and customer data from security threats.

### 1.2 Shared Security Responsibility

**Click2Mail Responsibilities:**
- Secure API infrastructure (AWS)
- Authentication service security
- Data encryption in transit
- Security monitoring and incident response
- Regular security audits and penetration testing

**Customer Responsibilities:**
- Secure credential storage
- Application-level security
- User access management
- Client-side data protection
- Compliance with data protection regulations

### 1.3 Security Principles

1. **Defense in Depth** - Multiple layers of security controls
2. **Least Privilege** - Minimum necessary permissions
3. **Zero Trust** - Verify every request
4. **Security by Design** - Build security in from the start
5. **Continuous Monitoring** - Detect and respond to threats

---

## 2. Authentication Security

### 2.1 JWT Token Management

#### Best Practices

**DO:**
- ✅ Store tokens securely (encrypted storage, memory only)
- ✅ Implement automatic token refresh before expiration
- ✅ Validate token expiration before each API call
- ✅ Use HTTPS for all token transmission
- ✅ Implement token revocation on user logout
- ✅ Clear tokens from memory on session end

**DON'T:**
- ❌ Store tokens in localStorage (vulnerable to XSS)
- ❌ Store tokens in cookies without HttpOnly and Secure flags
- ❌ Log tokens to application logs
- ❌ Include tokens in URL parameters
- ❌ Share tokens between users or applications
- ❌ Reuse expired tokens

#### Token Storage Recommendations

**Browser Applications:**
```javascript
// ✅ GOOD - Use sessionStorage (cleared on tab close)
sessionStorage.setItem('c2m_token', token);

// ✅ BETTER - Use in-memory storage only
let authToken = null; // Cleared on page refresh

// ❌ BAD - localStorage persists across sessions
localStorage.setItem('c2m_token', token); // Vulnerable to XSS
```

**Server-Side Applications:**
```javascript
// ✅ GOOD - Use environment variables or secrets manager
const token = process.env.C2M_AUTH_TOKEN;

// ✅ BETTER - Retrieve from AWS Secrets Manager
const token = await getSecretValue('c2m-auth-token');

// ❌ BAD - Hardcoded tokens
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6...'; // Never do this
```

### 2.2 Password Security (Cognito Users)

#### Password Requirements

Enforce strong password policies:
- Minimum 12 characters
- Mix of uppercase, lowercase, numbers, symbols
- No common passwords or dictionary words
- No reuse of last 5 passwords
- Change password every 90 days

#### Example Password Policy (AWS Cognito)

```bash
aws cognito-idp update-user-pool \
  --user-pool-id us-east-1_TOb5udmMc \
  --policies '{
    "PasswordPolicy": {
      "MinimumLength": 12,
      "RequireUppercase": true,
      "RequireLowercase": true,
      "RequireNumbers": true,
      "RequireSymbols": true,
      "TemporaryPasswordValidityDays": 7
    }
  }'
```

### 2.3 Multi-Factor Authentication (MFA)

**Highly Recommended for:**
- Administrator accounts
- Production API access
- Financial transactions
- PII access

**Implementation (Cognito):**

```bash
# Enable MFA for user
aws cognito-idp admin-set-user-mfa-preference \
  --user-pool-id us-east-1_TOb5udmMc \
  --username admin@company.com \
  --software-token-mfa-settings Enabled=true,PreferredMfa=true
```

### 2.4 Session Management

#### Session Timeout Configuration

**Recommended timeouts:**
- Web applications: 30 minutes of inactivity
- API integrations: 15-minute token expiration
- Administrative sessions: 15 minutes of inactivity

#### Session Invalidation

Always invalidate sessions on:
- User logout
- Password change
- Permission changes
- Suspicious activity detected
- User account disabled

---

## 3. Credential Management

### 3.1 Client Secret Security

**Critical Rules:**

1. **Never Commit to Version Control**
   ```bash
   # Add to .gitignore
   echo ".env" >> .gitignore
   echo "*.env" >> .gitignore
   echo "config/credentials.json" >> .gitignore
   ```

2. **Use Environment Variables**
   ```bash
   # .env file (never commit)
   C2M_CLIENT_ID=your-client-id
   C2M_CLIENT_SECRET=your-client-secret

   # Load in application
   require('dotenv').config();
   const clientSecret = process.env.C2M_CLIENT_SECRET;
   ```

3. **Use Secrets Management**

   **AWS Secrets Manager:**
   ```bash
   # Store secret
   aws secretsmanager create-secret \
     --name c2m-api-credentials \
     --secret-string '{
       "client_id": "your-client-id",
       "client_secret": "your-client-secret"
     }'

   # Retrieve secret (in application)
   const secret = await secretsManager.getSecretValue({
     SecretId: 'c2m-api-credentials'
   }).promise();
   const credentials = JSON.parse(secret.SecretString);
   ```

   **HashiCorp Vault:**
   ```bash
   # Store secret
   vault kv put secret/c2m-api \
     client_id="your-client-id" \
     client_secret="your-client-secret"

   # Retrieve secret
   vault kv get -field=client_secret secret/c2m-api
   ```

   **Azure Key Vault:**
   ```bash
   # Store secret
   az keyvault secret set \
     --vault-name "your-vault" \
     --name "c2m-client-secret" \
     --value "your-client-secret"

   # Retrieve secret
   az keyvault secret show \
     --vault-name "your-vault" \
     --name "c2m-client-secret"
   ```

### 3.2 Credential Rotation

**Rotation Schedule:**
- Production: Every 90 days
- Staging: Every 180 days
- Development: Annually
- Immediate: If compromised

**Rotation Process:**

1. **Request new credentials from Click2Mail**
2. **Test new credentials in staging**
   ```bash
   curl -X POST https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/tokens/long \
     -H "Content-Type: application/json" \
     -d '{
       "grant_type": "client_credentials",
       "client_id": "new-client-id",
       "client_secret": "new-client-secret"
     }'
   ```

3. **Deploy to production with zero-downtime**
   ```javascript
   // Support both old and new credentials during transition
   const credentials = [
     { id: process.env.C2M_CLIENT_ID_NEW, secret: process.env.C2M_CLIENT_SECRET_NEW },
     { id: process.env.C2M_CLIENT_ID_OLD, secret: process.env.C2M_CLIENT_SECRET_OLD }
   ];

   // Try new credentials first, fallback to old
   for (const cred of credentials) {
     try {
       const token = await authenticate(cred);
       return token;
     } catch (error) {
       continue; // Try next credential
     }
   }
   ```

4. **Monitor for errors after deployment**
5. **Revoke old credentials after verification**
6. **Update documentation with rotation date**

### 3.3 Compromise Response

**If credentials are compromised:**

1. **Immediately notify Click2Mail** - Request credential revocation
2. **Rotate credentials** - Generate new client ID and secret
3. **Review logs** - Identify unauthorized usage
4. **Assess impact** - What data was accessed?
5. **Notify stakeholders** - Security team, management, customers (if required)
6. **Document incident** - Post-mortem and lessons learned

### 3.4 Credential Scanning

**Implement automated scanning:**

```bash
# Pre-commit hook to scan for secrets
# .git/hooks/pre-commit

#!/bin/bash
# Scan for potential secrets
if git diff --cached | grep -E "(client_secret|password|api_key)" > /dev/null; then
  echo "ERROR: Potential secret detected in commit"
  echo "Please review and remove sensitive data"
  exit 1
fi
```

**Tools:**
- **git-secrets** - Prevents committing secrets
- **TruffleHog** - Scans Git history for secrets
- **GitGuardian** - Automated secret detection
- **AWS Macie** - Data discovery and protection

---

## 4. Network Security

### 4.1 HTTPS/TLS Configuration

**Enforce HTTPS Only:**

```javascript
// Node.js/Express
app.use((req, res, next) => {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
});

// Nginx
server {
  listen 80;
  return 301 https://$host$request_uri;
}
```

**TLS Version Configuration:**

```nginx
# Nginx - Enforce TLS 1.2 and 1.3
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256';
ssl_prefer_server_ciphers on;
```

### 4.2 Certificate Validation

**Always validate SSL certificates:**

```javascript
// ❌ BAD - Disable certificate validation
const https = require('https');
const agent = new https.Agent({
  rejectUnauthorized: false // NEVER DO THIS IN PRODUCTION
});

// ✅ GOOD - Validate certificates
const https = require('https');
const agent = new https.Agent({
  rejectUnauthorized: true,
  ca: fs.readFileSync('ca-bundle.crt') // Optional: custom CA bundle
});
```

### 4.3 Firewall Configuration

**Outbound Rules (Application Server):**

| Protocol | Port | Destination | Purpose |
|----------|------|-------------|---------|
| HTTPS | 443 | `*.execute-api.us-east-1.amazonaws.com` | API Gateway |
| HTTPS | 443 | `cognito-idp.us-east-1.amazonaws.com` | Authentication |
| HTTPS | 443 | `*.mock.pstmn.io` | Mock server (dev/staging only) |
| HTTPS | 443 | `*.cloudfront.net` | Click2Endpoint applications |

**Inbound Rules (Application Server):**

Only expose necessary ports:
- Port 443 (HTTPS) for web applications
- No direct database access from internet
- No SSH/RDP from internet (use bastion host or VPN)

### 4.4 IP Whitelisting (Optional)

**Request static IP setup from Click2Mail** if your security policy requires IP whitelisting for API access.

**Implementation (AWS Security Group):**

```bash
# Allow outbound HTTPS to C2M API Gateway
aws ec2 authorize-security-group-egress \
  --group-id sg-xxxxxxxx \
  --protocol tcp \
  --port 443 \
  --cidr <click2mail-ip-range>/32
```

### 4.5 Rate Limiting

**Protect against abuse:**

```javascript
// Express rate limiting
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // 100 requests per minute
  message: 'Too many requests, please try again later'
});

app.use('/api/', apiLimiter);
```

**Distributed Rate Limiting (Redis):**

```javascript
const RedisStore = require('rate-limit-redis');

const limiter = rateLimit({
  store: new RedisStore({
    client: redisClient
  }),
  windowMs: 60 * 1000,
  max: 100
});
```

---

## 5. Data Protection

### 5.1 Data Classification

**Classify all data:**

| Level | Examples | Protection Required |
|-------|----------|---------------------|
| **Public** | API documentation, marketing materials | None |
| **Internal** | Internal documentation, source code | Access control |
| **Confidential** | Customer data, financial records | Encryption + access control |
| **Restricted** | PII, PHI, PCI data | Encryption + strict access control + audit |

### 5.2 Encryption

#### Data in Transit

**All API communication uses:**
- TLS 1.2 or higher
- Strong cipher suites
- Certificate-based authentication

**Verify encryption:**

```bash
# Check TLS version
openssl s_client -connect j0dos52r5e.execute-api.us-east-1.amazonaws.com:443 \
  -tls1_2
```

#### Data at Rest

**Encrypt sensitive data in your application database:**

```javascript
// Example using Node.js crypto
const crypto = require('crypto');

// Encryption
function encrypt(text, key) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

// Decryption
function decrypt(text, key) {
  const parts = text.split(':');
  const iv = Buffer.from(parts[0], 'hex');
  const encrypted = Buffer.from(parts[1], 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
  let decrypted = decipher.update(encrypted);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

// Use AWS KMS for key management
const kmsKey = await kms.generateDataKey({
  KeyId: 'alias/c2m-encryption-key',
  KeySpec: 'AES_256'
}).promise();
```

### 5.3 Data Minimization

**Collect only what you need:**

- Don't log full API request/response bodies
- Redact sensitive fields in logs
- Minimize data retention periods
- Delete data when no longer needed

**Example log sanitization:**

```javascript
function sanitizeLog(data) {
  const sanitized = { ...data };

  // Redact sensitive fields
  if (sanitized.client_secret) sanitized.client_secret = '***REDACTED***';
  if (sanitized.token) sanitized.token = '***REDACTED***';
  if (sanitized.ssn) sanitized.ssn = 'XXX-XX-' + sanitized.ssn.slice(-4);
  if (sanitized.credit_card) sanitized.credit_card = '************' + sanitized.credit_card.slice(-4);

  return sanitized;
}

logger.info(sanitizeLog(requestData));
```

### 5.4 Data Retention

**Define retention policies:**

| Data Type | Retention Period | Deletion Method |
|-----------|-----------------|-----------------|
| API logs | 90 days | Automated deletion |
| Authentication logs | 1 year | Automated deletion |
| Job metadata | 7 years | Secure deletion |
| Customer documents | Per customer agreement | Secure deletion + certificate |
| Audit logs | 7 years | Secure archival |

### 5.5 Secure Deletion

**When deleting sensitive data:**

```javascript
// Node.js secure file deletion
const fs = require('fs');
const crypto = require('crypto');

function secureDelete(filePath) {
  const stats = fs.statSync(filePath);
  const fileSize = stats.size;

  // Overwrite with random data (3 passes)
  for (let i = 0; i < 3; i++) {
    const randomData = crypto.randomBytes(fileSize);
    fs.writeFileSync(filePath, randomData);
  }

  // Delete file
  fs.unlinkSync(filePath);
}
```

---

## 6. Application Security

### 6.1 Input Validation

**Validate all user inputs:**

```javascript
const Joi = require('joi');

// Define validation schema
const jobSchema = Joi.object({
  documentName: Joi.string().max(255).required(),
  recipientEmail: Joi.string().email().required(),
  amount: Joi.number().min(0).max(10000).required()
});

// Validate input
const { error, value } = jobSchema.validate(req.body);
if (error) {
  return res.status(400).json({ error: error.details[0].message });
}
```

**Sanitize inputs:**

```javascript
const validator = require('validator');

// Escape HTML to prevent XSS
const safeInput = validator.escape(userInput);

// Validate URLs
if (!validator.isURL(userInput)) {
  throw new Error('Invalid URL');
}

// Validate email
if (!validator.isEmail(userInput)) {
  throw new Error('Invalid email');
}
```

### 6.2 Cross-Site Scripting (XSS) Prevention

**Content Security Policy (CSP):**

```javascript
// Express helmet middleware
const helmet = require('helmet');

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "https:"],
    connectSrc: ["'self'", "https://j0dos52r5e.execute-api.us-east-1.amazonaws.com"]
  }
}));
```

### 6.3 Cross-Site Request Forgery (CSRF) Protection

**Implement CSRF tokens:**

```javascript
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

app.get('/form', csrfProtection, (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() });
});

app.post('/submit', csrfProtection, (req, res) => {
  // Process form
});
```

### 6.4 SQL Injection Prevention

**Use parameterized queries:**

```javascript
// ❌ BAD - Vulnerable to SQL injection
const query = `SELECT * FROM users WHERE email = '${userInput}'`;

// ✅ GOOD - Parameterized query
const query = 'SELECT * FROM users WHERE email = ?';
db.query(query, [userInput], (err, results) => {
  // Handle results
});
```

### 6.5 Security Headers

**Implement all security headers:**

```javascript
const helmet = require('helmet');

app.use(helmet({
  contentSecurityPolicy: true,
  crossOriginEmbedderPolicy: true,
  crossOriginOpenerPolicy: true,
  crossOriginResourcePolicy: true,
  dnsPrefetchControl: true,
  frameguard: { action: 'deny' },
  hidePoweredBy: true,
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  },
  ieNoOpen: true,
  noSniff: true,
  referrerPolicy: { policy: 'no-referrer' },
  xssFilter: true
}));
```

### 6.6 Dependency Security

**Scan dependencies regularly:**

```bash
# npm audit
npm audit

# Fix vulnerabilities
npm audit fix

# Snyk scan
snyk test

# OWASP Dependency Check
dependency-check --project "C2M API Client" --scan ./
```

**Use Dependabot or Renovate:**

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
```

---

## 7. Monitoring & Incident Response

### 7.1 Security Monitoring

**Monitor for:**

- Failed authentication attempts (> 5 in 5 minutes)
- Unusual API usage patterns (sudden spike)
- Requests from unexpected IP addresses
- Token usage after expiration
- Privilege escalation attempts
- Data exfiltration attempts (large downloads)

### 7.2 Logging Security Events

**What to log:**

```javascript
logger.info({
  timestamp: new Date().toISOString(),
  event_type: 'authentication_failure',
  user: userEmail,
  ip_address: req.ip,
  user_agent: req.get('User-Agent'),
  reason: 'invalid_credentials',
  request_id: req.id
});
```

**What NOT to log:**
- Passwords
- Client secrets
- Full JWT tokens
- Credit card numbers
- Social security numbers

### 7.3 Alerting

**Set up alerts for:**

```yaml
# Example CloudWatch alarm
AuthenticationFailures:
  MetricName: FailedAuthAttempts
  Threshold: 10
  Period: 300 # 5 minutes
  EvaluationPeriods: 1
  AlarmActions:
    - arn:aws:sns:us-east-1:123456789:security-alerts

UnauthorizedAccess:
  MetricName: 403Errors
  Threshold: 5
  Period: 60
  EvaluationPeriods: 1
  AlarmActions:
    - arn:aws:sns:us-east-1:123456789:security-alerts
```

### 7.4 Incident Response Plan

**1. Detection:**
- Automated alerts
- User reports
- Security scans

**2. Containment:**
- Disable compromised accounts
- Revoke compromised credentials
- Block malicious IPs
- Isolate affected systems

**3. Investigation:**
- Review logs
- Identify scope of breach
- Determine data accessed
- Document timeline

**4. Eradication:**
- Remove malicious access
- Patch vulnerabilities
- Update security controls

**5. Recovery:**
- Restore systems from backups
- Verify system integrity
- Resume normal operations

**6. Post-Incident:**
- Document lessons learned
- Update security procedures
- Notify affected parties (if required)
- Regulatory reporting (if required)

---

## 8. Compliance & Audit

### 8.1 Regulatory Requirements

Depending on your industry and location, you may need to comply with:

- **GDPR** (EU) - General Data Protection Regulation
- **CCPA** (California) - California Consumer Privacy Act
- **HIPAA** (Healthcare) - Health Insurance Portability and Accountability Act
- **PCI DSS** (Payment Cards) - Payment Card Industry Data Security Standard
- **SOC 2** - Service Organization Control 2
- **FedRAMP** (US Government) - Federal Risk and Authorization Management Program

### 8.2 Audit Logging

**Enable comprehensive audit trails:**

```javascript
function auditLog(event) {
  return {
    timestamp: new Date().toISOString(),
    event_type: event.type,
    user_id: event.userId,
    resource: event.resource,
    action: event.action,
    result: event.result, // success or failure
    ip_address: event.ipAddress,
    session_id: event.sessionId,
    changes: event.changes, // Before/after values
    request_id: event.requestId
  };
}

// Log administrative actions
auditLogger.info(auditLog({
  type: 'user_permission_change',
  userId: 'admin@company.com',
  resource: 'user:john@company.com',
  action: 'grant_admin_role',
  result: 'success',
  ipAddress: req.ip,
  sessionId: req.sessionID,
  changes: { role: { from: 'user', to: 'admin' } },
  requestId: req.id
}));
```

### 8.3 Access Reviews

**Conduct regular access reviews:**

- **Quarterly**: Review all user accounts
- **Monthly**: Review administrator accounts
- **Weekly**: Review privileged API keys
- **After termination**: Immediately revoke access

**Review checklist:**
- [ ] Is user still with organization?
- [ ] Does user still need this access?
- [ ] Are permissions still appropriate?
- [ ] Has user accessed system recently?
- [ ] Any suspicious activity?

### 8.4 Penetration Testing

**Schedule regular security assessments:**

- **Annual**: Full penetration test by third party
- **Quarterly**: Automated vulnerability scans
- **Monthly**: Dependency security scans
- **Continuous**: SAST/DAST in CI/CD pipeline

---

## 9. Security Checklist

### 9.1 Initial Setup

- [ ] Store client credentials in secrets manager
- [ ] Configure HTTPS-only communication
- [ ] Implement TLS 1.2 or higher
- [ ] Set up firewall rules (outbound HTTPS only)
- [ ] Configure strong password policy
- [ ] Enable MFA for administrator accounts
- [ ] Implement rate limiting
- [ ] Set up security headers (CSP, HSTS, etc.)
- [ ] Configure session timeouts
- [ ] Implement audit logging

### 9.2 Development

- [ ] Use environment variables for configuration
- [ ] Validate all user inputs
- [ ] Sanitize outputs to prevent XSS
- [ ] Use parameterized queries (prevent SQL injection)
- [ ] Implement CSRF protection
- [ ] Scan dependencies for vulnerabilities
- [ ] Use security linters (ESLint security plugin)
- [ ] Implement error handling (don't expose internals)
- [ ] Add security tests to test suite

### 9.3 Deployment

- [ ] Scan for secrets before commit (git-secrets)
- [ ] Run SAST scan in CI/CD
- [ ] Run DAST scan in staging
- [ ] Review security scan results
- [ ] Deploy with least privilege permissions
- [ ] Enable CloudWatch logging
- [ ] Set up security alerts
- [ ] Document security architecture

### 9.4 Operations

- [ ] Monitor authentication failures
- [ ] Review audit logs weekly
- [ ] Scan for vulnerabilities monthly
- [ ] Rotate credentials quarterly
- [ ] Conduct access reviews quarterly
- [ ] Test incident response plan annually
- [ ] Update security documentation
- [ ] Train team on security practices

---

## Appendix A: Security Tools

### Static Analysis (SAST)

- **SonarQube** - Code quality and security
- **ESLint** (security plugin) - JavaScript linting
- **Bandit** - Python security linter
- **Checkmarx** - Enterprise SAST

### Dynamic Analysis (DAST)

- **OWASP ZAP** - Web app security scanner
- **Burp Suite** - Security testing platform
- **Acunetix** - Web vulnerability scanner

### Dependency Scanning

- **npm audit** - Built-in npm security audit
- **Snyk** - Open source security
- **WhiteSource** - Open source security management
- **Dependabot** - Automated dependency updates

### Secret Detection

- **git-secrets** - Prevent committing secrets
- **TruffleHog** - Find secrets in Git history
- **GitGuardian** - Real-time secret detection

### Infrastructure Security

- **AWS Security Hub** - Centralized security findings
- **AWS GuardDuty** - Threat detection
- **AWS Inspector** - Vulnerability management
- **Prowler** - AWS security assessment

---

## Appendix B: Security Contacts

**Click2Mail Security Team:**
- Email: security@click2mail.com
- PGP Key: (Available on request)
- Vulnerability Reports: security@click2mail.com

**Incident Reporting:**
- P1 (Critical): Call 1-XXX-XXX-XXXX (24/7)
- P2-P4: Email support@click2mail.com

**Security Updates:**
- Mailing List: security-updates@click2mail.com
- RSS Feed: https://status.click2mail.com/rss

---

**Document Version**: 1.0
**Last Reviewed**: 2025-10-19
**Next Review**: 2026-01-19
**Owner**: Click2Mail Security Team
**Feedback**: security@click2mail.com
