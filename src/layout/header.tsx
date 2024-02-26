import { SunIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import HoverCard from '../components/ui/hover-card';
function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-6 lg:px-8">
      <div>
        <h2 className="text-xl font-bold italic tracking-wide text-primary-800">
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
