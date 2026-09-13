# Navigation audit

## Before

- Colophon only appeared in the home footer and command palette.
- Desktop navigation exposed separate CV EN and CV ES links.

## After

- Colophon is a primary desktop and mobile navigation link, while remaining in the footer.
- One native `details` CV control exposes CV EN and CV ES. It works with pointer, keyboard, Enter, Space and Escape through native disclosure behavior.

## I18N V4 boundary

Current App Router routes and public copy are not locale-segmented. A complete `/en` + `/es` migration must move every route and hard-coded public string together; partial routing would create duplicated, untranslated pages. No i18n dependency was added in this navigation pass.
