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
const verificarToken_1 = require("../libs/verificarToken");
//Ruta con el método GET para obtener datos de la tabla USUARIO y mostrarlos 
enrutadorUsuario.route('/usuario').get(verificarToken_1.validarToken, usuarioController.listaUsuario);
//Ruta con el método POST para guardar o cargar datos en la tabla USUARIO
enrutadorUsuario.route('/usuario').post(usuarioController.guardarUsuario);
//
enrutadorUsuario.route('/usuario/:id').delete(verificarToken_1.validarToken, usuarioController.eliminarUsuario);
//
enrutadorUsuario.route('/usuario/:id').put(verificarToken_1.validarToken, usuarioController.actualizarUsuario);
//
enrutadorUsuario.route('/usuario/:id').get(usuarioController.obtenerUnUsuario);
//
exports.default = enrutadorUsuario;
