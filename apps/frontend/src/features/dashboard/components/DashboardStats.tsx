'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { RxDocument } from 'rxdb';
import { useRxDB } from '@/shared/lib/RxDBProvider';
import { Card, CardBody, CardHeader } from '@/shared/ui';
import { getStats } from '@/shared/api/stats';
import { useDashboardStore } from '../store/useDashboardStore';
import type { StatsDocument } from '@/shared/types/db.types';

export const DashboardStats = () => {
  const { t } = useTranslation('common');
  const db = useRxDB();
  const { stats, isLoading, setStats, setIsLoading } = useDashboardStore();

  useEffect(() => {
    const initStats = async () => {
      try {
        const existingStats = await db.stats.findOne('dashboard').exec();

        if (!existingStats) {
          const data = await getStats();
          await db.stats.upsert({
            id: 'dashboard',
            totalSales: data.totalSales,
            activeUsers: data.activeUsers,
            conversionRate: data.conversionRate,
            updatedAt: Date.now(),
          });
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Failed to initialize stats:', error);
        setIsLoading(false);
      }
    };

    initStats();

    const subscription = db.stats
      .findOne('dashboard')
      .$.subscribe((doc: RxDocument<StatsDocument> | null) => {
        setStats(doc?.toJSON() || null);
      });

    return () => subscription.unsubscribe();
  }, [db, setStats, setIsLoading]);

  if (isLoading) return <div>{t('dashboard.loading')}</div>;
  if (!stats) return <div>{t('dashboard.noData')}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <Card>
        <CardHeader className="font-bold">
          {t('dashboard.totalSales')}
        </CardHeader>
        <CardBody>
          <p className="text-2xl">${stats.totalSales.toLocaleString()}</p>
        </CardBody>
      </Card>
      <Card>
        <CardHeader className="font-bold">
          {t('dashboard.activeUsers')}
        </CardHeader>
        <CardBody>
          <p className="text-2xl">{stats.activeUsers.toLocaleString()}</p>
        </CardBody>
      </Card>
      <Card>
        <CardHeader className="font-bold">
          {t('dashboard.conversionRate')}
        </CardHeader>
        <CardBody>
          <p className="text-2xl">{stats.conversionRate}%</p>
        </CardBody>
      </Card>
    </div>
  );
};
