'use client';

import { useTranslation } from 'react-i18next';
import { Input, Icon } from '@/shared/ui';
import { useAppStore } from '@/shared/store/useAppStore';

export function SearchBar() {
  const { t } = useTranslation('common');
  const theme = useAppStore(state => state.theme);

  const isDark = theme === 'dark';

  return (
    <Input
      type="text"
      placeholder={t('topbar.searchPlaceholder')}
      startContent={<Icon name="search" size={18} />}
      variant="flat"
      classNames={{
        base: 'w-64',
        inputWrapper: isDark
          ? 'bg-secondary-900 data-[hover=true]:bg-secondary-800 group-data-[focus=true]:bg-secondary-900'
          : 'bg-secondary-200 data-[hover=true]:bg-secondary-300 group-data-[focus=true]:bg-secondary-200',
        input: 'text-sm focus:outline-none',
        innerWrapper: 'focus:outline-none',
      }}
    />
  );
}
