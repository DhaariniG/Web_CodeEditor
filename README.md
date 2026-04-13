# Simple Live Code Editor

A minimal web-based editor to write and preview **HTML, CSS, and JS** in real-time.

## Features
- See changes instantly as you type.
- Uses an `<iframe>` to keep the preview separate from the editor.
-  Prevents the app from crashing if you type a JavaScript error.

## How it Works
1. **HTML & CSS:** Injected directly into the `iframe` body using `.innerHTML`.
2. **JavaScript:** Executed safely using `eval()` within a `try...catch` block.
3. **Real-time:** Updates are triggered by the `keyup` event listener.

## How to Run
1. Download the project files.
2. Open `index.html` in any web browser.

## Built With
- HTML5
- CSS3 
- JavaScript