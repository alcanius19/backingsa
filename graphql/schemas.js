const { buildSchema } = require("graphql");
const {
  DEFINICION_EMPLEADO,
  QUERY_EMPLEADO,
  MUTATIONS_EMPLEADO,
} = require("./Schemas/empleado.schema");

const {
  DEFINICION_ORDEN,
  QUERY_ORDEN,
  MUTATIONS_ORDEN,
} = require("./Schemas/orden.shema");

let definiciones = `scalar Date ${DEFINICION_EMPLEADO}${DEFINICION_ORDEN}`;
let querys = `type Query {${QUERY_EMPLEADO}${QUERY_ORDEN}}`;
let mutations = `type Mutation {${MUTATIONS_EMPLEADO}${MUTATIONS_ORDEN}}`;
// console.log(`${definiciones}${querys}${mutations}`);
module.exports = buildSchema(`${definiciones}${querys}${mutations}`);
