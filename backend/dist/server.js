import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { ApolloServer } from "apollo-server-express";
import resolvers from "./graphql/resolvers.js";
import typeDefs from "./graphql/typeDefs.js";
const app = express();
// app.use(
// 	cors({
// 		origin: "http://localhost:3000",
// 		credentials: true,
// 	})
// );
app.get("/", (req, res) => {
    res.send("Ciao!!");
});
// ------ GraphQL ------
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (r) => {
        // console.log(r.req);
    },
});
await server.start();
server.applyMiddleware({ app });
// ------ Error Handling ------
app.use((err, req, res, next) => {
    console.log(err.stack);
    res
        .status(err.status || 500)
        .json({ message: "Server error: Something went wrong!" });
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server listening at http://localhost:${PORT}\n🎇 GraphQL at http://localhost:${PORT}/graphql`));
