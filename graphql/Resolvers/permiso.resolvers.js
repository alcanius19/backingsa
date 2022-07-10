const Permisos = require("../../models/permiso")
const mongoose = require("mongoose");
const moment = require("moment");
moment.locale("es");

const mapearInput = async (input) => {
    input.objetivo_especifico = input.objetivo_especifico;
  
    return input;
  };

module.exports.resolversPermiso = {

    listarPermisos: async ()=>{
        try {
            let datos = await Permisos.find();
            console.log(datos);
            return datos;
        } catch (error) {
            console.log(error)
        }
       
    },

    crearPermiso: async ({input})=>{

        try {
        const _permiso = new Permisos(
            await mapearInput({
                ...input,
                fecha_solicitud: moment().format("YYYY/MM/DD, h:mm:ss a")
            })
        );
        return await _permiso.save();
        } catch (error) {
            console.log(error);
        }

    },

    ActualizarPermiso: async ({_id,input})=>{
        const _permiso = {...input};
        const datos = await Permisos.findByIdAndUpdate({ _id }, _permiso);
        console.log(datos);
        return datos;

    }



}