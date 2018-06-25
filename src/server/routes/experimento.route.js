var express = require("express");
var router = express.Router();
var ExperimentoController = require("../controllers/experimento.controller");

router.route("/")
  .get(ExperimentoController.getExperimentos)

module.exports = router;
