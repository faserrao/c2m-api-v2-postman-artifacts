# C2M API v2 - Comprehensive Testing Guide

**Version**: 1.0
**Last Updated**: 2025-10-19
**Audience**: QA Engineers, Developers, DevOps Teams
**Purpose**: Complete guide to testing C2M API v2 system

---

## Table of Contents

1. [Overview](#1-overview)
2. [Test Data Architecture](#2-test-data-architecture)
3. [Running Tests](#3-running-tests)
4. [Test Data Generation](#4-test-data-generation)
5. [Pre-Migration Testing](#5-pre-migration-testing)
6. [Post-Migration Testing](#6-post-migration-testing)
7. [Regression Testing](#7-regression-testing)
8. [Performance Testing](#8-performance-testing)
9. [Automated Testing](#9-automated-testing)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. Overview

### Testing Philosophy

The C2M API v2 testing strategy follows these principles:

1. **Single Source of Truth**: EBNF data dictionary defines all test data schemas
2. **Schema-Driven**: Test data generated from OpenAPI spec, not hardcoded
3. **Pipeline Validation**: Test entire flow from EBNF → OpenAPI → Postman → Mock → Docs
4. **Automated Regression**: CI/CD runs full test suite on every commit

### Test Pyramid

```
         /\
        /  \  E2E Tests (Postman collections)
       /____\
      /      \  Integration Tests (Pipeline tests)
     /________\
    /          \ Unit Tests (Script validation)
   /____________\
```

---

## 2. Test Data Architecture

### Current Architecture

```
EBNF Data Dictionary
    ↓
OpenAPI Spec (with schema)
    ↓
Schema-Aware Example Generator
    ↓
Examples embedded in OpenAPI spec
    ↓
All collections use these examples
```

### Test Data Consistency

**Problem Solved**: Previously had THREE separate test data generation systems (inconsistent data, validation errors, 400 responses)

**Solution**: Single schema-aware generator that:
- Understands oneOf schemas
- Knows discriminator fields
- Applies business rules
- Generates coverage matrix

### OneOf Schema Handling

For complex schemas with multiple variants (e.g., `documentSourceIdentifier`):

```yaml
oneOf:
  - type: object
    properties:
      documentId:
        type: integer
  - type: object
    properties:
      externalUrl:
        type: string
        format: uri
  - type: object
    properties:
      uploadRequestId:
        type: integer
      documentName:
        type: string
```

**Test Data Generator Creates**:
```json
[
  {"documentId": 1234},
  {"externalUrl": "https://api.example.com/v1/doc/5678"},
  {"uploadRequestId": 100, "documentName": "invoice.pdf"},
  {"uploadRequestId": 200, "zipId": 10, "documentName": "report.pdf"},
  {"zipId": 20, "documentName": "summary.pdf"}
]
```

### Validation Matrix

| Endpoint | OneOf Fields | Variants | Coverage | Status |
|----------|-------------|----------|----------|---------|
| /jobs/single-doc-job-template | documentSourceIdentifier | 5 | 100% | ✅ |
| /jobs/single-doc-job-template | paymentDetails | 6 | 100% | ✅ |
| /jobs/single-doc-job-template | recipientAddressSource | 3 | 100% | ✅ |
| /jobs/multi-doc-merge | documentsToMerge items | 5 | 100% | ✅ |

---

## 3. Running Tests

### Quick Start: Local Testing

```bash
# Navigate to main API repository
cd /path/to/c2m-api-repo

# Run complete test suite
make postman-instance-build-and-test
```

**This command**:
1. Generates OpenAPI spec from EBNF
2. Creates Postman collections
3. Starts local mock server (Prism on port 4010)
4. Runs Newman tests
5. Generates test reports

### Test Against Mock Server

```bash
# Start local mock
make prism-start

# Run tests
make prism-mock-test

# Test specific endpoint
make prism-test-endpoint PRISM_TEST_ENDPOINT=/jobs/single-doc-job-template

# Stop mock
make prism-stop
```

### Test Against Cloud Mock

```bash
# Run tests against Postman cloud mock
make postman-mock
```

### CI/CD Testing

```bash
# Run CI-specific test suite (no local servers)
make rebuild-all-no-delete-ci
```

---

## 4. Test Data Generation

### Overview

Test data is generated through a schema-aware process that ensures consistency and validity.

### OpenAPI Spec Files

**Directory**: `/openapi/`

1. **`c2mapiv2-openapi-spec-base.yaml`**
   - Raw output from EBNF→OpenAPI converter
   - No examples, no fixes
   - Should NOT be edited manually

2. **`c2mapiv2-openapi-spec-final.yaml`**
   - Production spec after all processing
   - Includes oneOf fixes
   - No examples
   - Used for documentation and API definition

3. **`c2mapiv2-openapi-spec-final-with-examples.yaml`**
   - Same as final but with auto-generated examples
   - Created by `add_examples_to_spec.py`
   - Used for Postman collection generation

### Example Generation Process

```bash
# Generate examples from schema
python3 scripts/test_data_generator_for_openapi_specs/add_examples_to_spec.py \
  openapi/c2mapiv2-openapi-spec-final.yaml

# Output: openapi/c2mapiv2-openapi-spec-final-with-examples.yaml
```

### Manual Example Creation

For specific test scenarios, you can add examples to the OpenAPI spec:

```yaml
paths:
  /jobs/single-doc-job-template:
    post:
      requestBody:
        content:
          application/json:
            example:
              documentSourceIdentifier:
                documentId: 1234
              jobTemplate:
                templateId: "monthly-statements"
              paymentDetails:
                paymentMethod: "invoice"
                invoiceDetails:
                  invoiceNumber: "INV-001"
```

---

## 5. Pre-Migration Testing

Before making major changes to the pipeline, capture baseline state.

### Test ID: PRE-001 - Document Current State

**Priority**: Critical

```bash
# Create baseline directory
mkdir -p baseline

# Capture current state
make postman-workspace-debug > baseline/workspace-state-$(date +%Y%m%d-%H%M%S).txt
make print-openapi-vars > baseline/openapi-vars-$(date +%Y%m%d-%H%M%S).txt

# List all Postman resources
ls -la postman/*.txt postman/*.uid 2>/dev/null > baseline/tracking-files.txt

# Capture current collection structure
find postman/generated -name "*.json" -exec jq '.info.name' {} \; > baseline/collections.txt
```

**Expected Result**: Baseline documentation created for comparison

### Test ID: PRE-002 - EBNF to OpenAPI Conversion

**Priority**: Critical

```bash
# Test EBNF conversion
make generate-openapi-spec-from-ebnf-dd

# Validate generated spec
make openapi-spec-lint

# Check for documentSourceIdentifier definition
grep -A 20 "documentSourceIdentifier:" openapi/c2mapiv2-openapi-spec-final.yaml
```

**Expected Result**:
- OpenAPI spec generated without errors
- Lint passes
- documentSourceIdentifier shows oneOf structure

### Test ID: PRE-003 - Mock Server Testing

**Priority**: High

```bash
# Start Prism mock
make prism-start

# Test specific endpoint
make prism-test-endpoint PRISM_TEST_ENDPOINT=/jobs/single-doc-job-template

# Check response structure
curl -s http://localhost:4010/jobs/single-doc-job-template | jq '.documentSourceIdentifier'
```

**Expected Result**: Mock returns valid response with proper structure

---

## 6. Post-Migration Testing

After making changes, validate the entire pipeline.

### Test ID: POST-001 - Complete Pipeline Test

**Priority**: Critical

```bash
# Run full rebuild
make rebuild-all-with-delete

# Verify all components
make prism-mock-test
make postman-test-collection-validate
```

**Expected Result**: All tests pass

### Test ID: POST-002 - DocumentSourceIdentifier Expansion

**Priority**: Critical

```bash
# Check final collection
jq '.item[].request.body.raw' postman/generated/*-collection.json | \
  jq -r . | grep -A 10 "documentSourceIdentifier"
```

**Expected Result**: documentSourceIdentifier properly expanded with variants

### Test ID: POST-003 - Newman Test Execution

**Priority**: High

```bash
# Run Newman tests
make postman-mock

# Check results
grep -i "error\|fail" newman-report.html || echo "No errors found"
```

**Expected Result**: All tests pass, no errors in report

---

## 7. Regression Testing

Ensure changes don't break existing functionality.

### Test ID: REG-001 - Multi-Workspace Testing

**Priority**: High

```bash
# Test personal workspace
echo "personal" > .postman-target
make postman-publish-personal

# Test team workspace
echo "team" > .postman-target
make postman-publish-team
```

**Expected Result**: Both workspaces updated correctly

### Test ID: REG-002 - Real World Use Cases

**Priority**: High

```bash
# Generate use case collection
make postman-use-case-collection-generate

# Validate structure
jq '.item[].name' postman/generated/c2mapiv2-use-case-collection.json
```

**Expected Result**: 8 use cases generated with proper structure

---

## 8. Performance Testing

### Test ID: PERF-001 - Pipeline Execution Time

**Priority**: Medium

```bash
# Time full rebuild
time make rebuild-all-with-delete > timing-report.txt 2>&1
```

**Expected Result**: < 5 minute execution time

### Test ID: PERF-002 - Memory Usage

**Priority**: Low

```bash
# Monitor during conversion
/usr/bin/time -l make generate-openapi-spec-from-ebnf-dd 2>&1 | grep "maximum resident"
```

**Expected Result**: < 500MB memory usage

---

## 9. Automated Testing

### Automated Test Runner

Create `run-tests.sh`:

```bash
#!/bin/bash
# C2M API Infrastructure Test Suite

set -e

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Test counter
PASSED=0
FAILED=0

# Test function
run_test() {
    local test_id=$1
    local test_name=$2
    local test_cmd=$3

    echo -e "${YELLOW}Running $test_id: $test_name${NC}"

    if eval "$test_cmd"; then
        echo -e "${GREEN}✅ $test_id PASSED${NC}\n"
        ((PASSED++))
    else
        echo -e "${RED}❌ $test_id FAILED${NC}\n"
        ((FAILED++))
    fi
}

# Create test report directory
mkdir -p test-reports/$(date +%Y%m%d-%H%M%S)

echo "🧪 C2M API Infrastructure Test Suite"
echo "===================================="

# Pre-Migration Tests
echo -e "\n📋 Pre-Migration Tests"
run_test "PRE-001" "Document Current State" "make postman-workspace-debug > /dev/null 2>&1"
run_test "PRE-002" "EBNF Conversion" "make generate-openapi-spec-from-ebnf-dd"
run_test "PRE-003" "Collection Generation" "make postman-api-linked-collection-generate"

# Post-Migration Tests
echo -e "\n✅ Post-Migration Tests"
run_test "POST-001" "Pipeline Validation" "make openapi-spec-lint"
run_test "POST-002" "Collection Structure" "test -f postman/generated/*-collection.json"

# Summary
echo -e "\n📊 Test Summary"
echo "==============="
echo -e "${GREEN}Passed: $PASSED${NC}"
echo -e "${RED}Failed: $FAILED${NC}"

if [ $FAILED -eq 0 ]; then
    echo -e "\n${GREEN}🎉 All tests passed!${NC}"
    exit 0
else
    echo -e "\n${RED}⚠️  Some tests failed${NC}"
    exit 1
fi
```

**Make executable**: `chmod +x run-tests.sh`

**Run**: `./run-tests.sh`

### CI/CD Integration

The GitHub Actions workflow automatically runs tests on every commit:

```yaml
# .github/workflows/api-ci-cd.yml
- name: Run Tests
  run: |
    make openapi-build
    make postman-collection-build
    make lint
```

---

## 10. Troubleshooting

### Common Issues

#### Issue: "Mock server not responding"

**Symptoms**: Tests timeout or connection refused

**Solution**:
```bash
# Check if Prism is running
make prism-status

# Restart if needed
make prism-stop
make prism-start
```

#### Issue: "Collection validation fails"

**Symptoms**: Newman reports schema validation errors

**Solution**:
```bash
# Regenerate collection from latest spec
make postman-collection-build

# Validate against schema
make postman-test-collection-validate
```

#### Issue: "oneOf examples not working"

**Symptoms**: Mock returns 400 errors for valid requests

**Solution**:
```bash
# Check oneOf schema fixes
make openapi-spec-lint

# Regenerate examples
python3 scripts/test_data_generator_for_openapi_specs/add_examples_to_spec.py \
  openapi/c2mapiv2-openapi-spec-final.yaml
```

#### Issue: "Tests pass locally but fail in CI"

**Symptoms**: Green locally, red in GitHub Actions

**Solution**:
```bash
# Run CI-specific targets locally
make rebuild-all-no-delete-ci

# Check for environment differences
diff <(make show-vars) <(echo "$CI_ENV_VARS")
```

### Debug Commands

```bash
# Show all Makefile variables
make show-vars

# Debug Postman workspace
make postman-workspace-debug

# Validate OpenAPI spec
make openapi-spec-lint

# Check collection structure
jq '.info' postman/generated/*-collection.json

# Verify tracking files
ls -la postman/*.uid postman/*.txt
```

---

## Test Execution Plan

### Before Major Changes
1. Run Pre-Migration tests (Section 5)
2. Create baseline snapshots
3. Document current state

### During Development
1. Run unit tests for changed components
2. Validate OpenAPI spec after EBNF changes
3. Test affected endpoints

### Before Deployment
1. Run complete test suite
2. Run Post-Migration tests (Section 6)
3. Run Regression tests (Section 7)
4. Verify Performance metrics (Section 8)

### Continuous Testing
1. Use automated test runner (Section 9)
2. Monitor CI/CD pipeline results
3. Address failures immediately

---

## Success Criteria

- ✅ All PRE tests pass before starting changes
- ✅ All POST tests pass after changes
- ✅ No regression in REG tests
- ✅ Performance metrics within acceptable range (< 5 min, < 500MB)
- ✅ 100% test coverage for oneOf variants
- ✅ Newman reports 0 failures

---

## Additional Resources

- **CI/CD Operations Guide**: See `CI_CD_OPERATIONS_GUIDE.md` for deployment procedures
- **Getting Started Guide**: See `GETTING_STARTED_USER_MANUAL.md` for setup instructions
- **API Documentation**: https://faserrao.github.io/c2m-api-repo/
- **Postman Collections**: Available in both Personal and Corporate workspaces

---

## Version History

- **1.0** (2025-10-19): Initial comprehensive testing guide consolidating:
  - C2M_API_COMPREHENSIVE_TESTING_PLAN.md (521 lines)
  - TEST_DATA_ARCHITECTURE.md (115 lines)
  - TEST_DATA_GENERATION_GUIDE.md (3,701 lines)
