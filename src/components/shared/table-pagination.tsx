import { Table } from '@tanstack/react-table';
import Button from '../ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface Props {
  table: Table<any>;
}
function TablePagination({ table }: Props) {
  //   console.log(table.getState().pagination.pageIndex + 1, table.getPageCount());
  return (
    <div className="my-2 flex items-center justify-end gap-4">
      <span className="text-base-800">
        Page {table.getState().pagination.pageIndex + 1} of{' '}
        {table.getPageCount()}{' '}
      </span>
      <div className="flex items-center gap-4">
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="border border-base-400/30 bg-white px-2 py-1.5 transition-all hover:bg-base-100 md:px-3 md:py-2"
        >
          <ChevronLeftIcon className="size-[24px] text-base-800" />
        </Button>
        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="border border-base-400/30 bg-white px-2 py-1.5 transition-all hover:bg-base-100 md:px-3 md:py-2"
        >
          <ChevronRightIcon className="size-[24px] text-base-800" />
        </Button>
      </div>
    </div>
  );
}

export default TablePagination;
