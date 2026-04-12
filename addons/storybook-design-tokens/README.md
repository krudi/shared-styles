# @krudi/storybook-design-tokens

Show CSS custom properties as token tables in Storybook Docs.

Point the addon at the CSS files that contain `@tokens` comments, then render
`<DesignTokenDocs of={Stories} />` in MDX. Stories choose their tokens with
`parameters.designTokens`.

## Setup

Register the addon in `.storybook/main.ts`.

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

Paths in `sources` are resolved from the Storybook config directory.

Then add the docs block to an MDX page.

```mdx
import { DesignTokenDocs } from '@krudi/storybook-design-tokens';
import * as Stories from './button.stories';

<DesignTokenDocs of={Stories} />
```

Set `designTokens` on the story.

```ts
const meta = {
  title: 'Components/Button',
  parameters: {
    designTokens: 'Components/Button',
  },
};
```

## Options

| Option    | Type       | Description                                                                                       |
| :-------- | :--------- | :------------------------------------------------------------------------------------------------ |
| `sources` | `string[]` | CSS files, resolved relative to Storybook's config directory, that contain `@tokens` annotations. |

## CSS Annotations

Add an `@tokens` comment before the custom properties you want to list.

```css
/**
 * @tokens Components/Button
 * @presenter Color
 */
--krd-button-border-color: var(--krd-color-border);
```
