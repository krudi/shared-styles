# @krudi/styles

Reusable CSS design tokens, theme primitives, layout foundations, form styles, components, utilities, and small
progressive-enhancement helpers. Built for personal projects.

## Package Architecture

`@krudi/styles` is layered so consumers can override the system at the right level:

- internal token CSS files are the source of truth, split into `brand`, `common`, and `components`
- `palette` loads the brand token layer
- `theme` defines theme-level CSS behavior such as color scheme
- `variables` adds the composed system and component hooks used by the CSS package
- `base` / `layout` / `html` – global element and structural styling
- `components` / `forms` / `utilities` – opt-in authoring layers

For a deeper explanation, see [../../docs/ARCHITECTURE.md](../../docs/ARCHITECTURE.md).

## Exports

CSS entrypoints:

- `@krudi/styles/css`
- `@krudi/styles/css/palette`
- `@krudi/styles/css/variables`
- `@krudi/styles/css/theme`
- `@krudi/styles/css/base`
- `@krudi/styles/css/layout`
- `@krudi/styles/css/html`
- `@krudi/styles/css/components`
- `@krudi/styles/css/forms`
- `@krudi/styles/css/utilities`

JS helpers:

- `@krudi/styles/js` – exports `wireModalTrigger`, `wireTabs`, `wireThemeSwitch`
- `@krudi/styles/js/modal`
- `@krudi/styles/js/theme-switch`

## Included Components

- `Accordion`
- `Alert`
- `Badge`
- `Block Navigation`
- `Blockquote`
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
            <p class="pricing-table-card-subtitle">Most popular</p>
            <h3 class="pricing-table-card-title">Annual</h3>
            <div class="pricing-table-card-description">
                <p>Yearly access with updates and support for active client projects.</p>
            </div>
        </header>
        <div class="pricing-table-card-footer">
            <p class="pricing-table-card-price">EUR 499</p>
            <a
                class="btn btn-default pricing-table-card-button"
                href="#"
                >Buy now</a
            >
        </div>
    </div>
</article>
```

### Tabs

Use tabs for compact content groups where only one panel should be emphasized at a time.

```html
<section
    class="tabs"
    id="example-tabs"
    aria-label="Example tabs"
>
    <div
        class="tabs-list"
        role="tablist"
        aria-label="Example tabs"
    >
        <button
            class="tabs-trigger is-active"
            id="tab-overview"
            role="tab"
            type="button"
            aria-selected="true"
            aria-controls="panel-overview"
        >
            Overview
        </button>
        <button
            class="tabs-trigger"
            id="tab-details"
            role="tab"
            type="button"
            aria-selected="false"
            aria-controls="panel-details"
            tabindex="-1"
        >
            Details
        </button>
    </div>
    <div class="tabs-panels">
        <article
            class="tabs-panel is-active"
            id="panel-overview"
            role="tabpanel"
            aria-labelledby="tab-overview"
        >
            <h3 class="tabs-panel-title">Keep the active section clear</h3>
            <p class="tabs-panel-description">
                Attach your preferred JS or framework state to switch the active trigger and panel.
            </p>
        </article>
    </div>
</section>
```

```ts
import { wireTabs } from '@krudi/styles/js';

const root = document.getElementById('example-tabs');

wireTabs(root);
```

### Modal

```ts
import { wireModalTrigger } from '@krudi/styles/js';

const cleanup = wireModalTrigger({
    openId: 'open-dialog',
    dialogId: 'dialog-example',
});
```

### Theme Switch

```ts
import { wireThemeSwitch } from '@krudi/styles/js';

const switchElement = document.querySelector<HTMLButtonElement>('[data-theme-switch]');

const cleanup = wireThemeSwitch(switchElement);
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

### Overriding tokens or theme values

Import the layers first, then override inside the matching layer so specificity stays low and the cascade stays intact:

```css
@import '@krudi/styles/css/palette' layer(palette);
@import '@krudi/styles/css/variables' layer(variables);
@import '@krudi/styles/css/theme' layer(theme);

@layer variables {
    :root {
        --krd-body-font-size: 1.125rem;
        --krd-base-line-height: 1.5;
        --krd-heading-font-weight: 600;
        --krd-heading-margin-block-end: var(--krd-space-5);
        --krd-button-line-height: var(--krd-base-line-height);
        --krd-form-input-line-height: var(--krd-base-line-height);
        --krd-tabs-trigger-padding-inline: var(--krd-space-5);
        --krd-pricing-table-card-border-radius: var(--krd-radius-md);
    }
}

@layer theme {
    :root {
        --krd-color-primary: #11213b;
        --krd-color-primary-foreground: #ffffff;
        --krd-color-secondary: #e8f0ff;
        --krd-color-secondary-foreground: #11213b;
        --krd-color-ring: color-mix(in srgb, var(--krd-color-primary) 22%, white);
    }
}
```

If you are working directly with the styles package, add overrides to your own stylesheet after importing
`@krudi/styles/css` or one of its layer files.

### Recommended Override Tokens

If you are installing the package into another project, use the generated `--krd-*` tokens directly:

- Brand: `--krd-color-primary`, `--krd-color-background`, `--krd-space-4`, `--krd-radius-sm`
- Common: `--krd-layout-container-max-width`, `--krd-links-color`, `--krd-inputs-border-radius`
- Components: `--krd-button-padding-inline`, `--krd-card-border-radius`, `--krd-modal-padding-inline`,
  `--krd-pagination-border-radius`, `--krd-tabs-panel-padding`

These tokens are intended to be the main project-level customization points. Lower-level implementation values should
usually stay unchanged unless you have a specific component need.

See [../../docs/TOKEN_GUIDELINES.md](../../docs/TOKEN_GUIDELINES.md) for the rule of thumb on when new tokens should be
introduced for old or new elements.

## Coverage and Documentation

- Storybook is the primary visual documentation surface for components, forms, layout, utilities, and tokens.
- The coverage tracker lives in [../../docs/COMPONENT_COVERAGE.md](../../docs/COMPONENT_COVERAGE.md).
- When adding a new component, update the bundle import, add at least one Storybook story, and document any new public
  tokens.

## Scripts

| Command                      | Description                 |
| ---------------------------- | --------------------------- |
| `npm run build`              | Build CSS and JS to `dist/` |
| `npm run dev`                | Watch TypeScript and CSS    |
| `npm run lint:eslint`        | Lint TS                     |
| `npm run lint:eslint:fix`    | Fix TS lint issues          |
| `npm run lint:stylelint`     | Lint CSS                    |
| `npm run lint:stylelint:fix` | Fix CSS lint issues         |
| `npm run lint:prettier`      | Check formatting            |
| `npm run lint:prettier:fix`  | Format write                |
| `npm run typecheck`          | TypeScript type checks      |
| `npm run clean`              | Remove caches/node_modules  |
