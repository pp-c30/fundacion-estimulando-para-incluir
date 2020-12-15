import { Router } from "express";

// Traigo la clase de autenticación para crear la instancia
import { AutenticacionController } from "../controllers/autenticacion.controller";
// Creo la instancia de autenticación
const autenticacionController = new AutenticacionController;


const enrutadorAut = Router();


enrutadorAut.route('/registro').post(autenticacionController.registrar);
enrutadorAut.route('/ingreso').post(autenticacionController.ingresar);

export default enrutadorAut;