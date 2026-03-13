'use client';

import { useTranslation } from 'react-i18next';
import { Button, Icon } from '@/shared/ui';
import { useAppStore } from '@/shared/store/useAppStore';

export function ThemeToggle() {
  const { t } = useTranslation('common');
  const { theme, toggleTheme } = useAppStore();

  return (
    <Button
      isIconOnly
      variant="light"
      onPress={toggleTheme}
      aria-label={t('topbar.toggleTheme')}
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={20} />
    </Button>
  );
}
