import app from "./server";

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(
    `š Server listening at http://localhost:${PORT}\nš GraphQL at http://localhost:${PORT}/graphql`
  )
);