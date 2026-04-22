# Button

Vue Button components using `@krudi/styles` CSS classes.

## Exports

- `Button` — renders a `<button>`, accepts `variant`, `size`, `type`, `disabled`
- `ButtonLink` — renders an `<a>` with button styles, accepts `href` and `variant`

## Variants

`default` | `secondary` | `destructive` | `outline` | `ghost` | `icon` | `link` | `close`

## Usage

```vue
<script setup>
import { Button, ButtonLink } from '@krudi/vue'
</script>

<template>
  <Button variant="default">Save</Button>
  <Button variant="outline" size="sm">Cancel</Button>
  <ButtonLink href="/home" variant="link">Go home</ButtonLink>
</template>
```
