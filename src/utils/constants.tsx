import { HomeIcon, UsersIcon } from '@heroicons/react/24/solid';

export const sidebarMenuItems = [
  {
    label: 'Home',
    title: 'Home',
    icon: <HomeIcon className="h-[20px] w-[20px] text-inherit" />,
    subMenu: [
      {
        label: 'Dashboard',
        route: '/',
      },
    ],
  },
  {
    label: 'Users',
    title: 'Users Management',
    icon: <UsersIcon className="h-[20px] w-[20px] text-inherit" />,
    subMenu: [
      {
        label: 'Users',
        route: '/users',
        childItems: [
          {
            label: 'User Lists',
            route: '/users',
          },
          {
            label: 'Create User',
            route: '/users/create',
          },
        ],
      },
      {
        label: 'Roles',
        route: '/roles',
        childItems: [
          {
            label: 'Roles Lists',
            route: '/roles',
          },
          {
            label: 'Create Role',
            route: '/roles/create',
          },
        ],
      },
    ],
  },
];

export const rolesPermissions = [
  {
    name: 'User',
    id: '1',
    actions: [
      {
        id: '11',
        name: 'View',
      },
      {
        id: '12',
        name: 'Create',
      },
      {
        id: '13',
        name: 'Update',
      },
      {
        id: '14',
        name: 'Delete',
      },
    ],
  },
  {
    name: 'Roles',
    id: '2',
    actions: [
      {
        id: '21',
        name: 'View',
      },
      {
        id: '22',
        name: 'Create',
      },
      {
        id: '23',
        name: 'Update',
      },
      {
        id: '24',
        name: 'Delete',
      },
    ],
  },
  {
    name: 'Customer',
    id: '3',
    actions: [
      {
        id: '31',
        name: 'View',
      },
      {
        id: '32',
        name: 'Create',
      },
      {
        id: '33',
        name: 'Update',
      },
      {
        id: '34',
        name: 'Delete',
      },
    ],
  },
  {
    name: 'Product',
    id: '4',
    actions: [
      {
        id: '41',
        name: 'View',
      },
      {
        id: '42',
        name: 'Create',
      },
      {
        id: '43',
        name: 'Update',
      },
      {
        id: '44',
        name: 'Delete',
      },
    ],
  },
];

export const rolePermissionsIds = [
  '11',
  '12',
  '13',
  '14',
  '21',
  '22',
  '23',
  '24',
  '31',
  '32',
  '33',
  '34',
  '41',
  '42',
  '43',
  '44',
];
