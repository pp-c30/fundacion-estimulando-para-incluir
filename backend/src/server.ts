import express,{Application} from "express";
import enrutadorIndex from "./routes/index.routes";
//import enrutadorPagos from "./routes/usuario.routes";

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
        this.app.set('port', process.env.port || 3000);
    }

    routes(){
        this.app.use(enrutadorIndex);
        //this.app.use(enrutadorUsuario);
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