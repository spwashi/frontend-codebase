import {combineReducers} from 'redux';
import {RootState, UserFeatureSignupFeatureState} from '../../../../../redux/state.types';
import {selectUserFeature} from '../../../redux/selectors';


export const selectUserSignupFeature = (state: RootState) => selectUserFeature(state).features.signup;
export const signupReducer           =
                 combineReducers<UserFeatureSignupFeatureState>(
                     {
                         enabled:  (state, action) => false,
                         features: combineReducers({
                                                       something: (s, a) => true,
                                                   }),
                         data:     combineReducers({
                                                       something: (s, a) => true,
                                                   }),
                     },
                 )