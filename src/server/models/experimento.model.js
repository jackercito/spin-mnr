var mongoose = require("../bd/mongodb.conexion").mongoose;
var Schema = mongoose.Schema;

var ExperimentoSchema = new Schema({
  espectrometro: { type: String },
  fecha_entrada: { type: Date },
  fecha_salida: { type: Date, required: true },
  usuario_entrada: { type: String, required: true },
  usuario_salida: { type: String },
  muestra: { type: String, required: true },
  solicitud: { type: String, required: true },
  sonda: { type: String },
  completo: { type: String }
});

module.exports = mongoose.model("Experimento", ExperimentoSchema);
