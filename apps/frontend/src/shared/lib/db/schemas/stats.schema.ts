import type { RxJsonSchema } from 'rxdb';
import type { StatsDocument } from '@/shared/types/db.types';

export const statsSchema: RxJsonSchema<StatsDocument> = {
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
