import { up } from 'up-fetch';

const api = up(fetch, () => ({
  baseUrl: '/api',
}));

export interface StatsResponse {
  totalSales: number;
  activeUsers: number;
  conversionRate: number;
}

export const getStats = async (): Promise<StatsResponse> => {
  return (await api('/stats')) as StatsResponse;
};
