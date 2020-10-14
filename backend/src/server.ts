import express,{Application} from "express";
import enrutadorIndex from "./routes/index.routes";
<<<<<<< HEAD
//import enrutadorUsuario from "./routes/usuario.routes";
=======
import enrutadorCategoria from "./routes/categoria.routes";
import enrutadorRubro from "./routes/rubro.routes";
<<<<<<< HEAD
>>>>>>> 691d1339cac71fae5f29301e10b071b7209bcb14
=======
import enrutadorProducto from "./routes/producto.routes";

//Importo body-parser para posibles errores de JSON
import bodyParser from 'body-parser';
>>>>>>> 0c76208b59454829486886d06a5fcc626ecfe13f

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