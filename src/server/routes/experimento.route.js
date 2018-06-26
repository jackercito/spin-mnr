var express = require("express");
var router = express.Router();
var ExperimentoController = require("../controllers/experimento.controller");

router.route("/")
  .get(ExperimentoController.getExperimentos)
  .post(ExperimentoController.postExperimento)

module.exports = router;
