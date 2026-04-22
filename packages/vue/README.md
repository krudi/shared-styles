# @krudi/vue

Vue component wrappers for [`@krudi/styles`](../styles) CSS classes. Import the CSS from `@krudi/styles` separately — these components apply the right class names for you.

## Installation

```sh
npm install @krudi/vue @krudi/styles
```

## Usage

Import the CSS once at your app entry point, then use components anywhere:

```vue
<script setup>
import '@krudi/styles/css'
import { Alert, AlertTitle, AlertDescription, Button, Badge } from '@krudi/vue'
</script>

<template>
  <Alert variant="destructive">
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>Something went wrong.</AlertDescription>
  </Alert>
</template>
```

## Components

| Component | Description |
|---|---|
| `Alert`, `AlertTitle`, `AlertDescription` | Contextual alert messages |
| `Badge` | Inline status badge |
| `Button`, `ButtonLink` | Button and anchor-as-button |
| `ButtonGroup` | Flex row for grouping buttons |
| `Card`, `CardContent`, `CardHeader`, `CardBody`, `CardFooter`, `CardMedia`, `CardTitle`, `CardSubtitle`, `CardActions` | Compound card layout |
| `AccordionGroup`, `AccordionItem` | Native `<details>`-based accordion |
| `Modal`, `ModalHeader`, `ModalBody`, `ModalFooter` | Native `<dialog>`-based modal, controlled via `v-model` |
| `Tabs`, `TabsList`, `TabsTrigger`, `TabsPanels`, `TabsPanel` | Accessible tab interface, controlled via `v-model:activeTab` |
| `Dropdown`, `DropdownItem` | Click-triggered dropdown menu |
| `HorizontalLine` | Styled `<hr>` |

Each component folder contains a `README.md` with props and a usage example.

## Peer dependencies

- `vue >= 3`
