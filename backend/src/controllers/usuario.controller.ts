//Traigo la función para conectar USUARIO a la base de datos
import { conexion } from '../database';
//Se llama a las funciones de REQUEST y RESPONSE para que los metodos puedan ser utilizados
import { Request, Response } from "express";
//Se importa el enrutador de usuario
import enrutadorUsuario from '../routes/usuario.routes';
//Se importa el modelo de usuario
import { IUsuario } from "../models/usuario";

//Utilizamos los controladores con el formato class
export class UsuarioController
{
    //Función para realizar una lista con todos los datos disponibles
    public async listaUsuario(req:Request, res:Response)
    {
        const db = await conexion();
        let usuario = await  db.query('select * from usuario_comercio');
        return res.json(usuario)
    }
    
    //Función que guarda los datos ingresados en la tabla de usuario
    public async guardarUsuario(req:Request, res:Response)
    {
        const db = await conexion();
        const usuario:IUsuario = req.body;
        await db.query("insert into usuario_comercio set ?",[usuario]);
        return res.json('El usuario fue guardado exitosamente');
    }

    //Función que elimina los datos seleccionados
    public async eliminarUsuario(req:Request, res:Response)
    {
        const db = await conexion();
        let id = req.params.id;
        await db.query("delete from usuario_comercio where idUsuario = ?",[id]);
        return res.json('El usuario fue eliminado exitosamente');
    }

    //Función que actualiza los parametros de la tabla.
    public async actualizarUsuario(req:Request, res:Response)
    {
        const db = await conexion();
        let id = req.params.id;
        let nuevos_datos_usuario = req.body;
        await db.query("update usuario_comercio set ? where idUsuario = ?",[nuevos_datos_usuario,id]);
        return res.json('Los datos de usuario fueron actualizados exitosamente');
    }

    //Se listan los datos de un usuario seleccionado
    public async obtenerUnUsuario(req:Request, res:Response)
    {
        const db = await conexion();
        let id = req.params.id;
        let nuevos_datos_usuario = req.body;
        let unUsuario = await db.query("select * from usuario_comercio where idUsuario = ?",[id]);
        return res.json(unUsuario[0]);
    }
}