import { useState } from 'react';
import { sidebarMenuItems } from '../utils/constants';
import SubmenuSidebar from './submenu-sidebar';

function Sidebar() {
  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);
  return (
    <aside className="sticky top-0 flex min-h-[100dvh] max-w-max gap-0">
      <section className="sticky top-0 z-20 min-h-[100dvh] border-r border-r-base-300/40 bg-white py-6">
        <h2 className="mb-6 px-6 text-xl font-bold italic tracking-wide text-primary-800">
          PICO ERP
        </h2>
        <div className="flex flex-col gap-4">
          {sidebarMenuItems.map((item) => {
            return (
              <div
                key={item.label}
                className="flex items-start gap-2 px-6"
                onClick={() => setSubMenuOpen(!subMenuOpen)}
              >
                {item.icon} <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </section>
      <SubmenuSidebar isOpen={subMenuOpen} setIsOpen={setSubMenuOpen} />
    </aside>
  );
}

export default Sidebar;
