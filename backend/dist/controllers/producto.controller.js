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
exports.ProductoController = void 0;
//Importo la funcion conexion para poder conectar a la DB
const database_1 = require("../database");
//En esta clase defino los metodos con todo lo que debo hacer relacionado a la tabla producto
class ProductoController {
    //En esta funcion obtengo todos los productos de la DB
    obtenerProductos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conecto a la DB
            const db = yield database_1.conexion();
            //Guardo en la variable productos el JSON con todos los productos presentes en la tabla
            let producto = yield db.query('SELECT * FROM producto');
            //Muestro el contenido de la variable producto
            return res.json(producto);
        });
    }
    agregarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conecto a la DB
            const db = yield database_1.conexion();
            //En la variable producto guardo los datos del producto a instertar asegurandome de que cumpla con la estructura
            let producto = req.body;
            //Inserto el nuevo producto
            yield db.query('INSERT INTO producto set ?', [producto]);
            //Si inserto correctamente muestro el mensaje
            return res.json("Producto agregado");
        });
    }
    eliminarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conecto a la DB
            const db = yield database_1.conexion();
            //Guardo en id el id del elemento a eliminar en la tabla
            let id = req.params.id;
            //Ejecuto el query SQL para eliminar
            yield db.query('DELETE FROM producto WHERE id=?', [id]);
            //Si elimino el elemento muestra el mensaje
            return res.json("Producto eliminado");
        });
    }
    actualizarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conecto a la DB
            const db = yield database_1.conexion();
            //Guardo en id el id del elemento a modificar
            let id = req.params.id;
            //Guardo en producto los datos nuevos
            let producto = req.body;
            //Ejecuto el query para actualizar el producto correspondiente
            yield db.query('UPDATE producto SET ? WHERE id=?', [producto, id]);
            //Si actualizo muestra el mensaje
            res.json("Producto actualizado");
        });
    }
    obtenerUnProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conecto a la DB
            const db = yield database_1.conexion();
            //Guardo en id el id del elemento a obtener
            let id = req.params.id;
            //Ejecuto el query para obtener el producto correspondiente
            let producto = yield db.query('SELECT * FROM producto WHERE id=?', [id]);
            //Muestro el producto obtenido
            res.json(producto);
        });
    }
}
exports.ProductoController = ProductoController;
