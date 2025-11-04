# Click2Endpoint Two-App Architecture

**Date**: 2025-10-08
**Status**: Active Development

---

## Overview

The Click2Endpoint solution consists of **TWO separate applications** serving different user types:

1. **click2endpoint-aws** - Technical wizard for developers
2. **click2endpoint-business-nlp** - AI-powered tool for business users

Both applications are **completely independent codebases** with separate deployment pipelines.

---

## Architecture Diagram

```

                     Click2Mail Ecosystem                         

                                
                
                                               
                                               
   
  click2endpoint-aws           click2endpoint-business-nlp   
  (Technical Wizard)           (Business User NLP)           
   
 Target: Developers            Target: Business Users        
 Input: Q&A Wizard             Input: Natural Language       
 Output: Code + Params         Output: Endpoint Recommendation
   
                                               
                                               
                
                                
                    
                       C2M API Endpoints   
                       (Production API)    
                    
```

---

## Application 1: click2endpoint-aws (Technical Wizard)

### Purpose
Interactive wizard that helps **technical users** (developers, integration engineers) select the correct C2M API endpoint and generate production-ready code.

### Target Audience
- Software developers
- Integration engineers
- Technical staff who understand API parameters

### Repository Location
**Local:** `/Users/frankserrao/Dropbox/Customers/c2m/projects/c2m-api/C2M_API_v2/click2endpoint-aws/`
**GitHub:** https://github.com/faserrao/click2endpoint-aws

### Key Features
-  Step-by-step Q&A wizard
-  8 endpoint mappings with full configurations
-  Dynamic parameter collection based on EBNF schemas
-  Code generation (Python, JavaScript, cURL)
-  Live code execution via AWS Lambda
-  Mock server integration for testing
-  Cognito authentication (per-user accounts)
-  Documentation navigation

### Technology Stack
- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Backend**: AWS Lambda (Function URL for code execution)
- **Auth**: AWS Cognito (per-user authentication)
- **Deployment**: S3 + CloudFront (static site)
- **CDK**: Infrastructure as Code

### Current Status
-  **Production-ready**
-  Deployed to AWS
-  Active development (adding missing parameters, fixes)
-  URL: https://d2dodhc21bvs3s.cloudfront.net

### Development Branches
- `main` - Production deployment with Cognito auth
- `nlp-ai` - Experimental AI features (not deployed)

---

## Application 2: click2endpoint-business-nlp (Business User NLP)

### Purpose
AI-powered tool that helps **business users** describe their mailing needs in plain English and get endpoint recommendations without technical knowledge.

### Target Audience
- Marketing managers
- Operations staff
- Office administrators
- Business users who don't understand API terminology

### Repository Location
**Local:** `/Users/frankserrao/Dropbox/Customers/c2m/projects/c2m-api/C2M_API_v2/click2endpoint-business-nlp/`
**GitHub:** https://github.com/faserrao/click2endpoint-business-nlp 

### Key Features
-  Natural language input (freeform textarea)
-  OpenAI GPT-4o-mini for scenario analysis
-  Decision matrix with 100% validated logic (11 scenarios)
-  Business-friendly explanations
-  Sector detection (legal, medical, HVAC, small business, etc.)
-  Persona matching (Eddy, Lori, Maria, Bob, Ryan)
-  Endpoint recommendations with confidence scores
-  Handoff mechanism to technical wizard (TBD)

### Technology Stack
- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **AI**: OpenAI GPT-4o-mini API
- **Decision Logic**: TypeScript decision matrix (100% validated)
- **Deployment**: TBD (likely S3 + CloudFront)
- **CDK**: TBD (separate infrastructure)

### Current Status
-  **Core components complete**
-  NLP service with 11 validated scenarios
-  Decision matrix with 100% accuracy
-  UI components built
-  Not yet deployed
-  Handoff mechanism not implemented

### Validation
- **11/11 scenarios** pass (100% accuracy)
- **8 sectors** detected (legal, medical, real_estate, home_services, small_business, marketing, reseller, general)
- **Enhanced with Click2Mail website analysis** (Knowledge Base, Blog, Mail Merge docs)

---

## Why Two Separate Applications?

### Different User Types

**Technical Users** (click2endpoint-aws):
- Understand API terminology
- Need parameter-level control
- Want generated code
- Comfortable with technical details

**Business Users** (click2endpoint-business-nlp):
- Speak in business language ("We send invoices", "Marketing postcards")
- Don't know technical terms like `document_structure` or `address_location`
- Need simple, friendly explanations
- Want to avoid calling support

### Independent Development Lifecycles

**click2endpoint-aws**:
- Adding missing parameters
- Fixing edge cases
- Improving code generation
- Regular production updates

**click2endpoint-business-nlp**:
- Enhancing AI prompts
- Adding new scenarios
- Improving confidence scores
- Refining business language understanding

### Separate Deployment Requirements

**click2endpoint-aws**:
- Requires Cognito authentication
- Lambda for code execution
- Production-ready stability

**click2endpoint-business-nlp**:
- Requires OpenAI API integration
- Different scaling needs (AI calls expensive)
- May have different uptime requirements

---

## Handoff Mechanism (Business  Technical)

### Current Design (Proposed)

When business user gets endpoint recommendation, they can **"Continue to Technical Setup"**:

**Option 1: SessionStorage** (Simplest)
```javascript
sessionStorage.setItem('business_handoff', JSON.stringify({
  endpoint: 'multi-pdf-address-capture',
  attributes: {
    document_structure: 'own_pdf',
    address_location: 'embedded'
  },
  confidence: 90,
  sector: 'general',
  persona: 'Eddy'
}));
window.location.href = 'https://click2endpoint.com';
```

**Option 2: URL Parameters**
```
https://click2endpoint.com/?endpoint=multi-pdf-address-capture&confidence=90&sector=general
```

**Option 3: API Call** (Most Robust)
```javascript
await fetch('/api/handoff', {
  method: 'POST',
  body: JSON.stringify({ endpoint, attributes, confidence })
});
```

### Status
 **Not Yet Implemented** - Decision pending on which mechanism to use

---

## Repository Structure

```
C2M_API_v2/

 click2endpoint-aws/              # App 1: Technical Wizard
    frontend/                    # React app
       src/
          components/          # Wizard, Parameters, CodeGen
          services/            # Postman API, Settings
          data/                # Endpoint mappings, EBNF schemas
          App.tsx              # Technical wizard flow
       package.json
    cdk/                         # AWS CDK infrastructure
       lib/
          cognito-stack.ts     # User authentication
          hosting-stack.ts     # S3 + CloudFront
          execution-stack.ts   # Lambda code execution
       package.json
    lambda/                      # Code executor
       code-executor/
    README.md
    DEPLOYMENT.md

 click2endpoint-business-nlp/     # App 2: Business User NLP
    frontend/                    # React app
       src/
          components/
             BusinessUserInput.tsx
             AnalysisDisplay.tsx
          services/
             businessUserNLP.ts        # OpenAI integration
             decisionMatrix.ts         # 100% validated logic
             __tests__/                # Test suite
          App.tsx              # Business user flow
       package.json
    BUSINESS_USER_NLP_README.md
    NLP_TERMINOLOGY_ENHANCEMENT.md
    NLP_ENHANCEMENT_SUMMARY.md
    TEST_NLP_SERVICE.md

 c2m-api-repo/                    # Main API specification
    data_dictionary/             # EBNF source of truth
    openapi/                     # Generated OpenAPI spec
    postman/                     # Collections & mock servers

 c2m-api-v2-security/             # Authentication service
    cognito-auth-app/            # JWT token exchange

 find-objecs-in-scenarios/        # Pattern analysis utility
     analyze_scenarios.py
     decision_matrix.py           # Python version (ported to TS)
     PATTERN_REVIEW.md
```

---

## Deployment Architecture

### click2endpoint-aws (Current)

```
User  CloudFront (d2dodhc21bvs3s.cloudfront.net)
         
       S3 Bucket (React app)
         
       Cognito User Pool (authentication)
         
       Lambda Function URL (code execution)
         
       C2M API (direct browser calls with JWT)
```

**Key Points:**
- Pure static site (no API Gateway)
- Per-user Cognito accounts
- Lambda only for code execution
- Direct browser  API calls

### click2endpoint-business-nlp (Planned)

```
User  CloudFront (TBD URL)
         
       S3 Bucket (React app)
         
       OpenAI API (scenario analysis)
         
       Decision Matrix (endpoint selection)
         
       Handoff to click2endpoint-aws (mechanism TBD)
```

**Key Points:**
- Pure static site (no backend needed)
- OpenAI API key stored in localStorage (user-provided)
- Client-side AI calls
- No authentication required (public tool)

---

## Development Workflow

### click2endpoint-aws

**Repository**: `click2endpoint-aws/`
**Branches**:
- `main` - Production code
- `nlp-ai` - Experimental (not deployed)

**Development**:
```bash
cd click2endpoint-aws/frontend
npm run dev              # Dev server on :5173
npm run build            # Production build
cd ../cdk
npx cdk deploy --all     # Deploy to AWS
```

**DO NOT MODIFY** while working on business-nlp app.

### click2endpoint-business-nlp

**Repository**: `click2endpoint-business-nlp/`
**Branches**: TBD (likely just `main`)

**Development**:
```bash
cd click2endpoint-business-nlp/frontend
npm run dev              # Dev server on :5174 (different port)
npm run build            # Production build
```

**Independent development** - no conflicts with click2endpoint-aws.

---

## User Journey

### Scenario 1: Technical User

1. Goes to `https://click2endpoint.com` (click2endpoint-aws)
2. Logs in with Cognito
3. Answers wizard questions
4. Gets endpoint + parameters
5. Generates code (Python/JS/cURL)
6. Tests with mock server
7. Deploys to production

### Scenario 2: Business User

1. Goes to `https://business.click2endpoint.com` (click2endpoint-business-nlp)
2. Describes scenario: "We send marketing postcards to homeowners every season"
3. AI analyzes  Detects `single-doc-job-template`, home_services sector
4. Shows business-friendly explanation
5. Clicks **"Continue to Technical Setup"**
6. **Handoff**  Redirects to click2endpoint-aws with pre-populated data
7. Technical user (or same person) completes parameter details

---

## Key Design Decisions

### Why Separate Repos (Not Branches)?

**Parallel Development**:
- click2endpoint-aws gets regular updates (parameters, fixes)
- click2endpoint-business-nlp gets AI prompt refinements
- No merge conflicts or interference

**Different Dependencies**:
- click2endpoint-aws: AWS SDK, Cognito, Lambda
- click2endpoint-business-nlp: OpenAI API, different deployment needs

**Deployment Independence**:
- Production updates to technical wizard don't affect business NLP
- Can deploy business NLP without touching stable technical wizard

### Why Not Merge into One App?

**Different UX Requirements**:
- Technical wizard: Multi-step Q&A with technical terminology
- Business NLP: Single freeform input with friendly language

**Different Audiences**:
- Developers don't need AI (they prefer control)
- Business users don't want wizard questions (too technical)

**Complexity**:
- Mode switching adds UI complexity
- Shared state management becomes messy
- Testing becomes harder

---

## Cost Considerations

### click2endpoint-aws
- **S3 + CloudFront**: ~$1-5/month
- **Lambda**: Minimal (pay per execution)
- **Cognito**: Free tier covers most usage

**Total**: ~$5-10/month

### click2endpoint-business-nlp
- **S3 + CloudFront**: ~$1-5/month
- **OpenAI API**: ~$0.0002 per analysis
  - 1000 analyses = $0.20
  - 10,000 analyses = $2.00

**Total**: ~$5-10/month + OpenAI usage

**Combined**: ~$10-20/month + OpenAI API costs

---

## Testing Strategy

### click2endpoint-aws (Technical Wizard)
```bash
# Local testing
cd frontend && npm run dev

# Test with mock server
# Test code execution
# Test Cognito login

# Deployment testing
# Test CloudFront URL
# Verify Lambda execution
```

### click2endpoint-business-nlp (Business NLP)
```bash
# Local testing
cd frontend && npm run dev

# Test NLP scenarios
node test-nlp.js

# Test decision matrix
npm test

# UI testing
# Enter scenarios, verify AI responses
```

---

## Future Enhancements

### click2endpoint-aws
- [ ] Add missing parameters (ongoing)
- [ ] Improve code generation templates
- [ ] Add more endpoint configurations
- [ ] Custom domain (wizard.click2mail.com)

### click2endpoint-business-nlp
- [ ] Deploy to AWS
- [ ] Implement handoff mechanism
- [ ] Add more scenarios (beyond 11)
- [ ] Collect user feedback and refine prompts
- [ ] Add compliance flag detection (HIPAA, etc.)
- [ ] Custom domain (business.click2mail.com)

---

## Documentation

### click2endpoint-aws
- `README.md` - Setup and deployment
- `DEPLOYMENT.md` - AWS deployment guide
- `ARCHITECTURE_DECISIONS.md` - Technical decisions
- `TEMPLATE_CONTENT_BUSINESS_RULE.md` - Business rules

### click2endpoint-business-nlp
- `BUSINESS_USER_NLP_README.md` - Implementation guide
- `NLP_TERMINOLOGY_ENHANCEMENT.md` - Website analysis findings
- `NLP_ENHANCEMENT_SUMMARY.md` - Quick reference
- `TEST_NLP_SERVICE.md` - Testing instructions

### This Document
- `TWO_APP_ARCHITECTURE.md` - Overall architecture (you are here)

---

## Quick Reference

| Aspect | click2endpoint-aws | click2endpoint-business-nlp |
|--------|-------------------|----------------------------|
| **Purpose** | Technical wizard | AI-powered business tool |
| **Users** | Developers | Business users |
| **Input** | Q&A wizard | Natural language |
| **Output** | Code + params | Endpoint recommendation |
| **Status** | Production | Development |
| **URL** | d2dodhc21bvs3s.cloudfront.net | TBD |
| **Auth** | Cognito | None (public) |
| **AI** | Optional (phase2) | Required (OpenAI) |
| **Development** | Active (parameters, fixes) | Active (AI refinement) |

---

## Questions & Answers

**Q: Why not just add business mode to existing app?**
A: Different UX needs, parallel development tracks, deployment independence.

**Q: How do business users get to technical wizard?**
A: "Continue to Technical Setup" button with handoff mechanism (TBD).

**Q: Can technical users use business NLP?**
A: Yes, but they don't need it - wizard is faster for them.

**Q: What if AI gets scenario wrong?**
A: Business user can see recommendation, then manually adjust in technical wizard.

**Q: Will both apps use same mock servers?**
A: Yes, both use Postman mock servers from c2m-api-repo.

**Q: Can we merge later if needed?**
A: Yes, but current separate approach is cleaner for parallel development.

---

**Status**:  **Architecture Defined**
**Next**: Complete click2endpoint-business-nlp repository setup

**Last Updated**: 2025-10-08
