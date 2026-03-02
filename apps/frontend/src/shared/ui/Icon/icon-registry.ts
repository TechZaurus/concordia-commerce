import { LucideProps } from 'lucide-react';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

export const iconRegistry = {
  home: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Home }))
  ),
  settings: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Settings }))
  ),
  user: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.User }))
  ),
  'shopping-cart': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.ShoppingCart }))
  ),
  package: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Package }))
  ),
  'trending-up': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.TrendingUp }))
  ),
  'trending-down': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.TrendingDown }))
  ),
  'dollar-sign': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.DollarSign }))
  ),
  menu: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Menu }))
  ),
  x: dynamic(() => import('lucide-react').then(mod => ({ default: mod.X }))),
  search: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Search }))
  ),
  'chevron-down': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.ChevronDown }))
  ),
  'chevron-up': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.ChevronUp }))
  ),
  'chevron-left': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.ChevronLeft }))
  ),
  'chevron-right': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.ChevronRight }))
  ),
  'arrow-right': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.ArrowRight }))
  ),
  'arrow-left': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.ArrowLeft }))
  ),
  check: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Check }))
  ),
  'alert-circle': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.AlertCircle }))
  ),
  info: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Info }))
  ),
  'alert-triangle': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.AlertTriangle }))
  ),
  loader: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Loader2 }))
  ),
  plus: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Plus }))
  ),
  minus: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Minus }))
  ),
  edit: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Edit }))
  ),
  trash: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Trash2 }))
  ),
  'more-vertical': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.MoreVertical }))
  ),
  'more-horizontal': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.MoreHorizontal }))
  ),
  'layout-dashboard': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.LayoutDashboard }))
  ),
  users: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Users }))
  ),
  'shopping-bag': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.ShoppingBag }))
  ),
  'bar-chart': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.BarChart3 }))
  ),
  star: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Star }))
  ),
  maximize: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Maximize }))
  ),
  minimize: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Minimize }))
  ),
  sun: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Sun }))
  ),
  moon: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Moon }))
  ),
  bell: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Bell }))
  ),
  'user-circle': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.UserCircle }))
  ),
  'log-out': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.LogOut }))
  ),
  'life-buoy': dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.LifeBuoy }))
  ),
  globe: dynamic(() =>
    import('lucide-react').then(mod => ({ default: mod.Globe }))
  ),
} as const;

export type IconName = keyof typeof iconRegistry;

export type IconComponent = ComponentType<LucideProps>;
