import {IUser} from '../../../../../.junction/models/user/models';
import {IRootAppState} from '../../../../types/IRootAppState';
import {UserOption} from './types';

function userToOption(user: IUser): UserOption {
  return {
    title:   user.username,
    value:   user.username,
    payload: user,
  };
}


export const selectUserFeature              = (state: IRootAppState) => state?.features?.user;
export const selectPossibleUsersList        = (state: IRootAppState) => selectUserFeature(state).data.users.list.map(userToOption);
export const selectPossibleUsersLastFetched = (state: IRootAppState) => selectUserFeature(state).data.users.lastFetched;