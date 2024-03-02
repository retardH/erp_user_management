import { Table } from '@tanstack/react-table';
import Button from '../ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface Props<TData> {
  table: Table<TData>;
}
function TablePagination<TData>({ table }: Props<TData>) {
  return (
    <div className="my-2 flex items-center justify-end gap-4">
      <span className="text-sm text-base-800">
        Page {table.getState().pagination.pageIndex + 1} of{' '}
        {table.getPageCount()}{' '}
      </span>
      <div className="flex items-center gap-4">
        {/* Prev Page Button */}
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="border border-base-400/30 bg-white px-2 py-1 transition-all hover:bg-base-100 md:px-3 md:py-1.5"
        >
          <ChevronLeftIcon className="size-[24px] text-base-800" />
        </Button>
        {/* Next Page Button */}
        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="border border-base-400/30 bg-white px-2 py-1 transition-all hover:bg-base-100 md:px-3 md:py-1.5"
        >
          <ChevronRightIcon className="size-[24px] text-base-800" />
        </Button>
      </div>
    </div>
  );
}

export default TablePagination;
