import {IProfile} from '../models';
import {ILogin} from '../../login/models';

export interface IProfile_Complete extends IProfile {

    login: ILogin;
}