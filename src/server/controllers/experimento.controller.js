var ExperimentoService = require('./../services/experimento.service');

_this = this

exports.getExperimentos = async function (req, res, next) {
  var page = req.query.page ? req.query.page : 1
  var limit = req.query.limit ? req.query.limit : 1000000;

  var options = {
    page,
    limit
  }

  try {
    var experimentos = await ExperimentoService.getExperimentos({}, options)
    res.json(experimentos.docs);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

exports.postExperimento = async function (req, res, next) {
  var experimento = ({
    espectrometro: req.body.espectrometro,
    fecha_entrada: req.body.fecha_entrada,
    fecha_salida: req.body.fecha_salida,
    usuario_entrada: req.body.usuario_entrada,
    usuario_salida: req.body.usuario_salida,
    muestra: req.body.muestra,
    solicitud: req.body.id_solicitud,
    sonda: req.body.sonda,
    completo: req.body.finalizado,
  });

  console.log(experimento);

  try {
    var _experimentoGuardado = await ExperimentoService.createExperimento(experimento);
    res.json(_experimentoGuardado);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: 400, message: e });
  }
}
