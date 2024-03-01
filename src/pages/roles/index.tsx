import PageHeader from '@/components/shared/page-header';
import Button from '@/components/ui/button';
import { rolesListData } from '@/utils/data';
import { RoleData } from '@/utils/types';
import { ColumnDef } from '@tanstack/react-table';
import RolesDataTable from './data-table';
import { useState } from 'react';
import DeleteModal from '@/components/shared/delete-modal';

function Roles() {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  // const [roleIdToDelete, setRoleIdToDelete] = useState<string>('');

  const closeDeleteModal = () => setShowDeleteModal(false);
  const handleDeleteRole = () => {};

  const columns: ColumnDef<RoleData>[] = [
    {
      header: 'Role Name',
      accessorKey: 'role',
    },
    {
      header: 'Actions',
      id: 'Actions',
      cell: () => {
        return (
          <div className="flex items-center gap-4">
            <Button variant="danger">Delete</Button>
          </div>
        );
      },
    },
  ];

  return (
    <section className="w-full rounded-md bg-white p-4 lg:p-6">
      <PageHeader title="Role Lists" />
      <div className="mt-4 rounded-md border border-base-300/40 p-3 lg:p-6">
        <RolesDataTable columns={columns} data={rolesListData} />
      </div>
      <DeleteModal
        show={showDeleteModal}
        onClose={closeDeleteModal}
        onOk={handleDeleteRole}
        description="This action cannot be undone. Are you sure you want to permanently delete this user?"
      />
    </section>
  );
}

export default Roles;
