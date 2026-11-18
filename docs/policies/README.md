# Avenso Policy Drafts

These Markdown files are the source text rendered by the website’s policy routes:

| Document | Website route | Source |
| --- | --- | --- |
| DOC-01 Terms & Conditions | `/terms-and-conditions` | [terms-and-conditions.md](terms-and-conditions.md) |
| DOC-02 Privacy Policy | `/privacy-policy` | [privacy-policy.md](privacy-policy.md) |
| DOC-03 Subscription, Credits, Payments, Cancellation & Refund Policy | `/commercial-policy` | [commercial-policy.md](commercial-policy.md) |
| DOC-04 Help, Grievance & Account Deletion | `/help-grievance-account-deletion` | [help-grievance-account-deletion.md](help-grievance-account-deletion.md) |

## Draft handling

- All four documents are Draft Version 1.0 and explicitly marked for review.
- Keep every `{$[...]}` marker visible until its owner resolves it. The site highlights these markers as review inputs.
- The policy pages generate their contents navigation from the numbered section headings in these Markdown files. Preserve the `A01`, `E01`, `W01`, `P01`, and `C01` heading prefixes when editing.
- These drafts are displayed for review at the owner’s request. Their presence on a website route does not make them approved, legally reviewed, or operative policies.
- Obtain appropriate legal review and approval before changing the status language or treating any policy as final.

## Editing and rendering

Edit the Markdown source, not the rendered React output. `src/main.jsx` imports each file as raw text, parses part and section headings, renders numbered clauses, and highlights unresolved markers. Keep the section syntax in the format `### A01  Section title` (or the corresponding document prefix), and maintain the draft metadata at the beginning of each document.
