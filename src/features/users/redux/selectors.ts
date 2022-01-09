import {RootState, UserOption} from '../../../redux/state.types';
import {IUser} from '../../../models/user/models';

function userToOption(user: IUser): UserOption {
    return {title: user.name, value: user.username, user};
}


export const selectUserFeature              = (state: RootState) => state.features.user;
export const selectPossibleUsersList        = (state: RootState) => selectUserFeature(state).data.users.list.map(userToOption);
export const selectPossibleUsersLastFetched = (state: RootState) => selectUserFeature(state).data.users.lastFetched;