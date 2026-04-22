# Modal

React Modal components using `@krudi/styles` CSS classes.

Uses the native `<dialog>` element with `showModal()`/`close()`.

## Exports

- `Modal` — root `<dialog>`, requires `open: boolean` and `onClose: () => void`
- `ModalHeader` — header section (`.modal-header`)
- `ModalBody` — body section (`.modal-body`)
- `ModalFooter` — footer section (`.modal-footer`)
- `ModalClose` — absolutely-positioned close button (`.btn-close.modal-close`)

## Usage

```tsx
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalClose, Button } from '@krudi/react'

const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open modal</Button>

<Modal open={open} onClose={() => setOpen(false)}>
  <ModalClose onClick={() => setOpen(false)} />
  <ModalHeader>Title</ModalHeader>
  <ModalBody>Modal content.</ModalBody>
  <ModalFooter>
    <Button onClick={() => setOpen(false)}>Close</Button>
  </ModalFooter>
</Modal>
```
