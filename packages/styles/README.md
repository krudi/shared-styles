# @krudi/styles

Reusable CSS design tokens, reset styles, layout primitives, and early components/utilities. Built for personal
projects.

## Included Components

- `Accordion`
- `Alert`
- `Badge`
- `Block Navigation`
- `Button`
- `Button Group`
- `Card`
- `Dropdown`
- `Horizontal Line`
- `List`
- `Modal`
- `Pagination`
- `Pricing Table`
- `Tabs`
- `Theme Switch`

### Pricing Table

Use the pricing-table component for a single offer card inside a grid or comparison layout.

```html
<article class="pricing-table-card">
    <div class="pricing-table-card-accent"></div>
    <div class="pricing-table-card-content">
        <header class="pricing-table-card-header">
            <p class="pricing-table-card-eyebrow">Most popular</p>
            <h3 class="pricing-table-card-title">Annual</h3>
            <div class="pricing-table-card-description">
                <p>Yearly access with updates and support for active client projects.</p>
            </div>
        </header>
        <div class="pricing-table-card-footer">
            <p class="pricing-table-card-price">EUR 499</p>
            <a class="btn btn-default pricing-table-card-button" href="#">Buy now</a>
        </div>
    </div>
</article>
```

### Tabs

Use tabs for compact content groups where only one panel should be emphasized at a time.

```html
<section class="tabs" id="example-tabs" aria-label="Example tabs">
    <div class="tabs-list" role="tablist" aria-label="Example tabs">
        <button class="tabs-trigger is-active" id="tab-overview" role="tab" type="button" aria-selected="true" aria-controls="panel-overview">Overview</button>
        <button class="tabs-trigger" id="tab-details" role="tab" type="button" aria-selected="false" aria-controls="panel-details" tabindex="-1">Details</button>
    </div>
    <div class="tabs-panels">
        <article class="tabs-panel is-active" id="panel-overview" role="tabpanel" aria-labelledby="tab-overview">
            <h3 class="tabs-panel-title">Keep the active section clear</h3>
            <p class="tabs-panel-description">Attach your preferred JS or framework state to switch the active trigger and panel.</p>
        </article>
    </div>
</section>
```

```ts
import { wireTabs } from '@krudi/styles/js';

const root = document.getElementById('example-tabs');

if (root instanceof HTMLElement) {
    wireTabs({ root });
}
```

## Using `@krudi/styles`

Install:

```sh
npm install @krudi/styles
```

Import everything:

```css
@import '@krudi/styles/css';
```

Or compose layers with CSS cascade layers:

```css
/* Required core */
@import '@krudi/styles/css/variables' layer(variables);
@import '@krudi/styles/css/theme' layer(theme);

/* Recommended reset + layout */
@import '@krudi/styles/css/base' layer(base);
@import '@krudi/styles/css/layout' layer(layout);

/* Optional pieces */
@import '@krudi/styles/css/components' layer(components);
@import '@krudi/styles/css/utilities' layer(utilities);

/* Additional layers if needed */
@import '@krudi/styles/css/html' layer(html);
@import '@krudi/styles/css/elements' layer(elements);
```

### Overriding tokens or theme values

Import the layers first, then override inside the matching layer so specificity stays low and the cascade stays intact:

```css
@import '@krudi/styles/css/variables' layer(variables);
@import '@krudi/styles/css/theme' layer(theme);

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
| `npm run build`              | Build CSS and JS to `dist/`  |
| `npm run dev`                | TypeScript watch             |
| `npm run lint:eslint`        | Lint TS                      |
| `npm run lint:eslint:fix`    | Fix TS lint issues           |
| `npm run lint:stylelint`     | Lint CSS                     |
| `npm run lint:stylelint:fix` | Fix CSS lint issues          |
| `npm run lint:prettier`      | Check formatting             |
| `npm run lint:prettier:fix`  | Format write                 |
| `npm run typecheck`          | TypeScript type checks       |
| `npm run clean`              | Remove caches/node_modules   |
