import { Response, Request } from "express";
//Importo la base de datos
import { conexion } from "../database";
//Importo la libreria BCryptJS para encriptar la contraseña del usuario
import bcrypt from "bcryptjs";
//Importo la libreria Json Web Token para la generación de Token de seguridad
import jwt from "jsonwebtoken";

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
        const resultado = await db.query('insert into usuario_comercio set ?',[unUsuario]);

        const token:string = jwt.sign({_id:resultado.insertId},process.env.TOKEN_SECRET || '12qwerty');

        res.json(token);
    }

    async ingresar (req:Request,res:Response){
        
        const db = await conexion();

        const usuario = await db.query('select * from usuario_comercio where nombreUsuario = ? or mail = ?',[req.body.nombreUsuario, req.body.nombreUsuario]);

        if(!usuario[0]){
            res.json('¡Usuario o contraseña incorrecta!');
        }

        else{
            const correctPassword = await bcrypt.compare(req.body.contrasenia, usuario[0].contrasenia);
            
            if(!correctPassword){
                res.json('¡Contraseña incorrecta!')
            }

            else{

                const token:string = jwt.sign({_id:usuario[0].insertId},process.env.TOKEN_SECRET || '12qwerty',{
                    expiresIn:60*60*24
                });

                res.header('auth-token',token).json(usuario[0]);

            }
        }
        

    }
}