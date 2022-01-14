import {RootState, UserOption} from '../../../redux/state.types';
import {IUser} from '../../../models/user/models';
import {SelectOption} from '../../../components/form/input/select/SelectInput';

function userToOption(user: IUser): SelectOption & UserOption {
    return {title: user.name, value: user.username, user};
}


export const selectUserFeature              = (state: RootState) => state.features.user;
export const selectPossibleUsersList        = (state: RootState) => selectUserFeature(state).data.users.list.map(userToOption);
export const selectPossibleUsersLastFetched = (state: RootState) => selectUserFeature(state).data.users.lastFetched;