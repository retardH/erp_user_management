export type User = {
  id: number;
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
  roleId: number;
  isActive: boolean;
  roles?: {
    name: string;
  };
};

export type Role = {
  id: number;
  name: string;
};
