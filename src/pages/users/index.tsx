import { ColumnDef } from '@tanstack/react-table';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { User } from '@/utils/types';
import { cn } from '@/utils/helpers';
import Button from '@/components/ui/button';
import DeleteModal from '@/components/shared/delete-modal';
import { useState } from 'react';
import UsersDataTable from './data-table';
import PageHeader from '@/components/shared/page-header';
import { useDeleteUser, useUsers } from '@/services/api/users';
import { useNavigate } from 'react-router';

function Users() {
  const navigate = useNavigate();
  const { data: usersData, isLoading, mutate: getUsers } = useUsers();
  const { trigger: deleteUserById } = useDeleteUser();
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [userIdToDelete, setUserIdToDelete] = useState<number>(0);

  const closeDeleteModal = () => setShowDeleteModal(false);

  const handleDeleteUser = () => {
    deleteUserById(userIdToDelete, {
      onSuccess: () => {
        getUsers();
      },
    });
  };

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: 'username',
      header: ({ column }) => {
        return (
          <button
            className="inline-flex items-center gap-2"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Username
            <ChevronUpIcon className="size-[16px] text-base-600" />
          </button>
        );
      },
    },
    {
      header: 'Email',
      accessorKey: 'email',
    },
    {
      header: 'Role',
      accessorKey: 'roles',
      cell: ({ row }) => {
        return (
          <div>
            {row.original.roles?.name || (
              <span className="text-red-500">Unassigned</span>
            )}
          </div>
        );
      },
    },
    {
      header: 'Status',
      accessorKey: 'isActive',
      cell: ({ row }) => {
        return (
          <div
            className={cn(
              'max-w-max rounded-md px-2 py-1 font-medium capitalize',
              row.getValue('isActive')
                ? 'bg-green-100 text-green-500'
                : 'bg-red-100 text-red-500',
            )}
          >
            {row.getValue('isActive') ? 'Active' : 'Inactive'}
          </div>
        );
      },
    },
    {
      header: 'Actions',
      id: 'Actions',
      cell: ({ row }) => {
        const userId = row.original.id;
        return (
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => navigate(`/users/edit/${userId}`)}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                setShowDeleteModal(true);
                setUserIdToDelete(userId);
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
    <section className="rounded-md bg-white p-4 lg:p-6">
      <div className="flex w-full items-center justify-between">
        <PageHeader title="User Lists" />
        <div className="min-w-max flex-1">
          <Button variant="primary" onClick={() => navigate('/users/create')}>
            Create User
          </Button>
        </div>
      </div>
      <div className="mt-4 rounded-md border border-base-300/40 p-3 lg:p-6">
        <UsersDataTable
          columns={columns}
          data={usersData?.data as User[]}
          isLoading={isLoading}
        />
      </div>
      <DeleteModal
        show={showDeleteModal}
        onClose={closeDeleteModal}
        onOk={handleDeleteUser}
        description="This action cannot be undone. Are you sure you want to permanently delete this user?"
      />
    </section>
  );
}

export default Users;
