# Dropdown

Vue Dropdown components using `@krudi/styles` CSS classes.

Closes on outside click. Trigger content is passed via the `#trigger` slot.

## Exports

- `Dropdown` — root container with open/close state; uses `#trigger` slot for the button label
- `DropdownItem` — list item, renders `<a>` when `href` is set, otherwise `<button>`; emits `@select`

## Usage

```vue
<script setup>
import { Dropdown, DropdownItem } from '@krudi/vue'
</script>

<template>
  <Dropdown>
    <template #trigger>Options</template>
    <DropdownItem href="/profile">Profile</DropdownItem>
    <DropdownItem href="/settings">Settings</DropdownItem>
    <DropdownItem @select="signOut">Sign out</DropdownItem>
  </Dropdown>
</template>
```
