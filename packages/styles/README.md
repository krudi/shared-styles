# @krudi/styles

CSS variables, base styles, layout primitives, and utilities extracted from `krudi-io` and packaged for reuse across projects.

## Install

```sh
npm install @krudi/styles
```

## Use

Import the bundled stylesheet (includes layers for variables, theme, base, layout, html, elements, components, and utilities):

```css
/* global.css */
@import '@krudi/styles/styles.css';
```

Or pull specific layers as needed (exports point to `src/`):

```css
@import '@krudi/styles/variables.css' layer(variables);
@import '@krudi/styles/base/index.css' layer(base);
@import '@krudi/styles/components/index.css' layer(components);
```

The package ships the SVG icons used in typography link adorners at `assets/icons`; URL references are already relative, so bundlers will include them automatically.

## Notes

- `sideEffects` is enabled for CSS/SVG files to prevent tree-shaking from removing the styles.
- Entry point is `styles.css` (also exposed as the package root). No build step is required.
