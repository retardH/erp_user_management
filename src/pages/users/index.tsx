import PageHeader from '../../components/shared/page-header';
import TableFilter from '../../components/shared/table-filter';
import TablePagination from '../../components/shared/table-pagination';
import CustomTable from '../../components/shared/custom-table';
import { usersListData } from '../../utils/data';

function Users() {
  return (
    <section className="w-full bg-white p-6">
      <PageHeader title="User Lists" />
      <div className="mt-4 rounded-md border border-base-300/40 p-4">
        <TableFilter title="User" />
        <div className="mt-6">
          <CustomTable
            columns={[...Object.keys(usersListData[0]), 'Actions']}
            dataSource={usersListData}
          />
        </div>
        <div className="my-2 flex items-center justify-end">
          <TablePagination />
        </div>
      </div>
    </section>
  );
}

export default Users;
