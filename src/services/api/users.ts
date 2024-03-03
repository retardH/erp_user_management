import supabase from '@/utils/supabase';
import { User } from '@/utils/types';
import { CreateUserFormType } from '@/utils/zod';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

export const useGetUsers = () => {
  return useSWR(
    'select/users',
    async () =>
      await supabase
        .from('users')
        .select(`*, roles(name)`)
        .order('username')
        .returns<User[]>(),
  );
};

export const useGetUserById = (id: number) => {
  return useSWR(
    `select/user/${id}`,
    async () =>
      await supabase
        .from('users')
        .select(`*, roles(name)`)
        .eq('id', id)
        .returns<User>()
        .single(),
  );
};

export const useDeleteUser = () => {
  return useSWRMutation('delete/user', async (_, { arg }: { arg: number }) => {
    await supabase.from('users').delete().eq('id', arg);
  });
};

export const useCreateNewUser = () => {
  return useSWRMutation(
    'create/user',
    async (_, { arg }: { arg: CreateUserFormType }) => {
      await supabase.from('users').insert([arg]);
    },
  );
};

export const useUpdateUser = () => {
  return useSWRMutation(
    'update/user',
    async (
      _,
      {
        arg,
      }: {
        arg: {
          id: number;
          updateUserData: CreateUserFormType;
        };
      },
    ) => {
      await supabase.from('users').update(arg.updateUserData).eq('id', arg.id);
    },
  );
};
