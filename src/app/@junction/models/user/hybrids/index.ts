import { IUser, IUserAsset } from "../models";
import { IAsset } from "../../asset/models";

export interface IUserAsset_Complete extends IUserAsset {
  asset: IAsset;
  user: IUser;
}
