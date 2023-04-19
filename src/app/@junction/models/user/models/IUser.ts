import { IConcept } from "../../concept/models";
import { ILogin } from "../../login/models";
import { IProject } from "../../project/models";
import { IUserAsset } from "./IUserAsset";

export type IUserUsername = string;
type IUserName = string;
type IUserRole = string;

export interface IUser {
  id: string;
  username: IUserUsername;
  name: IUserName;
  role?: IUserRole;
  project?: IProject;
  projectId?: number;
  concepts?: IConcept[];
  Login: ILogin[];
  UserAsset: IUserAsset[];
}
