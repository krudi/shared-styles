# Card

Vue Card compound components using `@krudi/styles` CSS classes.

## Exports

- `Card` — root container, accepts `variant="white" | "primary" | "secondary"`
- `CardMedia` — media section for images (`.card-media`)
- `CardContent` — padded content wrapper (`.card-content`)
- `CardHeader` — header section (`.card-content-header`)
- `CardBody` — body section (`.card-content-body`)
- `CardFooter` — footer section (`.card-content-footer`)
- `CardTitle` — `<h3>` title (`.card-header-title`)
- `CardSubtitle` — subtitle paragraph (`.card-header-subtitle`)
- `CardActions` — footer action row (`.card-footer-actions`)

## Usage

```vue
<script setup>
import { Card, CardContent, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter, CardActions, Button } from '@krudi/vue'
</script>

<template>
  <Card variant="white">
    <CardContent>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Subtitle</CardSubtitle>
      </CardHeader>
      <CardBody>Card content goes here.</CardBody>
      <CardFooter>
        <CardActions>
          <Button>Primary</Button>
          <Button variant="outline">Secondary</Button>
        </CardActions>
      </CardFooter>
    </CardContent>
  </Card>
</template>
```
