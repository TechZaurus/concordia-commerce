import { createRxDatabase, addRxPlugin } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { wrappedKeyCompressionStorage } from 'rxdb/plugins/key-compression';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import type { RxStorage } from 'rxdb';
import type { AppDatabase, DatabaseCollections } from '@/shared/types/db.types';
import { statsSchema } from './db/schemas/stats.schema';

if (process.env.NODE_ENV === 'development') {
  addRxPlugin(RxDBDevModePlugin);
}

const getStorage = (): RxStorage<any, any> => {
  const baseStorage = getRxStorageDexie();
  return wrappedKeyCompressionStorage({ storage: baseStorage });
};

let dbPromise: Promise<AppDatabase> | null = null;

export const getDatabase = async (): Promise<AppDatabase> => {
  if (dbPromise) {
    return dbPromise;
  }

  dbPromise = (async () => {
    const db = await createRxDatabase<DatabaseCollections>({
      name: 'concordia_commerce',
      storage: getStorage(),
    });

    await db.addCollections({
      stats: {
        schema: statsSchema,
      },
    });

    return db;
  })();

  return dbPromise;
};
