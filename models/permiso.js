const mongoose = require("mongoose");


const PermisoSchema = new mongoose.Schema({
    nombres:{
        type: String,
        required: false,
    },
    cedula:{
        type: Number,
        required:false
    },
    contrato:{
        type:String
    },
    cargo:{
        type:String
    },
    municipio:{
        type:String
    },
    fecha_solicitud:{
        type:String
    },
    fecha_permiso:{
        type:String
    },
    hora_desde:{
        type:String
    },
    hora_hasta: {
        type:String
    },
    clase_diligencia:{
        type:String
    },
    otro:{
        type:String
    },
    firma_solicitante:{
        type: String,
    },
    autorizado_por:{
        type:String
    },
    autorizado: {
        type: Boolean
    },
    rechazado:{
        type: Boolean
    },
    remunerado:{
        type: Boolean
    },
    no_remunerado:{
        type:Boolean
    }
})

module.exports = Permisos = mongoose.model("permisos", PermisoSchema);