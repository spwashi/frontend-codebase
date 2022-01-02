import {IAsset} from './asset/models/IAsset';
import {IUserAsset} from './user/IUserAsset';
import {IPassword} from './password/models/IPassword';
import {IUser} from './user/IUser';
import {IConcept} from './concept/models/IConcept';
import {IProfile} from './profile/models/IProfile';
import {ILogin} from './login/models/ILogin';
import {ITag} from './tag/models/ITag';
import {IConceptTag} from './concept/models/IConceptTag';
import {IProject} from './project/models/IProject';
import {IProjectEnvironment} from './project/models/IProjectEnvironment';

export interface IProjectEnvironment_Complete extends IProjectEnvironment {
    project: IProject;
}

export interface IUserAsset_Complete extends IUserAsset {
    asset: IAsset;
    user: IUser;
}

export interface IAsset_Complete extends IAsset {
    origin?: IConcept;
    UserAsset?: IUserAsset[]
}

export interface IConceptTag_Complete extends IConceptTag {
    concept: IConcept;
    tag: ITag;
}

export interface ITag_Complete extends ITag {
    author?: IUser;
    ConceptTag: IConceptTag;
}

export interface ILogin_Complete extends ILogin {
    user: IUser;
    password: IPassword
    Profile?: IProfile[];
}

export interface IProfile_Complete extends IProfile {

    login: ILogin;
}

export interface IConcept_Complete extends IConcept {
    profile?: IProfile[]
    password: IPassword;
    user: IUser;
    ConceptTag?: IConceptTag_Complete[]
}