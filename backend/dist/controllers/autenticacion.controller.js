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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionController = void 0;
//Importo la base de datos
const database_1 = require("../database");
//Importo la libreria BCryptJS para encriptar la contraseña del usuario
const bcryptjs_1 = __importDefault(require("bcryptjs"));
//Importo la libreria Json Web Token para la generación de Token de seguridad
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AutenticacionController {
    registrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Genero un fragmento aleatorio que permite el cifrado de la contraseña
            const salt = yield bcryptjs_1.default.genSalt(10);
            const contrasenia_cifrada = yield bcryptjs_1.default.hash(req.body.contrasenia, salt);
            // Creamos un objeto Usuario con los datos requeridos
            const unUsuario = {
                mail: req.body.mail,
                contrasenia: contrasenia_cifrada,
                nombreUsuario: req.body.nombreUsuario,
                localidad: req.body.localidad,
                provincia: req.body.provincia,
                direccion: req.body.direccion
            };
            //Creo la conexión a la base de datos
            const db = yield database_1.conexion();
            // Insertamos los datos de unUsuario a la tabla de usuario_comercio
            const resultado = yield db.query('insert into usuario_comercio set ?', [unUsuario]);
            const token = jsonwebtoken_1.default.sign({ _id: resultado.insertId }, process.env.TOKEN_SECRET || '12qwerty');
            res.json(token);
        });
    }
    ingresar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            const usuario = yield db.query('select * from usuario_comercio where nombreUsuario = ? or mail = ?', [req.body.nombreUsuario, req.body.nombreUsuario]);
            if (!usuario[0]) {
                res.json('¡Usuario o contraseña incorrecta!');
            }
            else {
                const correctPassword = yield bcryptjs_1.default.compare(req.body.contrasenia, usuario[0].contrasenia);
                if (!correctPassword) {
                    res.json('¡Contraseña incorrecta!');
                }
                else {
                    const token = jsonwebtoken_1.default.sign({ _id: usuario[0].insertId }, process.env.TOKEN_SECRET || '12qwerty', {
                        expiresIn: 60 * 60 * 24
                    });
                    res.header('auth-token', token).json(usuario[0]);
                }
            }
        });
    }
}
exports.AutenticacionController = AutenticacionController;
