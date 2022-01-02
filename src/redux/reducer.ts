import {combineReducers} from 'redux';
import {userReducer} from '../features/old/users/redux/reducer';
import {projectReducer} from '../features/old/projects/redux/reducer';
import {conceptReducer} from '../features/new/concepts/redux/reducer';
import {fileReducer} from '../features/old/file/redux/reducer';
import {tagReducer} from '../features/new/tags/redux/reducer';

export const ACTION_NOGRAPHQL = 'NO_GRAPHQL';
export const ACTION_GRAPHQL   = 'GRAPHQL';
export const rootReducer      = combineReducers(
    {
        app:
            (state: any = {noGraphql: false}, action: { type: string, payload: any }) => {
                switch (action.type) {
                    case ACTION_GRAPHQL:
                        return {...state, noGraphql: false}
                    case ACTION_NOGRAPHQL:
                        return {...state, noGraphql: true}
                }
                return state;
            },

        features:
            combineReducers(
                {
                    user:    userReducer,
                    project: projectReducer,
                    concept: conceptReducer,
                    tag:     tagReducer,
                    file:    fileReducer,
                },
            ),
    },
);

export const select_noGraphql = (state: any) => state.app.noGraphql;