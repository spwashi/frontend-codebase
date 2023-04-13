import {selectUserFeature} from '../../../services/redux/selectors';
import {combineReducers} from 'redux';
import {IRootAppState} from '../../../../../types/IRootAppState';
import {UserFeatureLoginFeatureState} from '../../../services/redux/types';
import {REHYDRATE} from 'redux-persist';

export const ACTION_RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const ACTION_LOGOUT        = 'LOGOUT';


export const selectUserLoginFeature = (state: IRootAppState) => selectUserFeature(state)?.features?.login;
export const selectLoggedInUserName = (state: IRootAppState) => selectUserLoginFeature(state)?.data?.username;
export const selectLoggedInUser     = (state: IRootAppState) => selectUserLoginFeature(state)?.data?.user;
export const loginReducer           =
               combineReducers<UserFeatureLoginFeatureState>({
                                                               enabled:  (state, action) => true,
                                                               features: () => ({}),
                                                               data:     combineReducers({
                                                                                           user:
                                                                                             (state: string | null = null, action: any) => {
                                                                                               switch (action.type) {
                                                                                                 case ACTION_RECEIVE_LOGIN:
                                                                                                   const {user} = action.payload;
                                                                                                   return user;
                                                                                                 case ACTION_LOGOUT:
                                                                                                   return null;
                                                                                                 case REHYDRATE:
                                                                                                   return selectLoggedInUser(action?.payload) ?? null;
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
                                                                                                 case REHYDRATE:
                                                                                                   return selectLoggedInUserName(action?.payload) ?? null;
                                                                                               }
                                                                                               return state;
                                                                                             },
                                                                                         }),
                                                             });

