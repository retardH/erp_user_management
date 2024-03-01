import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Input from '../ui/input';
import Button from '../ui/button';
import { Table } from '@tanstack/react-table';

interface Props {
  table: Table<any>;
  filterKey: string;
  name: string;
}
function TableFilter({ table, filterKey, name }: Props) {
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
        <Button variant="primary">Create New {name}</Button>
      </div>
    </div>
  );
}

export default TableFilter;
