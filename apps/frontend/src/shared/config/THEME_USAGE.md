# Theme System Usage Guide

## Overview

This project uses a **CSS Variables + Tailwind** approach for theming, designed to be framework-agnostic and easy to migrate away from Hero UI in the future.

## Color Palette

### Brand Colors

- **#9e6240** - Warm brown (Primary brand color)
- Shades: 50-950 available as `brand-{shade}`

### Secondary Colors

- **#dea47e** - Light tan/peach
- Shades: 50-950 available as `secondary-{shade}`

### Accent Colors

- **#cd4631** - Terracotta red (Error/Danger)
- Shades: 50-950 available as `accent-{shade}`

### Neutral Colors

- **#f8f2dc** - Cream/beige (Backgrounds)
- Shades: 50-950 available as `neutral-{shade}`

### Info Colors

- **#81adc8** - Soft blue
- Shades: 50-950 available as `info-{shade}`

### Gray Scale

- Custom warm gray palette complementing the brand colors
- Shades: 50-950 available as `gray-{shade}`

## Usage Examples

### In Tailwind Classes

```tsx
// Brand colors
<div className="bg-brand-500 text-white">Primary Button</div>
<div className="bg-brand-100 text-brand-900">Light Background</div>

// Semantic colors (theme-aware)
<button className="bg-primary text-primary-foreground">Submit</button>
<div className="bg-danger text-danger-foreground">Error Message</div>

// With opacity
<div className="bg-brand-500/50">50% opacity</div>

// Borders and backgrounds
<div className="border border-border bg-background text-foreground">
  Card with theme-aware colors
</div>

// Muted text
<p className="text-muted-foreground">Secondary text</p>
```

### In CSS/Styled Components

```css
.custom-element {
  background-color: rgb(var(--color-brand-500));
  color: rgb(var(--color-primary-foreground));
}

/* With opacity */
.semi-transparent {
  background-color: rgb(var(--color-brand-500) / 0.5);
}
```

### In JavaScript/TypeScript

```typescript
import { colors, semanticColors } from '@/shared/config/theme.config';

// Access raw color values
const brandColor = colors.brand[500]; // '#9e6240'
const lightBrand = colors.brand[100]; // '#f4ebe3'

// Access semantic colors
const primaryLight = semanticColors.light.primary;
const primaryDark = semanticColors.dark.primary;
```

## Dark Mode

Dark mode is controlled by the `dark` class on the root element. All semantic colors automatically adapt:

```tsx
// Toggle dark mode
<html className="dark">
  {/* All semantic colors now use dark mode values */}
</html>
```

### Dark Mode Color Mapping

| Semantic Color | Light Mode      | Dark Mode       |
| -------------- | --------------- | --------------- |
| `primary`      | `brand-500`     | `brand-400`     |
| `secondary`    | `secondary-500` | `secondary-400` |
| `accent`       | `accent-500`    | `accent-400`    |
| `background`   | `#ffffff`       | `gray-950`      |
| `foreground`   | `gray-900`      | `gray-50`       |

## Best Practices

### ✅ DO

- Use semantic colors (`primary`, `danger`, `success`) for UI elements that should adapt to theme changes
- Use specific color scales (`brand-500`, `gray-200`) for brand-specific elements
- Import from `theme.config.ts` when you need programmatic access to colors
- Use the `DEFAULT` variant when you don't need a specific shade: `bg-brand`

### ❌ DON'T

- Hardcode hex values in components
- Use Hero UI color tokens directly (use our abstraction)
- Mix CSS variable syntax styles (always use `rgb(var(--color-*))`)

## Migration Path

When migrating away from Hero UI:

1. **Components already use `@/shared/ui` abstraction** ✅
2. **Colors are defined in CSS variables** ✅
3. **Update component implementations** in `@/shared/ui/*`
4. **Remove Hero UI plugin** from `tailwind.config.ts`
5. **Colors remain unchanged** - just update the component internals

## File Structure

```
apps/frontend/src/
├── shared/
│   ├── config/
│   │   ├── theme.config.ts       # Color definitions (source of truth)
│   │   └── THEME_USAGE.md        # This file
│   ├── types/
│   │   └── theme.d.ts            # TypeScript type definitions
│   └── app/
│       └── globals.css           # CSS variables
└── tailwind.config.ts            # Tailwind color mappings
```

## Color Accessibility

All color combinations have been designed with WCAG AA contrast ratios in mind:

- **Brand 500 on White**: 4.8:1 (AA Large Text ✅)
- **Accent 500 on White**: 5.2:1 (AA Large Text ✅)
- **Gray 900 on White**: 13.1:1 (AAA ✅)

Always test color combinations for accessibility when creating new UI patterns.
