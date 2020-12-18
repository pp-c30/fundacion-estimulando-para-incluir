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
exports.ImagenController = void 0;
//Importo la funcion conexion para poder conectar a la DB
const database_1 = require("../database");
//En esta clase defino los metodos con todo lo que debo hacer relacionado a la tabla imagen
class ImagenController {
    //En esta funcion obtengo todas las imagenes de la DB
    obtenerImagenes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conecto a la DB
            const db = yield database_1.conexion();
            //Guardo en la variable productos el JSON con todas las imagenes presentes en la tabla
            let imagen = yield db.query('SELECT * FROM imagenes_producto');
            //Muestro el contenido de la variable imagen
            return res.json(imagen);
        });
    }
    agregarImagen(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conecto a la DB
            const db = yield database_1.conexion();
            //En la variable imagen guardo los datos del imagen a instertar asegurandome de que cumpla con la estructura
            let imagen = req.body;
            //Inserto la nueva imagen
            yield db.query('INSERT INTO imagenes_producto set ?', [imagen]);
            //Si inserto correctamente muestro el mensaje
            return res.json("Imagen agregada");
        });
    }
    eliminarImagen(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conecto a la DB
            const db = yield database_1.conexion();
            //Guardo en id el id del elemento a eliminar en la tabla
            let id = req.params.id;
            //Ejecuto el query SQL para eliminar
            yield db.query('DELETE FROM imagenes_producto WHERE idImagen=?', [id]);
            //Si elimino el elemento muestra el mensaje
            return res.json("Imagen eliminada");
        });
    }
    actualizarImagen(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conecto a la DB
            const db = yield database_1.conexion();
            //Guardo en id el id del elemento a modificar
            let id = req.params.id;
            //Guardo en imagen los datos nuevos
            let imagen = req.body;
            //Ejecuto el query para actualizar la imagen correspondiente
            yield db.query('UPDATE imagenes_producto SET ? WHERE idImagen=?', [imagen, id]);
            //Si actualizo muestra el mensaje
            res.json("Imagen actualizada");
        });
    }
    obtenerUnaImagen(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conecto a la DB
            const db = yield database_1.conexion();
            //Guardo en id el id del elemento a obtener
            let id = req.params.id;
            //Ejecuto el query para obtener la imagen correspondiente
            let imagen = yield db.query('SELECT * FROM imagenes_producto WHERE idImagen=?', [id]);
            //Muestro la imagen obtenida
            res.json(imagen);
        });
    }
    obtenerImagenesProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let id = req.params.id;
            let imagenes = yield db.query('SELECT url FROM imagenes_producto WHERE idProducto = ?', [id]);
            res.json(imagenes);
        });
    }
}
exports.ImagenController = ImagenController;
