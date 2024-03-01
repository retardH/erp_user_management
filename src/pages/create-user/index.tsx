import PageHeader from '@/components/shared/page-header';
import Button from '@/components/ui/button';
import Checkbox from '@/components/ui/checkbox';
import Input from '@/components/ui/input';
import Select from '@/components/ui/select';
import { useState } from 'react';
import { z } from 'zod';

const rolesOptions = [
  { name: 'Admin' },
  { name: 'Agent' },
  { name: 'Accountant' },
  { name: 'User' },
];

const createUserFormSchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3),
  email: z.string().email(),
  isActive: z.boolean(),
  username: z.string().min(5).max(20),
  role: z.string(),
});

type CreateUserFormType = z.infer<typeof createUserFormSchema>;

function CreateUser() {
  const [createUserForm, setCreateUserForm] = useState<CreateUserFormType>({
    firstName: '',
    lastName: '',
    email: '',
    isActive: false,
    role: '',
    username: '',
  });

  const handleUserFormChange = (key: string, value: any) => {
    setCreateUserForm((prevVal) => ({ ...prevVal, [key]: value }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = createUserFormSchema.safeParse(createUserForm);
    console.log(createUserForm, result);
  };

  return (
    <div className="mb-10 w-full p-4 lg:p-0">
      <PageHeader title="Create User Account" />
      <form onSubmit={onFormSubmit}>
        <section className="mt-4 w-full rounded-md bg-white px-6 py-10">
          <h4 className="mb-4 font-medium">User Information</h4>
          <div className="grid grid-cols-2 gap-2 md:gap-6">
            <div className="col-span-full md:col-span-1">
              <Input
                label="First Name"
                placeholder="First name"
                name="firstName"
                required
                value={createUserForm.firstName}
                onChange={(e) =>
                  handleUserFormChange('firstName', e.target.value)
                }
              />
            </div>
            <div className="col-span-full md:col-span-1">
              <Input
                label="Last Name"
                placeholder="Last name"
                required
                value={createUserForm.lastName}
                onChange={(e) =>
                  handleUserFormChange('lastName', e.target.value)
                }
              />
            </div>
            <div className="col-span-full">
              <Input
                label="Email"
                placeholder="Your email"
                required
                type="email"
                value={createUserForm.email}
                onChange={(e) => handleUserFormChange('email', e.target.value)}
              />
            </div>
            <div className="col-span-auto">
              <Checkbox
                labelText="Is Active?"
                checked={createUserForm.isActive}
                onChange={(e) =>
                  handleUserFormChange('isActive', e.target.checked)
                }
              />
            </div>
          </div>
        </section>
        <section className="mt-6 w-full rounded-md bg-white px-6 py-10">
          <h4 className="mb-4 font-medium">Roles and Permissions</h4>
          <div className="grid grid-cols-2 gap-2 md:gap-6">
            <div className="col-span-full">
              <Input
                label="Username"
                placeholder="Username"
                required
                value={createUserForm.username}
                onChange={(e) =>
                  handleUserFormChange('username', e.target.value)
                }
              />
            </div>
            <div className="col-span-full">
              <Select
                required
                options={rolesOptions}
                label="Role Name"
                value={createUserForm.role}
                onChange={(val) => handleUserFormChange('role', val.name)}
              />
            </div>
          </div>
        </section>

        <div className="mt-6 flex w-full items-center justify-center">
          <Button type="submit" variant="primary">
            Create
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
