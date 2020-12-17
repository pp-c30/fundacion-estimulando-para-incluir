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
const database_1 = require("../database");
class CategoriaController {
    listaCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let categoria = yield db.query('select * from categoria');
            return res.json(categoria);
        });
    }
    guardarCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            const categoria = req.body;
            yield db.query("Insert into categoria set?", [categoria]);
            return res.json('La categoria fue guardada exitosamente');
        });
    }
    eliminarCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let id = req.params.id;
            yield db.query("delete from categoria where idCategoria = ?", [id]);
            return res.json('La categoria fue eliminada exitosamente');
        });
    }
    actualizarCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let id = req.params.id;
            let nuevos_datos_categoria = req.body;
            yield db.query("update categoria set ? where idCategoria = ?", [nuevos_datos_categoria, id]);
            return res.json('La categoria fue actualizada exitosamente');
        });
    }
    obtenerUnaCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let id = req.params.id;
            let nuevos_datos_categoria = req.body;
            let unaCategoria = yield db.query("select * from categoria where idCategoria = ?", [id]);
            return res.json(unaCategoria[0]);
        });
    }
    obtenerCategoriasUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let idUsuario = req.params.id;
            let categorias = yield db.query("select * from categoria where idComercio = ?", [idUsuario]);
            return res.json(categorias);
        });
    }
}
exports.CategoriaController = CategoriaController;
