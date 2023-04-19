import { IAsset } from "../models";
import { IConcept } from "../../concept/models";
import { IUserAsset } from "../../user/models";

export interface IAsset_Complete extends IAsset {
  origin?: IConcept;
  UserAsset?: IUserAsset[];
}
