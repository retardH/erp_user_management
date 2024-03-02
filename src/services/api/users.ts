import supabase from '@/utils/supabase';
import { User } from '@/utils/types';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

export const useUsers = () => {
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

export const useDeleteUser = () => {
  return useSWRMutation('delete/user', async (_, { arg }: { arg: number }) => {
    await supabase.from('users').delete().eq('id', arg);
  });
};

export const useCreateNewUser = () => {
  return useSWRMutation('create/user', async (_, { arg }: { arg: any }) => {
    await supabase.from('users').insert(arg);
  });
};
