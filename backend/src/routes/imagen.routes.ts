//Importo Router para la creacion de rutas
import { Router } from "express";

//Importo el controlador que contiene las funciones a ejecutar
import { ImagenController } from "../controllers/imagen.controller";

//Defino enrutadorImagen para la creacion de rutas
const enrutadorImagen = Router();

//Defino imagenController para hacer uso de los metodos del controlador
let imagenController = new ImagenController();

//Definicion de las rutas para el CRUD
enrutadorImagen.route('/imagen').get(imagenController.obtenerImagenes);
enrutadorImagen.route('/imagen').post(imagenController.agregarImagen);
enrutadorImagen.route('/imagen/:id').delete(imagenController.eliminarImagen);
enrutadorImagen.route('/imagen/:id').put(imagenController.actualizarImagen);
enrutadorImagen.route('/imagen/:id').get(imagenController.obtenerUnaImagen);
// Ruta para obtener imagenes asociadas a un producto
enrutadorImagen.route('/:id/imagenes').get(imagenController.obtenerImagenesProducto);

//Exporto las rutas
export default enrutadorImagen;