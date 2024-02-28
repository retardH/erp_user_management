import {
  SunIcon,
  UserCircleIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import HoverCard from '../components/ui/hover-card';
import React from 'react';

interface Props {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function Header({ setSidebarOpen }: Props) {
  return (
    <header className="flex items-center justify-between bg-base-100 px-4 py-4 md:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <Bars3Icon
          className="size-[28px] cursor-pointer text-base-600 lg:hidden"
          onClick={() => setSidebarOpen((open) => !open)}
        />
        <h2 className="text-xl font-bold tracking-wide text-primary-800 lg:text-2xl">
          PICOERP
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <HoverCard
          icon={<SunIcon className="h-[24px] w-[24px] text-inherit" />}
        >
          <div className="flex flex-col gap-2">
            <div className="text-sm text-base-600">Light Mode</div>
            <div className="text-sm text-base-600">Dark Mode</div>
          </div>
        </HoverCard>
        <HoverCard
          icon={<UserCircleIcon className="h-[24px] w-[24px] text-inherit" />}
        >
          <div className="flex flex-col gap-2">
            <div className="text-sm text-base-600">My Profile</div>
            <div className="text-sm text-base-600">Logout</div>
          </div>
        </HoverCard>
      </div>
    </header>
  );
}

export default Header;
