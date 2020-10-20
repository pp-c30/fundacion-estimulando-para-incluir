import { conexion } from '../database';
import { Request, Response} from "express";
import enrutadorRubro from '../routes/rubro.routes';
import {IRubro } from "../models/rubro";

export class RubroController
{
    public async listaRubro(req:Request, res:Response)
    {
        const db = await conexion();

        let rubro = await  db.query('select * from rubro');
        
        return res.json(rubro);
     
    }
    public async guardarRubro(req:Request, res:Response)
    {
        const db = await conexion();

        const rubro:IRubro =   req.body;

        await db.query("Insert into rubro set?",[rubro]);
        
        return res.json('El rubro fue guardado exitosamente');
    }

    public async eliminarRubro(req:Request, res:Response)
    {
        const db = await conexion();
        let id = req.params.id;
        await db.query("delete from rubro where idRubro = ?",[id]);
        return res.json('El rubro fue eliminado exitosamente');
    }

    public async actualizaRubro(req:Request, res:Response)
    {
        const db = await conexion();
        let id = req.params.id;
        let nuevos_datos_rubro = req.body;

        await db.query("update rubro set ? where idRubro = ?",[nuevos_datos_rubro,id]);
        return res.json('El rubro fue actualizado exitosamente');
    }

    public async obtenerUnRubro(req:Request, res:Response)
    {
        const db = await conexion();
        let id = req.params.id;

        let unRubro = await db.query("select * from rubro where idRubro = ?",[id]);
        return res.json(unRubro[0]);
    }

}