# Alert

React Alert component using `@krudi/styles` CSS classes.

## Exports

- `Alert` — root container, accepts `variant="default" | "destructive"`
- `AlertTitle` — title paragraph (`.alert-title`)
- `AlertDescription` — description block (`.alert-description`)

## Usage

```tsx
import { Alert, AlertTitle, AlertDescription } from '@krudi/react'

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
```
