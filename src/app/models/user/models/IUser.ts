import {IUserAsset} from './IUserAsset';
import {IConcept} from '../../concept/models';
import {ILogin} from '../../login/models';
import {IProject} from '../../project/models';

export type IUserUsername = string;
type IUserName = string;

export interface IUser {
    id: number;
    username: IUserUsername;
    name: IUserName;
    project?: IProject;
    projectId?: number;
    concepts?: IConcept[]
    Login: ILogin[]
    UserAsset: IUserAsset[];
}