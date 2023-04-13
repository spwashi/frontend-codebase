import {combineReducers} from 'redux';
import {selectUserFeature} from '../../../redux/selectors';
import {RootState} from '../../../../../.services/.redux/rootState';
import {UserFeatureSignupFeatureState} from '../../../redux/types';


export const selectUserSignupFeature = (state: RootState) => selectUserFeature(state).features.signup;
export const signupReducer           =
               combineReducers<UserFeatureSignupFeatureState>(
                 {
                   enabled:  (state, action) => false,
                   features: () => ({}),
                   data:     () => ({}),
                 },
               )