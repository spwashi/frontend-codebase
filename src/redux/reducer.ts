import {combineReducers} from 'redux';
import {userReducer} from '../features/users/redux/reducer';
import {projectReducer} from '../features/projects/redux/reducer';
import {conceptReducer} from '../features/concepts/redux/reducer';
import {assetReducer} from '../features/assets/redux/reducer';
import {tagReducer} from '../features/tags/redux/reducer';
import {sceneReducer} from '../features/scenes/redux/reducer';
import {eventReducer} from '../features/events/redux/reducer';

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
                    scene:   sceneReducer,
                    asset:    assetReducer,
                    event:   eventReducer,
                },
            ),
    },
);

export const select_noGraphql = (state: any) => state.app.noGraphql;