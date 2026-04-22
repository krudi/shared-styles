# Tabs

React Tabs compound components using `@krudi/styles` CSS classes.

## Exports

- `Tabs` — root context provider, accepts `defaultTab` (uncontrolled) or `activeTab` + `onTabChange` (controlled)
- `TabsList` — tab button row (`.tabs-list`)
- `TabsTrigger` — individual tab button, requires `tabId`
- `TabsPanels` — panels wrapper (`.tabs-panels`)
- `TabsPanel` — individual panel, requires `tabId`

## Usage

```tsx
import { Tabs, TabsList, TabsTrigger, TabsPanels, TabsPanel } from '@krudi/react'

<Tabs defaultTab="overview">
  <TabsList>
    <TabsTrigger tabId="overview">Overview</TabsTrigger>
    <TabsTrigger tabId="details">Details</TabsTrigger>
  </TabsList>
  <TabsPanels>
    <TabsPanel tabId="overview">Overview content</TabsPanel>
    <TabsPanel tabId="details">Details content</TabsPanel>
  </TabsPanels>
</Tabs>
```
