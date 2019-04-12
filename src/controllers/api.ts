import { Request, Response, Next } from "restify";

export function getStatus(req: Request, res: Response, next: Next): void {
    res.send({
        status: 'ok'
    });
}