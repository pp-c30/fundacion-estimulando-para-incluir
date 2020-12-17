import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

//
export function validarToken(req:Request, res:Response, next:NextFunction){
    const token:any = req.header('auth-token');

    if(!token){
        res.json('Tenés que iniciar sesión para acceder');
    }

    const datosToken = jwt.verify(token, process.env.TOKEN_SECRET || '12qwerty')

    console.log(datosToken);

    next();
}