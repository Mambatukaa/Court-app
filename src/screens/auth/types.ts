import { QueryResponse } from '../../common/types';
export interface IAuth {
  name: string;
}

export type LoginMutationVariables = {
  input: string;
  password: string;
};

export type LoginMutationResponse = {
  login: (params: LoginMutationVariables) => Promise<any>;
};

export type SignUpMutationVariables = {
  username: string;
  email: string;
  password: string;
};

export type SignUpMutationResponse = {
  usersCreate: (params: SignUpMutationVariables) => Promise<any>;
};

export interface IUser {
  _id: string;
  username: string;
  email: string;
  role: string;
}

export type CurrentUserQueryResponse = {
  currentUser: IUser;
} & QueryResponse;
