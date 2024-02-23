import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import MainLayout from '../layout';
import Users from '../pages/users';
import Roles from '../pages/roles';

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
        path: '/roles',
        element: <Roles />,
      },
    ],
  },
]);

export default routes;
