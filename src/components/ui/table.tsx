import { Table, flexRender } from '@tanstack/react-table';

interface Props {
  table: Table<any>;
}
function CommonTable({ table }: Props) {
  return (
    <div className="customize__scroll m-auto flex w-full flex-col">
      <table className="table w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="rounded-sm border-b border-b-base-300/50"
            >
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    className="group min-w-[130px] cursor-pointer p-3 text-left text-sm font-medium capitalize text-base-500 md:text-base"
                  >
                    {!header.isPlaceholder &&
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows?.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-b-base-300/30 transition-all last-of-type:border-none hover:bg-base-100"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-3 py-4 text-left text-sm text-base-600"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="px-3 py-5 text-center font-medium text-base-600"
              >
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CommonTable;
