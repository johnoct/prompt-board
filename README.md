# AI Prompt Copier

A Chrome extension that provides quick access to commonly used AI prompts. With a simple click, you can copy pre-defined prompts to your clipboard, making it easier to interact with AI systems.

## Features

- 🚀 Quick access to pre-defined AI prompts
- 📋 One-click copy to clipboard functionality
- 💫 Smooth animations and visual feedback
- 🎨 Clean, modern user interface
- 🔒 No special permissions required

## Installation

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the directory containing the extension files

## Usage

1. Click the extension icon in your Chrome toolbar to open the popup
2. Browse through the available prompts
3. Click on any prompt to copy it to your clipboard
4. A confirmation message will appear when the prompt is successfully copied

## Customizing Prompts

To add or modify prompts, edit the `popup.html` file:

1. Locate the `<ul id="prompt-list">` section
2. Add or modify `<li>` elements using the following format:
```html
<li class="prompt-item" data-prompt="Your prompt text here">
    Display Name for the Prompt
</li>
```

## Technical Details

- Built with vanilla JavaScript
- Uses the Chrome Extension Manifest V3
- Implements the Clipboard API for copying text
- Styled with CSS for a responsive design

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.
