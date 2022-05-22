const Empleado = require("../../models/employee");
const mongoose = require("mongoose");
const mapearInput = async (input) => {
  input.objetivo_especifico = input.objetivo_especifico;

  return input;
};

module.exports.resolversEmpleado = {
  listarEmpleados: async () => {
    let datos = await Empleado.find();
    return datos;
  },

  crearEmpleado: async ({input}) => {

    const _empleado = new Empleado(
      await mapearInput(
        {...input}
      )
    );
      return await _empleado.save();
  }
};
