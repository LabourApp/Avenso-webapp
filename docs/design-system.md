# Website Design System

## Direction

Create a calm, capable, human visual identity: polished enough to establish trust, warm enough to feel approachable, and practical enough to make the two audiences easy to understand. Avoid startup hype and unsupported proof points.

## Source palette

The Flutter apps’ shared design system is the source for product colors. The website adapts its values to CSS.

| Role | Value | Use |
| --- | --- | --- |
| Primary blue | `#174A67` | Main actions, brand, headings |
| Pressed blue | `#123B53` | Pressed states, dark footer |
| Secondary blue | `#246985` | Supporting accents |
| Accent amber | `#F2A541` | Highlights and decorative accents |
| Background | `#F6F9FA` | Main page background |
| Surface | `#FFFFFF` | Cards and app surfaces |
| Primary text | `#172B38` | Main copy |
| Secondary text | `#536773` | Supporting copy |
| Success | `#167A59` | Positive status decoration |
| Warning | `#93510E` | Warning status decoration |
| Error | `#B73535` | Error status decoration |

Reserve green, amber, and red status colors for relevant status feedback. The website currently uses green only for positive illustrative status marks.

## Typography

- English uses Plus Jakarta Sans for the interface and headings, with a serif face for selected editorial emphasis.
- App interface conventions use Plus Jakarta Sans for English. Hindi uses Noto Sans Devanagari with increased line height. If Hindi is added to the website, load Noto Sans Devanagari, test wrapping on small screens, and preserve the same meaning and page structure across languages.
- Maintain a clear hierarchy. Website headings adapt responsively and may exceed app type sizes; app UI remains preview imagery.

## Layout and components

- Use a soft neutral background, white surfaces, thin neutral borders, and restrained shadows.
- Keep page content centered with a comfortable maximum width and generous vertical section spacing.
- Adapt the app’s rounded language: small radii for controls, larger radii for cards and panels, and pill shapes for small labels.
- Keep touch targets comfortable, with key controls around 48 CSS px where practical.
- Use deep blue for primary actions and amber as a restrained highlight.
- Show employer and worker experiences as distinct, equally considered paths.
- Keep the site header sticky with a lightly tinted, blurred surface, border, and soft shadow so it stays legible over page sections.
- On desktop, fan the three overlapping screenshots in each app preview apart when its image area is hovered or focused; raise the active screenshot slightly. Keep the compact layered preview on narrow screens.
- CSS phone mockups are illustrative previews. Replace with real approved screenshots when provided.
- Use the supplied Avenso logo art for the brand mark. Present the founder portrait with a dimensional frame, restrained shadow, and warm/cool background glow; keep the face clear and avoid fading text or labels across the photo.
- Maintain a readable minimum for supporting website text (generally 12–14 CSS px); reserve smaller text only for decorative app screenshot content or compact metadata.

## Responsive behavior and accessibility

- Navigation collapses to a keyboard-operable menu on narrow viewports.
- Layouts stack on small screens without losing reading order or app audience distinctions.
- Use semantic landmarks, descriptive labels, visible focus styling, sufficient contrast, and useful alternative text for meaningful images.
- Respect `prefers-reduced-motion` for animated or smooth-scrolling behavior.
- Verify at mobile, tablet, and desktop widths and check text resizing and keyboard navigation before launch.
