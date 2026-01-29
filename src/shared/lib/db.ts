import { createRxDatabase, addRxPlugin } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { wrappedKeyCompressionStorage } from 'rxdb/plugins/key-compression';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import type { RxDatabase, RxCollection, RxStorage } from 'rxdb';

if (process.env.NODE_ENV === 'development') {
  addRxPlugin(RxDBDevModePlugin);
}

const getStorage = (): RxStorage<any, any> => {
  const baseStorage = getRxStorageDexie();
  return wrappedKeyCompressionStorage({ storage: baseStorage });
};

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

const statsSchema = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 100,
    },
    totalSales: {
      type: 'number',
    },
    activeUsers: {
      type: 'number',
    },
    conversionRate: {
      type: 'number',
    },
    updatedAt: {
      type: 'number',
    },
  },
  required: ['id', 'totalSales', 'activeUsers', 'conversionRate', 'updatedAt'],
};

let dbPromise: Promise<AppDatabase> | null = null;

export const getDatabase = async (): Promise<AppDatabase> => {
  if (dbPromise) {
    return dbPromise;
  }

  dbPromise = createRxDatabase<DatabaseCollections>({
    name: 'concordia_commerce',
    storage: getStorage(),
  }).then(async db => {
    await db.addCollections({
      stats: {
        schema: statsSchema,
      },
    });

    return db;
  });

  return dbPromise;
};
