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

// Define interfaces for Supabse Database Tables
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      roles: {
        Row: {
          createdAt: string;
          id: number;
          name: string | null;
        };
        Insert: {
          createdAt?: string;
          id?: number;
          name?: string | null;
        };
        Update: {
          createdAt?: string;
          id?: number;
          name?: string | null;
        };
        Relationships: [];
      };
      users: {
        Row: {
          createdAt: string;
          email: string | null;
          firstName: string | null;
          id: number;
          isActive: boolean | null;
          lastName: string | null;
          roleId: number | null;
          username: string | null;
        };
        Insert: {
          createdAt?: string;
          email?: string | null;
          firstName?: string | null;
          id?: number;
          isActive?: boolean | null;
          lastName?: string | null;
          roleId?: number | null;
          username?: string | null;
        };
        Update: {
          createdAt?: string;
          email?: string | null;
          firstName?: string | null;
          id?: number;
          isActive?: boolean | null;
          lastName?: string | null;
          roleId?: number | null;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'public_users_roleId_fkey';
            columns: ['roleId'];
            isOneToOne: false;
            referencedRelation: 'roles';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};
