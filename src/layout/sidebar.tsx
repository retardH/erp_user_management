import React, { useState } from 'react';
import { sidebarMenuItems } from '../utils/constants';
import SubmenuSidebar from './submenu-sidebar';
import { cn } from '../utils/helpers';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function Sidebar({ isOpen, setIsOpen }: Props) {
  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>(
    sidebarMenuItems[0].label,
  );
  const [subMenuItems, setSubMenuItems] = useState<any[]>(
    sidebarMenuItems[0].subMenu,
  );

  return (
    <>
      <aside
        className={cn(
          'fixed top-0 z-50 flex h-screen max-w-max gap-0 bg-white py-6 transition-all duration-300 lg:static lg:left-0 lg:h-auto lg:bg-transparent lg:p-0',
          isOpen ? 'left-0' : '-left-[90%]',
        )}
      >
        <section className="z-20 border-r-base-300/40 px-2">
          <div className="flex flex-col gap-2">
            {sidebarMenuItems.map((item) => {
              return (
                <div
                  key={item.label}
                  className={cn(
                    'flex cursor-pointer items-center gap-2 rounded-md px-6 py-2',
                    activeMenu === item.label &&
                      'bg-primary-100 text-primary-500',
                  )}
                  onClick={() => {
                    setActiveMenu(item.label);
                    setSubMenuOpen(true);
                    setSubMenuItems(item.subMenu);
                  }}
                >
                  <div className="text-inherit">{item.icon}</div>{' '}
                  <div
                    className={cn(
                      'align-bottom text-sm lg:text-base',
                      activeMenu === item.label && 'text-primary-500',
                    )}
                  >
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <SubmenuSidebar
          isOpen={subMenuOpen}
          menuItems={subMenuItems}
          setSideBarOpen={setIsOpen}
        />
      </aside>
      {/* Overlay Effect */}
      <div
        className={cn(
          'pointer-events-none fixed inset-0 z-40 h-full w-full bg-base-600/50 opacity-0 transition-all',
          isOpen && 'pointer-events-auto opacity-100',
        )}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
}

export default Sidebar;
