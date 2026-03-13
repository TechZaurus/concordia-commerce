import type { RxJsonSchema } from 'rxdb';
import type { UserDocument } from '@/shared/types/db.types';

export const userSchema: RxJsonSchema<UserDocument> = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 100,
    },
    name: {
      type: 'string',
    },
    surname: {
      type: 'string',
    },
    profileImageUrl: {
      type: 'string',
    },
    updatedAt: {
      type: 'number',
    },
  },
  required: ['id', 'name', 'surname', 'profileImageUrl', 'updatedAt'],
};
