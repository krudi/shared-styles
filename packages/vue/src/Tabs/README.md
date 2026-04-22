# Tabs

Vue Tabs compound components using `@krudi/styles` CSS classes.

`Tabs` provides context via `provide/inject`. Use `defaultTab` for uncontrolled or `v-model:activeTab` for controlled usage.

## Exports

- `Tabs` — root context provider, accepts `defaultTab` or `v-model:activeTab`
- `TabsList` — tab button row (`.tabs-list`)
- `TabsTrigger` — individual tab button, requires `tabId`
- `TabsPanels` — panels wrapper (`.tabs-panels`)
- `TabsPanel` — individual panel, requires `tabId`

## Usage

```vue
<script setup>
import { Tabs, TabsList, TabsTrigger, TabsPanels, TabsPanel } from '@krudi/vue'
</script>

<template>
  <Tabs default-tab="overview">
    <TabsList>
      <TabsTrigger tab-id="overview">Overview</TabsTrigger>
      <TabsTrigger tab-id="details">Details</TabsTrigger>
    </TabsList>
    <TabsPanels>
      <TabsPanel tab-id="overview">Overview content</TabsPanel>
      <TabsPanel tab-id="details">Details content</TabsPanel>
    </TabsPanels>
  </Tabs>
</template>
```
