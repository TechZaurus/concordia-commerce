'use client';

import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuPopup, Avatar, Icon } from '@/shared/ui';
import { useUserStore } from '@/shared/store/useUserStore';

export function UserMenu() {
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserStore();

  const userName = user ? `${user.name} ${user.surname}` : t('topbar.user');
  const userAvatar = user?.profileImageUrl;

  const handleMenuItemClick = useCallback((action: string) => {
    setIsOpen(false);
  }, []);

  const handleAccountClick = useCallback(() => {
    handleMenuItemClick('account');
  }, [handleMenuItemClick]);

  const handleSupportClick = useCallback(() => {
    handleMenuItemClick('support');
  }, [handleMenuItemClick]);

  const handleLogoutClick = useCallback(() => {
    handleMenuItemClick('logout');
  }, [handleMenuItemClick]);

  return (
    <MenuPopup
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      placement="bottom-end"
      trigger={
        <button
          className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-default-100 transition-colors"
          aria-label={t('topbar.userMenu')}
        >
          <Avatar
            src={userAvatar}
            name={userName}
            size="sm"
            showFallback
            className="flex-shrink-0"
          />
          <span className="text-sm font-medium hidden sm:block">
            {userName}
          </span>
          <Icon name="chevron-down" size={16} className="hidden sm:block" />
        </button>
      }
    >
      <div className="min-w-[200px]">
        <button
          onClick={handleAccountClick}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-default-100 transition-colors"
        >
          <Icon name="user-circle" size={18} />
          <span>{t('topbar.myAccount')}</span>
        </button>
        <button
          onClick={handleSupportClick}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-default-100 transition-colors"
        >
          <Icon name="life-buoy" size={18} />
          <span>{t('topbar.support')}</span>
        </button>
        <div className="border-t border-divider my-1" />
        <button
          onClick={handleLogoutClick}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-danger hover:bg-danger-50 transition-colors"
        >
          <Icon name="log-out" size={18} />
          <span>{t('topbar.logout')}</span>
        </button>
      </div>
    </MenuPopup>
  );
}
