import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
function TablePagination() {
  return (
    <div className="flex items-stretch gap-2">
      <button className="rounded-md px-2 py-1 hover:bg-primary-50">
        <ChevronLeftIcon className="h-[18px] w-[18px] text-base-600" />
      </button>
      <button className="group rounded-md bg-primary-400 px-3 py-1">
        <span className="text-sm text-white">1</span>{' '}
      </button>
      <button className="rounded-md px-3 py-1 hover:bg-primary-50">
        <span className="text-sm">2</span>{' '}
      </button>
      <button className="rounded-md px-3 py-1 hover:bg-primary-50">
        <span className="text-sm">3</span>{' '}
      </button>
      <button className="rounded-md px-2 py-1 hover:bg-primary-50">
        <ChevronRightIcon className="h-[18px] w-[18px] text-base-600" />
      </button>
    </div>
  );
}

export default TablePagination;
