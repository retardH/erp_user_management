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
    isActive: true,
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
    isActive: true,
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
    isActive: true,
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
    permissions: [
      'View',
      'Create',
      'Update',
      'Delete',
      'Import',
      'Export',
      'Print',
    ],
  },
  {
    name: 'Roles',
    permissions: [
      'View',
      'Create',
      'Update',
      'Delete',
      'Import',
      'Export',
      'Print',
    ],
  },
  {
    name: 'Supplier',
    permissions: [
      'View',
      'Create',
      'Update',
      'Delete',
      'Import',
      'Export',
      'Print',
    ],
  },
  {
    name: 'Customer',
    permissions: [
      'View',
      'Create',
      'Update',
      'Delete',
      'Import',
      'Export',
      'Print',
    ],
  },
  {
    name: 'Product',
    permissions: [
      'View',
      'Create',
      'Update',
      'Delete',
      'Import',
      'Export',
      'Print',
    ],
  },
  {
    name: 'Variations',
    permissions: [
      'View',
      'Create',
      'Update',
      'Delete',
      'Import',
      'Export',
      'Print',
    ],
  },
  {
    name: 'Selling Price Groups',
    permissions: [
      'View',
      'Create',
      'Update',
      'Delete',
      'Import',
      'Export',
      'Print',
    ],
  },
  {
    name: 'Unit',
    permissions: [
      'View',
      'Create',
      'Update',
      'Delete',
      'Import',
      'Export',
      'Print',
    ],
  },
  {
    name: 'UoM',
    permissions: [
      'View',
      'Create',
      'Update',
      'Delete',
      'Import',
      'Export',
      'Print',
    ],
  },
  {
    name: 'Category',
    permissions: [
      'View',
      'Create',
      'Update',
      'Delete',
      'Import',
      'Export',
      'Print',
    ],
  },
  {
    name: 'Brand',
    permissions: [
      'View',
      'Create',
      'Update',
      'Delete',
      'Import',
      'Export',
      'Print',
    ],
  },
  {
    name: 'Warranty',
    permissions: [
      'View',
      'Create',
      'Update',
      'Delete',
      'Import',
      'Export',
      'Print',
    ],
  },
  {
    name: 'Manufacture',
    permissions: [
      'View',
      'Create',
      'Update',
      'Delete',
      'Import',
      'Export',
      'Print',
    ],
  },
  {
    name: 'Generic',
    permissions: [
      'View',
      'Create',
      'Update',
      'Delete',
      'Import',
      'Export',
      'Print',
    ],
  },
];
