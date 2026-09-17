# @krudi/react

React component wrappers for [`@krudi/styles`](../styles) CSS classes. Import the CSS from `@krudi/styles` separately —
these components apply the right class names for you.

## Installation

```sh
npm install @krudi/react @krudi/styles
```

## Usage

Import the CSS once at your app entry point, then use components anywhere:

```tsx
import '@krudi/styles/css';
import { Alert, AlertTitle, AlertDescription, Button, Badge } from '@krudi/react';

<Alert variant="destructive">
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>Something went wrong.</AlertDescription>
</Alert>;
```

## Components

| Component                                                                                                              | Description                        |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `Alert`, `AlertTitle`, `AlertDescription`                                                                              | Contextual alert messages          |
| `Badge`                                                                                                                | Inline status badge                |
| `Button`, `ButtonLink`                                                                                                 | Button and anchor-as-button        |
| `ButtonGroup`                                                                                                          | Flex row for grouping buttons      |
| `Card`, `CardContent`, `CardHeader`, `CardBody`, `CardFooter`, `CardMedia`, `CardTitle`, `CardSubtitle`, `CardActions` | Compound card layout               |
| `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`                                                   | Native `<details>`-based accordion |
| `Modal`, `ModalHeader`, `ModalBody`, `ModalFooter`, `ModalClose`                                                       | Native `<dialog>`-based modal      |
| `Tabs`, `TabsList`, `TabsTrigger`, `TabsPanels`, `TabsPanel`                                                           | Accessible tab interface           |
| `Dropdown`, `DropdownItem`                                                                                             | Click-triggered dropdown menu      |
| `HorizontalLine`                                                                                                       | Styled `<hr>`                      |

Each component folder contains a `README.md` with props, variants, and a usage example.

## Peer dependencies

- `react >= 19`
- `react-dom >= 19`

## Scripts

Run from `packages/react`, or via `npm run <script> --workspace @krudi/react` from the repo root:

| Command                | Description                          |
| ----------------------- | ------------------------------------- |
| `npm run build`         | Build the package with Vite           |
| `npm run dev`           | Rebuild on file changes (Vite watch)  |
| `npm run test`          | Run the Vitest test suite             |
| `npm run test:coverage` | Run tests with coverage               |
| `npm run typecheck`     | Type-check with `tsc`                 |
