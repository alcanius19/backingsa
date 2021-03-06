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
   recursos: String
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
   recursos: String
   requerimientos: String
   trabajo:String
   cierre: String
   fecha_cierre: String
   vales_alimentacion: String
   pernoctada: String
   reponsable_orden: [Responsable]
   responsable_trabajo:[Responsable]
}

   input UpdateOrden{
      estado:Boolean
      fecha_terminacion: String
      cierre: String
      detalle_trabajos: String
      fecha_cierre: String
      vales_alimentacion: String
      pernoctada: String
   
    }
`;

module.exports.QUERY_ORDEN = `
listarOrden : [Orden]
orden_ID(_id: ID!): Orden
`;
module.exports.MUTATIONS_ORDEN = `
crearOrden(input: OrdenInput): Orden
actualizarOrden(_id: ID!, input: UpdateOrden):Orden
`;
