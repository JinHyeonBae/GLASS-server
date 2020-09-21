import { Resolvers } from "../../../types/resolvers";
import { RegisterMutationArgs, RegisterResponse } from "../../../types/graph";
import User from "../../../entities/User";
import createJWT from "../../../utils/createJWT";

const resolvers: Resolvers = {
  Mutation: {
    Register: async (
      _,
      args: RegisterMutationArgs
    ): Promise<RegisterResponse> => {
      const { email } = args;
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return {
            ok: false,
            error: "this email existing. so you should log in instead",
            token: null,
          };
        } else {
          const newUser = await User.create({ ...args }).save();
          const token = createJWT(newUser.id);
          return {
            ok: true,
            error: null,
            token,
          };
        }
      } catch (err) {
        return {
          ok: false,
          error: err.message,
          token: null,
        };
      }
    },
  },
};
export default resolvers;
