import Button from '../ui/button';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Input from '../ui/input';

interface Props {
  title: string;
}
function TableFilter({ title }: Props) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
      <div className="md:w-[300px]">
        <Input
          placeholder={`Search ${title}`}
          leftIcon={<MagnifyingGlassIcon className="size-[18px]" />}
        />
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" className="group">
          Filter
        </Button>
        <Button variant="outline" className="group">
          Export
        </Button>
        <Button variant="primary">Create {title}</Button>
      </div>
    </div>
  );
}

export default TableFilter;
