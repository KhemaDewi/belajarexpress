const express = rewuire("express");//mengimpor express untuk membuar rute
const router = express.Router();//membuat instance router dari express
const authController = require("../controller/authController");//mengimpor controller auth

//rute untuk rgeister pengguna baru
router.post("/register",authController.register);

//rute untuk login pengguna
router.post("/login",authController.login);

module.exports = router;//mengekspor router