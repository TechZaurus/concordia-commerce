import { create } from 'zustand';
import type { StatsDocument } from '@/shared/types/db.types';

interface DashboardState {
  stats: StatsDocument | null;
  isLoading: boolean;
  setStats: (stats: StatsDocument | null) => void;
  setIsLoading: (loading: boolean) => void;
}

export const useDashboardStore = create<DashboardState>(set => ({
  stats: null,
  isLoading: true,
  setStats: stats => set({ stats }),
  setIsLoading: isLoading => set({ isLoading }),
}));
