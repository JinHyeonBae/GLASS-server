import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import { createConnection } from "typeorm";
import { Options } from "graphql-yoga";
import connectionOptions from "./ormConfig";

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT,
};

const appStart = () => console.log(`Listening on port: ${PORT}`);

createConnection(connectionOptions)
  .then(() => {
    app.start(appOptions, appStart);
  })
  .catch((err) => console.log(err));
