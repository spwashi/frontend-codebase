import {IUser} from '../../../../.junction/models/user/models';
import {RootState} from '../../../redux/rootState';
import {UserOption} from './types';

function userToOption(user: IUser): UserOption {
    return {
        title:   user.username,
        value:   user.username,
        payload: user,
    };
}


export const selectUserFeature              = (state: RootState) => state?.features?.user;
export const selectPossibleUsersList        = (state: RootState) => selectUserFeature(state).data.users.list.map(userToOption);
export const selectPossibleUsersLastFetched = (state: RootState) => selectUserFeature(state).data.users.lastFetched;