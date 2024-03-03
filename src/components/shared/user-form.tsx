import Button from '@/components/ui/button';
import Checkbox from '@/components/ui/checkbox';
import Input from '@/components/ui/input';
import Select from '@/components/ui/select';
import { useCreateNewUser, useUpdateUser } from '@/services/api/users';
import { Role, User } from '@/utils/types';
import { CreateUserFormType, createUserFormSchema } from '@/utils/zod';
import { useState } from 'react';
import { useNavigate } from 'react-router';

interface Props {
  roles: Role[] | null | undefined;
  isEditing?: boolean;
  userData?: User | null | undefined;
}

function UserForm({ roles, userData, isEditing = false }: Props) {
  const navigate = useNavigate();
  const { trigger: createNewUser, isMutating: isCreatingUser } =
    useCreateNewUser();
  const { trigger: updateUserById, isMutating: isUpdatingUser } =
    useUpdateUser();

  // Get initial data for userFormData
  const getInitialUserFormData = () => {
    return {
      firstName: userData?.firstName || '',
      lastName: userData?.lastName || '',
      email: userData?.email || '',
      isActive: userData?.isActive || false,
      roleId: userData?.roleId || 0,
      username: userData?.username || '',
    };
  };

  const [userFormData, setUserFormData] = useState<CreateUserFormType>(() =>
    getInitialUserFormData(),
  );

  const handleUserFormChange = (
    key: string,
    value: string | number | boolean,
  ) => {
    setUserFormData((prevVal) => ({ ...prevVal, [key]: value }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if user form data pass the schema validation
    const result = createUserFormSchema.safeParse(userFormData);

    // The function exits if the schema validation fails
    if (!result.success) {
      console.log('validation error');
      return;
    }

    // Update user or create new user base on isEditing props, navigate to the /users route on successful mutation
    if (isEditing && userData) {
      updateUserById(
        { id: userData.id, updateUserData: result.data },
        {
          onSuccess: () => {
            navigate('/users');
          },
        },
      );
    } else if (!isEditing) {
      createNewUser(result.data, {
        onSuccess: () => {
          navigate('/users');
        },
      });
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <section className="mt-4 w-full rounded-md bg-white p-6">
        <h4 className="mb-4 font-medium">User Information</h4>
        <div className="grid grid-cols-2 gap-2 md:gap-6">
          {/* First Name Input */}
          <div className="col-span-full md:col-span-1">
            <Input
              label="First Name"
              placeholder="First name"
              name="firstName"
              required
              value={userFormData.firstName}
              onChange={(e) =>
                handleUserFormChange('firstName', e.target.value)
              }
            />
          </div>
          {/* Last Name Input */}
          <div className="col-span-full md:col-span-1">
            <Input
              label="Last Name"
              placeholder="Last name"
              value={userFormData.lastName}
              onChange={(e) => handleUserFormChange('lastName', e.target.value)}
            />
          </div>
          {/* Email Input */}
          <div className="col-span-full">
            <Input
              label="Email"
              placeholder="Your email"
              required
              type="email"
              value={userFormData.email}
              onChange={(e) => handleUserFormChange('email', e.target.value)}
            />
          </div>
          {/* Is User Active Checkbox */}
          <div className="col-span-auto">
            <Checkbox
              labelText="Is User Active or Not?"
              checked={userFormData.isActive}
              onChange={(e) =>
                handleUserFormChange('isActive', e.target.checked)
              }
            />
          </div>
        </div>
      </section>
      <section className="mt-6 w-full rounded-md bg-white p-6">
        <h4 className="mb-4 font-medium">Roles and Permissions</h4>
        <div className="grid grid-cols-2 gap-2 md:gap-6">
          {/* Username Input */}
          <div className="col-span-full">
            <Input
              label="Username"
              placeholder="Username"
              required
              value={userFormData.username}
              onChange={(e) => handleUserFormChange('username', e.target.value)}
            />
          </div>
          {/* Role Name Select Box */}
          <div className="col-span-full">
            <Select
              required
              options={roles!}
              label="Role Name"
              value={userFormData.roleId}
              onChange={(val) => handleUserFormChange('roleId', val)}
            />
          </div>
        </div>
      </section>
      <div className="mt-6 flex w-full items-center justify-center">
        <Button
          type="submit"
          variant="primary"
          disabled={isCreatingUser || isUpdatingUser}
        >
          {isEditing ? 'Update' : 'Create'}
        </Button>
      </div>
    </form>
  );
}

export default UserForm;
