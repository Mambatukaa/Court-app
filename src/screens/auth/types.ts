export interface IAuth {
  name: string;
}

export type LoginMutationVariables = {
  email: string;
  password: string;
};

export type LoginMutationResponse = {
  login: (params: LoginMutationVariables) => Promise<any>;
};

export type SignUpMutationVariables = {
  email: string;
  password: string;
};

export type SignUpMutationResponse = {
  usersCreate: (params: SignUpMutationVariables) => Promise<any>;
};
