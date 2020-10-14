"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RubroController = void 0;
const database_1 = require("../database");
class RubroController {
    listaRubro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let rubro = yield db.query('select * from rubro');
            return res.json(rubro);
        });
    }
    guardarRubro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            const rubro = req.body;
            yield db.query("Insert into rubro set?", [rubro]);
            return res.json('El rubro fue guardado exitosamente');
        });
    }
    eliminarRubro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let id = req.params.id;
            yield db.query("delete from rubro where id = ?", [id]);
            return res.json('El rubro fue eliminado exitosamente');
        });
    }
    actualizaRubro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let id = req.params.id;
            let nuevos_datos_rubro = req.body;
            yield db.query("update rubro set ? where id = ?", [nuevos_datos_rubro, id]);
            return res.json('El rubro fue actualizado exitosamente');
        });
    }
    obtenerUnRubro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let id = req.params.id;
            let nuevos_datos_rubro = req.body;
            let unRubro = yield db.query("select * from rubro where id = ?", [id]);
            return res.json(unRubro[0]);
        });
    }
}
exports.RubroController = RubroController;
