import PageHeader from '@/components/shared/page-header';
import Button from '@/components/ui/button';
import { Role } from '@/utils/types';
import { ColumnDef } from '@tanstack/react-table';
import RolesDataTable from './data-table';
import { useState } from 'react';
import DeleteModal from '@/components/shared/delete-modal';
import { useDeleteRole, useRoles } from '@/services/api/roles';
import { useNavigate } from 'react-router';

function Roles() {
  const navigate = useNavigate();
  const { data: rolesData, isLoading, mutate: getRoles } = useRoles();
  const { trigger: deleteRole } = useDeleteRole();
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [roleIdToDelete, setRoleIdToDelete] = useState<number>(0);

  const closeDeleteModal = () => setShowDeleteModal(false);

  const handleDeleteRole = () => {
    deleteRole(roleIdToDelete, {
      onSuccess: () => {
        getRoles();
      },
    });
  };

  const columns: ColumnDef<Role>[] = [
    {
      header: 'Role Name',
      accessorKey: 'name',
    },
    {
      header: 'Actions',
      id: 'Actions',
      cell: ({ row }) => {
        const roleId = row.original.id;
        return (
          <div className="flex items-center gap-4">
            <Button
              variant="danger"
              onClick={() => {
                setShowDeleteModal(true);
                setRoleIdToDelete(roleId);
              }}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <section className="w-full rounded-md bg-white p-4 lg:p-6">
      <div className="flex items-center justify-between">
        <PageHeader title="Role Lists" />
        <div className="min-w-max">
          <Button variant="primary" onClick={() => navigate('/roles/create')}>
            Create New Role
          </Button>
        </div>
      </div>
      <div className="mt-4 rounded-md border border-base-300/40 p-3 lg:p-6">
        <RolesDataTable
          columns={columns}
          data={rolesData?.data as Role[]}
          isLoading={isLoading}
        />
      </div>
      <DeleteModal
        show={showDeleteModal}
        onClose={closeDeleteModal}
        onOk={handleDeleteRole}
        description="This action cannot be undone. Are you sure you want to permanently delete this role?"
      />
    </section>
  );
}

export default Roles;
