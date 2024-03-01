import { RouterProvider } from 'react-router';
import routes from './routes';
import { UserContextProvider } from './contexts/users';
function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={routes} />
    </UserContextProvider>
  );
}

export default App;
