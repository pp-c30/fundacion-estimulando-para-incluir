"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importo Router para la creacion de rutas
const express_1 = require("express");
//Importo el controlador que contiene las funciones a ejecutar
const producto_controller_1 = require("../controllers/producto.controller");
//Defino enrutadorProducto para la creacion de rutas
const enrutadorProducto = express_1.Router();
//Defino productoController para hacer uso de los metodos del controlador
let productoController = new producto_controller_1.ProductoController();
//Definicion de las rutas para el CRUD
enrutadorProducto.route('/productos').get(productoController.obtenerProductos);
enrutadorProducto.route('/productos').post(productoController.agregarProducto);
enrutadorProducto.route('/productos/:id').delete(productoController.eliminarProducto);
enrutadorProducto.route('/productos/:id').put(productoController.actualizarProducto);
enrutadorProducto.route('/productos/:id').get(productoController.obtenerUnProducto);
//Exporto las rutas
exports.default = enrutadorProducto;
