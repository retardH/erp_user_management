import { z } from 'zod';

export const createUserFormSchema = z.object({
  firstName: z.string().min(3).max(30),
  lastName: z.string().optional(),
  email: z.string().email(),
  isActive: z.boolean(),
  username: z.string().min(5).max(20),
  roleId: z.number(),
});

export type CreateUserFormType = z.infer<typeof createUserFormSchema>;
