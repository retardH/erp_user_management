import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Header from './header';
import { useState } from 'react';
function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <div className="h-full bg-base-100">
      <Header setSidebarOpen={setSidebarOpen} />
      <div className="relative flex h-full">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <div className="flex-1 pr-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
