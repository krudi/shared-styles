# Alert

Vue Alert components using `@krudi/styles` CSS classes.

## Exports

- `Alert` — root container, accepts `variant="default" | "destructive"`
- `AlertTitle` — title paragraph (`.alert-title`)
- `AlertDescription` — description block (`.alert-description`)

## Usage

```vue
<script setup>
import { Alert, AlertTitle, AlertDescription } from '@krudi/vue'
</script>

<template>
  <Alert variant="destructive">
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>Something went wrong.</AlertDescription>
  </Alert>
</template>
```
