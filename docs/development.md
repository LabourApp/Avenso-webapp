# Development Notes

## Stack

- React with Vite, using JavaScript modules.
- Lucide React for interface icons.
- Plain CSS in `src/styles.css`; no CSS framework is required.
- Google Fonts supplies Plus Jakarta Sans and DM Sans in the current HTML shell. Keep a sensible system fallback and consider self-hosting fonts for production privacy and resilience requirements.

## Page implementation

`src/main.jsx` contains homepage sections, lightweight path routing for contact and policy pages, FAQ interaction, policy-draft rendering, founder portrait, and app screenshot galleries. The current screenshot set includes seven worker screens and thirteen employer screens; the employer setup-profile screenshot was intentionally excluded. The employer demo start-code screenshot has visible phone/code data covered in the rendered gallery. Supplied founder/app images live in `public/images/`; favicon, PWA, and Apple touch icons live in `public/`. Policy source Markdown lives in [`policies/`](policies/); the React pages import it as raw text, then format the section hierarchy and highlight unresolved draft placeholders. Keep product copy grounded in [`website-brief.md`](website-brief.md). `src/styles.css` contains design tokens, section styles, responsive breakpoints, and reduced-motion handling.

## Editing workflow

1. Confirm a content change against the current mobile app/backend behavior.
2. Update the relevant brief or design reference when product claims, section intent, palette, or typography change.
3. Keep semantic HTML, accessible controls, and responsive reading order intact.
4. Update this document if the stack, file structure, or development commands change.

## Launch configuration still needed

Before launch, add verified store URLs for both Android and iOS listings and expose the currently hidden store buttons; confirm the public mobile details; resolve all highlighted legal placeholders and obtain approval for the three policies; and review the founder vision copy with Priyanshu. See the launch checklist in the root README.
