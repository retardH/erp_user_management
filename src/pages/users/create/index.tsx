import PageHeader from '../../../components/shared/page-header';
import Button from '../../../components/ui/button';
import Checkbox from '../../../components/ui/checkbox';
import Input from '../../../components/ui/input';
import Select from '../../../components/ui/select';

const roles = [
  { name: 'Admin' },
  { name: 'Agent' },
  { name: 'Accountant' },
  { name: 'User' },
];

const accessLocation = [
  { name: 'All Locations' },
  { name: 'Yangon' },
  { name: 'Mandalay' },
];

const defaultLocation = [{ name: 'No Result Found' }];

function CreateUser() {
  return (
    <div className="mb-10 w-full p-4 lg:p-0">
      <PageHeader title="Create User Account" />
      <section className="mt-4 w-full rounded-md bg-white px-6 py-10">
        <h4 className="mb-4 font-medium">User Information</h4>
        <div className="grid grid-cols-3 gap-2 md:gap-6">
          <div className="col-span-full md:col-span-1">
            <Input label="Prefix" placeholder="Mr / Mrs" required />
          </div>
          <div className="col-span-full md:col-span-1">
            <Input label="First Name" placeholder="Your first name" required />
          </div>
          <div className="col-span-full md:col-span-1">
            <Input label="Last Name" placeholder="Your last name" required />
          </div>
          <div className="col-span-full">
            <Input
              label="Email"
              placeholder="Your email"
              required
              type="email"
            />
          </div>
          <div className="col-span-auto">
            <Checkbox labelText="Is Active?" />
          </div>
        </div>
      </section>
      <section className="mt-6 w-full rounded-md bg-white px-6 py-10">
        <h4 className="mb-4 font-medium">Roles and Permissions</h4>
        <div className="grid grid-cols-2 gap-2 md:gap-6">
          <div className="col-span-full">
            <Input label="Username" placeholder="Your username" required />
          </div>
          <div className="col-span-full md:col-span-1">
            <Input label="Password" placeholder="" type="password" required />
          </div>
          <div className="col-span-full md:col-span-1">
            <Input
              label="Confirm password"
              placeholder=""
              type="password"
              required
            />
          </div>
          <div className="col-span-full">
            <Select required data={roles} label="Roles" />
          </div>
          <div className="col-span-full md:col-span-1">
            <Select required data={accessLocation} label="Access Location" />
          </div>
          <div className="col-span-full md:col-span-1">
            <Select required data={defaultLocation} label="Default Location" />
          </div>
        </div>
      </section>
      <div className="mt-6 flex w-full items-center justify-center">
        <Button>Create</Button>
      </div>
    </div>
  );
}

export default CreateUser;
