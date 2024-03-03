import supabase from '@/utils/supabase';
import { Role } from '@/utils/types';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

export const useRoles = () => {
  return useSWR('select/roles', async () => {
    return await supabase
      .from('roles')
      .select(`*`)
      .order('name')
      .returns<Role[]>();
  });
};

export const useDeleteRole = () => {
  return useSWRMutation('delete/role', async (_, { arg }: { arg: number }) => {
    return await supabase.from('roles').delete().eq('id', arg);
  });
};

export const useCreateNewRole = () => {
  return useSWRMutation(
    'create/role',
    async (_, { arg }: { arg: Partial<Role> }) => {
      return await supabase.from('roles').insert(arg);
    },
  );
};
