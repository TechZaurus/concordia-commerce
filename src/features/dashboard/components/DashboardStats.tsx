'use client';

import { useQuery } from '@tanstack/react-query';
import { Card, CardBody, CardHeader } from '@/shared/ui';

interface Stats {
  totalSales: number;
  activeUsers: number;
  conversionRate: number;
}

const fetchStats = async (): Promise<Stats> => {
  // In a real app, this would be an API call
  // For now we can mock it or use MSW
  const response = await fetch('/api/stats');
  if (!response.ok) {
     console.warn('MSW fetch failed, using fallback data');
     // Fallback for demo if MSW isn't intercepted or fails
     return {
         totalSales: 12345,
         activeUsers: 890,
         conversionRate: 2.5
     }
  }
  const data = await response.json();
  console.log('Dashboard stats received:', data);
  return data;
};

export const DashboardStats = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: fetchStats,
  });

  if (isLoading) return <div>Loading stats...</div>;
  if (error) return <div>Error loading stats</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <Card>
        <CardHeader className="font-bold">Total Sales</CardHeader>
        <CardBody>
          <p className="text-2xl">${data?.totalSales.toLocaleString()}</p>
        </CardBody>
      </Card>
      <Card>
        <CardHeader className="font-bold">Active Users</CardHeader>
        <CardBody>
          <p className="text-2xl">{data?.activeUsers.toLocaleString()}</p>
        </CardBody>
      </Card>
      <Card>
        <CardHeader className="font-bold">Conversion Rate</CardHeader>
        <CardBody>
          <p className="text-2xl">{data?.conversionRate}%</p>
        </CardBody>
      </Card>
    </div>
  );
};
