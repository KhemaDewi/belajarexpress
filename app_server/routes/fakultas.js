var express = require('express');
var router = express.Router();

// import controller
const fakultasController = require('../controllers/fakultasController')

router.get('/', fakultasController.index)


module.exports = router;