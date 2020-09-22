import { Resolvers } from "../../../types/resolvers";
import { LoginMutationArgs, LoginResponse } from "../../../types/graph";
import User from "../../../entities/User";
import createJWT from "../../../utils/createJWT";

const resolvers: Resolvers = {
  Mutation: {
    Login: async (_, args: LoginMutationArgs): Promise<LoginResponse> => {
      const { email, password } = args;
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return {
            ok: false,
            error: "User not found.",
            token: null,
          };
        }
        const checkPassword = await user.comparePassword(password);
        if (checkPassword) {
          const token = createJWT(user.id);
          return {
            ok: true,
            error: null,
            token,
          };
        } else {
          return {
            ok: false,
            error: "Wrong password",
            token: null,
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
