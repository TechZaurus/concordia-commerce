'use client';

import { useEffect, useState } from 'react';
import { useRxDB } from '@/shared/lib/RxDBProvider';
import { Card, CardBody, CardHeader } from '@/shared/ui';
import type { StatsDocument } from '@/shared/lib/db';

export const DashboardStats = () => {
  const db = useRxDB();
  const [stats, setStats] = useState<StatsDocument | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initStats = async () => {
      const existingStats = await db.stats.findOne('dashboard').exec();

      if (!existingStats) {
        const response = await fetch('/api/stats');
        const data = await response.json();

        await db.stats.upsert({
          id: 'dashboard',
          totalSales: data.totalSales,
          activeUsers: data.activeUsers,
          conversionRate: data.conversionRate,
          updatedAt: Date.now(),
        });
      }

      setIsLoading(false);
    };

    initStats();

    const subscription = db.stats.findOne('dashboard').$.subscribe(doc => {
      setStats(doc?.toJSON() || null);
    });

    return () => subscription.unsubscribe();
  }, [db]);

  if (isLoading) return <div>Loading stats...</div>;
  if (!stats) return <div>No stats available</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <Card>
        <CardHeader className="font-bold">Total Sales</CardHeader>
        <CardBody>
          <p className="text-2xl">${stats.totalSales.toLocaleString()}</p>
        </CardBody>
      </Card>
      <Card>
        <CardHeader className="font-bold">Active Users</CardHeader>
        <CardBody>
          <p className="text-2xl">{stats.activeUsers.toLocaleString()}</p>
        </CardBody>
      </Card>
      <Card>
        <CardHeader className="font-bold">Conversion Rate</CardHeader>
        <CardBody>
          <p className="text-2xl">{stats.conversionRate}%</p>
        </CardBody>
      </Card>
    </div>
  );
};
