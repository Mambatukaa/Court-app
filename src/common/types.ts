export type QueryResponse = {
  loading: boolean;
  refetch: () => Promise<any>;
  error?: string;
};

export type IUser = {
  _id: string;
};

export interface IAuth {
  role?: string;
  signUp?: (data: any) => void;
  signIn: (data: any) => void;
  signOut: () => void;
}
