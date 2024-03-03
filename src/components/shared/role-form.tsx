import { rolesPermissions } from '@/utils/constants';
import Checkbox from '../ui/checkbox';
import Input from '../ui/input';
import Button from '../ui/button';
import { useState } from 'react';
import { CreateRoleFormType, createRoleFormSchema } from '@/utils/zod';
import { useCreateNewRole, useUpdateRole } from '@/services/api/roles';
import { Role } from '@/utils/types';
import { useNavigate } from 'react-router';

interface Props {
  isEditing?: boolean;
  roleData?: Role | undefined | null;
}
function RoleForm({ isEditing = false, roleData }: Props) {
  const navigate = useNavigate();
  const { trigger: createNewRole, isMutating: isCreatingRole } =
    useCreateNewRole();
  const { trigger: updateRoleById, isMutating: isUpdatingRole } =
    useUpdateRole();
  const [roleFormData, setRoleFormData] = useState<CreateRoleFormType>({
    name: roleData?.name || '',
  });

  const handleRoleFormChange = (key: string, value: any) => {
    setRoleFormData((prevVal) => ({ ...prevVal, [key]: value }));
  };

  const onRoleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = createRoleFormSchema.safeParse(roleFormData);
    console.log(roleFormData);
    if (!result.success) {
      console.error('Validation fails');
      return;
    }
    if (isEditing && roleData) {
      updateRoleById(
        { id: roleData.id as number, updateData: result.data },
        {
          onSuccess: () => {
            navigate('/roles');
          },
        },
      );
    } else if (!isEditing) {
      createNewRole(result.data, {
        onSuccess: () => {
          navigate('/roles');
        },
      });
    }
  };
  return (
    <form onSubmit={onRoleFormSubmit}>
      <section className="mt-4 w-full overflow-x-scroll rounded-md bg-white px-6 py-10">
        <div className="mb-8">
          <Input
            label="Row Name"
            placeholder="Enter a role name"
            required
            value={roleFormData.name}
            onChange={(e) => handleRoleFormChange('name', e.target.value)}
          />
        </div>
        <div className="relative flex flex-col gap-6 overflow-x-auto">
          <div className="flex items-center gap-8">
            <label className="min-w-[140px] font-medium text-base-700 lg:min-w-[200px]">
              Administrator Access
            </label>
            <Checkbox labelText="All" />
          </div>
          {rolesPermissions.map((role) => {
            return (
              <div key={role.name} className="flex items-center gap-8">
                <label className="min-w-[140px] text-sm text-base-700 md:text-base lg:min-w-[200px]">
                  {role.name}
                </label>
                <div className="flex items-center gap-4">
                  <Checkbox labelText="All" />
                  {role.permissions.map((permission) => (
                    <Checkbox key={permission} labelText={permission} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className="mt-6 flex w-full items-center justify-center">
        <Button
          type="submit"
          disabled={isCreatingRole || isUpdatingRole}
          variant="primary"
        >
          Create Role
        </Button>
      </div>
    </form>
  );
}

export default RoleForm;
