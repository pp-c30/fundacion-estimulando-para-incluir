import { Response, Request } from "express";

export function mensaje(req:Request, res:Response){
res.json('pagina api');
}