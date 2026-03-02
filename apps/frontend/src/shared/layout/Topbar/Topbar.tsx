'use client';

import { useTranslation } from 'react-i18next';
import { Navbar, NavbarContent, NavbarItem } from '@/shared/ui';
import { Icon } from '@/shared/ui';
import { Logo } from '@/shared/ui';
import { Button } from '@/shared/ui';

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
    </Navbar>
  );
}
