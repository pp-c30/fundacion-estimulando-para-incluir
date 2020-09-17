import { createPool } from "promise-mysql";

export async function conexion(){
        const connnect = await createPool({
            host:'localhost',
            user:'root',
            password:'',
            database:'fei'
        });
    return connnect;
}

