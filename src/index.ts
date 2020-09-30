import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import { createConnection } from "typeorm";
import { Options } from "graphql-yoga";
import connectionOptions from "./ormConfig";
import decodeJWT from "./utils/decodeJWT";

const PORT: number | string = process.env.PORT || 5000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";
const SUBSCRIPTION_ENDPOINT: string = "/subscription";

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT,
  subscriptions: {
    path: SUBSCRIPTION_ENDPOINT,
    onConnect: async (connectionParams) => {
      const token = connectionParams["X-JWT"];
      if (token) {
        const user = await decodeJWT(token);
        if (user) {
          return {
            currentUser: user,
          };
        }
      }

      throw new Error("No JWT.");
    },
  },
};

const appStart = () => console.log(`Listening on port: ${PORT}`);

createConnection(connectionOptions)
  .then(() => {
    app.start(appOptions, appStart);
  })
  .catch((err) => console.log(err));
