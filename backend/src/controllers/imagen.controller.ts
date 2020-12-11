//Importo la funcion conexion para poder conectar a la DB
import { conexion } from "../database";

//Importo Request y Response para requerir datos y enviarlos
import { Request, Response } from "express";

//Importo la interfaz de imagen para asegurarme de cumplir la estructura requerida
import { IImagen } from "../models/imagen";

//En esta clase defino los metodos con todo lo que debo hacer relacionado a la tabla imagen
export class ImagenController {

    //En esta funcion obtengo todas las imagenes de la DB
    public async obtenerImagenes(req:Request, res:Response) {

        //Conecto a la DB
        const db = await conexion();

        //Guardo en la variable productos el JSON con todas las imagenes presentes en la tabla
        let imagen = await db.query('SELECT * FROM imagenes_producto')
                
        //Muestro el contenido de la variable imagen
        return res.json(imagen);
    }

    public async agregarImagen(req:Request, res:Response) {

        //Conecto a la DB
        const db = await conexion();
        
        //En la variable imagen guardo los datos del imagen a instertar asegurandome de que cumpla con la estructura
        let imagen:IImagen = req.body;

        //Inserto la nueva imagen
        await db.query('INSERT INTO imagenes_producto set ?',[imagen]);

        //Si inserto correctamente muestro el mensaje
        return res.json("Imagen agregada");
    }

    public async eliminarImagen(req:Request, res:Response) {
        
        //Conecto a la DB
        const db = await conexion();

        //Guardo en id el id del elemento a eliminar en la tabla
        let id = req.params.id;

        //Ejecuto el query SQL para eliminar
        await db.query('DELETE FROM imagenes_producto WHERE idImagen=?',[id]);

        //Si elimino el elemento muestra el mensaje
        return res.json("Imagen eliminada");

    }

    public async actualizarImagen(req:Request, res:Response) {

        //Conecto a la DB
        const db = await conexion();

        //Guardo en id el id del elemento a modificar
        let id = req.params.id;

        //Guardo en imagen los datos nuevos
        let imagen = req.body;

        //Ejecuto el query para actualizar la imagen correspondiente
        await db.query('UPDATE imagenes_producto SET ? WHERE idImagen=?',[imagen,id]);

        //Si actualizo muestra el mensaje
        res.json("Imagen actualizada");

    }

    public async obtenerUnaImagen(req:Request, res:Response) {

        //Conecto a la DB
        const db = await conexion();

        //Guardo en id el id del elemento a obtener
        let id = req.params.id;

        //Ejecuto el query para obtener la imagen correspondiente
        let imagen = await db.query('SELECT * FROM imagenes_producto WHERE idImagen=?',[id]);

        //Muestro la imagen obtenida
        res.json(imagen);

    }

    public async obtenerImagenesProducto(req:Request, res:Response) {
        const db = await conexion();
        let id = req.params.id;
        let imagenes = await db.query('SELECT url FROM imagenes_producto WHERE idProducto = ?',[id]);
        res.json(imagenes);
    }

}