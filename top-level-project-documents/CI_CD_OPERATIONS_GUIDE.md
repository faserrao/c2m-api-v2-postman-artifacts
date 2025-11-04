# CI/CD Operations Guide - C2M API V2 System

**Document Version:** 1.0
**Last Updated:** 2025-10-17
**Purpose:** Comprehensive operational guide for deploying, monitoring, and maintaining all C2M API V2 systems
**Audience:** DevOps Engineers, System Administrators, Release Managers

---

## Executive Summary

This document is the **GOTO operational reference** for managing the C2M API V2 ecosystem. It consolidates deployment procedures, troubleshooting steps, and operational commands for all five interconnected systems.

**What's Covered:**
- Complete deployment procedures for all systems (Makefile + CDK)
- GitHub Actions CI/CD workflows and troubleshooting
- AWS infrastructure management (CloudFormation, Lambda, CloudFront, Cognito)
- Postman workspace operations and automation
- Monitoring, logging, and alerting setup
- Common issues and proven solutions

**Quick Navigation:**
- [Complete Deployment Flow](#complete-deployment-flow) - First-time setup
- [Standard Operations](#standard-operations) - Day-to-day commands
- [Troubleshooting](#troubleshooting-guide) - Common issues and fixes
- [Emergency Procedures](#emergency-procedures) - Rollback and recovery

---

## System Overview

### Five Interconnected Systems

```
c2m-api-repo (source)  [Makefile + GitHub Actions]
    |
    +--> c2m-api-artifacts (generated)  [GitHub Actions auto-commit]
    |
    +--> Postman Workspace (published)  [Personal/Corporate toggle]

c2m-api-v2-security (auth)  [AWS CDK]
    |
    +--> Lambda + API Gateway + DynamoDB
    |
    +--> Integrated via JWT pre-request script

click2endpoint-aws (tools)  [AWS CDK]
    |
    +--> S3 + CloudFront + Lambda + Cognito

click2endpoint-business (tools)  [AWS CDK]
    |
    +--> S3 + CloudFront + Lambda (shared Cognito)
```

### System Dependencies

**Deployment Order:**
1. c2m-api-v2-security (authentication first)
2. click2endpoint-aws and click2endpoint-business (can be parallel)
3. c2m-api-repo (documentation and testing)

**Shared Resources:**
- Cognito User Pool: us-east-1_TOb5udmMc (shared between click2endpoint apps)
- Postman workspaces: Personal and Corporate
- Mock server: Generated from c2m-api-repo

---

## Part 1: c2m-api-repo (Makefile + GitHub Actions)

### Pipeline Architecture

**Core Flow:**
```
EBNF Data Dictionary (source)
    |
    v [Python: ebnf_to_openapi_class_based.py]
OpenAPI Specification
    |
    v [Postman API: openapi-to-postmanv2]
Postman Collections
    |
    v [Prism/Postman Cloud]
Mock Servers
    |
    v [Newman CLI]
Test Results
    |
    v [Redocly]
Documentation
```

### Local Development Workflows

**Initial Setup:**
```bash
cd /Users/frankserrao/Dropbox/Customers/c2m/projects/c2m-api/C2M_API_v2/c2m-api-repo

# Install dependencies
make install

# Configure environment
cat > .env << EOF
POSTMAN_SERRAO_API_KEY=PMAK-your-personal-api-key-here
POSTMAN_C2M_API_KEY=PMAK-your-team-api-key-here
EOF

# Set workspace target (personal or team)
echo "personal" > .postman-target

# Test setup
make check-env
```

**Common Development Tasks:**

1. **EBNF to OpenAPI conversion:**
```bash
make generate-openapi-spec-from-ebnf-dd
make openapi-spec-lint
```

2. **Build Postman collections:**
```bash
make postman-instance-build-only  # No local testing
make postman-instance-build-and-test  # With local Prism mock
```

3. **Test with local mock:**
```bash
make prism-start  # Port 4010
make prism-mock-test
make prism-stop
```

4. **Smart rebuild (only changed files):**
```bash
make smart-rebuild-status  # Check what needs rebuilding
make smart-rebuild-dry-run  # Preview changes
make smart-rebuild  # Execute rebuild
```

5. **Publish to Postman:**
```bash
# Uses .postman-target file
make postman-publish

# Or force specific workspace
make postman-publish-personal
make postman-publish-corporate
```

### Makefile Deep Dive

**Key Orchestrator Targets:**
- `postman-instance-build-and-test` - Full pipeline with local testing
- `postman-instance-build-only` - Build without local Prism (CI-safe)
- `rebuild-all-with-delete` - Nuclear option (cleanup + rebuild)
- `rebuild-all-no-delete` - Rebuild preserving existing resources

**Environment Variables:**
- `POSTMAN_SERRAO_API_KEY` - Personal workspace API key
- `POSTMAN_C2M_API_KEY` - Corporate workspace API key
- `V=1` - Verbose output
- `DEBUG=1` - Debug mode

**Important Files:**
- `Makefile` - Main orchestrator (~3000 lines)
- `data_dictionary/c2mapiv2-dd.ebnf` - Source of truth
- `.postman-target` - Workspace selector (personal/team)
- `.env` - Local environment variables (gitignored)

### Postman Workspace Management

**Two Workspace System:**
```
Personal (Serrao)              Corporate (C2M)
- Development                  - Production
- Testing                      - Client sharing
- Experimentation              - Official releases
```

**Switching Workspaces:**
```bash
# Set to personal
echo "personal" > .postman-target
make postman-publish

# Set to corporate
echo "team" > .postman-target
make postman-publish
```

**Cleanup Operations:**
```bash
make postman-cleanup-all  # Delete ALL resources
make postman-cleanup-mocks  # Just mock servers
make postman-cleanup-collections  # Just collections
make postman-cleanup-environments  # Just environments
```

**Rebuild Procedures:**
```bash
# Standard rebuild (preserves resources)
make rebuild-all-no-delete

# Clean slate rebuild
make postman-cleanup-all
make rebuild-all-with-delete
```

### GitHub Actions CI/CD

**Main Workflow:** `.github/workflows/api-ci-cd.yml`

**Triggers:**
- Push to main branch
- Pull requests to main
- Manual workflow dispatch

**Jobs:**
1. Checkout repos (main + security)
2. Setup Node.js 18.x + Python 3.x
3. Install dependencies (npm + pip)
4. Build OpenAPI from EBNF: `make openapi-build`
5. Generate Postman collections: `make postman-collection-build`
6. Lint OpenAPI spec: `make lint`
7. Compare to origin/main: `make diff` (PRs only)
8. Build documentation: `make docs`
9. Validate artifacts (check for uncommitted changes)
10. Publish to Postman: `make postman-publish` (main branch only)
11. Commit artifacts to c2m-api-artifacts repo
12. Deploy docs to GitHub Pages

**CI-Specific Targets:**
```bash
make openapi-build  # EBNF -> OpenAPI + lint
make postman-collection-build  # Generate collections (no local servers)
make docs  # Build documentation (no serve)
make lint  # Validate OpenAPI spec
make diff  # Compare to origin/main
```

**Required GitHub Secrets:**
```
POSTMAN_API_KEY              # Postman API key (uses .postman-target)
POSTMAN_WORKSPACE_ID         # Workspace UUID
ARTIFACTS_REPO_TOKEN         # PAT for c2m-api-artifacts repo access
```

**Environment Detection:**
```makefile
ifdef CI
    SECURITY_DIR := c2m-api-v2-security
else
    SECURITY_DIR := ../c2m-api-v2-security
endif
```

### Troubleshooting

**Issue: Wrong workspace published**
```bash
# Check current target
cat .postman-target

# Fix
echo "personal" > .postman-target  # or "team"
git add .postman-target
git commit -m "Switch to personal workspace"
make postman-publish
```

**Issue: OpenAPI spec not updating**
```bash
# Force regeneration
rm -f openapi/c2mapiv2-openapi-spec-base.yaml
make generate-openapi-spec-from-ebnf-dd
make openapi-spec-lint
```

**Issue: Postman API 401/403 errors**
```bash
# Verify key
cat .env | grep POSTMAN

# Test key
curl -X GET https://api.getpostman.com/me \
  -H "X-Api-Key: YOUR_KEY"
```

**Issue: Tests failing**
```bash
# Check mock server status
make prism-status

# Restart mock
make prism-stop
make prism-start

# Regenerate test data
make postman-test-collection-add-examples
```

**Issue: CI/CD failing**

Common causes and fixes:

1. **Postman CLI not installed:**
```yaml
# Add to workflow
- name: Install Postman CLI
  run: |
    curl -o- "https://dl-cli.pstmn.io/install/linux64.sh" | sh
```

2. **Missing GitHub secrets:**
```bash
# Verify in repo Settings -> Secrets -> Actions
POSTMAN_API_KEY
POSTMAN_WORKSPACE_ID
ARTIFACTS_REPO_TOKEN
```

3. **Generated files not committed:**
```bash
# Commit locally first
make postman-instance-build-only
git add openapi/ postman/
git commit -m "Update generated files"
git push
```

---

## Part 2: c2m-api-v2-security (AWS CDK)

### Stack Architecture

**Deployed Stack:** C2MCognitoAuthStack-dev
**Base URL:** https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/

**AWS Resources:**
- API Gateway: j0dos52r5e (REST API)
- Lambda Functions: 4 (issue-long-token, issue-short-token, revoke-token, jwt-authorizer)
- DynamoDB: c2m-token-store-dev (token storage with TTL)
- Secrets Manager: c2m-api/dev/client-secrets
- CloudWatch Logs: /aws/lambda/* (90-day retention)

### Deployment Procedures

**Prerequisites:**
```bash
# Verify AWS credentials
aws sts get-caller-identity

# Should show account 682033482049
```

**Initial Deployment:**
```bash
cd /Users/frankserrao/Dropbox/Customers/c2m/projects/c2m-api/C2M_API_v2/c2m-api-v2-security/cognito-auth-app

# Install dependencies
npm install

# Bootstrap CDK (first time only)
npx cdk bootstrap aws://682033482049/us-east-1

# Deploy
npx cdk deploy --require-approval never
```

**Update Deployment:**
```bash
cd cognito-auth-app

# Show differences
npx cdk diff

# Deploy changes
npx cdk deploy
```

**Rollback Procedure:**
```bash
# List stack events
aws cloudformation describe-stack-events \
  --stack-name C2MCognitoAuthStack-dev \
  --region us-east-1 \
  --max-items 20

# Rollback to previous version
aws cloudformation rollback-stack \
  --stack-name C2MCognitoAuthStack-dev \
  --region us-east-1
```

### Testing Authentication

**Test Endpoints:**
```bash
# 1. Get long-term token
curl -X POST https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/tokens/long \
  -H "Content-Type: application/json" \
  -d '{"grant_type":"client_credentials","client_id":"test-client-123","client_secret":"super-secret-password-123"}' \
  | jq

# Save token
LONG_TOKEN="<token from response>"

# 2. Exchange for short-term token
curl -X POST https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/tokens/short \
  -H "Authorization: Bearer $LONG_TOKEN" \
  | jq

# Save short-term token
SHORT_TOKEN="<token from response>"

# 3. Test revocation
curl -X POST https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/tokens/revoke \
  -H "Authorization: Bearer $SHORT_TOKEN" \
  -d '{"tokenId":"<tokenId from long-term response>"}' \
  | jq
```

### Monitoring

**CloudWatch Logs:**
```bash
# View logs
aws logs tail /aws/lambda/issueLongToken-dev --follow --region us-east-1
aws logs tail /aws/lambda/issueShortToken-dev --follow --region us-east-1

# Search logs
aws logs filter-log-events \
  --log-group-name /aws/lambda/issueLongToken-dev \
  --filter-pattern "ERROR" \
  --region us-east-1
```

**Lambda Metrics:**
```bash
# Get function metrics
aws cloudwatch get-metric-statistics \
  --namespace AWS/Lambda \
  --metric-name Invocations \
  --dimensions Name=FunctionName,Value=issueLongToken-dev \
  --start-time 2025-10-17T00:00:00Z \
  --end-time 2025-10-17T23:59:59Z \
  --period 3600 \
  --statistics Sum \
  --region us-east-1
```

**DynamoDB Metrics:**
```bash
# Check token storage
aws dynamodb scan \
  --table-name c2m-token-store-dev \
  --region us-east-1 \
  --max-items 10
```

---

## Part 3: click2endpoint-aws (AWS CDK)

### Three-Stack Architecture

**1. CognitoStack:**
- User Pool: us-east-1_TOb5udmMc (SHARED with click2endpoint-business)
- App Client: 2losm7hun7lraevr338uatb9b

**2. HostingStack:**
- S3 Bucket: click2endpoint-dev-682033482049
- CloudFront: E2B7JKIUZQAW3N (https://d2dodhc21bvs3s.cloudfront.net)

**3. ExecutionStack:**
- Lambda: click2endpoint-executor-dev
- Function URL: https://qymolz6zgxpphiskaxjon2lg3q0nfbgk.lambda-url.us-east-1.on.aws/

### Deployment Procedures

**Full Deployment:**
```bash
cd /Users/frankserrao/Dropbox/Customers/c2m/projects/c2m-api/C2M_API_v2/click2endpoint-aws

# Build frontend
cd frontend
npm install
npm run build

# Deploy all stacks
cd ../cdk
npm install
npx cdk bootstrap  # First time only
npx cdk deploy --all --require-approval never
```

**Frontend-Only Update:**
```bash
cd click2endpoint-aws/frontend
npm run build

cd ../cdk
npx cdk deploy Click2Endpoint-Hosting-dev --require-approval never
```

**CloudFront Cache Invalidation:**
```bash
# Create invalidation
aws cloudfront create-invalidation \
  --distribution-id E2B7JKIUZQAW3N \
  --paths "/*"

# Check status
aws cloudfront get-invalidation \
  --distribution-id E2B7JKIUZQAW3N \
  --id <invalidation-id>
```

### User Management

**Create Cognito User:**
```bash
cd click2endpoint-aws

# Using helper script
./create-user.sh frank

# Or manually
aws cognito-idp admin-create-user \
  --user-pool-id us-east-1_TOb5udmMc \
  --username frank \
  --temporary-password TempPass123! \
  --region us-east-1

# Set permanent password
aws cognito-idp admin-set-user-password \
  --user-pool-id us-east-1_TOb5udmMc \
  --username frank \
  --password FrankPass123! \
  --permanent \
  --region us-east-1
```

### Monitoring

**CloudFront Metrics:**
```bash
# View CloudFront statistics
aws cloudfront get-distribution \
  --id E2B7JKIUZQAW3N \
  | jq '.Distribution.Statistics'
```

**Lambda Execution Logs:**
```bash
aws logs tail /aws/lambda/click2endpoint-executor-dev --follow --region us-east-1
```

**S3 Bucket Monitoring:**
```bash
# List bucket contents
aws s3 ls s3://click2endpoint-dev-682033482049/

# Check bucket size
aws s3 ls s3://click2endpoint-dev-682033482049/ --recursive --summarize
```

---

## Part 4: click2endpoint-business (AWS CDK)

### Architecture

Same stack structure as click2endpoint-aws:
- **Separate CloudFront:** E15OSNMOR6YGWI (https://dq4o2pz0jd98i.cloudfront.net)
- **Separate S3:** click2endpoint-business-dev-682033482049
- **Separate Lambda:** click2endpoint-business-executor-dev
- **Shared Cognito:** us-east-1_TOb5udmMc (unified with click2endpoint-aws)

### Deployment Procedures

**Full Deployment:**
```bash
cd /Users/frankserrao/Dropbox/Customers/c2m/projects/c2m-api/C2M_API_v2/click2endpoint-business

# Build frontend
cd frontend
npm install
npm run build

# Deploy all stacks
cd ../cdk
npm install
npx cdk deploy --all --require-approval never
```

**Frontend-Only Update:**
```bash
cd click2endpoint-business/frontend
npm run build

cd ../cdk
npx cdk deploy Click2EndpointBusiness-Hosting-dev --require-approval never
```

**CloudFront Cache Invalidation:**
```bash
aws cloudfront create-invalidation \
  --distribution-id E15OSNMOR6YGWI \
  --paths "/*"
```

---

## Complete Deployment Procedures

### First-Time Setup

**1. Prerequisites:**
```bash
# AWS credentials
aws configure
aws sts get-caller-identity  # Verify account 682033482049

# Node.js and npm
node --version  # v18+
npm --version   # v9+

# Python
python3 --version  # v3.8+

# CDK
npm install -g aws-cdk
cdk --version
```

**2. GitHub Secrets Setup:**
```
Repository: c2m-api-repo
Settings -> Secrets and variables -> Actions

Required secrets:
- POSTMAN_API_KEY (from .postman-target determination)
- POSTMAN_WORKSPACE_ID
- ARTIFACTS_REPO_TOKEN (PAT with repo access)
```

**3. Deployment Order:**

**A. Deploy Authentication Service:**
```bash
cd c2m-api-v2-security/cognito-auth-app
npm install
npx cdk bootstrap aws://682033482049/us-east-1
npx cdk deploy --require-approval never

# Test
curl -X POST https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/tokens/long \
  -H "Content-Type: application/json" \
  -d '{"grant_type":"client_credentials","client_id":"test-client-123","client_secret":"super-secret-password-123"}'
```

**B. Deploy Click2Endpoint Apps (Parallel):**
```bash
# Terminal 1: click2endpoint-aws
cd click2endpoint-aws/frontend && npm install && npm run build
cd ../cdk && npm install && npx cdk deploy --all --require-approval never

# Terminal 2: click2endpoint-business
cd click2endpoint-business/frontend && npm install && npm run build
cd ../cdk && npm install && npx cdk deploy --all --require-approval never
```

**C. Setup c2m-api-repo:**
```bash
cd c2m-api-repo
npm install
make install
cat > .env << EOF
POSTMAN_SERRAO_API_KEY=<your-key>
POSTMAN_C2M_API_KEY=<your-key>
EOF
echo "personal" > .postman-target
make postman-instance-build-and-test
```

**D. Verify End-to-End:**
```bash
# 1. Test auth service
curl https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/tokens/long

# 2. Open Click2Endpoint
open https://d2dodhc21bvs3s.cloudfront.net

# 3. Login with Cognito user
# Username: frank
# Password: FrankPass123!

# 4. Test mock server
curl https://3f9ddaa4-be33-4d8d-9669-38c0f5434b65.mock.pstmn.io/jobs/single-doc
```

### Standard Deployment Flow

**Update Workflow (Normal Changes):**

1. **Edit EBNF in c2m-api-repo:**
```bash
cd c2m-api-repo
vim data_dictionary/c2mapiv2-dd.ebnf
make smart-rebuild
git add . && git commit -m "Update API definition" && git push
# GitHub Actions auto-publishes
```

2. **Update Frontend (click2endpoint-aws):**
```bash
cd click2endpoint-aws/frontend
# Make code changes
npm run build
cd ../cdk && npx cdk deploy Click2Endpoint-Hosting-dev
aws cloudfront create-invalidation --distribution-id E2B7JKIUZQAW3N --paths "/*"
```

3. **Update Auth Service:**
```bash
cd c2m-api-v2-security/cognito-auth-app
# Make code changes
npx cdk deploy
```

### Update Procedures

**c2m-api-repo (EBNF/OpenAPI changes):**
```bash
cd c2m-api-repo

# Smart rebuild (recommended)
make smart-rebuild

# Or full rebuild
make rebuild-all-with-delete

# Push to trigger CI/CD
git add . && git commit -m "Update API" && git push
```

**AWS CDK (Infrastructure changes):**
```bash
cd <project>/cdk

# Show differences
npx cdk diff

# Deploy specific stack
npx cdk deploy <StackName>

# Deploy all stacks
npx cdk deploy --all
```

**Frontend (UI changes):**
```bash
cd <project>/frontend
npm run build
cd ../cdk && npx cdk deploy <HostingStackName>

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id <ID> --paths "/*"
```

### Rollback Procedures

**CDK Stack Rollback:**
```bash
# Automatic rollback on failure
aws cloudformation rollback-stack \
  --stack-name <StackName> \
  --region us-east-1

# Manual rollback to specific version
aws cloudformation update-stack \
  --stack-name <StackName> \
  --use-previous-template \
  --region us-east-1
```

**Postman Collection Rollback:**
```bash
cd c2m-api-repo

# Checkout previous version
git log --oneline postman/
git checkout <commit-hash> -- postman/

# Rebuild and publish
make postman-collection-build
make postman-publish
```

**CloudFront Rollback:**
```bash
# Deploy previous frontend build
cd <project>/frontend
git checkout <previous-commit>
npm run build
cd ../cdk && npx cdk deploy <HostingStackName>
aws cloudfront create-invalidation --distribution-id <ID> --paths "/*"
```

---

## Troubleshooting Guide

### Common Issues by System

#### c2m-api-repo

**Issue: Postman import fails**
```bash
# Validate OpenAPI spec
make openapi-spec-lint

# Check for errors
make print-openapi-vars

# Regenerate
make postman-collection-build
```

**Issue: Mock server 404**
```bash
# Verify mock URL
grep MOCK .env

# Recreate mock
make postman-mock-create
make postman-collection-build
```

**Issue: GitHub Actions failing**
```bash
# Check workflow logs
# Common fixes:

# 1. Missing secrets - verify in repo settings
# 2. Generated files not committed - commit locally first
# 3. Lint errors - run make lint locally
```

#### AWS CDK Deployments

**Issue: "Export already exists" error**
```bash
# Delete failed stack
aws cloudformation delete-stack --stack-name <StackName>

# Update export names in code to be unique
# Rebuild and redeploy
```

**Issue: CloudFront shows stale content**
```bash
# Create cache invalidation
aws cloudfront create-invalidation \
  --distribution-id <ID> \
  --paths "/*"

# Wait for completion (5-15 minutes)
# Hard refresh browser: Ctrl+Shift+R
```

**Issue: Cognito login fails**
```bash
# Check user status
aws cognito-idp admin-get-user \
  --user-pool-id us-east-1_TOb5udmMc \
  --username <username> \
  --region us-east-1

# Set permanent password
aws cognito-idp admin-set-user-password \
  --user-pool-id us-east-1_TOb5udmMc \
  --username <username> \
  --password '<password>' \
  --permanent \
  --region us-east-1
```

**Issue: Lambda Function URL returns 403**
```bash
# Check function URL exists
aws lambda get-function-url-config \
  --function-name <function-name> \
  --region us-east-1

# Verify CORS configuration in CDK code
# Redeploy execution stack
```

#### Authentication Service

**Issue: Auth returns 401**
```bash
# Check credentials in AWS Secrets Manager
aws secretsmanager get-secret-value \
  --secret-id c2m-api/dev/client-secrets \
  --region us-east-1

# Test endpoint directly
curl -X POST https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/tokens/long \
  -H "Content-Type: application/json" \
  -d '{"grant_type":"client_credentials","client_id":"test-client-123","client_secret":"super-secret-password-123"}' \
  -v
```

### Emergency Procedures

**Service Outage:**
```bash
# 1. Check AWS Service Health Dashboard
open https://status.aws.amazon.com/

# 2. Check CloudWatch alarms
aws cloudwatch describe-alarms \
  --state-value ALARM \
  --region us-east-1

# 3. Review recent deployments
aws cloudformation describe-stack-events \
  --stack-name <StackName> \
  --region us-east-1 \
  --max-items 20

# 4. Rollback if needed (see Rollback Procedures above)
```

**Data Recovery:**
```bash
# DynamoDB Point-in-Time Recovery
aws dynamodb restore-table-to-point-in-time \
  --source-table-name c2m-token-store-dev \
  --target-table-name c2m-token-store-dev-restored \
  --restore-date-time <timestamp> \
  --region us-east-1

# S3 Versioning (if enabled)
aws s3api list-object-versions \
  --bucket <bucket-name> \
  --prefix <object-key>

aws s3api get-object \
  --bucket <bucket-name> \
  --key <object-key> \
  --version-id <version-id> \
  <output-file>
```

---

## Monitoring and Alerts

### What to Monitor

**c2m-api-repo:**
- GitHub Actions success rate
- Postman test pass rate
- Mock server uptime
- Build duration

**c2m-api-v2-security:**
- Lambda invocation count
- Lambda error rate
- API Gateway 4xx/5xx errors
- DynamoDB throttling

**click2endpoint-aws/business:**
- CloudFront request count
- CloudFront cache hit ratio
- Lambda execution errors
- Cognito sign-in failures

### CloudWatch Alarms

**Create Alarms:**
```bash
# High error rate on auth Lambda
aws cloudwatch put-metric-alarm \
  --alarm-name auth-lambda-high-errors \
  --alarm-description "Auth Lambda error rate > 5%" \
  --metric-name Errors \
  --namespace AWS/Lambda \
  --statistic Average \
  --period 300 \
  --evaluation-periods 2 \
  --threshold 0.05 \
  --comparison-operator GreaterThanThreshold \
  --dimensions Name=FunctionName,Value=issueLongToken-dev \
  --region us-east-1

# DynamoDB throttling
aws cloudwatch put-metric-alarm \
  --alarm-name dynamodb-throttled-requests \
  --metric-name UserErrors \
  --namespace AWS/DynamoDB \
  --statistic Sum \
  --period 300 \
  --evaluation-periods 1 \
  --threshold 1 \
  --comparison-operator GreaterThanThreshold \
  --dimensions Name=TableName,Value=c2m-token-store-dev \
  --region us-east-1
```

---

## Quick Reference

### Common Commands Cheat Sheet

**c2m-api-repo:**
```bash
make postman-instance-build-and-test  # Full pipeline
make smart-rebuild                    # Intelligent rebuild
make prism-mock-test                  # Test with local mock
make postman-cleanup-all              # Clean all Postman
make help                             # Show all targets
```

**c2m-api-v2-security:**
```bash
cd cognito-auth-app
npx cdk deploy                        # Deploy auth stack
npx cdk diff                          # Show changes
aws logs tail /aws/lambda/issueLongToken-dev --follow
```

**click2endpoint-aws:**
```bash
cd frontend && npm run build          # Build frontend
cd cdk && npx cdk deploy --all        # Deploy all stacks
aws cloudfront create-invalidation --distribution-id E2B7JKIUZQAW3N --paths "/*"
```

### Important URLs

**Live Applications:**
- Click2Endpoint AWS: https://d2dodhc21bvs3s.cloudfront.net
- Click2Endpoint Business: https://dq4o2pz0jd98i.cloudfront.net
- Auth API: https://j0dos52r5e.execute-api.us-east-1.amazonaws.com/dev/auth/
- Mock Server: https://3f9ddaa4-be33-4d8d-9669-38c0f5434b65.mock.pstmn.io

**AWS Console:**
- CloudFormation: https://console.aws.amazon.com/cloudformation/home?region=us-east-1
- Lambda: https://console.aws.amazon.com/lambda/home?region=us-east-1
- CloudFront: https://console.aws.amazon.com/cloudfront/v3/home?region=us-east-1
- Cognito: https://console.aws.amazon.com/cognito/v2/idp/user-pools?region=us-east-1
- DynamoDB: https://console.aws.amazon.com/dynamodb/home?region=us-east-1

**GitHub:**
- c2m-api-repo: https://github.com/faserrao/c2m-api-repo
- c2m-api-artifacts: https://github.com/faserrao/c2m-api-artifacts
- c2m-api-v2-security: https://github.com/faserrao/c2m-api-v2-security
- click2endpoint-aws: https://github.com/faserrao/click2endpoint-aws

### AWS Resource IDs

| Resource | ID/ARN | Region |
|----------|--------|--------|
| AWS Account | 682033482049 | us-east-1 |
| Cognito User Pool | us-east-1_TOb5udmMc | us-east-1 |
| CloudFront (AWS) | E2B7JKIUZQAW3N | Global |
| CloudFront (Business) | E15OSNMOR6YGWI | Global |
| API Gateway (Auth) | j0dos52r5e | us-east-1 |
| DynamoDB (Tokens) | c2m-token-store-dev | us-east-1 |

---

## Contact Information

**System Owner:** Frank Serrao
**Email:** faserrao@gmail.com
**AWS Account:** 682033482049

**Documentation:**
- System Architecture: `/Users/frankserrao/Dropbox/Customers/c2m/projects/c2m-api/C2M_API_v2/project-documents/architecture/C2M_API_V2_SYSTEM_ARCHITECTURE.md`
- AWS Infrastructure: `/Users/frankserrao/Dropbox/Customers/c2m/projects/c2m-api/C2M_API_v2/project-documents/top-level-project-documents/AWS_INFRASTRUCTURE_SUMMARY.md`
- c2m-api-repo Guide: `/Users/frankserrao/Dropbox/Customers/c2m/projects/c2m-api/C2M_API_v2/c2m-api-repo/REPOSITORY_GUIDE.md`
- Security Repo Guide: `/Users/frankserrao/Dropbox/Customers/c2m/projects/c2m-api/C2M_API_v2/c2m-api-v2-security/REPOSITORY_GUIDE.md`

---

**Document End**

*This is a living document. Update after infrastructure changes, new deployment procedures, or discovered troubleshooting solutions.*
