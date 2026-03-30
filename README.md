# @krudi/shared-styles

Shared CSS foundations, utilities, and components extracted for reuse across personal projects. Includes design tokens,
reset styles, layout primitives, and early components/utilities.

### Packages

| Package                                                      | Description                                                            | Version                                                                                                                | Additional Information                                                                                                   |
| ------------------------------------------------------------ | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [@krudi/styles](https://www.npmjs.com/package/@krudi/styles) | Shared CSS foundations, tokens, reset, layout, components, utilities   | ![NPM Version](https://img.shields.io/npm/v/@krudi/styles)                                                             | ![NPM Downloads](https://img.shields.io/npm/dm/@krudi/styles) ![NPM License](https://img.shields.io/npm/l/@krudi/styles) |
| [@krudi/icons](https://www.npmjs.com/package/@krudi/icons)   | Standalone SVG assets (external link, phone, envelope)                 | ![NPM Version](https://img.shields.io/npm/v/@krudi/icons)                                                              | ![NPM Downloads](https://img.shields.io/npm/dm/@krudi/icons) ![NPM License](https://img.shields.io/npm/l/@krudi/icons)   |
| [@krudi/storybook](./apps/storybook)                         | HTML Storybook workspace for visual checks and Vitest Storybook runner | ![Workflow](https://img.shields.io/github/actions/workflow/status/krudi/shared-styles/test-storybook.yaml?label=tests) | [Live preview](https://krudi.github.io/shared-styles/)                                                                   |

> [!WARNING]
>
> `@krudi/styles` is built for personal use and is still in active development. Expect breaking changes and limited
> support while it evolves.

## Quick start

> [!NOTE]
>
> You need to have [Node.js](https://github.com/nodejs) installed on your computer before running this project.

1. First clone this repository and navigate into your project directory
2. Install the dependencies: `npm install`
3. Run the development server: `npm run dev`

## Workspaces

- `packages/styles` – CSS package (`@krudi/styles`) with palette, theme, tokens, base, layout, HTML, components, forms,
  utilities, and JS helpers
- `packages/icons` – SVG assets package (`@krudi/icons`) with common link/contact icons
- `apps/storybook` – HTML Storybook (`@krudi/storybook`) for visual checks, docs, and tests

## Using `@krudi/styles`

Install the package (published build lives in `packages/styles`):

```sh
npm install @krudi/styles
```

Import everything:

```css
@import '@krudi/styles/css';
```

Or compose layers:

```css
/* Required core */
@import '@krudi/styles/css/palette' layer(palette);
@import '@krudi/styles/css/variables' layer(variables);
@import '@krudi/styles/css/theme' layer(theme);

/* Recommended reset + layout */
@import '@krudi/styles/css/base' layer(base);
@import '@krudi/styles/css/layout' layer(layout);
@import '@krudi/styles/css/forms' layer(forms);

/* Optional pieces */
@import '@krudi/styles/css/components' layer(components);
@import '@krudi/styles/css/utilities' layer(utilities);

/* Additional layers if needed */
@import '@krudi/styles/css/html' layer(html);
```

See [`packages/styles/README.md`](./packages/styles/README.md) for entrypoints and override guidance

## Commands

Workspace-level scripts:

- `npm run build` – build all workspaces
- `npm run dev` – run workspace dev scripts in parallel
- `npm run test:storybook` – run Storybook-based tests
- `npm run typecheck` – type-check all workspaces

Linting/fixing:

Navigate into your project directory and start linting your files.

- `npm run lint:eslint`: lints [JavaScript](https://www.javascript.com) files
- `npm run lint:eslint:fix`: to eliminate all possible errors
- `npm run lint:stylelint`: lints [Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS) files
- `npm run lint:stylelint:fix`: to eliminate all possible errors
