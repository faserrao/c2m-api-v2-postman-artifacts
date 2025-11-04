# Environment Variables Quick Reference

## Postman API Keys - Variable Name Mapping

### The Two Naming Conventions

The C2M API V2 project uses **different variable names** in backend vs. frontend for Postman API keys. This is **intentional and correct** - not a bug.

```
Backend (c2m-api-repo/.env)        Frontend (click2endpoint-aws/.env.local)

POSTMAN_SERRAO_API_KEY             VITE_POSTMAN_API_KEY_PERSONAL
POSTMAN_C2M_API_KEY                VITE_POSTMAN_API_KEY_TEAM
```

### Why Different Names?

**Technical Requirement**: Vite (frontend build tool) requires the `VITE_` prefix for environment variables to be accessible in client-side JavaScript. This is a security feature that prevents accidentally exposing server-side secrets.

**Different Contexts**:
- **Backend** (Makefile, shell scripts, Python): No prefix needed, shorter names preferred
- **Frontend** (React/Vite): VITE_ prefix required, more descriptive names

### How to Use

#### 1. Backend Setup (c2m-api-repo)

File: `c2m-api-repo/.env`
```bash
POSTMAN_SERRAO_API_KEY=PMAK-your-actual-key-here
POSTMAN_C2M_API_KEY=PMAK-your-actual-key-here
```

Used by:
- Makefile (API automation)
- Shell scripts (testing)
- Python scripts (code generation)
- CI/CD pipeline

#### 2. Frontend Setup (click2endpoint-aws)

File: `click2endpoint-aws/frontend/.env.local`
```bash
VITE_POSTMAN_API_KEY_PERSONAL=PMAK-copy-from-backend-env
VITE_POSTMAN_API_KEY_TEAM=PMAK-copy-from-backend-env
```

Used by:
- React application (browser)
- Postman mock server discovery
- Dynamic configuration loading

**Important**: Copy the actual key VALUE from backend, not the variable name.

### Centralized Configuration

All Postman workspace and mock server configuration is centralized in:
```
config/postman-config.json
```

This file references the VITE_ prefixed variable names because it's used by frontend projects.

### Quick Copy-Paste Instructions

**For New Developers**:

1. Get backend keys working first:
   ```bash
   cd c2m-api-repo
   cp .env.example .env
   # Edit .env - paste your Postman API key
   ```

2. Copy keys to frontend:
   ```bash
   cd ../click2endpoint-aws/frontend
   cp .env.example .env.local
   # Copy ACTUAL KEY VALUES from c2m-api-repo/.env
   # Change variable names: POSTMAN_SERRAO_API_KEY  VITE_POSTMAN_API_KEY_PERSONAL
   ```

### Common Mistakes

 **WRONG**: Copy variable NAME to frontend
```bash
# Don't do this!
VITE_POSTMAN_API_KEY_PERSONAL=POSTMAN_SERRAO_API_KEY  # This won't work!
```

 **CORRECT**: Copy actual key VALUE to frontend
```bash
# Do this instead:
VITE_POSTMAN_API_KEY_PERSONAL=PMAK-your-personal-api-key-here
```

 **WRONG**: Use VITE_ prefix in backend
```bash
# c2m-api-repo/.env
VITE_POSTMAN_API_KEY_PERSONAL=PMAK-xxx  # Makefile won't find this!
```

 **CORRECT**: Use correct names for each context
```bash
# c2m-api-repo/.env
POSTMAN_SERRAO_API_KEY=PMAK-xxx

# click2endpoint-aws/frontend/.env.local
VITE_POSTMAN_API_KEY_PERSONAL=PMAK-xxx
```

### Testing Your Setup

**Backend (c2m-api-repo)**:
```bash
make postman-workspace-debug
# Should show your workspace info
```

**Frontend (click2endpoint-aws)**:
```bash
cd frontend
npm run dev
# Open Settings modal - should load mock servers from Postman
```

### Full Documentation

For complete details, see:
- `config/README.md` - Centralized configuration documentation
- `ENVIRONMENT_VARIABLE_RENAME_IMPACT_ASSESSMENT.md` - Analysis of naming conventions
- `c2m-api-repo/CLAUDE.md` - Backend project documentation
- `click2endpoint-aws/DEPLOYMENT.md` - Frontend deployment guide

### Need Help?

**Issue**: Frontend not loading mock servers
- Check: `VITE_POSTMAN_API_KEY_PERSONAL` is set in `frontend/.env.local`
- Check: Actual API key is pasted (not placeholder "your-api-key")
- Check: API key works in Postman (test in web app)

**Issue**: Backend Makefile can't find API key
- Check: `POSTMAN_SERRAO_API_KEY` is set in `c2m-api-repo/.env`
- Check: No extra spaces around the `=` sign
- Check: No quotes around the API key value

**Issue**: Keys are different between backend and frontend
- This is **expected and correct** - copy the VALUES, not the variable names
- See "Variable Name Mapping" section above

---

## Other Environment Variables

### Frontend Only (Vite Projects)

#### Cognito Authentication
```bash
VITE_COGNITO_USER_POOL_ID=us-east-1_xxxxxxxxx
VITE_COGNITO_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxx
```

#### C2M Auth Server (for code generation examples)
```bash
VITE_AUTH_BASE_URL=https://api.example.com/dev
VITE_DEFAULT_CLIENT_ID=test-client-123
VITE_DEFAULT_CLIENT_SECRET=super-secret-password-123
```

#### Lambda Code Execution
```bash
VITE_EXECUTION_API_URL=https://xxxxxxxx.lambda-url.us-east-1.on.aws/
```

#### Default Mock Server
```bash
VITE_DEFAULT_MOCK_URL=https://xxxxxxxxx.mock.pstmn.io
```

### Backend Only (c2m-api-repo)

#### AWS Configuration (Optional)
```bash
AWS_PROFILE=default
```

#### GitHub Token (Optional)
```bash
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
```

#### Mock Server Base URL (Optional)
```bash
MOCK_SERVER_BASE_URL=https://your-mock-id.mock.pstmn.io
```

---

**Last Updated**: 2025-10-14
**Maintained By**: See `CLAUDE.md` files in each repository
