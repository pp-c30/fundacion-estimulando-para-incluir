"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importo Router para la creacion de rutas
const express_1 = require("express");
//Importo el controlador que contiene las funciones a ejecutar
const imagen_controller_1 = require("../controllers/imagen.controller");
//Defino enrutadorImagen para la creacion de rutas
const enrutadorImagen = express_1.Router();
//Defino imagenController para hacer uso de los metodos del controlador
let imagenController = new imagen_controller_1.ImagenController();
//Definicion de las rutas para el CRUD
enrutadorImagen.route('/imagen').get(imagenController.obtenerImagenes);
enrutadorImagen.route('/imagen').post(imagenController.agregarImagen);
enrutadorImagen.route('/imagen/:id').delete(imagenController.eliminarImagen);
enrutadorImagen.route('/imagen/:id').put(imagenController.actualizarImagen);
enrutadorImagen.route('/imagen/:id').get(imagenController.obtenerUnaImagen);
//Exporto las rutas
exports.default = enrutadorImagen;
