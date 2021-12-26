import {combineReducers} from 'redux';
import {loginReducer} from '../features/login/redux/reducer';
import {signupReducer} from '../features/signup/redux/reducer';

export const userReducer =
                 combineReducers({
                                     login:  loginReducer,
                                     signup: signupReducer,
                                 })