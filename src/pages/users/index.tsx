import PageHeader from '../../components/shared/page-header';
import TableFilter from '../../components/shared/table-filter';
import TablePagination from '../../components/shared/table-pagination';
import { usersListData } from '../../utils/data';
import { ColumnDef } from '@tanstack/react-table';
import { UserData } from '../../utils/types';
import MenuDropdown from '../../components/ui/menu-dropdown';
import CustomDataTable from '../../components/shared/custom-data-table';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

function Users() {
  const columns: ColumnDef<UserData>[] = [
    {
      accessorKey: 'name',
      header: ({ column }) => {
        return (
          <button
            className="inline-flex items-center gap-2"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Username
            <ChevronUpIcon className="size-[16px] text-base-600" />
          </button>
        );
      },
    },
    {
      header: 'Role',
      accessorKey: 'role',
    },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: ({ row }) => {
        return (
          <div className="max-w-max rounded-md bg-green-100 px-2 py-1 font-medium capitalize text-green-500">
            {row.getValue('status')}
          </div>
        );
      },
    },
    {
      header: 'Actions',
      id: 'Actions',
      cell: () => {
        return (
          <div className="max-w-max">
            <MenuDropdown />
          </div>
        );
      },
    },
  ];
  return (
    <section className="w-full bg-white p-6">
      <PageHeader title="User Lists" />
      <div className="mt-4 rounded-md border border-base-300/40 p-4">
        <TableFilter title="User" />
        <div className="mt-6">
          {/* 
            <CustomTable
              columns={[...Object.keys(usersListData[0]), 'Actions']}
              dataSource={usersListData}
            /> 
          */}
          <CustomDataTable columns={columns} data={usersListData} />
        </div>
        <div className="my-2 flex items-center justify-end">
          <TablePagination />
        </div>
      </div>
    </section>
  );
}

export default Users;
