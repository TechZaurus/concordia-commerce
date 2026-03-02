'use client';

import { useTranslation } from 'react-i18next';
import { Navbar, NavbarContent, NavbarItem } from '@/shared/ui';
import { Icon } from '@/shared/ui';
import { Logo } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { SearchBar } from './components/SearchBar';
import { FullscreenToggle } from './components/FullscreenToggle';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageSelector } from './components/LanguageSelector';
import { NotificationBadge } from './components/NotificationBadge';
import { UserMenu } from './components/UserMenu';

interface TopbarProps {
  onMenuToggle: () => void;
}

export function Topbar({ onMenuToggle }: TopbarProps) {
  const { t } = useTranslation('common');

  return (
    <Navbar
      maxWidth="full"
      className="border-b border-divider"
      classNames={{
        wrapper: 'px-4',
      }}
    >
      <NavbarContent justify="start" className="gap-2">
        <NavbarItem className="lg:hidden">
          <Logo size="sm" showText={false} />
        </NavbarItem>
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            onPress={onMenuToggle}
            aria-label={t('topbar.toggleMenu')}
          >
            <Icon name="menu" size={24} />
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <span className="text-sm font-medium">{t('topbar.welcome')}</span>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-1">
        <NavbarItem className="hidden md:flex">
          <SearchBar />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <FullscreenToggle />
        </NavbarItem>
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
        <NavbarItem>
          <LanguageSelector />
        </NavbarItem>
        <NavbarItem>
          <NotificationBadge />
        </NavbarItem>
        <NavbarItem>
          <UserMenu />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
