# Pipeline consistency (DD → spec → Postman)

ERROR categories: 0  ·  known-open WARN categories: 1  ·  stale allowances: 1

## ⚠️ Known open (tracked)
- **B-PLACEHOLDER-IN-EXAMPLE** [Test] (1) — L6 (auth examples carry <dateTime>/<string>)
    - POST /auth/tokens/:tokenId/revoke: url variable tokenId=<string>

## 🧹 Stale KNOWN_OPEN entries (no longer occur — remove them)
- B-EXAMPLE-ORIGINAL-REQUEST [Test] — L6 (random auth ttl_seconds can fall below 3600 — intermittent)

✅ No ERROR findings
