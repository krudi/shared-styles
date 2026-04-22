# Accordion

Vue Accordion components using `@krudi/styles` CSS classes.

Uses native `<details>`/`<summary>` — no JavaScript required for open/close behaviour.

## Exports

- `AccordionGroup` — group wrapper (`.accordion`)
- `AccordionItem` — individual item, renders `<details>`, accepts `title` and `open`

## Usage

```vue
<script setup>
import { AccordionGroup, AccordionItem } from '@krudi/vue'
</script>

<template>
  <AccordionGroup>
    <AccordionItem title="What is this?">
      This is the answer.
    </AccordionItem>
    <AccordionItem title="Open by default" :open="true">
      This panel starts open.
    </AccordionItem>
  </AccordionGroup>
</template>
```
