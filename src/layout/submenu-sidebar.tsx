import React, { useState } from 'react';
import { cn } from '../utils/helpers';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { NavLink, useLocation } from 'react-router-dom';

interface Props {
  isOpen: boolean;
  menuItems: any[];
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function SubmenuSidebar({ isOpen, menuItems, setSideBarOpen }: Props) {
  const { pathname } = useLocation();
  const [activeSubMenu, setActiveSubMenu] = useState<string>('');
  const [activeSubMenuItemsId, setActiveSubMenuItemsId] = useState<string>('');
  const activeMenuHandler = (menu: string) => {
    if (activeSubMenu === menu) {
      setActiveSubMenuItemsId((prev) => (prev !== '' ? '' : menu));
      return;
    }
    setActiveSubMenuItemsId(menu);
    setActiveSubMenu(menu);
  };
  return (
    <section
      className={cn(
        'relative w-0 overflow-hidden border-l-base-300/40 duration-500',
        isOpen ? 'w-[200px] border-l' : '',
      )}
    >
      <div
        className={cn(
          'py-2 duration-500',
          !isOpen && 'pointer-events-none opacity-0',
        )}
      >
        {/* <h4 className="uppercase px-6 mb-6">Users Management</h4> */}
        <div className="flex flex-col gap-4 px-6">
          {menuItems.map((item) => {
            return (
              <div key={item.label} className="block">
                <div
                  className={cn(
                    'group flex cursor-pointer items-center justify-between text-sm text-base-600 lg:text-base',
                    activeSubMenu === item.label && 'text-primary-600',
                  )}
                  onClick={() => activeMenuHandler(item.label)}
                >
                  <span className="text-inherit">{item.label}</span>
                  <ChevronDownIcon
                    className={cn(
                      'h-[20px] w-[20px] -rotate-90 text-inherit transition-all duration-500',
                      activeSubMenuItemsId === item.label && 'rotate-0',
                    )}
                  />
                </div>
                <div
                  className={cn(
                    'max-h-0 overflow-hidden transition-all duration-500',
                    activeSubMenuItemsId === item.label
                      ? 'mt-2 max-h-[200px]'
                      : 'duration-300',
                  )}
                >
                  <div className="flex h-full w-full flex-col gap-2.5">
                    {item.childItems &&
                      item.childItems.map((child: any) => {
                        return (
                          <div
                            key={child.label}
                            className="block px-2 text-base-600"
                          >
                            <NavLink
                              to={child.route}
                              onClick={() => setSideBarOpen(false)}
                              className={cn(
                                'text-sm lg:text-base',
                                child.route === pathname && 'text-primary-600',
                              )}
                            >
                              {' '}
                              - {child.label}
                            </NavLink>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SubmenuSidebar;
