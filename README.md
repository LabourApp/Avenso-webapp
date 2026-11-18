# Avenso Website

The public-facing React website for Avenso. It introduces the service, explains the two mobile app experiences, builds trust through a founder vision and clear product information, and directs visitors to the appropriate next step. Vercel route rewrites in [`vercel.json`](vercel.json) support direct visits and refreshes on nested React pages.

The website is an awareness and discovery layer. The employer and worker apps remain the primary places to post work, find opportunities, respond to requests, and manage work. Read [`docs/website-brief.md`](docs/website-brief.md) for product and content scope, [`docs/design-system.md`](docs/design-system.md) for visual rules, [`docs/development.md`](docs/development.md) for setup and maintenance, and [`docs/policies/README.md`](docs/policies/README.md) for the legal policy sources.

## Run locally

Requirements: Node.js 20 or newer and npm.

```sh
npm install
npm run dev
```

Build the static production bundle with `npm run build`; preview it locally with `npm run preview`.

## Project structure

```text
src/main.jsx       React pages, app screenshots, FAQ interaction, route selection
src/styles.css     Responsive visual system and page styling
public/images/     Supplied employer and worker app screenshots
public/favicon.*   Browser favicon assets
public/android-*   Android/PWA icon assets
public/apple-*     Apple touch icon
index.html         Document metadata and font loading
docs/              Product, design, development, and policy source documents
```

## Before launch

- Priyanshu Narwaria’s portrait, name, and education are present. Confirm the portrait is approved for public use and review the vision wording with him before publishing.
- The supplied Avenso brand icon is used in the site header and browser/app icon slots.
- Add the published Google Play and Apple App Store URLs for both apps, then expose the four store buttons. They remain hidden while the apps are unpublished.
- The public contact email is `napshotpriyanshu@gmail.com`; the Contact page does not offer a mobile contact option.
- The Version 1.0 Terms & Conditions, Privacy Policy, Commercial Policy, and Help, Grievance & Account Deletion pages are linked from the site footer.
- Review product statements against the current app and backend behavior. See the content guardrails in [`docs/website-brief.md`](docs/website-brief.md).

## Documentation maintenance

Treat the Markdown in `docs/` as the durable reference for site scope, design decisions, and implementation conventions. When a product capability, public claim, section, or design token changes, update the matching document in the same change and keep this README’s links current. Distinguish implemented app behavior from future website ideas.
