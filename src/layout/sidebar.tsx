import { useState } from 'react';
import { sidebarMenuItems } from '../utils/constants';
import SubmenuSidebar from './submenu-sidebar';
import { cn } from '../utils/helpers';

function Sidebar() {
  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>('');
  const [subMenuItems, setSubMenuItems] = useState<any[]>([]);
  return (
    <aside className="sticky top-0 flex max-w-max gap-0">
      <section className="sticky top-0 z-20 border-r-base-300/40 px-2 py-6">
        <div className="flex flex-col gap-2">
          {sidebarMenuItems.map((item) => {
            return (
              <div
                key={item.label}
                className={cn(
                  'flex cursor-pointer items-start gap-2 rounded-md px-6 py-2',
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
                <span
                  className={cn(
                    'text-base',
                    activeMenu === item.label && 'text-primary-500',
                  )}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>
      <SubmenuSidebar isOpen={subMenuOpen} menuItems={subMenuItems} />
    </aside>
  );
}

export default Sidebar;
