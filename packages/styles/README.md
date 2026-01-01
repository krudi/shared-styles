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
@import '@krudi/styles/ui';
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
    }
}

@layer theme {
    :root {
        --c-primary: #6b5bff;
    }
}
```

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
