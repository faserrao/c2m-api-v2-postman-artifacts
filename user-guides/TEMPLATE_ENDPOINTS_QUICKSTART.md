# Template Endpoints Quick Start Guide

**Version**: 1.0
**Last Updated**: 2025-10-19
**Audience**: API Integrators, Developers
**Prerequisites**: Click2Mail account with at least one template created

---

## What Are Template Endpoints?

Template endpoints are the **recommended way** to integrate with the C2M API. They simplify integration by storing all job configurations on the server side.

### Why Template Endpoints?

| Feature | Template Endpoints | Custom Endpoints |
|---------|-------------------|------------------|
| **Setup Time** | 5 minutes | 30+ minutes |
| **Parameters** | 3 required (including template name) | 10+ required |
| **Configuration** | Server-side (just send template name) | Manual setup for each parameter |
| **Error Rate** | Lower | Higher |
| **Support** | Priority | Standard |

---

## Creating Your Templates

**Important**: Templates are custom configurations that you create using the Click2Mail Template Editor on the Click2Mail website. Once created, you reference them by name in your API calls. Only the template name is sent to the server - all configuration details are stored server-side.

###How to Create Templates

1. **Log in** to your Click2Mail account at https://click2mail.com
2. **Navigate** to the Template Editor
3. **Create** a new template with your desired settings:
   - Paper type, size, and weight
   - Print color and quality
   - Envelope type and window placement
   - Mail class and delivery options
   - Production preferences
4. **Save** your template with a meaningful name (e.g., "monthly-statements", "marketing-flyer", "legal-certified")
5. **Use** that template name in your API calls

### Example Template Names (User-Defined)

These are examples of template names you might create:

- **monthly-statements** - For regular customer statements
- **invoice-firstclass** - For invoice mailings
- **marketing-color** - For promotional materials
- **legal-certified** - For certified mail documents
- **newsletter-bulk** - For bulk newsletter distribution

---

## How Templates Work

Templates simplify API integration by storing all job configurations on the server side:

1. **You create:** Custom templates using the Click2Mail Template Editor
2. **You send:** Just your template name (e.g., `"jobTemplate": {"templateId": "monthly-statements"}`)
3. **Server applies:** All settings you configured for that template
4. **Result:** Consistent, error-free job processing

This approach eliminates the need to specify individual parameters in your API calls. All the details you configured in the Template Editor are automatically applied when you reference your template by name.

---

## Quick Examples

### 1. Send a Single Document

```bash
curl -X POST https://api.c2m.com/v1/jobs/single-doc-job-template \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "documentSourceIdentifier": {
      "externalUrl": "https://yoursite.com/invoice.pdf"
    },
    "jobTemplate": {
      "templateId": "invoice-firstclass"
    },
    "paymentDetails": {
      "paymentMethod": "invoice",
      "invoiceDetails": {
        "invoiceNumber": "INV-2024-001",
        "poNumber": "PO-2024-001"
      }
    }
  }'
```

**Note**: Replace `"invoice-firstclass"` with the name of the template you created in the Click2Mail Template Editor.

### 2. Send Multiple Documents

```bash
curl -X POST https://api.c2m.com/v1/jobs/multi-docs-job-template \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "items": [
      {
        "documentSourceIdentifier": {
          "externalUrl": "https://yoursite.com/statement1.pdf"
        },
        "recipientAddressSource": {
          "addressComponents": {
            "firstName": "John",
            "lastName": "Doe",
            "address1": "123 Main St",
            "city": "Anytown",
            "state": "CA",
            "zip": "90210"
          }
        }
      },
      {
        "documentSourceIdentifier": {
          "externalUrl": "https://yoursite.com/statement2.pdf"
        },
        "recipientAddressSource": {
          "addressComponents": {
            "firstName": "Jane",
            "lastName": "Smith",
            "address1": "456 Oak Ave",
            "city": "Somewhere",
            "state": "NY",
            "zip": "10001"
          }
        }
      }
    ],
    "jobTemplate": {
      "templateId": "monthly-statements"
    },
    "paymentDetails": {
      "paymentMethod": "invoice",
      "invoiceDetails": {
        "invoiceNumber": "INV-2024-002",
        "poNumber": "PO-2024-002"
      }
    }
  }'
```

### 3. Merge and Send Documents

```bash
curl -X POST https://api.c2m.com/v1/jobs/multi-doc-merge-job-template \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "documentsToMerge": [
      {
        "externalUrl": "https://yoursite.com/cover-letter.pdf"
      },
      {
        "externalUrl": "https://yoursite.com/report.pdf"
      },
      {
        "externalUrl": "https://yoursite.com/appendix.pdf"
      }
    ],
    "recipientAddressSource": {
      "addressComponents": {
        "firstName": "Bob",
        "lastName": "Johnson",
        "address1": "789 Elm St",
        "city": "Metropolis",
        "state": "IL",
        "zip": "60601"
      }
    },
    "jobTemplate": {
      "templateId": "document-packet"
    },
    "paymentDetails": {
      "paymentMethod": "invoice",
      "invoiceDetails": {
        "invoiceNumber": "INV-2024-003",
        "poNumber": "PO-2024-003"
      }
    }
  }'
```

---

## Response Format

All template endpoints return a consistent response:

```json
{
  "jobId": "job_abc123",
  "status": "processing",
  "estimatedCompletionTime": "2024-01-15T14:30:00Z",
  "trackingUrl": "https://track.c2m.com/job_abc123"
}
```

---

## Best Practices

### DO:

- ✅ Start with template endpoints for all integrations
- ✅ Use HTTPS URLs for document sources
- ✅ Validate addresses before submission
- ✅ Monitor job status via webhooks or polling
- ✅ Store template names in configuration (not hardcoded)

### DON'T:

- ❌ Use custom endpoints unless absolutely necessary
- ❌ Submit documents larger than 25MB
- ❌ Include sensitive data in document URLs
- ❌ Retry failed requests immediately (implement exponential backoff)

---

## Migration from Custom Endpoints

If you're currently using custom endpoints, follow these steps:

1. **Create your templates** in the Click2Mail Template Editor with your desired settings
2. **Update your API calls** to use template endpoints with your template names

| Custom Endpoint | Template Endpoint | Your Template Name |
|----------------|-------------------|-------------------|
| `/jobs/single-doc` | `/jobs/single-doc-job-template` | Use your custom template |
| `/jobs/multi-doc` | `/jobs/multi-docs-job-template` | Use your custom template |
| `/jobs/multi-doc-merge` | `/jobs/multi-doc-merge-job-template` | Use your custom template |

---

## Common Use Cases

### Monthly Statements

```json
{
  "documentSourceIdentifier": {
    "externalUrl": "https://api.yourcompany.com/statements/2024-01.pdf"
  },
  "jobTemplate": {
    "templateId": "monthly-statements"
  },
  "paymentDetails": {
    "paymentMethod": "invoice",
    "invoiceDetails": {
      "invoiceNumber": "STMT-2024-01"
    }
  }
}
```

### Marketing Campaign

```json
{
  "documentSourceIdentifier": {
    "externalUrl": "https://cdn.yourcompany.com/summer-sale.pdf"
  },
  "jobTemplate": {
    "templateId": "marketing-color"
  },
  "paymentDetails": {
    "paymentMethod": "invoice",
    "invoiceDetails": {
      "invoiceNumber": "MKT-SUMMER-2024"
    }
  }
}
```

### Legal Notice

```json
{
  "documentSourceIdentifier": {
    "externalUrl": "https://secure.lawfirm.com/notice-12345.pdf"
  },
  "jobTemplate": {
    "templateId": "legal-certified"
  },
  "paymentDetails": {
    "paymentMethod": "invoice",
    "invoiceDetails": {
      "invoiceNumber": "LEGAL-2024-789"
    }
  }
}
```

---

## Available Template Endpoints

### Single Document Endpoints
- `/jobs/single-doc-job-template` - Single document with template
- `/jobs/single-doc-with-template` - Single document, manual recipient configuration
- `/jobs/single-pdf-address-capture` - Extract addresses from single PDF
- `/jobs/single-pdf-split` - Split PDF and mail separately
- `/jobs/single-pdf-split-address-capture` - Split PDF and extract addresses

### Multiple Document Endpoints
- `/jobs/multi-docs-job-template` - Multiple documents, multiple recipients
- `/jobs/multi-doc-merge-job-template` - Merge multiple documents
- `/jobs/multi-doc-with-template` - Multiple documents, one recipient
- `/jobs/multi-pdf-address-capture` - Extract addresses from multiple PDFs

---

## Troubleshooting

### "Template not found" error

**Cause**: Template name doesn't exist in your account or is misspelled

**Solution**:
1. Log in to Click2Mail Template Editor
2. Verify the exact template name (case-sensitive)
3. Update your API call with the correct name

### "Invalid document URL" error

**Cause**: Document URL is not accessible or not HTTPS

**Solution**:
1. Ensure document URL uses HTTPS
2. Verify URL is publicly accessible
3. Check document size (< 25MB)

### "Payment method not configured" error

**Cause**: Payment details don't match your account configuration

**Solution**:
1. Contact Click2Mail support to verify payment methods
2. Use correct payment method format in API call

---

## Need Help?

- **Email**: support@click2mail.com
- **Documentation**: See GETTING_STARTED_USER_MANUAL.md for complete guide
- **API Reference**: https://faserrao.github.io/c2m-api-repo/
- **Click2Endpoint Tool**: https://d2dodhc21bvs3s.cloudfront.net (interactive endpoint discovery)

---

**Remember**: Template endpoints are the fastest, most reliable way to integrate with C2M API. Start here and only move to custom endpoints if you have specific requirements not covered by templates.
