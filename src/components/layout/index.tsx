import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Header from './header';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <div className="relative min-h-screen bg-base-100">
      <Header setSidebarOpen={setSidebarOpen} />
      <div className="h-full lg:flex">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <div className="flex-1 pr-0 lg:pr-4">
          <Outlet />
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default MainLayout;
