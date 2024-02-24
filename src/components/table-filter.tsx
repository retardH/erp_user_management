import Button from './ui/button';
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  DocumentArrowUpIcon,
} from '@heroicons/react/24/outline';

interface Props {
  title: string;
}
function TableFilter({ title }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="group flex items-center gap-1 rounded-md bg-base-100 px-4 py-2 transition-all focus:bg-base-300">
          <MagnifyingGlassIcon className="h-[20px] w-[20px] text-base-500" />
          <input
            placeholder={`Search ${title}...`}
            className="bg-transparent focus:outline-none focus:ring-0"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" className="group">
          <FunnelIcon className="h-[20px] w-[20px] text-primary-500 group-hover:text-white" />
          Filter
        </Button>
        <Button variant="outline" className="group">
          <DocumentArrowUpIcon className="h-[20px] w-[20px] text-primary-500 group-hover:text-white" />
          Export
        </Button>
        <Button variant="primary">Create {title}</Button>
      </div>
    </div>
  );
}

export default TableFilter;
