"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importamos Router de express para poder crear un enrutador
const express_1 = require("express");
//Este enrutador aloja todas las funciones disponibles a través de Router
const enrutadorUsuario = express_1.Router();
//
const usuario_controller_1 = require("../controllers/usuario.controller");
//
let usuarioController = new usuario_controller_1.UsuarioController();
//Ruta con el método GET para obtener datos de la tabla USUARIO y mostrarlos 
enrutadorUsuario.route('/usuario').get(usuarioController.listaUsuario);
//Ruta con el método POST para guardar o cargar datos en la tabla USUARIO
enrutadorUsuario.route('/usuario').post(usuarioController.guardarUsuario);
//
enrutadorUsuario.route('/usuario/:id').delete(usuarioController.eliminarUsuario);
//
enrutadorUsuario.route('/usuario/:id').put(usuarioController.actualizarUsuario);
//
enrutadorUsuario.route('/usuario/:id').get(usuarioController.obtenerUnUsuario);
//
exports.default = enrutadorUsuario;
