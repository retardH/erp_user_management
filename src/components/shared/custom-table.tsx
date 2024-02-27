import React from 'react';
// import Checkbox from './checkbox';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import MenuDropdown from '../ui/menu-dropdown';

interface Props {
  columns: any[];
  dataSource: any[];
}

function CustomTable({ columns, dataSource }: Props) {
  return (
    <div className="w-full overflow-x-scroll">
      <table className="table w-full">
        <thead>
          <tr className="rounded-sm bg-base-100">
            {/* <th className="p-3 text-base-600 font-medium w-[20px]">
              <Checkbox />
            </th> */}
            {columns.length > 0 &&
              columns.map((col) => {
                return (
                  <React.Fragment key={col}>
                    <th
                      key={col}
                      className="group min-w-[120px] max-w-max cursor-pointer p-3 text-left font-medium capitalize text-base-500"
                    >
                      <div className="flex items-center gap-1">
                        {col}
                        <ChevronDownIcon className="h-[14px] w-[14px] text-base-400" />
                      </div>
                    </th>
                  </React.Fragment>
                );
              })}
          </tr>
        </thead>
        <tbody>
          {dataSource.length > 0 &&
            dataSource.map((row, index) => {
              const rowKeys = Object.keys(row);
              return (
                <tr
                  key={index}
                  className="border-b border-b-base-300/30 last-of-type:border-none"
                >
                  {rowKeys.map((key) => {
                    return key === 'status' ? (
                      <td key={key} className="px-3 py-4 text-left text-sm">
                        <div className="max-w-max rounded-md bg-green-100 px-2 py-1 font-medium capitalize text-green-500">
                          {row[key]}
                        </div>
                      </td>
                    ) : (
                      <td
                        key={key}
                        className="px-3 py-4 text-left text-sm text-base-600"
                      >
                        {row[key]}
                      </td>
                    );
                  })}
                  <td className="px-3 py-4 text-left text-sm text-base-600">
                    <div className="max-w-max">
                      <MenuDropdown />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default CustomTable;
