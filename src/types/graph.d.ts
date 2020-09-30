export const typeDefs = ["type CompleteEmailVerificationResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  CompleteEmailVerification(key: String!): CompleteEmailVerificationResponse!\n  Login(email: String!, password: String!): LoginResponse!\n  Register(firstName: String!, lastName: String!, email: String!, password: String!): RegisterResponse!\n  RequestEmailVerification: RequestEmailVerificationResponse!\n}\n\ntype LoginResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype RegisterResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype RequestEmailVerificationResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype User {\n  id: Int!\n  email: String\n  firstName: String!\n  lastName: String!\n  password: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Query {\n  user: User\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  verified: Boolean!\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
}

export interface User {
  id: number;
  email: string | null;
  firstName: string;
  lastName: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface Mutation {
  CompleteEmailVerification: CompleteEmailVerificationResponse;
  Login: LoginResponse;
  Register: RegisterResponse;
  RequestEmailVerification: RequestEmailVerificationResponse;
}

export interface CompleteEmailVerificationMutationArgs {
  key: string;
}

export interface LoginMutationArgs {
  email: string;
  password: string;
}

export interface RegisterMutationArgs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface CompleteEmailVerificationResponse {
  ok: boolean;
  error: string | null;
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

export interface RequestEmailVerificationResponse {
  ok: boolean;
  error: string | null;
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
