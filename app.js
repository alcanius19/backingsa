const express = require("express");
const db = require("./config/db");
const app = express();
const path = require("path");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const employee = require("./routes/api/employees");
var cors = require("cors");
const { buildSchema } = require("graphql");
require("dotenv").config();

db();
//GraphQL
const { graphqlHTTP } = require("express-graphql");
// configuraciones
app.set("port", process.env.PORT || 4000);
// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.json({ extended: false }));
app.use("/api/employees", employee);

//

const root = require("./graphql/resolvers");
const schema = require("./graphql/schemas");

app.use(
  "/graphql",
  graphqlHTTP({
   schema: schema, //instancia del GraphQLSchema de GraphQL. Aquí es donde estructuramos la información que vamos a solicitar
    rootValue: root, //lista con todos nuestros schemas que van a estar disponibles para ser consultados
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.use(express.static(path.join(__dirname, "public/inicio")));
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")} `);
});

// registrarse en la pagina mongo, base de datos y crear una tabla
