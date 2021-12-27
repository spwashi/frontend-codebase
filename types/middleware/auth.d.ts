import { NextFunction, Request, Response } from 'express';
export declare function verifyToken(req: Request & {
    user?: any;
}, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
