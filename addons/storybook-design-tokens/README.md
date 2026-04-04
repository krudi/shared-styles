# @krudi/storybook-design-tokens

Storybook addon for rendering annotated `--krd-*` CSS custom properties as design token tables in docs pages.

## Usage

Register the addon in `.storybook/main.ts` and pass the CSS files that contain token annotations:

```ts
import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  addons: [
    {
      name: '@krudi/storybook-design-tokens',
      options: {
        sources: [
          '../../../packages/styles/src/styles/palette.css',
          '../../../packages/styles/src/styles/theme.css',
          '../../../packages/styles/src/styles/variables.css',
        ],
      },
    },
  ],
};

export default config;
```

In MDX docs:

```mdx
import { DesignTokenDocs } from '@krudi/storybook-design-tokens';
import * as Stories from './button.stories';

<DesignTokenDocs of={Stories} />
```

## CSS Annotations

Token groups are discovered from CSS comment blocks:

```css
/**
 * @tokens Components/Button
 * @presenter Color
 */
--krd-button-border-color: var(--krd-color-border);
```
