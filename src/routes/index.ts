import * as controllerAPI from '../controllers/api';

export function setRoutes(server: any) : void {
    
    //server.get('/echo/:message', controllerAPI.get);

    server.get('/ping', controllerAPI.getStatus);
}