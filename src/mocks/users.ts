import type { At } from '../interfaces';

interface User extends At {
  id: number;
  name: string;
  email: string;
  email_verified_at: null;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  permissions: [];
  roles: [];
}

export const user = {
  created_at: '2022-10-03T18:51:56.000000Z',
  deleted_at: null,
  email: 'yo@facundo.cachan.dev',
  email_verified_at: '2022-10-03T18:51:56.000000Z',
  id: 4,
  name: 'Facundo Cachan',
  permissions: [],
  roles: [],
  updated_at: '2022-11-03T16:18:31.000000Z',
};
