import { conexion } from '../database';
import { Request, Response} from "express";
import enrutadorCategoria from '../routes/categoria.routes';
import {ICategoria } from "../models/categoria";

export class CategoriaController
{
    public async listaCategoria(req:Request, res:Response)
    {
        const db = await conexion();

        let categoria = await  db.query('select * from categoria');
        
        return res.json(categoria);
     
    }
    public async guardarCategoria(req:Request, res:Response)
    {
        const db = await conexion();

        const categoria:ICategoria =   req.body;

        await db.query("Insert into categoria set?",[categoria]);
        
        return res.json('La categoria fue guardada exitosamente');
    }

    public async eliminarCategoria(req:Request, res:Response)
    {
        const db = await conexion();
        let id = req.params.id;
        await db.query("delete from categoria where idCategoria = ?",[id]);
        return res.json('La categoria fue eliminada exitosamente');
    }

    public async actualizarCategoria(req:Request, res:Response)
    {
        const db = await conexion();
        let id = req.params.id;
        let nuevos_datos_categoria = req.body;

        await db.query("update categoria set ? where idCategoria = ?",[nuevos_datos_categoria,id]);
        return res.json('La categoria fue actualizada exitosamente');
    }

    public async obtenerUnaCategoria(req:Request, res:Response)
    {
        const db = await conexion();
        let id = req.params.id;
        let nuevos_datos_categoria = req.body;

        let unaCategoria = await db.query("select * from categoria where idCategoria = ?",[id]);
        return res.json(unaCategoria[0]);
    }

}  