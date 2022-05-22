module.exports.DEFINICION_ORDEN = `
type Orden {
   _id: ID!
   ordensId: Int
   orden_trabajo: Int
   estado: Boolean
   contrato: String
   municipio: String
   Sector: String 
   fecha_elaboracion: String
   fecha_inicio: String
   fecha_terminacion: String
   codigo: Int
   nombre: String
   cedula: Int
   cargo: String
   detalle_trabajos: String
   tipo_vehiculo: String
   placa_vehiculo: String
   codigo1: Int
   nombre1: String
   cedula1: Int
   requerimientos: String
   trabajo: String
   cierre: String
   fecha_cierre: String
   vales_alimentacion: String
   pernoctada: String
   reponsable_orden: [Responsables]
   responsable_trabajo: [Responsables]
}


type Responsables{
   nombre : String
   cedula: Int
}


input Responsable{
   nombre : String
   cedula: Int
}




input OrdenInput {
  orden_trabajo: Int
   estado: Boolean
   contrato: String
   municipio: String
   Sector: String 
   fecha_elaboracion: String
   fecha_inicio: String
   fecha_terminacion: String
   codigo: Int
   nombre: String
   cedula: Int
   cargo: String
   detalle_trabajos: String
   tipo_vehiculo: String
   placa_vehiculo: String
   codigo1: Int
   nombre1: String
   cedula1: Int
   requerimientos: String
   trabajo:String
   cierre: String
   fecha_cierre: String
   vales_alimentacion: String
   pernoctada: String
   reponsable_orden: [Responsable]
   responsable_trabajo:[Responsable]
}`;

module.exports.QUERY_ORDEN = `
listarOrden : [Orden]
orden_ID(_id: ID!): Orden
`;
module.exports.MUTATIONS_ORDEN = `
crearOrden(input: OrdenInput): Orden
`;
