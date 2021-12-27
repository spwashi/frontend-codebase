import {RootState} from '../../../redux/state.types';

export const selectUserFeature              = (state: RootState) => state.features.user;
export const selectPossibleUsersList        = (state: RootState) => selectUserFeature(state).data.users.list;
export const selectPossibleUsersLastFetched = (state: RootState) => selectUserFeature(state).data.users.lastFetched;