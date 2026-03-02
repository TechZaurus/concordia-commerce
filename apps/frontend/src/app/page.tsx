'use client';

import { useTranslation } from 'react-i18next';
import { DashboardStats } from '@/features/dashboard';
import { Button, Logo } from '@/shared/ui';
import { useAppStore } from '@/shared/store/useAppStore';

export default function Home() {
  const { t, i18n } = useTranslation('common');
  const { theme, toggleTheme } = useAppStore();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <main className="min-h-screen p-8">
      <section>
        <h2 className="text-xl font-heading mb-4">{t('dashboard.overview')}</h2>
        <DashboardStats />
      </section>
    </main>
  );
}
