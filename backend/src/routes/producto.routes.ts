//Importo Router para la creacion de rutas
import { Router } from "express";

//Importo el controlador que contiene las funciones a ejecutar
import { ProductoController } from "../controllers/producto.controller";

//Defino enrutadorProducto para la creacion de rutas
const enrutadorProducto = Router();

//Defino productoController para hacer uso de los metodos del controlador
let productoController = new ProductoController();

//Definicion de las rutas para el CRUD
enrutadorProducto.route('/productos').get(productoController.obtenerProductos);
enrutadorProducto.route('/productos').post(productoController.agregarProducto);
enrutadorProducto.route('/productos/:id').delete(productoController.eliminarProducto);
enrutadorProducto.route('/productos/:id').put(productoController.actualizarProducto);
enrutadorProducto.route('/productos/:id').get(productoController.obtenerUnProducto);

//Exporto las rutas
export default enrutadorProducto;