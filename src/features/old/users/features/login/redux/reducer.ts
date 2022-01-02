import {RootState, UserFeatureLoginFeatureState} from '../../../../../../redux/state.types';
import {selectUserFeature} from '../../../redux/selectors';
import {combineReducers} from 'redux';

export const ACTION_RECEIVE_LOGIN     = 'RECEIVE_LOGIN';
export const ACTION_LOGOUT            = 'LOGOUT';


export const selectUserLoginFeature = (state: RootState) => selectUserFeature(state).features.login;
export const selectLoggedInUserName = (state: RootState) => selectUserLoginFeature(state).data.username;
export const loginReducer           = combineReducers<UserFeatureLoginFeatureState>(
    {
        enabled:  (state, action) => true,
        features: combineReducers({
                                      something: (s, a) => true,
                                  }),
        data:     combineReducers({
                                      username: (state: string | null = null, action: any) => {
                                          switch (action.type) {
                                              case ACTION_RECEIVE_LOGIN:
                                                  return action.payload;
                                              case ACTION_LOGOUT:
                                                  return null;
                                          }
                                          return state;
                                      },
                                  }),
    },
);

