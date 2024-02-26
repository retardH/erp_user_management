import Button from '../ui/button';
import { FunnelIcon, DocumentArrowUpIcon } from '@heroicons/react/24/outline';
import Input from '../ui/input';

interface Props {
  title: string;
}
function TableFilter({ title }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="md:w-[300px]">
        <Input placeholder={`Search ${title}`} />
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
