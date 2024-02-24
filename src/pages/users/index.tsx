import TableFilter from '../../components/table-filter';
import TablePagination from '../../components/table-pagination';
import CustomTable from '../../components/ui/custom-table';
import { usersListData } from '../../utils/data';

const tableColumns = ['Username', 'Role', 'Status', 'Actions'];
function Users() {
  return (
    <section className="w-full rounded-md bg-white p-6">
      <TableFilter title="User" />
      <div className="mt-6">
        <CustomTable columns={tableColumns} dataSource={usersListData} />
      </div>
      <div className="my-6 flex items-center justify-end">
        <TablePagination />
      </div>
    </section>
  );
}

export default Users;
