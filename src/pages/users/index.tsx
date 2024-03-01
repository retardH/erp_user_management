import { ColumnDef } from '@tanstack/react-table';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { UserData } from '@/utils/types';
import { cn } from '@/utils/helpers';
import Button from '@/components/ui/button';
import { useUserContext } from '@/contexts/users';
import DeleteModal from '@/components/shared/delete-modal';
import { useState } from 'react';
import UsersDataTable from './data-table';
import PageHeader from '@/components/shared/page-header';

function Users() {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [userIdToDelete, setUserIdToDelete] = useState('');
  const { users, deleteUser } = useUserContext();

  const closeDeleteModal = () => setShowDeleteModal(false);
  const handleDeleteUser = () => {
    deleteUser(userIdToDelete);
  };

  const columns: ColumnDef<UserData>[] = [
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
      accessorKey: 'role',
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
        return (
          <div className="flex items-center gap-4">
            <Button variant="outline">Edit</Button>
            <Button
              variant="danger"
              onClick={() => {
                setShowDeleteModal(true);
                setUserIdToDelete(row.getValue('username'));
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
      <PageHeader title="User Lists" />
      <div className="mt-4 rounded-md border border-base-300/40 p-3 lg:p-6">
        <UsersDataTable columns={columns} data={users} />
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
