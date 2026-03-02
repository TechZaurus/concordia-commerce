import type { RxCollection, RxDatabase } from 'rxdb';

export interface StatsDocument {
  id: string;
  totalSales: number;
  activeUsers: number;
  conversionRate: number;
  updatedAt: number;
}

export interface UserDocument {
  id: string;
  name: string;
  surname: string;
  profileImageUrl: string;
  updatedAt: number;
}

export type StatsCollection = RxCollection<StatsDocument>;
export type UserCollection = RxCollection<UserDocument>;

export interface DatabaseCollections {
  stats: StatsCollection;
  users: UserCollection;
}

export type AppDatabase = RxDatabase<DatabaseCollections>;
