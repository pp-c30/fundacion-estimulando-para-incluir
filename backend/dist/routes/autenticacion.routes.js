"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Traigo la clase de autenticación para crear la instancia
const autenticacion_controller_1 = require("../controllers/autenticacion.controller");
// Creo la instancia de autenticación
const autenticacionController = new autenticacion_controller_1.AutenticacionController;
const enrutadorAut = express_1.Router();
enrutadorAut.route('/registro1').post(autenticacionController.registrar);
enrutadorAut.route('/login').post(autenticacionController.ingresar);
exports.default = enrutadorAut;
