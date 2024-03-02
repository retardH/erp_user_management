import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  CheckIcon,
} from '@heroicons/react/24/solid';
import Input from '../ui/input';
import { Table } from '@tanstack/react-table';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { cn } from '@/utils/helpers';

interface Props<TData> {
  table: Table<TData>;
  filterKey: string;
  name: string;
}
function TableFilter<TData>({ table, filterKey, name }: Props<TData>) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
      <div className="md:w-[300px]">
        <Input
          value={(table.getColumn(filterKey)?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn(filterKey)?.setFilterValue(event.target.value)
          }
          placeholder={`Search ${name}`}
          leftIcon={<MagnifyingGlassIcon className="size-[18px]" />}
        />
      </div>
      <div className="flex items-center gap-4">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-base-400/50 bg-base-100/50 px-4 py-2 text-sm font-medium text-base-700 hover:bg-base-200/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
              Columns
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5 text-base-800"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 min-w-[140px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1 ">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <Menu.Item key={column.id}>
                        {({ active }) => (
                          <button
                            className={cn(
                              'group flex w-full items-center rounded-md px-2 py-2 text-sm capitalize text-base-700',
                              active && 'bg-primary-50',
                            )}
                            onClick={() =>
                              column.toggleVisibility(!column.getIsVisible())
                            }
                          >
                            <div
                              className={cn(
                                'mr-1 mt-0.5',
                                !column.getIsVisible() &&
                                  'pointer-events-none opacity-0',
                              )}
                            >
                              <CheckIcon className="size-[16px] text-base-800" />
                            </div>
                            {column.id}
                          </button>
                        )}
                      </Menu.Item>
                    );
                  })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default TableFilter;
