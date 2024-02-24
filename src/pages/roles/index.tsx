import TableFilter from '../../components/table-filter';
import TablePagination from '../../components/table-pagination';
import CustomTable from '../../components/ui/custom-table';
import { rolesListData } from '../../utils/data';

function Roles() {
  return (
    <section className="w-full rounded-md bg-white p-6">
      <TableFilter title="Role" />
      <div className="mt-6">
        <CustomTable
          columns={[...Object.keys(rolesListData[0]), 'Actions']}
          dataSource={rolesListData}
        />
      </div>
      <div className="my-6 flex items-center justify-end">
        <TablePagination />
      </div>
    </section>
  );
}

export default Roles;
