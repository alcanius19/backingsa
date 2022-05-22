const mongoose = require("mongoose");
// collection y schema
const EmployeSchema = new mongoose.Schema({
  cargo: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: false,
   },
  llaves: {
    type: Number,
    required: false,
  },
  cedula: {
    type: Number,
    required: true,
  },
  celular: {
    type: Number,
    required: false,
  },
  codigo: {
    type: Number,
    required: true,
  },
  zona: {
    type: Number,
    required: true,
  },
  contrato: {
    type: String,
    required: true,
  },
});
module.exports = Employee = mongoose.model("employee", EmployeSchema);

