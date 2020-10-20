import express,{Application} from "express";
import enrutadorIndex from "./routes/index.routes";

import enrutadorImagen from "./routes/imagen.routes";
import enrutadorCategoria from "./routes/categoria.routes";
import enrutadorRubro from "./routes/rubro.routes";

import enrutadorProducto from "./routes/producto.routes";

//Importo body-parser para posibles errores de JSON
import bodyParser from 'body-parser';
import enrutadorUsuario from "./routes/usuario.routes";

export class Server {
    app:Application;
    constructor() 
    {
        this.app=express();
        this.configuracion();
        this.middleware();
        this.routes();
        
    }

    configuracion() {
        this.app.use(bodyParser.json());
        this.app.set('port', process.env.port || 3000);
    }

    routes(){
        this.app.use(enrutadorIndex);
        this.app.use(enrutadorCategoria);
        this.app.use(enrutadorRubro);
        this.app.use(enrutadorProducto);
        this.app.use(enrutadorUsuario);
        this.app.use(enrutadorImagen);
    }

    middleware(){
        this.app.use(express.json());
    }

    listen() 
    {
        this.app.listen(this.app.get('port'));
        console.log('Servidor corriendo en el puerto 3000');
    }
    
}