'use client';

import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Icon, IconName } from '@/shared/ui';
import { Logo } from '@/shared/ui';

interface MenuItem {
  key: string;
  label: string;
  icon: IconName;
  href: string;
}

interface SidebarProps {
  isDesktop?: boolean;
}

export function Sidebar({ isDesktop = true }: SidebarProps) {
  const { t } = useTranslation('common');
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    {
      key: 'dashboard',
      label: t('sidebar.dashboard'),
      icon: 'layout-dashboard',
      href: '/',
    },
    {
      key: 'customers',
      label: t('sidebar.customers'),
      icon: 'users',
      href: '/customers',
    },
    {
      key: 'orders',
      label: t('sidebar.orders'),
      icon: 'shopping-bag',
      href: '/orders',
    },
    {
      key: 'products',
      label: t('sidebar.products'),
      icon: 'package',
      href: '/products',
    },
    {
      key: 'analytics',
      label: t('sidebar.analytics'),
      icon: 'bar-chart',
      href: '/analytics',
    },
    {
      key: 'reviews',
      label: t('sidebar.reviews'),
      icon: 'star',
      href: '/reviews',
    },
  ];

  return (
    <aside className="flex flex-col h-full bg-content1 border-r border-divider">
      {isDesktop && (
        <div className="p-4">
          <Logo size="md" showText={true} />
        </div>
      )}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map(item => {
            const isActive = pathname === item.href;
            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-neutral-300 dark:bg-neutral-700 text-accent-foreground'
                      : 'hover:bg-default-100'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
