import {combineReducers} from 'redux';
import {selectUserFeature} from '../../../_services/redux/selectors';
import {IRootAppState} from '../../../../../types/IRootAppState';
import {UserFeatureSignupFeatureState} from '../../../_services/redux/types';


export const selectUserSignupFeature = (state: IRootAppState) => selectUserFeature(state).features.signup;
export const signupReducer           =
               combineReducers<UserFeatureSignupFeatureState>(
                 {
                   enabled:  (state, action) => false,
                   features: () => ({}),
                   data:     () => ({}),
                 },
               )