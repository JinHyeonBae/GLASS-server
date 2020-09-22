export const typeDefs = ["type LoginResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  Login(email: String!, password: String!): LoginResponse!\n  Register(email: String!, password: String!): RegisterResponse!\n}\n\ntype RegisterResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype User {\n  id: Int!\n  email: String\n  password: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Query {\n  user: User\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  verified: Boolean!\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
}

export interface User {
  id: number;
  email: string | null;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface Mutation {
  Login: LoginResponse;
  Register: RegisterResponse;
}

export interface LoginMutationArgs {
  email: string;
  password: string;
}

export interface RegisterMutationArgs {
  email: string;
  password: string;
}

export interface LoginResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface RegisterResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string | null;
}
