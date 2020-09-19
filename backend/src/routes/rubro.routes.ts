import {Router} from "express";
import {RubroController } from "../controllers/rubro.controller";
import enrutadorIndex from "./index.routes";

let rubroController = new RubroController();

const enrutadorRubro = Router();
enrutadorRubro.route('/rubro').get(rubroController.listaRubro);
enrutadorRubro.route('/rubro').post(rubroController.guardarRubro);
enrutadorRubro.route('/rubro/:id').delete(rubroController.eliminarRubro);
enrutadorRubro.route('/rubro/:id').put(rubroController.actualizaRubro);
enrutadorRubro.route('/rubro/:id').get(rubroController.obtenerUnRubro);


export default enrutadorRubro;