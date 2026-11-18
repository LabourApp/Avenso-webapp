# Avenso Policies

These Markdown files are the source text rendered by the website policy routes.

| Policy | Website route | Source |
| --- | --- | --- |
| Terms & Conditions | `/terms-and-conditions` | [terms-and-conditions.md](terms-and-conditions.md) |
| Privacy Policy | `/privacy-policy` | [privacy-policy.md](privacy-policy.md) |
| Commercial Policy | `/commercial-policy` | [commercial-policy.md](commercial-policy.md) |
| Help, Grievance & Account Deletion | `/help-grievance-account-deletion` | [help-grievance-account-deletion.md](help-grievance-account-deletion.md) |

## Versioning

- Each policy is Version 1.0, effective from 18 November 2026.
- Update the matching Markdown source when policy content changes, and update its version and effective date as appropriate.
- Preserve the numbered section prefixes (`A01`, `E01`, `W01`, `P01`, `C01`, and `H01`) because the website builds the contents navigation from these headings.

## Editing and rendering

Edit the Markdown source, not rendered React output. `src/main.jsx` imports each file as raw text, parses part and section headings, and renders numbered clauses. Keep headings in the form `### A01  Section title` (or the corresponding document prefix) so the website navigation remains in sync.
