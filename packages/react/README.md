# @krudi/react

React component wrappers for [`@krudi/styles`](../styles) CSS classes. Import the CSS from `@krudi/styles` separately — these components apply the right class names for you.

## Installation

```sh
npm install @krudi/react @krudi/styles
```

## Usage

Import the CSS once at your app entry point, then use components anywhere:

```tsx
import '@krudi/styles/css'
import { Alert, AlertTitle, AlertDescription, Button, Badge } from '@krudi/react'

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
```

## Components

| Component | Description |
|---|---|
| `Alert`, `AlertTitle`, `AlertDescription` | Contextual alert messages |
| `Badge` | Inline status badge |
| `Button`, `ButtonLink` | Button and anchor-as-button |
| `ButtonGroup` | Flex row for grouping buttons |
| `Card`, `CardContent`, `CardHeader`, `CardBody`, `CardFooter`, `CardMedia`, `CardTitle`, `CardSubtitle`, `CardActions` | Compound card layout |
| `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` | Native `<details>`-based accordion |
| `Modal`, `ModalHeader`, `ModalBody`, `ModalFooter`, `ModalClose` | Native `<dialog>`-based modal |
| `Tabs`, `TabsList`, `TabsTrigger`, `TabsPanels`, `TabsPanel` | Accessible tab interface |
| `Dropdown`, `DropdownItem` | Click-triggered dropdown menu |
| `HorizontalLine` | Styled `<hr>` |

Each component folder contains a `README.md` with props, variants, and a usage example.

## Peer dependencies

- `react >= 19`
- `react-dom >= 19`
