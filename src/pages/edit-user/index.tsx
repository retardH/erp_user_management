import PageHeader from '@/components/shared/page-header';
import UserForm from '@/components/shared/user-form';
import { useGetRoles } from '@/services/api/roles';
import { useGetUserById } from '@/services/api/users';
import { useParams } from 'react-router';

function EditUser() {
  const { id } = useParams();
  const { data: userData } = useGetUserById(+id!);
  const { data: rolesData } = useGetRoles();

  return (
    <div className="mb-10 w-full p-4 lg:p-0">
      <PageHeader title="Edit User Account" />
      {userData && (
        <UserForm
          key={id}
          isEditing
          roles={rolesData?.data}
          userData={userData?.data}
        />
      )}
    </div>
  );
}

export default EditUser;
