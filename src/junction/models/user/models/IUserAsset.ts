import {IAsset} from '../../asset/models';
import {IUser} from './IUser';

type IUserAssetId = number;

export interface IUserAsset {
    id: IUserAssetId;
    assetId: IAsset['id'];
    userId: IUser['id'];
}