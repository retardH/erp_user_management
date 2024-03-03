import type { RoleData, UserData } from './types';

export const usersListData: UserData[] = [
  {
    username: 'HtetZarni',
    firstName: 'first name',
    email: 'test@gmail.com',
    role: 'Admin',
    isActive: true,
  },
  {
    username: 'John Doe',
    firstName: 'first name',
    email: 'test@gmail.com',
    role: 'Agent',
    isActive: true,
  },
  {
    username: 'Helen',
    firstName: 'first name',
    email: 'test@gmail.com',
    role: 'Agent',
    isActive: false,
  },
  {
    username: 'Mr White',
    firstName: 'first name',
    email: 'test@gmail.com',
    role: 'Store Manager',
    isActive: true,
  },
  {
    username: 'Jesse',
    firstName: 'first name',
    email: 'test@gmail.com',
    role: 'Admin',
    isActive: false,
  },
  {
    username: 'Donni Kelven',
    firstName: 'first name',
    email: 'test@gmail.com',
    role: 'Admin',
    isActive: true,
  },
  {
    username: 'Bulba',
    firstName: 'first name',
    email: 'test@gmail.com',
    role: 'Chemist',
    isActive: true,
  },
  {
    username: 'Sasha',
    firstName: 'first name',
    email: 'test@gmail.com',
    role: 'Accountant',
    isActive: false,
  },
  {
    username: 'Don Kelven',
    firstName: 'first name',
    email: 'test@gmail.com',
    role: 'Gangster',
    isActive: true,
  },
  {
    username: 'Foxer',
    firstName: 'first name',
    email: 'test@gmail.com',
    role: 'Boxer',
    isActive: true,
  },
  {
    username: 'Helen',
    firstName: 'first name',
    email: 'test@gmail.com',
    role: 'Accountant',
    isActive: true,
  },
  {
    username: 'Kella',
    firstName: 'first name',
    email: 'test@gmail.com',
    role: 'Accountant',
    isActive: true,
  },
  {
    username: 'Stacy',
    firstName: 'first name',
    email: 'test@gmail.com',
    role: 'Accountant',
    isActive: true,
  },
];

export const rolesListData: RoleData[] = [
  {
    role: 'Admin',
  },
  {
    role: 'Store Keeper',
  },
  {
    role: 'Accountant',
  },
  {
    role: 'Agent',
  },
  {
    role: 'Super Agent',
  },
  {
    role: 'Super Admin',
  },
  {
    role: 'Cashier',
  },
];

export const rolesPermissions = [
  {
    name: 'User',
    permissions: ['View', 'Create', 'Update', 'Delete'],
  },
  {
    name: 'Roles',
    permissions: ['View', 'Create', 'Update', 'Delete'],
  },
  {
    name: 'Customer',
    permissions: ['View', 'Create', 'Update', 'Delete'],
  },
  {
    name: 'Product',
    permissions: ['View', 'Create', 'Update', 'Delete'],
  },
];

export const insertData = [
  {
    username: 'zzrni',
    firstName: 'Htet',
    email: 'test@gmail.com',
    roleId: 8,
    isActive: true,
  },
  {
    username: 'John Doe',
    firstName: 'first name',
    email: 'test@gmail.com',
    roleId: 9,
    isActive: true,
  },
  {
    username: 'Helen',
    firstName: 'first name',
    email: 'test@gmail.com',
    roleId: 11,
    isActive: false,
  },
  {
    username: 'Mr White',
    firstName: 'first name',
    email: 'test@gmail.com',
    roleId: 11,
    isActive: true,
  },
  {
    username: 'Jesse',
    firstName: 'first name',
    email: 'test@gmail.com',
    roleId: 8,
    isActive: false,
  },
  {
    username: 'Donni Kelven',
    firstName: 'first name',
    email: 'test@gmail.com',
    roleId: 14,
    isActive: true,
  },
  {
    username: 'Bulba',
    firstName: 'first name',
    email: 'test@gmail.com',
    roleId: 13,
    isActive: true,
  },
  {
    username: 'Sasha',
    firstName: 'first name',
    email: 'test@gmail.com',
    roleId: 9,
    isActive: false,
  },
  {
    username: 'Don Kelven',
    firstName: 'first name',
    email: 'test@gmail.com',
    roleId: 9,
    isActive: true,
  },
  {
    username: 'Foxer',
    firstName: 'first name',
    email: 'test@gmail.com',
    roleId: 11,
    isActive: true,
  },
  {
    username: 'Helen',
    firstName: 'first name',
    email: 'test@gmail.com',
    roleId: 11,
    isActive: true,
  },
  {
    username: 'Kella',
    firstName: 'first name',
    email: 'test@gmail.com',
    roleId: 8,
    isActive: true,
  },
  {
    username: 'Stacy',
    firstName: 'first name',
    email: 'test@gmail.com',
    roleId: 9,
    isActive: true,
  },
];
