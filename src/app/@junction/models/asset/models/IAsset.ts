type IAssetId = string;

export interface IAsset {
  id: IAssetId;
  uri: string;
  name: string;
  realname: string;
  contentType: string;
  conceptId?: number;
}
