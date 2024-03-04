import supabase from '@/utils/supabase';
import { Role } from '@/utils/types';
import { CreateRoleFormType } from '@/utils/zod';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

export const useGetRoles = () => {
  return useSWR('select/roles', async () => {
    return await supabase
      .from('roles')
      .select(`*`)
      .order('name')
      .returns<Role[]>();
  });
};

export const useGetRoleById = (roleId: number) => {
  return useSWR(`select/role/${roleId}`, async () => {
    return await supabase
      .from('roles')
      .select(`*`)
      .eq('id', roleId)
      .returns<Role>()
      .single();
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
    async (_, { arg }: { arg: CreateRoleFormType }) => {
      return await supabase.from('roles').insert([arg]);
    },
  );
};

export const useUpdateRole = () => {
  return useSWRMutation(
    'update/role',
    async (
      _,
      { arg }: { arg: { id: number; updateData: CreateRoleFormType } },
    ) => {
      return await supabase
        .from('roles')
        .update(arg.updateData)
        .eq('id', arg.id);
    },
  );
};
