# @krudi/icons

Standalone SVG icon set extracted from @krudi/shared-styles for reuse across projects.

## Using `@krudi/icons`

Install:

```sh
npm install @krudi/icons
```

Import an icon (works with bundlers that handle asset imports):

```js
import externalLink from '@krudi/icons/external-link.svg';
import phone from '@krudi/icons/phone.svg';
import envelope from '@krudi/icons/envelope.svg';
```

Or reference directly in CSS:

```css
a[href^='https://']::after {
    background-image: url('@krudi/icons/external-link.svg');
}
```
