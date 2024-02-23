import Button from './ui/button';
import Input from './ui/input';
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  DocumentArrowUpIcon,
} from '@heroicons/react/24/outline';

function TableFilter() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Input
          placeholder="Search"
          icon={
            <MagnifyingGlassIcon className="h-[20px] w-[20px] text-base-500" />
          }
        />
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
        <Button variant="primary">Create User</Button>
      </div>
    </div>
  );
}

export default TableFilter;
