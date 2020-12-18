"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const imagen_routes_1 = __importDefault(require("./routes/imagen.routes"));
const categoria_routes_1 = __importDefault(require("./routes/categoria.routes"));
const rubro_routes_1 = __importDefault(require("./routes/rubro.routes"));
const producto_routes_1 = __importDefault(require("./routes/producto.routes"));
//Importo body-parser para posibles errores de JSON
const body_parser_1 = __importDefault(require("body-parser"));
const usuario_routes_1 = __importDefault(require("./routes/usuario.routes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.configuracion();
        this.middleware();
        this.routes();
    }
    configuracion() {
        this.app.use(body_parser_1.default.json());
        this.app.set('port', process.env.port || 3000);
    }
    routes() {
        this.app.use(index_routes_1.default);
        this.app.use(categoria_routes_1.default);
        this.app.use(rubro_routes_1.default);
        this.app.use(producto_routes_1.default);
        this.app.use(usuario_routes_1.default);
        this.app.use(imagen_routes_1.default);
    }
    middleware() {
        this.app.use(express_1.default.json());
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
    }
    listen() {
        this.app.listen(this.app.get('port'));
        console.log('Servidor corriendo en el puerto 3000');
    }
}
exports.Server = Server;
