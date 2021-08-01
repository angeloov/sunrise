import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import authRouter from "./rest/v1/auth";
import { ApolloServer } from "apollo-server-express";

import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

import cors from "cors";

const app: Application = express();

// app.use(
// 	cors({
// 		origin: "http://localhost:3000",
// 		credentials: true,
// 	})
// );

app.use("/api/v1", authRouter);

// ------ GraphQL ------
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: r => {
    // console.log(r.req);
  },
});

(async () => {
  await server.start();
  server.applyMiddleware({ app });
})();

// ------ Error Handling ------
app.use((err: any, req: any, res: any, next: any) => {
  console.log(err.stack);
  res
    .status(err.status || 500)
    .json({ message: "Server error: Something went wrong!" });
});

export default app;
