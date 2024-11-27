# Modal Component

This React Modal component is a reusable and accessible way to implement modals in your web applications. Below is the documentation to help you understand and use this component effectively.

---

## Features

- Open modal using props
- Close modal on clicks or focus events outside the modal.
- Customizable through child elements.

---


## Requirements
1. Node version > 18.0.0
2. Text editor: Vscode

## Installation

1. Install using npm:
   ```bash
   npm install @chmicha01/modal-oc
   ```

---

## Usage

Import and use the `Modal` component in your project as follows:

### Example
```jsx
import React, { useState } from "react";
import Modal from " @chmicha01/modal-oc";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <h2>Modal Title</h2>
        <p>This is a modal content example.</p>
        <button onClick={handleClose}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
```

### Props

| Prop Name | Type         | Description                                                 |
|-----------|--------------|-------------------------------------------------------------|
| `isOpen`  | `bool`       | Determines if the modal is visible.                        |
| `onClose` | `function`   | Callback function triggered when the modal is closed.      |
| `children`| `React.node` | Content to display inside the modal.                       |


---

## Notes

- Ensure the `onClose` function correctly updates the modal's visibility state.
- This implementation focuses on handling modal visibility.



