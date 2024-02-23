import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import { cn } from '../../utils/helpers';

function MenuDropdown() {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-base-200 px-4 py-2 text-sm text-base-600 hover:bg-base-400/60 focus:outline-none">
            Actions
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 text-base-600"
              aria-hidden="true"
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-50 mt-2 w-[120px] origin-top-right divide-y divide-base-100 rounded-md bg-base-50 shadow-lg focus:outline-none">
              <div className="px-2 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={cn(
                        'group flex w-full items-center rounded-md p-2 text-sm',
                        active
                          ? 'bg-primary-200 text-primary-600'
                          : 'text-base-600',
                      )}
                    >
                      View
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={cn(
                        'group flex w-full items-center rounded-md p-2 text-sm',
                        active
                          ? 'bg-primary-200 text-primary-600'
                          : 'text-base-600',
                      )}
                    >
                      Edit
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={cn(
                        'group flex w-full items-center rounded-md p-2 text-sm',
                        active
                          ? 'bg-primary-200 text-primary-600'
                          : 'text-base-600',
                      )}
                    >
                      Delete
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </div>
      </Menu>
    </div>
  );
}

export default MenuDropdown;
