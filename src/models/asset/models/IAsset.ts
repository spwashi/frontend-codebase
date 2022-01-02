export interface IAsset {
    id: number;
    uri: string;
    name?: string;
    realname: string;
    mimeType: string;
    conceptId?: number;
}