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

const {
  DEFINICION_PERMISO,
  QUERY_PERMISO,
  MUTATIONS_PERMISO
} = require("./Schemas/permiso.schema")


let definiciones = `scalar Date ${DEFINICION_EMPLEADO}${DEFINICION_ORDEN}${DEFINICION_PERMISO}`;
let querys = `type Query {${QUERY_EMPLEADO}${QUERY_ORDEN}${QUERY_PERMISO}}`;
let mutations = `type Mutation {${MUTATIONS_EMPLEADO}${MUTATIONS_ORDEN}${MUTATIONS_PERMISO}}`;
// console.log(`${definiciones}${querys}${mutations}`);
module.exports = buildSchema(`${definiciones}${querys}${mutations}`);
