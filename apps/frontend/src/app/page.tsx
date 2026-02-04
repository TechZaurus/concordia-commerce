'use client';

import { useTranslation } from 'react-i18next';
import { DashboardStats } from '@/features/dashboard';
import { Button } from '@/shared/ui';
import { useAppStore } from '@/shared/store/useAppStore';

export default function Home() {
  const { t, i18n } = useTranslation('common');
  const { theme, toggleTheme } = useAppStore();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <main className="min-h-screen p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{t('welcome')}</h1>
        <div className="flex gap-2">
          <Button
            onPress={() => changeLanguage('en')}
            size="sm"
            variant={i18n.language === 'en' ? 'solid' : 'bordered'}
          >
            EN
          </Button>
          <Button
            onPress={() => changeLanguage('sr')}
            size="sm"
            variant={i18n.language === 'sr' ? 'solid' : 'bordered'}
          >
            SR
          </Button>
          <Button onPress={toggleTheme} size="sm" color="primary">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </div>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
        <DashboardStats />
      </section>
    </main>
  );
}
