# Assets Directory

This directory contains assets that are **processed by Vite**.

## Structure

```
assets/
├── images/
│   ├── icons/        # Icon images (buttons, UI elements)
│   └── logos/        # Logo images
└── fonts/            # Custom fonts (if needed)
```

## Usage

### In JavaScript/TypeScript:
```javascript
import logo from '../assets/images/logos/kbm-logo.png';
import icon from '../assets/images/icons/email-icon.svg';

// Use in your code
const img = document.createElement('img');
img.src = logo;
```

### In HTML:
```html
<!-- Use import in your JS file, then reference -->
<img src="${logo}" alt="KBM Logo">
```

### In SCSS/CSS:
```scss
// Import the image
@import '../assets/images/logos/kbm-logo.png' as *;

.header {
  background-image: url('../assets/images/logos/kbm-logo.png');
}
```

## Benefits

- **Optimization**: Vite will optimize and hash filenames
- **Bundle Analysis**: Images are tracked in your bundle
- **Tree Shaking**: Unused images won't be included
- **Path Resolution**: Automatic path resolution
- **Import Checking**: Build errors if image is missing

