# @krudi/styles

Reusable CSS design tokens, reset styles, layout primitives, and early components/utilities. Built for personal
projects.

## Using `@krudi/styles`

Install:

```sh
npm install @krudi/styles
```

Import everything:

```css
@import '@krudi/styles';
```

Or compose layers with CSS cascade layers:

```css
/* Required core */
@import '@krudi/styles/variables' layer(variables);
@import '@krudi/styles/theme' layer(theme);

/* Recommended reset + layout */
@import '@krudi/styles/base' layer(base);
@import '@krudi/styles/layout' layer(layout);

/* Optional pieces */
@import '@krudi/styles/components' layer(components);
@import '@krudi/styles/utilities' layer(utilities);

/* Additional layers if needed */
@import '@krudi/styles/html' layer(html);
@import '@krudi/styles/elements' layer(elements);
```

### Overriding tokens or theme values

Import the layers first, then override inside the matching layer so specificity stays low and the cascade stays intact:

```css
@import '@krudi/styles/variables' layer(variables);
@import '@krudi/styles/theme' layer(theme);

@layer variables {
    :root {
        --spacer: 1.25rem;
        --body-font-size: 1.125rem;
        --base-line-height: 1.5;
        --heading-font-weight: 600;
        --heading-margin-block-end: var(--spacer);
        --button-line-height: var(--base-line-height);
        --form-input-line-height: var(--base-line-height);
    }
}

@layer theme {
    :root {
    }
}
```

### Recommended Override Tokens

If you are installing the package into another project, start by overriding these semantic tokens in `@layer variables`:

- Global type: `--body-font-size`, `--base-line-height`, `--body-font-family`
- Headings: `--heading-1` to `--heading-6`, `--heading-font-weight`, `--heading-line-height`, `--heading-margin-block-end`
- Links: `--a-font-size`, `--a-font-weight`, `--a-line-height`
- Forms: `--form-input-font-size`, `--form-input-line-height`, `--form-label-font-weight`, `--form-label-line-height`, `--form-text-font-size`, `--form-text-line-height`
- Buttons and badges: `--button-font-size`, `--button-font-weight`, `--button-line-height`, `--badge-font-size`, `--badge-font-weight`, `--badge-line-height`
- Components: `--accordion-summary-line-height`, `--accordion-summary-gap`, `--dropdown-trigger-line-height`, `--dropdown-item-text-line-height`, `--pagination-border-radius`, `--modal-close-inset-inline-end`

These tokens are intended to be the main project-level customization points. Lower-level implementation values should usually stay unchanged unless you have a specific component need.

## Scripts

| Command                      | Description                  |
| ---------------------------- | ---------------------------- |
| `npm run build`              | Build CSS + types to `dist/` |
| `npm run dev`                | TypeScript watch             |
| `npm run lint:eslint`        | Lint TS                      |
| `npm run lint:eslint:fix`    | Fix TS lint issues           |
| `npm run lint:stylelint`     | Lint CSS                     |
| `npm run lint:stylelint:fix` | Fix CSS lint issues          |
| `npm run lint:prettier`      | Check formatting             |
| `npm run lint:prettier:fix`  | Format write                 |
| `npm run typecheck`          | TypeScript type checks       |
| `npm run clean`              | Remove caches/node_modules   |
