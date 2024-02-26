import PageHeader from '../../components/shared/page-header';
import TableFilter from '../../components/shared/table-filter';
import TablePagination from '../../components/shared/table-pagination';
import CustomTable from '../../components/shared/custom-table';
import { rolesListData } from '../../utils/data';

function Roles() {
  return (
    <section className="w-full bg-white p-6">
      <PageHeader title="Role Lists" />
      <div className="mt-4 rounded-md border border-base-300/40 p-4">
        <TableFilter title="Role" />
        <div className="mt-6">
          <CustomTable
            columns={[...Object.keys(rolesListData[0]), 'Actions']}
            dataSource={rolesListData}
          />
        </div>
        <div className="my-2 flex items-center justify-end">
          <TablePagination />
        </div>
      </div>
    </section>
  );
}

export default Roles;
