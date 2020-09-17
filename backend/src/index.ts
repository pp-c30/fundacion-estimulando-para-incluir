import {Server} from "./server";

function principal() 
{
    const servidor = new Server();
    servidor.listen();
}
//ejecuto la funcion principal
principal();