// import type { NextApiRequest, NextApiResponse } from "next";
const express = require("express");
const app = express();
const PORT = 7070;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Server running, graphql => http://localhost:7070/graphql");
});

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: "John Doe" });
// }
