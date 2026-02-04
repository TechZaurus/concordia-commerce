'use client';

import * as React from 'react';
import { getDatabase } from './db';
import type { AppDatabase } from './db';

const RxDBContext = React.createContext<AppDatabase | null>(null);

export const useRxDB = () => {
  const db = React.useContext(RxDBContext);
  if (!db) {
    throw new Error('useRxDB must be used within RxDBProvider');
  }
  return db;
};

export interface RxDBProviderProps {
  children: React.ReactNode;
}

export function RxDBProvider({ children }: RxDBProviderProps) {
  const [db, setDb] = React.useState<AppDatabase | null>(null);

  React.useEffect(() => {
    getDatabase().then(setDb);
  }, []);

  if (!db) {
    return <div>Initializing database...</div>;
  }

  return <RxDBContext value={db}>{children}</RxDBContext>;
}
