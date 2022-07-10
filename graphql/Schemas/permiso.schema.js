module.exports.DEFINICION_PERMISO = `
type Permiso{
    _id: ID!
    nombres: String
    cedula:Int
    contrato:String
    cargo:String
    municipio: String
    fecha_solicitud:String
    fecha_permiso:String
    hora_desde:String
    hora_hasta:String
    clase_diligencia:String
    otro: String
    firma_solicitante: String
    autorizado_por:String
    autorizado: Boolean
    rechazado: Boolean
    remunerado: Boolean
    no_remunerado:Boolean
}

input PermisoInput { 
    nombres: String
    cedula:Int
    contrato:String
    cargo:String
    municipio:String
    fecha_solicitud:String
    fecha_permiso:String
    hora_desde:String
    hora_hasta:String
    clase_diligencia:String
    otro: String
    firma_solicitante: String
    autorizado_por:String
    autorizado: Boolean
    rechazado: Boolean
    remunerado: Boolean
    no_remunerado:Boolean
}

`;

module.exports.QUERY_PERMISO=`
listarPermisos: [Permiso]
`;

module.exports.MUTATIONS_PERMISO = `
crearPermiso(input: PermisoInput): Permiso
ActualizarPermiso(_id: ID!, input: PermisoInput): Permiso
`;