import { SunIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import HoverCard from '../components/ui/hover-card';
import Breadcrumb from '../components/breadcrumb';
function Header() {
  return (
    <header className="mb-6 flex items-center justify-between">
      <div>
        <h2 className="mb-1 text-lg font-semibold">Users List</h2>
        <Breadcrumb />
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
