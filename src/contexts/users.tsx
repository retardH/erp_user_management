import React, { createContext, useContext, useState } from 'react';
import { UserData } from '../utils/types';
import { usersListData } from '@/utils/data';

interface UsersContextState {
  users: UserData[];
  deleteUser: (id: string) => void;
  createNewUser: (user: UserData) => void;
}

const UserContext = createContext<UsersContextState>({} as UsersContextState);

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const [users, setUsers] = useState<UserData[]>(usersListData);

  const deleteUser = (id: string) => {
    const tempUsers = [...users];
    const userIdToDelete = tempUsers.findIndex((user) => user.username === id);
    tempUsers.splice(userIdToDelete, 1);
    setUsers(tempUsers);
  };

  const createNewUser = (user: UserData) => {
    setUsers((users) => [{ ...user }, ...users]);
  };
  return (
    <UserContext.Provider
      value={{
        users,
        deleteUser,
        createNewUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  if (!UserContext) {
    throw new Error('User Context does not exist!');
  }
  return useContext(UserContext);
};
