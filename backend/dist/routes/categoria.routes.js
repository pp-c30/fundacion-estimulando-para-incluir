"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_controller_1 = require("../controllers/categoria.controller");
let categoriaController = new categoria_controller_1.CategoriaController();
const enrutadorCategoria = express_1.Router();
enrutadorCategoria.route('/categoria').get(categoriaController.listaCategoria);
enrutadorCategoria.route('/categoria').post(categoriaController.guardarCategoria);
enrutadorCategoria.route('/categoria/:id').delete(categoriaController.eliminarCategoria);
enrutadorCategoria.route('/categoria/:id').put(categoriaController.actualizarCategoria);
enrutadorCategoria.route('/categoria/:id').get(categoriaController.obtenerUnaCategoria);
// Ruta para obtener las categorias relacionadas a cierto usuario
enrutadorCategoria.route('/:id/categorias').get(categoriaController.obtenerCategoriasUsuario);
exports.default = enrutadorCategoria;
