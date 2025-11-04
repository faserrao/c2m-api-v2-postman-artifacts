# AWS Infrastructure Summary - C2M API V2 Project

**Last Updated:** 2025-10-16
**AWS Account:** 682033482049 (faserrao@gmail.com)
**Region:** us-east-1 (US East - N. Virginia)

---

## Table of Contents
1. [AWS Account Information](#aws-account-information)
2. [Cognito Authentication (Unified Pool)](#cognito-authentication-unified-pool)
3. [Click2Endpoint-AWS (Main Application)](#click2endpoint-aws-main-application)
4. [Click2Endpoint-Business (Business Edition)](#click2endpoint-business-business-edition)
5. [CloudFormation Stacks](#cloudformation-stacks)
6. [API Keys & Secrets](#api-keys--secrets)
7. [Environment Variables](#environment-variables)
8. [Quick Access Links](#quick-access-links)
9. [Deployment Commands](#deployment-commands)

---

## AWS Account Information

| Property | Value |
|----------|-------|
| **Account ID** | `682033482049` |
| **Region** | `us-east-1` (US East - N. Virginia) |
| **User** | faserrao@gmail.com |
| **Role** | AWSReservedSSO_AWSAdministratorAccess_e07f0eb471165d16 |
| **ARN** | arn:aws:sts::682033482049:assumed-role/AWSReservedSSO_AWSAdministratorAccess_e07f0eb471165d16/faserrao@gmail.com |

---

## Cognito Authentication (Unified Pool)

### Stack Information
- **Stack Name:** `C2MUnifiedAuthStack-dev`
- **Repository:** `c2m-api-v2-security/cognito-auth-app/`
- **Creation Date:** 2025-10-16

### Cognito User Pool
- **User Pool ID:** `us-east-1_TOb5udmMc`
- **User Pool Name:** `c2m-unified-users-dev`
- **App Client ID:** `2losm7hun7lraevr338uatb9b`
- **Sign-in Method:** Username only (no email aliases)

### Cognito Users

| Username | Status | Enabled | Password |
|----------|--------|---------|----------|
| **frank** | CONFIRMED | Yes | `FrankPass123!` |
| **developer** | CONFIRMED | Yes | `DevPass123!` |
| **tester** | CONFIRMED | Yes | `TestPass123!` |
| **postman-ci** | CONFIRMED | Yes | `PostmanCIPass123!` |

**Note:** All users are configured with permanent passwords (not temporary).

### User Management Scripts
- **Location:** `c2m-api-v2-security/cognito-auth-app/scripts/`
- **Create User:** `./create-user.sh <username>`
- **Create All Users:** `./create-users.sh`
- **Deploy with Users:** `./deploy.sh` (deploys CDK + creates users)

---

## Click2Endpoint-AWS (Main Application)

### Overview
Technical wizard for API developers and integrators.

### CloudFront Distribution
- **URL:** https://d2dodhc21bvs3s.cloudfront.net
- **Distribution ID:** `E2B7JKIUZQAW3N`
- **Domain Name:** `d2dodhc21bvs3s.cloudfront.net`
- **Status:** Active

### S3 Bucket
- **Bucket Name:** `click2endpoint-dev-682033482049`
- **Purpose:** Static website hosting (React SPA)
- **Removal Policy:** DESTROY (dev environment)
- **Auto Delete Objects:** Yes (dev environment)

### Lambda Code Executor
- **Function URL:** https://qymolz6zgxpphiskaxjon2lg3q0nfbgk.lambda-url.us-east-1.on.aws/
- **Function Name:** `click2endpoint-executor-dev`
- **Runtime:** Python 3.12
- **Handler:** `handler.lambda_handler`
- **Timeout:** 30 seconds
- **Memory:** 512 MB
- **Purpose:** Execute Python, JavaScript (Node.js), and Bash (cURL) code

### CloudFormation Stacks
1. **Click2Endpoint-Hosting-dev**
   - S3 Bucket
   - CloudFront Distribution
   - Bucket Deployment

2. **Click2Endpoint-Execution-dev**
   - Lambda Function
   - Lambda Function URL
   - IAM Role

### Repository
- **Location:** `click2endpoint-aws/`
- **Structure:**
  ```
  click2endpoint-aws/
   cdk/                    # CDK infrastructure
      bin/cdk.ts         # Main CDK app
      lib/
         hosting-stack.ts
         execution-stack.ts
      package.json
   frontend/              # React application
      src/
      dist/              # Production build
      .env.local         # Environment variables
   lambda/
       code-executor/     # Lambda function code
  ```

---

## Click2Endpoint-Business (Business Edition)

### Overview
Business-focused interface with NLP/AI features for non-technical users.

### CloudFront Distribution
- **URL:** https://dq4o2pz0jd98i.cloudfront.net
- **Distribution ID:** `E15OSNMOR6YGWI`
- **Domain Name:** `dq4o2pz0jd98i.cloudfront.net`
- **Status:** Active

### S3 Bucket
- **Bucket Name:** `click2endpoint-business-dev-682033482049`
- **Purpose:** Static website hosting (React SPA)
- **Removal Policy:** DESTROY (dev environment)
- **Auto Delete Objects:** Yes (dev environment)

### Lambda Code Executor
- **Function URL:** https://auhgbd6feg25bfym2quqtli3wq0gwixs.lambda-url.us-east-1.on.aws/
- **Function Name:** `click2endpoint-business-executor-dev`
- **Function ARN:** arn:aws:lambda:us-east-1:682033482049:function:click2endpoint-business-executor-dev
- **Runtime:** Python 3.12
- **Handler:** `handler.lambda_handler`
- **Timeout:** 30 seconds
- **Memory:** 512 MB

### CloudFormation Stacks
1. **Click2EndpointBusiness-Hosting-dev**
   - S3 Bucket
   - CloudFront Distribution
   - Bucket Deployment

2. **Click2EndpointBusiness-Execution-dev**
   - Lambda Function
   - Lambda Function URL
   - IAM Role

### Repository
- **Location:** `click2endpoint-business/`
- **Structure:**
  ```
  click2endpoint-business/
   cdk/                    # CDK infrastructure
      bin/cdk.ts         # Main CDK app
      lib/
         hosting-stack.ts
         execution-stack.ts
      package.json
   frontend/              # React application (symlinked .env.local)
      src/
      dist/              # Production build
      .env.local -> ../../click2endpoint-aws/frontend/.env.local
   lambda/
       code-executor/     # Lambda function code
  ```

**Note:** `.env.local` is symlinked from click2endpoint-aws to share configuration.

---

## CloudFormation Stacks

### Active Stacks (5 total)

| Stack Name | Purpose | Resources |
|------------|---------|-----------|
| **C2MUnifiedAuthStack-dev** | Cognito authentication | User Pool, App Client |
| **Click2Endpoint-Hosting-dev** | AWS main hosting | S3, CloudFront, Deployment |
| **Click2Endpoint-Execution-dev** | AWS main Lambda | Lambda Function, Function URL |
| **Click2EndpointBusiness-Hosting-dev** | Business hosting | S3, CloudFront, Deployment |
| **Click2EndpointBusiness-Execution-dev** | Business Lambda | Lambda Function, Function URL |

### Stack Outputs

#### C2MUnifiedAuthStack-dev
```
UserPoolId: us-east-1_TOb5udmMc
WebClientId: 2losm7hun7lraevr338uatb9b
UserPoolArn: arn:aws:cognito-idp:us-east-1:682033482049:userpool/us-east-1_TOb5udmMc
```

#### Click2Endpoint-Hosting-dev
```
BucketName: click2endpoint-dev-682033482049
WebsiteUrl: https://d2dodhc21bvs3s.cloudfront.net
DistributionId: E2B7JKIUZQAW3N
DistributionDomainName: d2dodhc21bvs3s.cloudfront.net
```

#### Click2Endpoint-Execution-dev
```
FunctionUrl: https://qymolz6zgxpphiskaxjon2lg3q0nfbgk.lambda-url.us-east-1.on.aws/
FunctionName: click2endpoint-executor-dev
FunctionArn: arn:aws:lambda:us-east-1:682033482049:function:click2endpoint-executor-dev
```

#### Click2EndpointBusiness-Hosting-dev
```
BucketName: click2endpoint-business-dev-682033482049
WebsiteUrl: https://dq4o2pz0jd98i.cloudfront.net
DistributionId: E15OSNMOR6YGWI
DistributionDomainName: dq4o2pz0jd98i.cloudfront.net
```

#### Click2EndpointBusiness-Execution-dev
```
FunctionUrl: https://auhgbd6feg25bfym2quqtli3wq0gwixs.lambda-url.us-east-1.on.aws/
FunctionName: click2endpoint-business-executor-dev
FunctionArn: arn:aws:lambda:us-east-1:682033482049:function:click2endpoint-business-executor-dev
```

---

## API Keys & Secrets

### Postman API Keys

**Personal Workspace (Frank Serrao)**
```
POSTMAN_SERRAO_API_KEY=PMAK-your-personal-api-key-here
```

**Team Workspace (C2M Corporate)**
```
POSTMAN_C2M_API_KEY=PMAK-your-team-api-key-here
```

**Note:** These keys are stored in `c2m-api-repo/.env` and mapped to frontend as:
- `POSTMAN_SERRAO_API_KEY`  `VITE_POSTMAN_API_KEY_PERSONAL`
- `POSTMAN_C2M_API_KEY`  `VITE_POSTMAN_API_KEY_TEAM`

### OpenAI API Key (Phase 2 NLP - Development Only)
```
OPENAI_API_KEY=sk-proj-your-openai-api-key-here
```

**Note:** Used only in development branch for NLP/AI features. Not included in production builds.

### C2M Auth Server (M2M Authentication)

**Base URL:**
```
https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev
```

**Default Test Credentials (for code examples only):**
```
CLIENT_ID=test-client-123
CLIENT_SECRET=super-secret-password-123
```

**Auth Endpoints:**
- Long-term token: `POST /auth/tokens/long`
- Short-term token: `POST /auth/tokens/short`
- Refresh token: `POST /auth/tokens/refresh`

**Note:** This is a separate M2M authentication system (Lambda authorizer), NOT the Cognito User Pool used by Click2Endpoint apps.

### Default Mock Server
```
MOCK_SERVER_URL=https://3f9ddaa4-be33-4d8d-9669-38c0f5434b65.mock.pstmn.io
```

---

## Environment Variables

### Frontend Configuration (.env.local)

**Location:** Both apps share the same configuration via symlink:
- Primary: `click2endpoint-aws/frontend/.env.local`
- Symlinked: `click2endpoint-business/frontend/.env.local`  `../../click2endpoint-aws/frontend/.env.local`

```bash
# ============================================================================
# Cognito Configuration (from C2M Unified Auth Stack)
# ============================================================================
VITE_COGNITO_USER_POOL_ID=us-east-1_TOb5udmMc
VITE_COGNITO_CLIENT_ID=2losm7hun7lraevr338uatb9b

# ============================================================================
# Postman API Keys
# ============================================================================
# Personal Workspace (Frank Serrao)
VITE_POSTMAN_API_KEY_PERSONAL=PMAK-your-personal-api-key-here

# Team Workspace (C2M Corporate)
VITE_POSTMAN_API_KEY_TEAM=PMAK-your-team-api-key-here

# ============================================================================
# OpenAI (Phase 2 NLP - Development Only)
# ============================================================================
VITE_OPENAI_API_KEY=sk-proj-your-openai-api-key-here

# ============================================================================
# Mock Server
# ============================================================================
VITE_DEFAULT_MOCK_URL=https://3f9ddaa4-be33-4d8d-9669-38c0f5434b65.mock.pstmn.io

# ============================================================================
# C2M Auth Server (for code generation examples only)
# ============================================================================
VITE_AUTH_BASE_URL=https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev
VITE_DEFAULT_CLIENT_ID=test-client-123
VITE_DEFAULT_CLIENT_SECRET=super-secret-password-123

# ============================================================================
# Lambda Code Execution
# ============================================================================
# Click2Endpoint-AWS Lambda Function URL
VITE_EXECUTION_API_URL=https://qymolz6zgxpphiskaxjon2lg3q0nfbgk.lambda-url.us-east-1.on.aws/

# Click2Endpoint-Business Lambda Function URL (if different frontend)
# VITE_EXECUTION_API_URL=https://auhgbd6feg25bfym2quqtli3wq0gwixs.lambda-url.us-east-1.on.aws/

# For local development, use:
# VITE_EXECUTION_API_URL=http://localhost:3001/api/execute
```

**Important Notes:**
- `VITE_` prefix is **required** for Vite to expose variables to browser
- These are loaded at **BUILD TIME**, not runtime
- Never commit `.env.local` to git (add to `.gitignore`)
- Copy `.env.example`  `.env.local` and fill in values

---

## Quick Access Links

### Production URLs

| Application | URL | Purpose |
|-------------|-----|---------|
| **Click2Endpoint AWS** | https://d2dodhc21bvs3s.cloudfront.net | Technical wizard for developers |
| **Click2Endpoint Business** | https://dq4o2pz0jd98i.cloudfront.net | Business interface with NLP/AI |

### Lambda Function URLs

| Function | URL | Purpose |
|----------|-----|---------|
| **AWS Executor** | https://qymolz6zgxpphiskaxjon2lg3q0nfbgk.lambda-url.us-east-1.on.aws/ | Code execution for AWS app |
| **Business Executor** | https://auhgbd6feg25bfym2quqtli3wq0gwixs.lambda-url.us-east-1.on.aws/ | Code execution for Business app |

### Authentication & APIs

| Service | URL/ID | Purpose |
|---------|--------|---------|
| **Cognito User Pool** | us-east-1_TOb5udmMc | Unified authentication |
| **Cognito App Client** | 2losm7hun7lraevr338uatb9b | OAuth2 client |
| **C2M Auth Server** | https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev | M2M authentication |
| **Mock Server** | https://3f9ddaa4-be33-4d8d-9669-38c0f5434b65.mock.pstmn.io | Postman mock server |

### AWS Console Links

| Resource | Link |
|----------|------|
| **CloudFormation Stacks** | https://console.aws.amazon.com/cloudformation/home?region=us-east-1 |
| **Cognito User Pools** | https://console.aws.amazon.com/cognito/v2/idp/user-pools?region=us-east-1 |
| **CloudFront Distributions** | https://console.aws.amazon.com/cloudfront/v3/home?region=us-east-1 |
| **Lambda Functions** | https://console.aws.amazon.com/lambda/home?region=us-east-1 |
| **S3 Buckets** | https://s3.console.aws.amazon.com/s3/buckets?region=us-east-1 |

---

## Deployment Commands

### Prerequisites
```bash
# Ensure AWS credentials are configured
aws configure

# Verify account
aws sts get-caller-identity
```

### C2M Unified Auth Stack (Cognito)

**Deploy with automatic user creation:**
```bash
cd c2m-api-v2-security/cognito-auth-app
./scripts/deploy.sh
```

**Deploy CDK only (no users):**
```bash
cd c2m-api-v2-security/cognito-auth-app
npx cdk deploy --require-approval never
```

**Create users manually:**
```bash
cd c2m-api-v2-security/cognito-auth-app
./scripts/create-users.sh
```

### Click2Endpoint-AWS

**Full deployment:**
```bash
cd click2endpoint-aws/frontend
npm run build

cd ../cdk
npm install
npx cdk bootstrap  # First time only
npx cdk deploy --all --require-approval never
```

**Frontend only (after CDK deployed):**
```bash
cd click2endpoint-aws/frontend
npm run build

cd ../cdk
npx cdk deploy Click2Endpoint-Hosting-dev --require-approval never
```

**Invalidate CloudFront cache:**
```bash
aws cloudfront create-invalidation \
  --distribution-id E2B7JKIUZQAW3N \
  --paths "/*"
```

### Click2Endpoint-Business

**Full deployment:**
```bash
cd click2endpoint-business/frontend
npm run build

cd ../cdk
npm install
npx cdk deploy --all --require-approval never
```

**Frontend only (after CDK deployed):**
```bash
cd click2endpoint-business/frontend
npm run build

cd ../cdk
npx cdk deploy Click2EndpointBusiness-Hosting-dev --require-approval never
```

**Invalidate CloudFront cache:**
```bash
aws cloudfront create-invalidation \
  --distribution-id E15OSNMOR6YGWI \
  --paths "/*"
```

### Teardown (Delete All Resources)

**WARNING: This will delete all AWS resources!**

```bash
# Delete Click2Endpoint-AWS stacks
cd click2endpoint-aws/cdk
npx cdk destroy --all

# Delete Click2Endpoint-Business stacks
cd ../../click2endpoint-business/cdk
npx cdk destroy --all

# Delete Cognito Auth Stack
cd ../../c2m-api-v2-security/cognito-auth-app
npx cdk destroy
```

---

## Architecture Overview

### Two Separate Applications

```

                     AWS Account 682033482049                     
                         Region: us-east-1                        

                                  
                    
                                               
             
           Click2Endpoint-AWS      Click2Endpoint-     
           (Technical)             Business (NLP/AI)   
             
                                               
    
                                                                  
            
CloudFr      Lambda       CloudFr   Lambda    Cognito     S3   
ont #1     Executor #1    ont #2    Exec #2    Pool     Buckets
            
d2dodhc...  qymolz6...        dq4o2pz... auhgbd6...  us-east-1_   2 buckets
                                                      TOb5udmMc
```

### Shared vs Separate Resources

**Shared Resources:**
- Cognito User Pool (us-east-1_TOb5udmMc)
- Cognito App Client (2losm7hun7lraevr338uatb9b)
- Environment variables (.env.local symlinked)
- Postman API keys
- Mock server

**Separate Resources:**
- CloudFront distributions (different URLs)
- S3 buckets (different names)
- Lambda functions (different function URLs)
- CloudFormation stacks (different prefixes)

---

## Security Best Practices

### Production Recommendations

1. **Cognito User Pool:**
   - Enable MFA (Multi-Factor Authentication)
   - Set strong password policies
   - Enable advanced security features (compromised credentials check)
   - Configure user migration triggers

2. **CloudFront:**
   - Enable AWS WAF (Web Application Firewall)
   - Configure custom domain with SSL/TLS certificate
   - Enable origin access control (OAC) - already configured
   - Set up CloudWatch alarms for anomalies

3. **Lambda Functions:**
   - Implement rate limiting
   - Add CloudWatch logging - already configured
   - Set up X-Ray tracing for debugging
   - Configure VPC if accessing private resources

4. **S3 Buckets:**
   - Enable versioning in production - configured
   - Enable server-side encryption - configured (S3_MANAGED)
   - Block public access - configured
   - Enable CloudTrail logging

5. **API Keys:**
   - Rotate Postman API keys quarterly
   - Store secrets in AWS Secrets Manager (production)
   - Never commit API keys to git
   - Use environment variables

### Current Security Status

| Feature | Dev Environment | Production Recommendation |
|---------|----------------|--------------------------|
| **MFA** | Disabled | Enable |
| **WAF** | Not configured | Configure |
| **Custom Domain** | Using CloudFront URL | Configure custom domain |
| **S3 Versioning** | Disabled (dev) | Enabled (prod) |
| **S3 Encryption** | S3_MANAGED | KMS encryption for prod |
| **Block Public Access** | Enabled | Enabled |
| **CloudWatch Logs** | Enabled | Enabled |
| **Rate Limiting** | Not configured | Configure |

---

## Cost Estimation

### Monthly AWS Costs (Development Environment)

| Service | Usage | Estimated Cost |
|---------|-------|----------------|
| **Cognito** | 4 active users | $0 (Free tier: 50,000 MAU) |
| **CloudFront** | <10 GB/month | $1.00 |
| **S3** | 2 buckets, <1 GB storage | $0.50 |
| **Lambda** | <1M requests/month | $0.20 (Free tier: 1M requests) |
| **CloudFormation** | 5 stacks | $0 (Free) |
| **API Gateway** | (Auth server, separate stack) | $3.50 |
| **DynamoDB** | (Token storage, separate) | $0.25 (Free tier) |
| **CloudWatch Logs** | <5 GB/month | $0.50 |
| **Total** | | **~$6/month** |

**Note:** Production costs will be higher due to increased traffic and additional security features (WAF, custom domain, etc.).

---

## Troubleshooting

### Common Issues

#### 1. Deployment Fails with "Export already exists"
**Error:** `Export with name Click2Endpoint-X-dev is already exported`

**Cause:** CloudFormation export name conflict between stacks.

**Solution:**
```bash
# Delete the failed stack
aws cloudformation delete-stack --stack-name <failed-stack-name>

# Update export names in CDK code to be unique
# Example: Click2Endpoint-X-dev  Click2EndpointBusiness-X-dev

# Rebuild and redeploy
npm run build && npx cdk deploy --all
```

#### 2. CloudFront Shows Old Version
**Cause:** CloudFront cache not invalidated.

**Solution:**
```bash
# Create cache invalidation
aws cloudfront create-invalidation \
  --distribution-id <DISTRIBUTION_ID> \
  --paths "/*"

# Or hard refresh browser (Ctrl+Shift+R)
```

#### 3. Cognito Login Fails
**Cause:** User password not set to permanent.

**Solution:**
```bash
# Set permanent password
aws cognito-idp admin-set-user-password \
  --user-pool-id us-east-1_TOb5udmMc \
  --username <username> \
  --password '<password>' \
  --permanent
```

#### 4. Lambda Function URL Returns 403
**Cause:** CORS not configured or function URL not created.

**Solution:**
1. Check Lambda function URL exists in AWS Console
2. Verify CORS configuration in `execution-stack.ts`
3. Redeploy execution stack: `npx cdk deploy <stack-name>-Execution-dev`

#### 5. npm run build Fails
**Cause:** Dependencies not installed or corrupted.

**Solution:**
```bash
# Clean and reinstall
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

---

## Maintenance

### Regular Tasks

**Weekly:**
- Check CloudWatch logs for errors
- Review Cognito user activity
- Monitor Lambda execution metrics

**Monthly:**
- Review AWS cost reports
- Update dependencies (`npm outdated`, `npm update`)
- Check for AWS service updates

**Quarterly:**
- Rotate API keys (Postman, OpenAI)
- Review and update user passwords
- Audit CloudFormation stacks for orphaned resources

**Annually:**
- Update AWS SDK versions
- Review security configurations
- Update SSL/TLS certificates (if custom domain)

---

## Change Log

### 2025-10-16
- Created unified Cognito User Pool (C2MUnifiedAuthStack-dev)
- Deployed Click2Endpoint-AWS to CloudFront (d2dodhc21bvs3s)
- Deployed Click2Endpoint-Business to CloudFront (dq4o2pz0jd98i)
- Created 4 Cognito users (frank, developer, tester, postman-ci)
- Configured separate Lambda executors for each app
- Fixed CloudFormation export name conflicts
- Symlinked .env.local for shared configuration
- Updated all stack names to avoid conflicts

### Previous Changes
- 2025-10-13: Initial Click2Endpoint-AWS deployment
- 2025-10-06: Lambda code execution implemented
- 2025-10-05: Cognito authentication integrated

---

## Support & Contact

**Project Owner:** Frank Serrao
**Email:** faserrao@gmail.com
**AWS Account:** 682033482049

**Documentation:**
- Main README: `C2M_API_v2/README.md`
- Claude Context: `CLAUDE.md` (in each project directory)
- Project Memory: `c2m-api-repo/user-guides/PROJECT_MEMORY.md`

**Repositories:**
- c2m-api-repo: Main API repository
- c2m-api-v2-security: Authentication service
- click2endpoint-aws: Production wizard (React + AWS)
- click2endpoint-business: Business edition (React + AWS)

---

## Appendix A: AWS CLI Commands

### Cognito

```bash
# List users
aws cognito-idp list-users \
  --user-pool-id us-east-1_TOb5udmMc \
  --region us-east-1

# Describe user pool
aws cognito-idp describe-user-pool \
  --user-pool-id us-east-1_TOb5udmMc \
  --region us-east-1

# Create user
aws cognito-idp admin-create-user \
  --user-pool-id us-east-1_TOb5udmMc \
  --username <username> \
  --temporary-password '<temp-password>' \
  --region us-east-1

# Set permanent password
aws cognito-idp admin-set-user-password \
  --user-pool-id us-east-1_TOb5udmMc \
  --username <username> \
  --password '<password>' \
  --permanent \
  --region us-east-1

# Delete user
aws cognito-idp admin-delete-user \
  --user-pool-id us-east-1_TOb5udmMc \
  --username <username> \
  --region us-east-1
```

### CloudFront

```bash
# List distributions
aws cloudfront list-distributions

# Get distribution config
aws cloudfront get-distribution \
  --id <DISTRIBUTION_ID>

# Create invalidation
aws cloudfront create-invalidation \
  --distribution-id <DISTRIBUTION_ID> \
  --paths "/*"

# List invalidations
aws cloudfront list-invalidations \
  --distribution-id <DISTRIBUTION_ID>
```

### S3

```bash
# List buckets
aws s3 ls

# List bucket contents
aws s3 ls s3://click2endpoint-dev-682033482049/

# Sync local folder to S3
aws s3 sync ./dist s3://click2endpoint-dev-682033482049/ \
  --delete

# Empty bucket (before deletion)
aws s3 rm s3://click2endpoint-dev-682033482049/ --recursive
```

### Lambda

```bash
# List functions
aws lambda list-functions --region us-east-1

# Get function configuration
aws lambda get-function \
  --function-name click2endpoint-executor-dev \
  --region us-east-1

# Invoke function (test)
aws lambda invoke \
  --function-name click2endpoint-executor-dev \
  --payload '{"code":"print(\"Hello\")","language":"python"}' \
  --region us-east-1 \
  response.json

# Get function URL
aws lambda get-function-url-config \
  --function-name click2endpoint-executor-dev \
  --region us-east-1

# View logs
aws logs tail /aws/lambda/click2endpoint-executor-dev \
  --follow \
  --region us-east-1
```

### CloudFormation

```bash
# List stacks
aws cloudformation list-stacks \
  --region us-east-1 \
  --stack-status-filter CREATE_COMPLETE UPDATE_COMPLETE

# Describe stack
aws cloudformation describe-stacks \
  --stack-name Click2Endpoint-Hosting-dev \
  --region us-east-1

# Get stack outputs
aws cloudformation describe-stacks \
  --stack-name Click2Endpoint-Hosting-dev \
  --query 'Stacks[0].Outputs' \
  --region us-east-1

# Delete stack
aws cloudformation delete-stack \
  --stack-name <stack-name> \
  --region us-east-1

# List stack resources
aws cloudformation list-stack-resources \
  --stack-name Click2Endpoint-Hosting-dev \
  --region us-east-1
```

---

## Appendix B: CDK Commands

```bash
# List stacks
npx cdk ls

# Synthesize CloudFormation template
npx cdk synth

# Show differences
npx cdk diff

# Deploy specific stack
npx cdk deploy <stack-name>

# Deploy all stacks
npx cdk deploy --all

# Deploy without approval prompts
npx cdk deploy --all --require-approval never

# Destroy stack
npx cdk destroy <stack-name>

# Destroy all stacks
npx cdk destroy --all

# Bootstrap (first time only)
npx cdk bootstrap aws://682033482049/us-east-1

# Show context
npx cdk context

# Clear context
npx cdk context --clear
```

---

**Document End**

*This document is auto-generated and should be updated whenever infrastructure changes are made.*
