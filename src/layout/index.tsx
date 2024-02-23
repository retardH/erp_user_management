import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Header from './header';
function MainLayout() {
  return (
    <div className="relative flex min-h-[100dvh] bg-base-100">
      <Sidebar />
      <div className="max-h-screen flex-1 overflow-scroll p-6">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
