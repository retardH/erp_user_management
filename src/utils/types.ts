export type UserData = {
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
  role: string;
  isActive: boolean;
};

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

export type RoleData = {
  role: string;
};
