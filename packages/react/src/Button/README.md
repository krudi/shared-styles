# Button

React Button components using `@krudi/styles` CSS classes.

## Exports

- `Button` — renders a `<button>`, accepts `variant` and `size`
- `ButtonLink` — renders an `<a>` with button styles

## Variants

`default` | `secondary` | `destructive` | `outline` | `ghost` | `icon` | `link` | `close`

## Usage

```tsx
import { Button, ButtonLink } from '@krudi/react'

<Button variant="default">Save</Button>
<Button variant="outline" size="sm">Cancel</Button>
<ButtonLink href="/home" variant="link">Go home</ButtonLink>
```
