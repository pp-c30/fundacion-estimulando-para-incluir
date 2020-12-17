//Importamos Router de express para poder crear un enrutador
import { Router } from "express";
//
import enrutadorIndex from "./index.routes";
//Este enrutador aloja todas las funciones disponibles a través de Router
const enrutadorUsuario = Router();
//
import { UsuarioController } from "../controllers/usuario.controller";
//
let usuarioController = new UsuarioController();
import { validarToken } from "../libs/verificarToken";

//Ruta con el método GET para obtener datos de la tabla USUARIO y mostrarlos 
enrutadorUsuario.route('/usuario').get(validarToken,usuarioController.listaUsuario);
//Ruta con el método POST para guardar o cargar datos en la tabla USUARIO
enrutadorUsuario.route('/usuario').post(usuarioController.guardarUsuario);
//
enrutadorUsuario.route('/usuario/:id').delete(usuarioController.eliminarUsuario);
//
enrutadorUsuario.route('/usuario/:id').put(usuarioController.actualizarUsuario);
//
enrutadorUsuario.route('/usuario/:id').get(usuarioController.obtenerUnUsuario);

//
export default enrutadorUsuario;