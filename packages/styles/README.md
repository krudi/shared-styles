# @krudi/styles

## Install

```sh
npm install @krudi/styles
```

## Use

```css
@import '@krudi/styles/styles.css';
```

## Modular imports

```css
/* core tokens + reset + layout only */
@import '@krudi/styles/variables.css' layer(variables);
@import '@krudi/styles/theme.css' layer(theme);
@import '@krudi/styles/base/index.css' layer(base);
@import '@krudi/styles/layout/index.css' layer(layout);

/* single components/utilities */
@import '@krudi/styles/components/badge.css' layer(components);
@import '@krudi/styles/utilities/padding.css' layer(utilities);
```
