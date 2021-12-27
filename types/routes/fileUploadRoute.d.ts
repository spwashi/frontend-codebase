import { Request, Response } from 'express';
export declare function fileUploadRoute(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
