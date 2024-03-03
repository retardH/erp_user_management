import PageHeader from '@/components/shared/page-header';
import UserForm from '@/components/shared/user-form';
import { useGetRoles } from '@/services/api/roles';

function CreateUser() {
  const { data: rolesData } = useGetRoles();

  return (
    <div className="mb-10 w-full p-4 lg:p-0">
      <PageHeader title="Create User Account" />
      <UserForm roles={rolesData?.data} />
    </div>
  );
}

export default CreateUser;
