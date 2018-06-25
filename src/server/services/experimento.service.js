var Experimento = require("../models/experimento.model");

// Saving the context of this module inside the _the variable
_this = this;

exports.getExperimentos = async function(query, option) {
  try {
    var experimentos = await Experimento.paginate(query, option)
    return experimentos;
  } catch (err) {
    throw Error("Err. 1.Error al paginar los experimenentos: " + err)
  }
}

exports.getOneExperimento = async function (query, option) {
  try {
    var experimentos = await Experimento.findById(id);
    return experimentos;
  } catch (err) {
    throw Error("Err. 2.Error al buscar el experimenento: " + err)
  }
}
