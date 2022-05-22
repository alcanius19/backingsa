const mongoose = require("mongoose");

const OrdenSchema = new mongoose.Schema({
  orden_trabajo: {
    type: Number,
    required: false,
  },
  estado: {
    type: Boolean,
    required: false,
  },
  ordensId: {type:Number, required: false },
  contrato: { type: String, required: false },
  municipio: { type: String, required: false },
  Sector: { type: String, required: false },
  fecha_elaboracion: { type: String, required: false },
  fecha_inicio: { type: String, required: false },
  fecha_terminacion: { type: String, required: false },
  codigo: { type: Number, required: false },
  nombre: { type: String, required: false },
  cedula: { type: Number, required: false },
  cargo: { type: String, required: false },
  detalle_trabajos: { type: String, required: false },
  tipo_vehiculo: { type: String, required: false },
  placa_vehiculo: { type: String, required: false },
  codigo1: { type: Number, required: false },
  nombre1: { type: String, required: false },
  cedula1: { type: Number, required: false },
  trabajo :{type: String, required: false},
  requerimientos: { type: String, required: false },
  cierre: { type: String, required: false },
  fecha_cierre: {type: String, required:false},
  vales_alimentacion: { type: String, required: false },
  pernoctada : { type: String,required: false},
  reponsable_orden:[{ type: Object, required: false}],
  responsable_trabajo: [{type: Object, required: false}],

});
module.exports = Orden = mongoose.model("orden", OrdenSchema);
