# Dropdown

React Dropdown components using `@krudi/styles` CSS classes.

Closes on outside click. Trigger content is passed via the `trigger` prop.

## Exports

- `Dropdown` — root container with open/close state, requires `trigger: ReactNode`
- `DropdownItem` — list item, renders `<a>` when `href` is set, otherwise `<button>`

## Usage

```tsx
import { Dropdown, DropdownItem } from '@krudi/react'

<Dropdown trigger="Options">
  <DropdownItem href="/profile">Profile</DropdownItem>
  <DropdownItem href="/settings">Settings</DropdownItem>
  <DropdownItem onSelect={() => signOut()}>Sign out</DropdownItem>
</Dropdown>
```
