import {selectUserFeature} from '../../../redux/selectors';
import {combineReducers} from 'redux';
import {RootState} from '../../../../../redux/rootState';
import {UserFeatureLoginFeatureState} from '../../../redux/types';

export const ACTION_RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const ACTION_LOGOUT        = 'LOGOUT';


export const selectUserLoginFeature = (state: RootState) => selectUserFeature(state).features.login;
export const selectLoggedInUserName = (state: RootState) => selectUserLoginFeature(state).data.username;
export const selectLoggedInUser = (state: RootState) => selectUserLoginFeature(state).data.user;
export const loginReducer           =
                 combineReducers<UserFeatureLoginFeatureState>({
                                                                   enabled:  (state, action) => true,
                                                                   features: combineReducers({
                                                                                                 something: (s, a) => true,
                                                                                             }),
                                                                   data:     combineReducers({
                                                                                                 user:
                                                                                                     (state: string | null = null, action: any) => {
                                                                                                         switch (action.type) {
                                                                                                             case ACTION_RECEIVE_LOGIN:
                                                                                                                 const {
                                                                                                                           user,
                                                                                                                       } = action.payload;
                                                                                                                 return user;
                                                                                                             case ACTION_LOGOUT:
                                                                                                                 return null;
                                                                                                         }
                                                                                                         return state;
                                                                                                     },
                                                                                                 username:
                                                                                                     (state: string | null = null, action: any) => {
                                                                                                         switch (action.type) {
                                                                                                             case ACTION_RECEIVE_LOGIN:
                                                                                                                 const {
                                                                                                                           username,
                                                                                                                           jwt,
                                                                                                                       } = action.payload;
                                                                                                                 return username;
                                                                                                             case ACTION_LOGOUT:
                                                                                                                 return null;
                                                                                                         }
                                                                                                         return state;
                                                                                                     },
                                                                                             }),
                                                               });

