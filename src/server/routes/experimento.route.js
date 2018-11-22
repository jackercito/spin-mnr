var express = require("express");
var router = express.Router();
var ExperimentoController = require("../controllers/experimento.controller");

router.route("/")
  .get(ExperimentoController.getExperimentos)
  .post(ExperimentoController.postExperimento)

router.route("/:id")
  .get(ExperimentoController.getOneExperimento)
  .delete(ExperimentoController.deleteExperimento)

module.exports = router;
