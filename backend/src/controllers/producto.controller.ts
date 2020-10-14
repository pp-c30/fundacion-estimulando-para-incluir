//Importo la funcion conexion para poder conectar a la DB
import { conexion } from "../database";

//Importo Request y Response para requerir datos y enviarlos
import { Request, Response } from "express";

//Importo la interfaz de producto para asegurarme de cumplir la estructura requerida
import { IProducto } from "../models/producto";

//En esta clase defino los metodos con todo lo que debo hacer relacionado a la tabla producto
export class ProductoController {

    //En esta funcion obtengo todos los productos de la DB
    public async obtenerProductos(req:Request, res:Response) {

        //Conecto a la DB
        const db = await conexion();

        //Guardo en la variable productos el JSON con todos los productos presentes en la tabla
        let producto = await db.query('SELECT * FROM producto')
                
        //Muestro el contenido de la variable producto
        return res.json(producto);
    }

    public async agregarProducto(req:Request, res:Response) {

        //Conecto a la DB
        const db = await conexion();
        
        //En la variable producto guardo los datos del producto a instertar asegurandome de que cumpla con la estructura
        let producto:IProducto = req.body;

        //Inserto el nuevo producto
        await db.query('INSERT INTO producto set ?',[producto]);

        //Si inserto correctamente muestro el mensaje
        return res.json("Producto agregado");
    }

    public async eliminarProducto(req:Request, res:Response) {
        
        //Conecto a la DB
        const db = await conexion();

        //Guardo en id el id del elemento a eliminar en la tabla
        let id = req.params.id;

        //Ejecuto el query SQL para eliminar
        await db.query('DELETE FROM producto WHERE id=?',[id]);

        //Si elimino el elemento muestra el mensaje
        return res.json("Producto eliminado");

    }

    public async actualizarProducto(req:Request, res:Response) {

        //Conecto a la DB
        const db = await conexion();

        //Guardo en id el id del elemento a modificar
        let id = req.params.id;

        //Guardo en producto los datos nuevos
        let producto = req.body;

        //Ejecuto el query para actualizar el producto correspondiente
        await db.query('UPDATE producto SET ? WHERE id=?',[producto,id]);

        //Si actualizo muestra el mensaje
        res.json("Producto actualizado");

    }

    public async obtenerUnProducto(req:Request, res:Response) {

        //Conecto a la DB
        const db = await conexion();

        //Guardo en id el id del elemento a obtener
        let id = req.params.id;

        //Ejecuto el query para obtener el producto correspondiente
        let producto = await db.query('SELECT * FROM producto WHERE id=?',[id]);

        //Muestro el producto obtenido
        res.json(producto);

    }

}