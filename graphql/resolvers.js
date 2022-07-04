const { GraphQLDate } = require("graphql-scalars");
const {
  resolversEmpleado,
} = require("../graphql/Resolvers/empleado.resolvers");

const {
  resolversOrden,
} = require("../graphql/Resolvers/orden.resolvers");

const {
  resolversPermiso,
}= require("../graphql/Resolvers/permiso.resolvers")

const resolvers = {
  Date: GraphQLDate,
  ...resolversEmpleado,
  ...resolversOrden,
  ...resolversPermiso
};

module.exports = resolvers;
