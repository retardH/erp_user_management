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
    id: 1,
    actions: [
      {
        id: 1,
        name: 'View',
      },
      {
        id: 2,
        name: 'Create',
      },
      {
        id: 3,
        name: 'Update',
      },
      {
        id: 4,
        name: 'Delete',
      },
    ],
  },
  {
    name: 'Roles',
    id: 2,
    actions: [
      {
        id: 1,
        name: 'View',
      },
      {
        id: 2,
        name: 'Create',
      },
      {
        id: 3,
        name: 'Update',
      },
      {
        id: 4,
        name: 'Delete',
      },
    ],
  },
  {
    name: 'Customer',
    id: 3,
    actions: [
      {
        id: 1,
        name: 'View',
      },
      {
        id: 2,
        name: 'Create',
      },
      {
        id: 3,
        name: 'Update',
      },
      {
        id: 4,
        name: 'Delete',
      },
    ],
  },
  {
    name: 'Product',
    id: 4,
    actions: [
      {
        id: 1,
        name: 'View',
      },
      {
        id: 2,
        name: 'Create',
      },
      {
        id: 3,
        name: 'Update',
      },
      {
        id: 4,
        name: 'Delete',
      },
    ],
  },
];
