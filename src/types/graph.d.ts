export const typeDefs = ["type SayHelloResponse {\n  text: String!\n  error: Boolean!\n}\n\ntype Query {\n  sayHello(name: String!): SayHelloResponse!\n  user: User\n}\n\ntype User {\n  id: Int!\n  email: String\n  password: String!\n  createdAt: String!\n  updatedAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  sayHello: SayHelloResponse;
  user: User | null;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface SayHelloResponse {
  text: string;
  error: boolean;
}

export interface User {
  id: number;
  email: string | null;
  password: string;
  createdAt: string;
  updatedAt: string;
}
