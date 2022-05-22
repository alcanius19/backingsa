module.exports.DEFINICION_EMPLEADO = `

type Empleado {
    _id: ID!
    nombre: String
    apellido: String
    cedula : Int
}

input EmpleadoInput{
    nombre: String
    apellido: String
    cedula: Int
}`;

module.exports.QUERY_EMPLEADO = `
listarEmpleados: [Empleado]
`;

module.exports.MUTATIONS_EMPLEADO = `
crearEmpleado(input: EmpleadoInput): Empleado
`;
