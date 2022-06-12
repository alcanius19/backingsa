const { GraphQLDate } = require("graphql-scalars");
const {
  resolversEmpleado,
} = require("../graphql/Resolvers/empleado.resolvers");

const {
  resolversOrden,
} = require("../graphql/Resolvers/orden.resolvers");


const resolvers = {
  Date: GraphQLDate,
  ...resolversEmpleado,
  ...resolversOrden,
};

module.exports = resolvers;
