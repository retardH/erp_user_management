import PageHeader from '../../components/shared/page-header';
import TableFilter from '../../components/shared/table-filter';
import TablePagination from '../../components/shared/table-pagination';
import { rolesListData } from '../../utils/data';
import { ColumnDef } from '@tanstack/react-table';
import { RoleData } from '../../utils/types';
import MenuDropdown from '../../components/ui/menu-dropdown';
import CustomDataTable from '../../components/shared/custom-data-table';

function Roles() {
  const columns: ColumnDef<RoleData>[] = [
    {
      header: 'Role Name',
      accessorKey: 'role',
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
      <PageHeader title="Role Lists" />
      <div className="mt-4 rounded-md border border-base-300/40 p-4">
        <TableFilter title="Role" />
        <div className="mt-6">
          {/* 
            <CustomTable
              columns={[...Object.keys(rolesListData[0]), 'Actions']}
              dataSource={rolesListData}
            /> 
          */}
          <CustomDataTable columns={columns} data={rolesListData} />
        </div>
        <div className="my-2 flex items-center justify-end">
          <TablePagination />
        </div>
      </div>
    </section>
  );
}

export default Roles;
