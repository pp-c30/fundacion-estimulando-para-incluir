import {Router} from "express";
import {CategoriaController } from "../controllers/categoria.controller";
import enrutadorIndex from "./index.routes";

let categoriaController = new CategoriaController();

const enrutadorCategoria = Router();
enrutadorCategoria.route('/categoria').get(categoriaController.listaCategoria);
enrutadorCategoria.route('/categoria').post(categoriaController.guardarCategoria);
enrutadorCategoria.route('/categoria/:id').delete(categoriaController.eliminarCategoria);
enrutadorCategoria.route('/categoria/:id').put(categoriaController.actualizarCategoria);
enrutadorCategoria.route('/categoria/:id').get(categoriaController.obtenerUnaCategoria);
// Ruta para obtener las categorias relacionadas a cierto usuario
enrutadorCategoria.route('/:id/categorias').get(categoriaController.obtenerCategoriasUsuario);


export default enrutadorCategoria;
