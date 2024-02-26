import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Header from './header';
function MainLayout() {
  return (
    <div className="h-full bg-base-100">
      <Header />
      <div className="relative flex h-full">
        <Sidebar />
        <div className="flex-1 pr-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
