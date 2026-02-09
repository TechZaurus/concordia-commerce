# Icon Component

A lightweight, tree-shakeable icon system using `lucide-react` with dynamic imports for optimal bundle size.

## Features

- **Tree-shaking**: Only icons you use are included in the bundle
- **Dynamic imports**: Icons are loaded on-demand using Next.js dynamic imports
- **Type-safe**: Full TypeScript support with autocomplete for icon names
- **Consistent API**: Single `<Icon>` component for all icons
- **Suspense support**: Built-in loading states with React Suspense

## Usage

```tsx
import { Icon } from '@/shared/ui';

// Basic usage
<Icon name="home" />

// With props (size, color, etc.)
<Icon name="settings" size={24} color="blue" />

// With custom styling
<Icon name="user" className="text-primary" strokeWidth={1.5} />

// With fallback during loading
<Icon name="loader" fallback={<div>Loading...</div>} />
```

## Available Props

All props from `lucide-react` are supported:

- `name`: Icon name (required, type-safe)
- `size`: Icon size in pixels (default: 24)
- `color`: Icon color
- `strokeWidth`: Stroke width (default: 2)
- `className`: CSS classes
- `fallback`: React node to show while loading
- All other SVG attributes

## Adding New Icons

1. Open `icon-registry.ts`
2. Import the icon using dynamic import pattern:

```typescript
export const iconRegistry = {
  // ... existing icons
  'your-icon': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.YourIcon }))
  ),
} as const;
```

3. The icon name will automatically be added to the `IconName` type
4. Use it: `<Icon name="your-icon" />`

## Icon Naming Convention

- Use kebab-case for icon names: `'shopping-cart'`, `'trending-up'`
- Match Lucide's icon names but in kebab-case
- Keep names descriptive and consistent

## Performance Notes

- Each icon is code-split into its own chunk
- Icons are only loaded when rendered
- Suspense boundary prevents layout shift during loading
- Bundle size impact: ~1KB per icon (only for icons you use)

## Common Icons Included

- Navigation: `home`, `menu`, `x`, `search`
- UI: `chevron-*`, `arrow-*`, `more-*`
- Actions: `edit`, `trash`, `plus`, `minus`, `check`
- Status: `alert-circle`, `info`, `alert-triangle`, `loader`
- Commerce: `shopping-cart`, `package`, `dollar-sign`
- Data: `trending-up`, `trending-down`
- User: `user`, `settings`

## Example: Using in a Component

```tsx
import { Icon } from '@/shared/ui';

export function DashboardStats() {
  return (
    <div className="flex items-center gap-2">
      <Icon name="trending-up" className="text-success" size={20} />
      <span>Revenue increased by 12%</span>
    </div>
  );
}
```

## TypeScript Support

The `IconName` type is automatically generated from the registry:

```typescript
import type { IconName } from '@/shared/ui';

// This will show autocomplete for all available icons
const iconName: IconName = 'home';
```
