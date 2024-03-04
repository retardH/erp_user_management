import { rolePermissionsIds, rolesPermissions } from '@/utils/constants';
import Checkbox from '../ui/checkbox';
import Input from '../ui/input';
import Button from '../ui/button';
import { useState } from 'react';
import { CreateRoleFormType, createRoleFormSchema } from '@/utils/zod';
import { useCreateNewRole, useUpdateRole } from '@/services/api/roles';
import { Role } from '@/utils/types';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';

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
  const [roleActionsIds, setRoleActionsIds] = useState<string[]>([]);

  const handleRoleFormChange = (key: string, value: any) => {
    setRoleFormData((prevVal) => ({ ...prevVal, [key]: value }));
  };

  const onRoleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if role form data pass the schema validation
    const result = createRoleFormSchema.safeParse(roleFormData);

    // The function exits if the schema validation fails
    if (!result.success) {
      toast.error('Please fill out the form correctly');
      return;
    }

    // Update role or create new role base on isEditing prop, navigate to the /roles route on successful mutation
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
      <section className="mt-4 w-full overflow-x-scroll rounded-md bg-white p-6">
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
            <Checkbox
              labelText="All"
              checked={rolePermissionsIds.every((id) =>
                roleActionsIds.includes(id),
              )}
              onChange={(e) => {
                if (e.target.checked) {
                  setRoleActionsIds([...rolePermissionsIds]);
                } else {
                  setRoleActionsIds([]);
                }
              }}
            />
          </div>
          {rolesPermissions.map((role) => {
            return (
              <div key={role.name} className="flex items-center gap-8">
                <label className="min-w-[140px] text-sm text-base-700 md:text-base lg:min-w-[200px]">
                  {role.name}
                </label>
                <div className="flex items-center gap-4">
                  <Checkbox
                    labelText="All"
                    checked={role.actions.every((action) =>
                      roleActionsIds.includes(action.id),
                    )}
                    onChange={(e) => {
                      const ids = role.actions.map((action) => action.id);
                      if (e.target.checked) {
                        setRoleActionsIds(() => {
                          return [
                            ...roleActionsIds.filter((id) => !ids.includes(id)),
                            ...ids,
                          ];
                        });
                      } else {
                        setRoleActionsIds(() => {
                          return [
                            ...roleActionsIds.filter((id) => !ids.includes(id)),
                          ];
                        });
                      }
                    }}
                  />
                  {role.actions.map((permission) => (
                    <Checkbox
                      key={permission.id}
                      labelText={permission.name}
                      checked={roleActionsIds.includes(permission.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setRoleActionsIds(() => {
                            return [
                              ...roleActionsIds.filter(
                                (id) => id !== permission.id,
                              ),
                              permission.id,
                            ];
                          });
                        } else {
                          setRoleActionsIds(() => {
                            return [
                              ...roleActionsIds.filter(
                                (id) => id !== permission.id,
                              ),
                            ];
                          });
                        }
                      }}
                    />
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
