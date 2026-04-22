# Modal

Vue Modal components using `@krudi/styles` CSS classes.

Uses the native `<dialog>` element with `showModal()`/`close()`. Bind `v-model` to control open state.

## Exports

- `Modal` — root `<dialog>`, use `v-model` for open state
- `ModalHeader` — header section (`.modal-header`)
- `ModalBody` — body section (`.modal-body`)
- `ModalFooter` — footer section (`.modal-footer`)

## Usage

```vue
<script setup>
import { ref } from 'vue'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@krudi/vue'

const isOpen = ref(false)
</script>

<template>
  <Button @click="isOpen = true">Open modal</Button>

  <Modal v-model="isOpen">
    <ModalHeader>Title</ModalHeader>
    <ModalBody>Modal content.</ModalBody>
    <ModalFooter>
      <Button @click="isOpen = false">Close</Button>
    </ModalFooter>
  </Modal>
</template>
```
