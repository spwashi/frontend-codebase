import {combineReducers} from 'redux';
import {userReducer} from '../features/users/redux/reducer';
import {projectReducer} from '../features/projects/redux/reducer';
import {conceptReducer} from '../features/concepts/redux/reducer';
import {tagReducer} from '../features/tags/redux/reducer';

export const rootReducer = combineReducers({
                                               features: combineReducers({
                                                                             user:    userReducer,
                                                                             project: projectReducer,
                                                                             concept: conceptReducer,
                                                                             tag:     tagReducer,
                                                                         }),
                                           })