import React from 'react';
import { cn } from '../utils/helpers';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function SubmenuSidebar({ isOpen, setIsOpen }: Props) {
  return (
    <section
      className={cn(
        'relative min-h-[100dvh] w-0 overflow-hidden bg-white duration-500',
        isOpen && 'w-[240px]',
      )}
    >
      <div
        className={cn(
          'py-6 duration-500',
          !isOpen && 'pointer-events-none opacity-0',
        )}
      >
        {/* <h4 className="uppercase px-6 mb-6">Users Management</h4> */}
        <div className="flex flex-col gap-4 px-6">
          <div>Users</div>
          <div>Roles</div>
        </div>
      </div>
    </section>
  );
}

export default SubmenuSidebar;
