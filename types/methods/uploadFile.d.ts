import fileUpload from 'express-fileupload';
export declare function uploadFile<ResBody, Locals>(upload: fileUpload.UploadedFile, location: string): Promise<{
    filename: string;
    dir: string;
    filePath: string;
}>;
