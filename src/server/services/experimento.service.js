var Experimento = require("../models/experimento.model");

// Saving the context of this module inside the _the variable
_this = this;

exports.getExperimentos = async function(query) {
  try {
    var experimentos = await Experimento.find(query)
    return experimentos;
  } catch (err) {
    throw Error("Error al paginar los experimenentos. Err(EXP01): " + err)
  }
}

exports.getOneExperimento = async function (id) {
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

exports.updateExperimento = async function (experimento) {
  var id = experimento.id
  try {
    var oldExperimento = await Experimento.findById(id);
  } catch (e) {
    throw Error("Error al actualizar el experimento. Err(EXP04-1): " + e)
  }

  // If no old Todo Object exists return false
  if (!oldExperimento) {
    return false;
  }

  oldExperimento.espectrometro = experimento.espectrometro;
  oldExperimento.fecha_entrada = experimento.fecha_entrada;
  oldExperimento.fecha_salida = experimento.fecha_salida;
  oldExperimento.usuario_entrada = experimento.usuario_entrada;
  oldExperimento.usuario_salida = experimento.usuario_salida;
  oldExperimento.muestra = experimento.muestra;
  oldExperimento.solicitud = experimento.solicitud;
  oldExperimento.sonda = experimento.sonda;
  oldExperimento.completo = experimento.completo;
 
  try {
    var _savedExperimento = await oldExperimento.save();
    return _savedExperimento;
  } catch (e) {
    throw Error("Error al actualizar el experimento. Err(EXP04-2): " + e);
  }
}

exports.deleteExperimento = async (id) => {
  try {
    var deleted = await Experimento.deleteOne({ _id: id })
    return deleted;
  } catch (err) {
    throw Error("Ocurrio un error mientras se eliminaba el experimento. ErrErr(EXP05).: " + err)
  }
}
