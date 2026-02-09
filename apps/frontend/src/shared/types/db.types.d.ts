import type { RxCollection, RxDatabase } from 'rxdb';

export interface StatsDocument {
  id: string;
  totalSales: number;
  activeUsers: number;
  conversionRate: number;
  updatedAt: number;
}

export type StatsCollection = RxCollection<StatsDocument>;

export interface DatabaseCollections {
  stats: StatsCollection;
}

export type AppDatabase = RxDatabase<DatabaseCollections>;
