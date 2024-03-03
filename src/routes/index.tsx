import { createBrowserRouter } from 'react-router-dom';
import EditUser from '@/pages/edit-user';
import MainLayout from '@/components/layout';
import Home from '@/pages/home';
import Users from '@/pages/users';
import CreateUser from '@/pages/create-user';
import Roles from '@/pages/roles';
import CreateRole from '@/pages/create-role';
import Login from '@/pages/login';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/users/create',
        element: <CreateUser />,
      },
      {
        path: '/users/edit/:id',
        element: <EditUser />,
      },
      {
        path: '/roles',
        element: <Roles />,
      },
      {
        path: '/roles/create',
        element: <CreateRole />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default routes;
