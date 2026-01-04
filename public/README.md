# Public Directory

This directory contains **static assets** that are served as-is from the root URL.

## Usage

Files in `public/` are served from the root path (`/`).

### Examples:

```
public/
├── favicon.ico          → accessed as /favicon.ico
├── logo.png            → accessed as /logo.png
└── robots.txt          → accessed as /robots.txt
```

### In HTML:
```html
<!-- Direct path reference -->
<link rel="icon" href="/favicon.ico">
<img src="/logo.png" alt="Logo">
```

### In JavaScript:
```javascript
// Direct URL path
const imageUrl = '/logo.png';
```

## When to Use Public Directory

Use `public/` for:
- ✅ Favicon
- ✅ robots.txt, sitemap.xml
- ✅ Large files that don't need optimization
- ✅ Files referenced by absolute URLs
- ✅ Files that must have a specific filename/URL

**Note:** Files in `public/` are NOT processed or optimized by Vite.

