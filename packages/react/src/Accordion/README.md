# Accordion

React Accordion components using `@krudi/styles` CSS classes.

Uses native `<details>`/`<summary>` — no JavaScript required for open/close behaviour.

## Exports

- `Accordion` — group wrapper (`.accordion`)
- `AccordionItem` — individual item, renders `<details>`, accepts `open`
- `AccordionTrigger` — renders `<summary>` with title and chevron icon
- `AccordionContent` — content area (`.accordion-content`)

## Usage

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@krudi/react'

<Accordion>
  <AccordionItem>
    <AccordionTrigger>What is this?</AccordionTrigger>
    <AccordionContent>This is the answer.</AccordionContent>
  </AccordionItem>
  <AccordionItem open>
    <AccordionTrigger>Open by default</AccordionTrigger>
    <AccordionContent>This panel starts open.</AccordionContent>
  </AccordionItem>
</Accordion>
```
