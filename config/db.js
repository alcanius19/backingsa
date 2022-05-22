const baseDatos = require("mongoose");
const config = require("config");
const db = config.get("MongoUri");
// db= "mongodb+srv://admin:Felipe1982@cluster0.zwv4t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const conectarDB = async () => {
  try {
    await baseDatos.connect(db, {
      useNewUrlParser: true,
    });
    console.log("database connected");
  } catch (error) {
    console.error(error);
  }
};
module.exports = conectarDB;