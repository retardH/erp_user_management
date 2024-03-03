import PageHeader from '@/components/shared/page-header';
import RoleForm from '@/components/shared/role-form';

function CreateRole() {
  return (
    <div className="mb-10 p-4 lg:p-0">
      <PageHeader title="Create New Role" />
      <RoleForm />
    </div>
  );
}

export default CreateRole;
