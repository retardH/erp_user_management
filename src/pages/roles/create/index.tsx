import PageHeader from '../../../components/shared/page-header';
import Button from '../../../components/ui/button';
import Checkbox from '../../../components/ui/checkbox';
import Input from '../../../components/ui/input';
import { rolesPermissions } from '../../../utils/data';

function CreateRole() {
  return (
    <div className="mb-10 w-full">
      <PageHeader title="Create New Role" />

      <section className="mt-4 w-full bg-white px-6 py-10">
        <div className="mb-8">
          <Input label="Row Name" placeholder="Enter a role name" required />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-8">
            <label className="min-w-[200px] font-medium text-base-700">
              Administrator Access
            </label>
            <Checkbox labelText="Select All" />
          </div>
          {rolesPermissions.map((role) => {
            return (
              <div key={role.name} className="flex items-center gap-8">
                <label className="min-w-[200px] text-base-700">
                  {role.name}
                </label>
                <div className="flex items-center gap-4">
                  <Checkbox labelText="Select All" />
                  {role.permissions.map((p) => (
                    <Checkbox key={p} labelText={p} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className="mt-6 flex w-full items-center justify-center">
        <Button>Create Role</Button>
      </div>
    </div>
  );
}

export default CreateRole;
