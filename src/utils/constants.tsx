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
