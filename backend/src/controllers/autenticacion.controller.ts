import { Response, Request } from "express";
//Importo la base de datos
import { conexion } from "../database";
//Importo la libreria BCryptJS para encriptar la contraseña del usuario
import bcrypt from "bcryptjs";

export class AutenticacionController {


    async registrar(req:Request,res:Response){


        //Genero un fragmento aleatorio que permite el cifrado de la contraseña
        const salt = await bcrypt.genSalt(10);

        const contrasenia_cifrada = await bcrypt.hash(req.body.contrasenia,salt);
        
        // Creamos un objeto Usuario con los datos requeridos
        const unUsuario = {
            mail:req.body.mail,
            contrasenia:contrasenia_cifrada,
            nombreUsuario:req.body.nombreUsuario,
            localidad:req.body.localidad,
            provincia:req.body.provincia,
            direccion:req.body.direccion
        }

        //Creo la conexión a la base de datos
        const db = await conexion();
        // Insertamos los datos de unUsuario a la tabla de usuario_comercio
        await db.query('insert into usuario_comercio set ?',[unUsuario]);

        res.json('Probando guardado de usuario');
    }

    async ingresar (req:Request,res:Response){

    }
}