import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import MainLayout from '../layout';
import Users from '../pages/users';
import Roles from '../pages/roles';
import CreateUser from '../pages/users/create';

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
        path: '/roles',
        element: <Roles />,
      },
    ],
  },
]);

export default routes;
