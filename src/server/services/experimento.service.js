var Experimento = require("../models/experimento.model");

// Saving the context of this module inside the _the variable
_this = this;

exports.getExperimentos = async function(query, option) {
  try {
    var experimentos = await Experimento.paginate(query, option)
    return experimentos;
  } catch (err) {
    throw Error("Error al paginar los experimenentos. Err(EXP01): " + err)
  }
}

exports.getOneExperimento = async function (query, option) {
  try {
    var experimentos = await Experimento.findById(id);
    return experimentos;
  } catch (err) {
    throw Error("Err. 2.Error al buscar el experimenento. Err(EXP02): " + err)
  }
}

exports.createExperimento = async function (experimento) {
  var nuevoExperimento = new Experimento({
    espectrometro: experimento.espectrometro,
    fecha_entrada: experimento.fecha_entrada,
    fecha_salida: experimento.fecha_salida,
    usuario_entrada: experimento.usuario_entrada,
    usuario_salida: experimento.usuario_salida,
    muestra: experimento.muestra,
    solicitud: experimento.solicitud,
    sonda: experimento.sonda,
    completo: experimento.completo,
  })

  try {
    var _savedExperimento = await nuevoExperimento.save();
    return _savedExperimento;
  } catch (e) {
    throw Error("Error al crear el experimento. Err(EXP03): " + e);
  }
}
