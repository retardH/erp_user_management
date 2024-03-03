import PageHeader from '@/components/shared/page-header';
import RoleForm from '@/components/shared/role-form';
import { RoleFormSkeleton } from '@/components/ui/skeletons';
import { useGetRoleById } from '@/services/api/roles';
import { useParams } from 'react-router';

function EditRole() {
  const { id } = useParams();
  const { data: roleData, isLoading } = useGetRoleById(+id!);
  return (
    <div className="mb-10 p-4 lg:p-0">
      <PageHeader title="Edit Role" />
      {isLoading || !roleData ? (
        <div className="mt-4">
          <RoleFormSkeleton />
        </div>
      ) : (
        <RoleForm isEditing roleData={roleData?.data} />
      )}
    </div>
  );
}

export default EditRole;
