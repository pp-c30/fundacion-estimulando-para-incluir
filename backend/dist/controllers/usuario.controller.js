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
exports.UsuarioController = void 0;
//Traigo la función para conectar USUARIO a la base de datos
const database_1 = require("../database");
//Utilizamos los controladores con el formato class
class UsuarioController {
    //Función para realizar una lista con todos los datos disponibles
    listaUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let usuario = yield db.query('select * from usuario_comercio');
            return res.json(usuario);
        });
    }
    //Función que guarda los datos ingresados en la tabla de usuario
    guardarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            const usuario = req.body;
            yield db.query("Insert into usuario_comercio set?", [usuario]);
            return res.json('El usuario fue guardado exitosamente');
        });
    }
    //Función que elimina los datos seleccionados
    eliminarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let id = req.params.id;
            yield db.query("delete from usuario_comercio where id = ?", [id]);
            return res.json('El usuario fue eliminado exitosamente');
        });
    }
    //Función que actualiza los parametros de la tabla.
    actualizarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let id = req.params.id;
            let nuevos_datos_usuario = req.body;
            yield db.query("update usuario_comercio set ? where id = ?", [nuevos_datos_usuario, id]);
            return res.json('Los datos de usuario fueron actualizados exitosamente');
        });
    }
    //Se listan los datos de un usuario seleccionado
    obtenerUnUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let id = req.params.id;
            let nuevos_datos_usuario = req.body;
            let unUsuario = yield db.query("select * from usuario_comercio where id = ?", [id]);
            return res.json(unUsuario[0]);
        });
    }
}
exports.UsuarioController = UsuarioController;
