var ExperimentoController = require('./../services/experimento.service');

_this = this

exports.getExperimentos = async function (req, res, next) {
  var page = req.query.page ? req.query.page : 1
  var limit = req.query.limit ? req.query.limit : 1000000;

  var options = {
    page,
    limit
  }

  try {
    var experimentos = await ExperimentoController.getExperimentos({}, options)
    console.log(experimentos);
    res.json(experimentos.docs);
  } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({ status: 400, message: e.message });

  }
}

exports.postExperimento = async function (req, res, next) {
  return res.status(200).json({ status: 200, message: "OK"})
}
