const Orden = require("../../models/orden");
const mongoose = require("mongoose");
const moment = require("moment");
moment.locale("en");
const mapearInput = async (input) => {
  input.objetivo_especifico = input.objetivo_especifico;

  return input;
};

module.exports.resolversOrden = {
  listarOrden: async () => {
    let datos = await Orden.find();
   return datos;
  },

  orden_ID: async (args) => {
   
    try {
      const _id = args._id;
      console.log(_id);
      return await Orden.findById(_id);
    } catch (error) {
      console.log(error);
    }
  },

  crearOrden: async ({ input }) => {
    const _orden = new Orden(
      await mapearInput({
        ...input,
        fecha_elaboracion: moment().format("YYYY/MM/DD, h:mm:ss a"),
      })
    );
    return await _orden.save();
  },
};
