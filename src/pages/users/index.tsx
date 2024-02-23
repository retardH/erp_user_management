import TableFilter from '../../components/table-filter';
import CustomTable from '../../components/ui/custom-table';
import { usersListData } from '../../utils/data';

const tableColumns = ['Username', 'Role', 'Status', 'Actions'];
function Users() {
  return (
    <section className="w-full rounded-md bg-white p-6">
      <TableFilter />
      <div className="mt-6">
        <CustomTable columns={tableColumns} dataSource={usersListData} />
      </div>
    </section>
  );
}

export default Users;
