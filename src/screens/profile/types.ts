import { QueryResponse } from '../../common/types';

export interface IUser {
  _id: string;
  username: string;
  email: string;
  role: string;
}

export type CurrentUserQueryResponse = {
  currentUser: IUser;
} & QueryResponse;
