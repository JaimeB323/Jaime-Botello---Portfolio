# Case Study Design System

Future case studies must use `case-study-redesign.css` and follow `case-study-template.html` rather than introducing a new standalone visual design.

## Core Rule

When building a new case study, do not create a new visual identity. Start from the shared case-study template and stylesheet. Project-specific personality should come from content, photography, campaign artwork, video and at most one optional accent color. Navigation, typography, spacing, page width, buttons, section hierarchy, responsive behavior and footer must remain consistent with the portfolio.

## Typography

- Use `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- Do not use Impact, Arial Black, Arial Narrow, Roboto Condensed, Brush Script, Segoe Script or decorative handwriting fonts as structural typography.
- Create hierarchy through size, weight, color and spacing.
- H1: `clamp(2.6rem, 6vw, 5rem)`, 800-900 weight, natural wrapping.
- H2: `clamp(2rem, 4vw, 3.4rem)`, 800-900 weight, natural wrapping.
- H3: `clamp(1.3rem, 1.8vw, 1.75rem)`, 750-850 weight.
- Body: approximately 1rem-1.1rem with 1.55-1.65 line height.

## Colors

- Primary navy: `#071926`
- Primary burgundy/red: `#a80f3b`
- Brighter red accent: `#d91f57`
- Warm neutral background: `#f4f1ea`
- White panel: `#ffffff`
- Primary text: `#071926`
- Secondary text: `#344752`
- Subtle border: `rgba(7, 25, 38, 0.12-0.15)`

Each project may use one optional accent color when it supports the subject matter, but structural UI elements should remain consistent.

## Grid And Width

- Use an 1180px max content width.
- Align navigation, hero, section headers, body content, media, results and footer to the same grid.
- Long-form paragraphs should use a comfortable reading width of roughly 720-820px.

## Section Hierarchy

Every section should follow:

1. Small red eyebrow
2. Large H2
3. Optional supporting paragraph
4. Content

Recommended vertical spacing:

- Desktop major sections: 64-80px
- Tablet sections: 48-60px
- Mobile sections: 36-44px

Avoid empty sections and excessive whitespace.

## Hero Structure

Use this sequence:

- Category or kicker
- H1 project title
- Short executive summary
- Optional metadata or CTAs
- Primary hero visual

Hero images should use available project imagery, consistent framing, 12-16px radius and subtle borders/shadows. Do not crop meaningful information.

## Cards

Use cards for:

- Campaign assets
- Articles
- Videos
- Social posts
- Results or metrics
- Role/contribution summaries

Card styling:

- White or light neutral background
- 1px subtle border
- 12-16px border radius
- Subtle shadow only when helpful
- 20-28px internal padding

Avoid thick black outlines, hard-offset shadows, extreme radius, poster effects and arbitrary alternating colors.

## Buttons

Use one consistent button system:

- 8-10px border radius
- 44-48px minimum height
- Inter/system sans
- 750-850 font weight

Primary buttons use burgundy/red with white text. Secondary buttons use white or transparent background, navy text and a subtle border. Hover motion should be restrained.

## Images And Video

- Preserve legitimate project images and assets.
- Photography can use `object-fit: cover` when the crop preserves the subject.
- Screenshots, documents and graphics should generally use `object-fit: contain`.
- Landscape video uses 16:9.
- Vertical social video uses 9:16.
- Do not force vertical social assets into landscape crops.

## Results

Use confirmed metrics only. Do not invent results, dates, responsibilities or outcomes.

Preferred formats:

- Results band
- Metric card grid
- Clean infographic-style group
- Narrative impact statement when quantitative metrics are unavailable

## Accessibility

Maintain:

- Skip links
- Semantic headings
- Useful alt text
- Keyboard navigation
- Visible focus states
- Mobile navigation controls
- ARIA labels where appropriate
- 44px minimum tap targets
- Sufficient color contrast

## SEO And Social Metadata

Do not delete existing meta descriptions, canonical links, Open Graph fields, Twitter card metadata or social preview images. Add these fields to new case studies when the live URL and preview image are known.

## Quality Checklist

Before publishing a case study, verify:

- It uses `case-study-redesign.css`.
- It follows `case-study-template.html`.
- Navigation matches the portfolio.
- H1 and H2 wrap naturally on mobile.
- No horizontal overflow exists at 390px.
- Cards and buttons fit the viewport.
- Media does not distort or crop essential information.
- Links, embeds and images work.
- No API keys or secrets are present.
- Metrics are confirmed and not fabricated.
